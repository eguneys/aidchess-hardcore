import { Step, Work } from './types'
import { ThreadedWasmWorker } from './worker'

const initial_fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

export function sanIrreversible(san: string): boolean {
  if (san.startsWith('O-O')) return true;
  if (san.includes('x')) return true;
  if (san.toLowerCase() === san) return true;
  return false
}


export const sharedWasmMemory = (initial: number, maximum: number): WebAssembly.Memory => {
  while (true) {
    try {
      return new WebAssembly.Memory({ shared: true, initial, maximum });
    } catch (e) {
      if (e instanceof RangeError) {
        if (initial === maximum) throw e;
        maximum = Math.max(initial, Math.floor(maximum / 2));
      } else throw e;
    }
  }
};

export type CevalTechnology = 'wasm'

export interface CevalPlatform {
  technology: CevalTechnology;
  growableSharedMem: boolean;
  supportsNnue: boolean;
  maxThreads: number;
  maxWasmPages: (minPages: number) => number;
  maxHashSize: () => number;
}

const detectPlatform = (): CevalPlatform => {
  let technology: CevalTechnology = 'wasm'

  const sharedMem = sendableSharedWasmMemory(1, 2)

  
  const maxThreads = 1;

  const maxHashMB = () => {
    return 128;
  }


  return {
    technology,
    growableSharedMem: false,
    supportsNnue: false,
    maxThreads,
    maxWasmPages: (minPages: number): number => {
      let maxPages = 32768;
      return Math.max(minPages, maxPages)
    },
    maxHashSize: () => maxHashMB()
  }


}



function sendableSharedWasmMemory(initial: number, maximum: number): WebAssembly.Memory | undefined {
  if (typeof SharedArrayBuffer !== 'function') return;

  const mem = sharedWasmMemory(initial, maximum);
  if (!(mem.buffer instanceof SharedArrayBuffer)) return;

  try {
    window.postMessage(mem.buffer, '*')
  } catch (e) {
    return undefined;
  }
  return mem
}

export interface EvalMeta {
  path: string;
}

export type CevalOpts = {
  emit: (ev: Tree.LocalEval, meta: EvalMeta) => void;
}

export default class CevalCtrl {

  private worker: ThreadedWasmWorker | undefined;
  platform: CevalPlatform

  constructor(readonly opts: CevalOpts) {
    this.platform = detectPlatform()
  }

  start = (path: Tree.Path, steps: Step[])  => {
    this.doStart(path, steps)
  }

  private doStart = (path: Tree.Path, steps: Step[]) => {

    const step = steps[steps.length - 1]

    const maxDepth = 8

    const work: Work = {
      threads: 1,
      hashSize: this.hashSize(),
      stopRequested: false,
      initialFen: steps[0]?.fen || initial_fen,
      moves: [],
      currentFen: step?.fen || initial_fen,
      path,
      ply: step?.ply || 0,
      maxDepth,
      multiPv: 3,
      threatMode: false,
      emit: (ev: Tree.LocalEval) => {
        this.opts.emit(ev, work)
      }
    }

    for (let i = 1; i < steps.length; i++) {
      const s = steps[i]
      if (sanIrreversible(s.san!)) {
        work.moves = []
        work.initialFen = s.fen
      } else {
        work.moves.push(s.uci!)
      }
    }
    if (!this.worker) {

      this.worker = new ThreadedWasmWorker({
        wasmMemory: sharedWasmMemory(2048, this.platform.maxWasmPages(2048))
      })
    }

    this.worker.start(work)
  }

  stop = () => {
    this.worker?.stop()
  }

  hashSize = () => {
    return this.platform.maxHashSize()
  }
}
