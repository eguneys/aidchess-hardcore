import { Work } from './types'
import { Protocol } from './protocol'

export enum CevalState {
  Initial,
  Loading,
  Idle,
  Computing,
  Failed,
}



interface WasmStockfishModule {
  (opts: {
    wasmBinary? : ArrayBuffer;
    locateFile(path: string): string;
    wasmMemory: WebAssembly.Memory;
  }): Promise<Stockfish>;
}

interface Stockfish {
  addMessageListener(cb: (msg: string) => void): void;
  postMessage(msg: string): void;
}

declare global {
  interface Window {
    Stockfish?: WasmStockfishModule;
  }
}

const assetUrl = (path: string) => {
  return path
}

const loadScript = (url: string) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.onload = () => {
      resolve(undefined)
    }
    script.onerror = (err) => {
      reject(err)
    }
    script.src = url
    document.head.append(script)
  })
}

export interface ThreadedWasmWorkerOpts {
  downloadProgress?: (mb: number) => void;
  wasmMemory: WebAssembly.Memory;
}

export class ThreadedWasmWorker {

  private static failed: { Stockfish: boolean } = { Stockfish: false }
  private static protocols = { Stockfish: new Protocol() }
  private static sf: { Stockfish?: Promise<void> } = {}

  constructor(private opts: ThreadedWasmWorkerOpts) {}

  getState() {
    return !ThreadedWasmWorker.sf['Stockfish'] 
    ? CevalState.Initial
    : ThreadedWasmWorker.failed['Stockfish'] 
    ? CevalState.Failed
    : !this.getProtocol().engineName
    ? CevalState.Loading
    : this.getProtocol().isComputing()
    ? CevalState.Computing
    : CevalState.Idle
  }

  private getProtocol(): Protocol {
    return ThreadedWasmWorker.protocols['Stockfish']
  }

  private async boot(): Promise<Stockfish> {

    let baseUrl = 'http://' + window.location.host + '/vendor/stockfish-nnue.wasm/'

    if (!import.meta.env.DEV) {

      baseUrl = 'https://' + window.location.host + '/aidchess-hardcore/vendor/stockfish-nnue.wasm/'
    }

    const wasmPath = baseUrl + 'stockfish.wasm'
    let wasmBinary: ArrayBuffer | undefined;
   
    wasmBinary = await new Promise((resolve, reject) => {
      fetch(wasmPath)
      .then(_ => _.arrayBuffer())
      .then(_ => resolve(_))
    })

    await loadScript(baseUrl + 'stockfish.js')
    const sf = await window['Stockfish']!({
      wasmBinary,
      locateFile: (path: string) => assetUrl(baseUrl + path),
      wasmMemory: this.opts.wasmMemory
    })

    const protocol = this.getProtocol()
    sf.addMessageListener(protocol.received.bind(protocol))
    protocol.connected(msg => sf.postMessage(msg))
    return sf
  }

  start(work: Work) {
    this.getProtocol().compute(work)

    if (!ThreadedWasmWorker.sf['Stockfish']) {
      ThreadedWasmWorker.sf['Stockfish'] = this.boot().then(
        () => {},
          err => {
          console.error(err)
          ThreadedWasmWorker.failed['Stockfish'] = true
        })
    }
  }

  stop() {
    this.getProtocol().compute(undefined)
  }

  destroy() {
    this.stop()
  }
}
