import './ground.scss'
import { createEffect, on } from 'solid-js'
import { Chessground } from 'chessground'
import { Api as ChessgroundApi } from 'chessground/api'
import { Chess } from 'chess.js'


export const Ground = (props: { fen: string, onUserMove: (move: string) => void }) => {

  let api: ChessgroundApi
  let dests: any = new Map()
  createEffect(on(() => props.fen, fen => {
        dests = new Map()
        let chess = new Chess(fen)
        chess.moves({ verbose: true}).forEach((move: any) => {
            if (!dests.get(move.from)) {
            dests.set(move.from, [])
            }
            dests.get(move.from)!.push(move.to)
            })

        api?.set({ fen, movable: { dests } })
   }))

  let config = {
    movable: {
      free: false,
      dests
    },
    events: {
      move(orig: string, dest: string) {
        props.onUserMove(orig+dest)
      }
    }
  }
  
  return (<>
    <div class='is2d'>
    <div ref={_ => api = Chessground(_, config) }> </div>
    </div>
    </>)
}
