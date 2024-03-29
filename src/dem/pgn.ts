import { parse, ParseTree } from '@mliebelt/pgn-parser'
import { uci_char } from './ucichar'
import { Chess } from 'chess.js'

type PgnMove = {
  notation: { notation: string },
  variations: PgnMove[][]
}

export type OPGN = {
  title: string,
  fen?: string,
  site?: string,
  poss: Array<OPos>
}

export type OPos = {
  path: string,
  fen: string,
  moves: Array<string>,
  final?: true
}

export function read_more_pgn(pgn: string): Array<OPGN> {
  let games = parse(pgn, { startRule: 'games' }) as ParseTree[]

  return games.map(read_parse_tree)
}



export function read_parse_tree(game: ParseTree): OPGN {



  let title = game.tags?.Event || ''

  let fen = game.tags?.FEN
  let site = game.tags?.Site

  let poss: Array<OPos> = []

  function read_moves(path: string, chess: Chess, pmoves: PgnMove[], pskip_main: boolean = false) {
    pmoves.forEach((move, i) => {

      let skip_main = i === 0 && pskip_main
      let final = i === pmoves.length - 1 && move.variations.length === 0

      let san = move.notation.notation
      let fen = chess.fen()

      let uci = chess.move(san).lan
      let id = uci_char(uci)

      let alt_moves = move.variations.map(vars => {
        let move = vars[0]
        let san = move.notation.notation
        let chess = new Chess(fen)
        let uci = chess.move(san).lan

        return uci
      })
      let main_move = uci

      let moves = [main_move, ...alt_moves]

      let res: OPos = {path, fen, moves}

      if (final) {
        res.final = true
      }
      if (!skip_main && moves.length > 0) {
        poss.push(res)
      }

      move.variations.forEach(_ => {
        let copy = new Chess(fen)
        read_moves(path, copy, _, true)
      })
      path = path + id
    })
  }

  read_moves('', new Chess(fen || initial_fen), game.moves)

  return {
    title,
    fen,
    site,
    poss
  }
}


export class OPicker {
   
  get title() {
    return this.pgn.title
  }

  by_fen: Map<string, OPos>

  constructor(readonly pgn: OPGN) {
    this.by_fen = new Map()

    pgn.poss.forEach(_ => {
      this.by_fen.set(_.fen, _)
    })
  }


  pick_move(fen: string) {
    let poss = this.by_fen.get(fen)
    
    if (poss) {
      return weightedRandomSelect(poss.moves)
    }
    return undefined
  }


  score(fen: string) {
    const poss = this.by_fen.get(fen)


    if (poss) {

      let paths = this.pgn.poss
      .filter(_ => _.final)
      .map(_ => _.path)
      .filter(_ => _.includes(poss.path))
      .map(_ => _.length)
      .sort((a, b) => a - b)

      return {
        max_ply: paths[0] / 2,
        ply: poss.path.length / 2
      }
    }
    return undefined
  }
}


function weightedRandomSelect<T>(array: T[]) {
  let totalWeight = (array.length * (array.length + 1)) / 2;
  let randNum = Math.floor(Math.random() * totalWeight) + 1;
  let weightSum = 0;
  for (let i = 0; i < array.length; i++) {
    weightSum += array.length - i;
    if (randNum <= weightSum) {
      return array[i];
    }
  }
  return 0
}

const initial_fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
export function fen_after_ucis(position: string, moves: string[]) {

  if (position === 'startpos') {
    position = initial_fen
  }
  let chess = new Chess(position)
  moves.forEach(_ => chess.move(_))
  return chess.fen()
}
