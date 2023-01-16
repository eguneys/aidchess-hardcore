import './hardcore.scss'
import { on, batch, Show, For, createEffect, createMemo, createSignal } from 'solid-js'
import { useSearchParams } from '@solidjs/router'
import { Ground } from './ground'
import { Chess } from 'chess.js'
import { Step } from './ceval/types'
import CevalCtrl from './ceval/ctrl'
import { Title } from '@solidjs/meta'

const moveFixCastling = (chess: any, move: any) => {
  return chess.move(move, { sloppy: true}) || chess.move('O-O') || chess.move('O-O-O')
}
export type Memo<T> = () => T

export default () => {

  
  let [params, setParams] = useSearchParams()

  const isBlack = params.color === 'black'
  

  let [game_over, set_game_over] = createSignal(false)
    //let kga = ['e2e4', 'e7e5', 'f2f4', 'e5f4', 'g1f3', 'g7g5', 'h2h4', 'g5g4']
  let $replay_ref: HTMLDivElement;
  let [moves, setMoves] = createSignal<string[]>([], { equals: false })
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

       if (e.cp) {
         set_ai_cp(e.cp/100)
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

  if (isBlack) {
    ceval.start('', [])
  }

  const onUserMove = (move: string) => {
    setMoves(_ => { _.push(move); return _ })
    ceval.start('', steps())
    set_ai_played(false)
/*
		requestWakeLock()
		setTimeout(() => {
				releaseWakeLock()
				}, 3 * 60 * 1000)
*/
  }

  const moves_pgn = createMemo(() => {
    let chess = new Chess()
    moves().forEach(_ => moveFixCastling(chess, _))
    return chess.pgn()
      })
  

  const onAnalyseOnLichess = () => {

    let pgn = moves_pgn()

    let formData = new FormData()
    formData.append('pgn', pgn)

    let side = 'white'
    fetch('https://lichess.org/api/import', { method: 'post', body: formData, })
      .then(_ => _.json())
      .then(_ => {
          let url = _["url"];
          window.open(`${url}/${side}#${moves().length}`, '_blank')
          });  
  }

  const wc = (cp: number) => {
    let M = -0.00368208
    let res =  50 + 50 * (2/ (1 + Math.exp(-M * cp)) - 1)
    return res
  }

  let [glyph, set_glyph] = createSignal<string | undefined>(undefined, { equals: false })
  let [cp_delta, set_cp_delta] = createSignal(0, { equals: false})

  createEffect(on(ai_cp, (cp, pre_cp) => {
    if (pre_cp) {
    set_cp_delta((wc(cp * 100) - wc(pre_cp * 100)) * (isBlack ? -1 : 1))
    }
    }))

  createEffect(on(cp_delta, cp_delta => {
    if (Math.abs(cp_delta) < 10) {
       set_glyph('!')
return
    }
    if (cp_delta < -30) {
      set_glyph('??')
    } else if (cp_delta < -20) {
      set_glyph('?!')
    } else if (cp_delta < -10) {
      set_glyph('?')
      } else {
set_glyph(undefined)
}
      }))

  let [ground_glyph, set_ground_glyph] = createSignal<any | undefined>(undefined)
  createEffect(on(glyph, glyph => {
     if (glyph) {
       let ss = steps()
       if (ss.length > 0) {
       let orig = ss[ss.length-1].uci.slice(2)

       set_ground_glyph({ orig, glyph })
       } else {
       set_ground_glyph()
       }
     } else {
set_ground_glyph()
}
        }))

  createEffect(() => {
    let _ = ai_cp()
    if (isBlack) {
       _ *= -1
    }
    if (_ > 2.1) {
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
        set_cp_delta(0)
        set_glyph(undefined)
        set_ground_glyph(undefined)

        if (isBlack) {
        ceval.start('', [])
        }
        })
  }

  return (<>
    <Title> aidchess.com - Hardcore Chess </Title>
    <div class='hardcore'>
      <div class='board'>
      <Ground glyph={ground_glyph()} fen={fen()} isBlack={isBlack} onUserMove={onUserMove}/>
      </div>
      <div class='table'>
      <div class='ceval'>
        {-ai_cp()}
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
           <button onClick={() => onAnalyseOnLichess()} class='fbt'>Analyse on Lichess</button>
           <button onClick={() => rematch()} class='fbt'>Rematch</button>
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
