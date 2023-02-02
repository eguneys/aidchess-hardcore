declare type Fen = string;

declare namespace Tree {

  export type Path = string;

  export interface PvData {
    moves: string[],
    mate?: number;
    cp?: number;
    depth: number;
  }

  interface ClientEvalBase {
    fen: Fen;
    depth: number;
    nodes: number;
    pvs: PvData[];
    cp?: number; 
    mate?: number;
  }

  export interface LocalEval extends ClientEvalBase {
    maxDepth: number;
    knps: number;
    millis: number;
  }


  export type ClientEval = LocalEval;
}


