import { ParseTree, parse } from '@mliebelt/pgn-parser'
import { ReplayTree } from './replay_chess'
import { Path } from 'lchessanalysis'

function isParseTree(_: any): _ is ParseTree {
  return (_ as ParseTree).moves !== undefined
}

export function pgn(pgn: string) {

  return fetch('https://lichess.org/study/TCnt4Tx7/chMQbGbz.pgn')
  .then(_ => _.text())
  .then(_ => parse(_, { startRule: 'game'}))
  .then(_ => {

    let tree = ReplayTree.make()
    if (isParseTree(_)) {

      function add_vars(path: Path, moves: any) {
        moves.forEach((_: any) => {
          let new_path = tree.add_move(path, _.notation.notation)!
          _.variations.forEach((_: any) => add_vars(path, _))
          path = new_path
        })
      }
      add_vars('', _.moves)

    } 
    return tree
  })

}
