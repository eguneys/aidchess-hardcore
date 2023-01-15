import './hardcore.scss'
import { batch, Show, For, createEffect, createMemo, createSignal } from 'solid-js'
import { Ground } from './ground'
import { Chess } from 'chess.js'
import { Step } from './ceval/types'
import CevalCtrl from './ceval/ctrl'

const moveFixCastling = (chess: any, move: any) => {
  return chess.move(move, { sloppy: true}) || chess.move('O-O') || chess.move('O-O-O')
}
export type Memo<T> = () => T

export default () => {

  let [game_over, set_game_over] = createSignal(false)

  let $replay_ref: HTMLDivElement;
  let [moves, setMoves] = createSignal<string[]>([], { equals: false })
  let [ai_played, set_ai_played] = createSignal(false)


  let [ai_cp, set_ai_cp] = createSignal(0)
  let ceval = new CevalCtrl({
     emit(e: Tree.LocalEval) {
       if (!ai_played() && e.depth >= 10) {
         set_ai_played(true)
         ceval.stop()
         let best_move = e.pvs[0].moves[0]

         setMoves(_ => { _.push(best_move); return _})
         if ($replay_ref) {
         $replay_ref.scrollTo(0, $replay_ref.scrollHeight)
         }
         if (e.cp) {
           set_ai_cp(e.cp/100)
         }
       }
     }
      })
  let chess = new Chess()
  let initial_fen =chess.fen()

  const fen = createMemo(() => {
    let chess = new Chess()
    moves().forEach(_ => moveFixCastling(chess, _))
    return chess.fen()
      })
  
  const steps: Memo<Step[]> = createMemo(() => {
      let chess = new Chess()
      return moves().map((_, i) => { 
          let san = moveFixCastling(chess, _)!.san
          return {
            ply: i,
            fen: chess.fen(),
            uci: _,
            san
            }
            })
      })

  const game_score = createMemo(() => {
    return Math.floor(steps().length / 2)
      })

  const onUserMove = (move: string) => {
    setMoves(_ => { _.push(move); return _ })
    set_ai_played(false)
    ceval.start('', steps())
  }

  createEffect(() => {
    let _ = ai_cp()
    if (Math.abs(_) > 1) {
      set_game_over(true)
    }
    })


  const rematch = () => {
   
    batch(() => {
        set_game_over(false)
        setMoves([])
        set_ai_played(false)
        set_ai_cp(0)
        })
  }

  return (<>
    <div class='hardcore'>
      <div class='board'>
      <Ground fen={fen()} onUserMove={onUserMove}/>
      </div>
      <div class='table'>
      <div class='ceval'>
        {ai_cp()}
      </div>
      <div ref={_ => $replay_ref = _} class='replay'>
        <Replay steps={steps()}/>
        <Show when={game_over()}>
        <div class='result-wrap'>
           <div class='result'>{game_score()}</div>
           Eval dropped below 1. Game's over.
        </div>
        </Show>
      </div>
      <div class='rcontrols'>
       <div class='follow-up'>
         <Show when={game_over()}>
           <button onClick={() => rematch()} class='fbt'> Rematch </button>
         </Show>
       </div>
      </div>
      </div>
    </div>
      </>)
}


const Replay = (props: { steps: Step[] }) => {

  let steps = createMemo<Array<Step[]>>(() => {
    let steps = props.steps

    let current: Step[] = []
    let res: Array<Step[]> = []
    steps.forEach(step => {
        current.push(step)
      if (step.ply % 2 === 1) {
         res.push(current)
         current = []
      } 
      })
    return res
  })

  return (<>
   <For each={steps()}>{ step =>
   <>
      <span class='index'>{step[0].ply / 2 + 1}</span>
      <For each={step}>{ move =>
        <div class='move'>{move.san}</div>
      }</For>
      </>
   }</For>
</>)
}
