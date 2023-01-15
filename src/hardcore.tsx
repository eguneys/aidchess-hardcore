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
  let [moves, setMoves] = createSignal<string[]>(['e2e4', 'e7e5', 'f2f4', 'e5f4', 'g1f3', 'g7g5', 'h2h4', 'g5g4'], { equals: false })
  let [ai_played, set_ai_played] = createSignal(false)


  let [ai_cp, set_ai_cp] = createSignal(0)
  let ceval = new CevalCtrl({
     emit(e: Tree.LocalEval) {
       if (!game_over() && !ai_played() && e.depth >= 10) {
         if (fen() !== e.fen) {
           return
         }
       ceval.stop()
       set_ai_played(true)
       let best_move = e.pvs[0].moves[0]
       let cp = e.pvs[0].cp

       if (cp) {
           set_ai_cp(-cp/100)
         }
       setMoves(_ => { _.push(best_move); return _})
       if ($replay_ref) {
       $replay_ref.scrollTo(0, $replay_ref.scrollHeight)
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
    ceval.start('', steps())
    set_ai_played(false)
  }

  createEffect(() => {
    let _ = ai_cp()
    if (_ < -2.1) {
      set_game_over(true)
      }
    })

  createEffect(() => {
   if (game_over()) {
  if ($replay_ref) {
         $replay_ref.scrollTo(0, $replay_ref.scrollHeight)
         }
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
           Eval dropped below 2. Game's over.
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
