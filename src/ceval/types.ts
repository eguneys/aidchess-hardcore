export interface Step {
  ply: number;
  fen: string;
  san: string;
  uci: string;
  ceval?: Tree.ClientEval;
}

export interface Work {
  threads: number;
  hashSize: number | undefined;
  stopRequested: boolean;

  path: string;
  maxDepth: number;
  multiPv: number;
  ply: number;
  threatMode: boolean;
  initialFen: string;
  currentFen: string;
  moves: string[];
  emit: (ev: Tree.LocalEval) => void;
}
