import './hardcore.scss'
import { on, batch, Show, For, createEffect, createMemo, createSignal } from 'solid-js'
import { useSearchParams } from '@solidjs/router'
import { Ground } from './ground'
import { Chess } from 'chess.js'
import { Step } from './ceval/types'
import CevalCtrl from './ceval/ctrl'
import { Title } from '@solidjs/meta'
import Challenges from './challenges'

const wc = (cp: number) => {
  let M = -0.00368208
    let res =  50 + 50 * (2/ (1 + Math.exp(-M * cp)) - 1)
    return res
}


const get_glyph = (cp_delta: number | undefined) => {
  if (cp_delta === undefined) {
   return undefined
  }
  if (Math.abs(cp_delta) < 10) {
    return '!'
  }
  if (cp_delta < -30) {
    return '??'
  } else if (cp_delta < -20) {
    return '?!'
  } else if (cp_delta < -10) {
    return '?'
  } else {
    return undefined
  }
}



const moveFixCastling = (chess: any, move: string) => {
  try { 
    return chess.move(move)
  } catch {
    return chess.move('O-O') || chess.move('O-O-O')
  } 
}
export type Memo<T> = () => T

export default () => {

  
  let [params, setParams] = useSearchParams()

  const isBlack = params.color === 'black'
  const level = parseInt(params.level)
  const color = isBlack ? 'black' : 'white'
  const pack = { level, color }
  
  const ai_color = color === 'white' ? 'black' : 'white'
  const turn = color[0]

  let [chess, setChess] = createSignal(new Chess(), { equals: false })

  let [game_over, set_game_over] = createSignal(false)
  let $replay_ref: HTMLDivElement;
  
  const m_turn = createMemo(() => chess().turn())
  const m_fen = createMemo(() => chess().fen())
  const m_pgn = createMemo(() => chess().pgn())
  const m_steps = createMemo(() => {
     let c = new Chess()
     return chess().history({verbose: true}).map((_: any, i) => {
         const move = c.move(_.san)!
         return { 
         ply: i,
         fen: c.fen(),
         turn: c.turn(),
         uci: move.from + move.to,
         san: move.san }})
     })
  const m_prev_fen = createMemo(() => {
      let steps = m_steps()
      if (steps.length > 1) {
        return steps[steps.length - 2].fen
      }
      return undefined
      })

  const [evals_by_fen, set_evals_by_fen] = createSignal(new Map<string, Tree.LocalEval>(), { equals: false })

  let ceval = new CevalCtrl({ 
      emit(e: Tree.LocalEval) { 
      if (e.depth >= level) {
        set_evals_by_fen(_ => { _.set(e.fen, e); return _ })
      }
      }})
  createEffect(on(m_fen, fen => {
    ceval.start('', m_steps())
    }))

  createEffect(() => {
      m_steps()
      game_over()

      if ($replay_ref) {
      $replay_ref.scrollTo(0, $replay_ref.scrollHeight)
      }
      })

  const ai_cp = (fen: string) => {
    const e = evals_by_fen().get(fen)
    if (!e || !e.cp || e.depth < level) { return undefined }
    return e.cp / 100
  }
  const m_ai_cp = createMemo(() => ai_cp(m_fen()) || 0)

  const get_cp_delta = (fen: string, prev_fen: string) => {
    const m_ai_cp =  ai_cp(fen)
    const m_prev_ai_cp = ai_cp(prev_fen)
    if (m_ai_cp === undefined || m_prev_ai_cp === undefined) {
      return undefined
    }
    return (wc(m_ai_cp * 100) - wc(m_prev_ai_cp * 100)) * (isBlack ? - 1 : 1)
  }

  const m_ground_glyphs = createMemo(() => {
    let steps = m_steps()

    if (steps.length >= 3) {
    let [one, two, three] = steps.slice(-3)

    let glyph1 = get_glyph(get_cp_delta(two.fen, one.fen)),
    glyph2 = get_glyph(get_cp_delta(three.fen, two.fen))
    let res = []
    if (one.turn === turn && glyph1) {
      res.push({ orig: two.uci.slice(2), glyph: glyph1 })
    }
    if (two.turn === turn && glyph2) {
      res.push({ orig: three.uci.slice(2), glyph: glyph2 })
    }
    return res
    }
    return []
    })


  function step() {

    const e = evals_by_fen().get(m_fen())
    if (!game_over() && e) {
      if (m_turn() === ai_color[0]) {
        if (e.depth >= level) {
          let ai_cp = isBlack ? m_ai_cp() : -m_ai_cp()
          if (ai_cp < -2.1) {
            set_game_over(true)
          } else {
            let move = e.pvs[0].moves[0]
              setChess(_ => { moveFixCastling(_, move); return _ })
          }
        }
      }
    }

    setTimeout(step, 500)
  }
  setTimeout(step, 500)

  const game_score = createMemo(() => {
      return Math.floor(m_steps().length / 2)
      })

  const onUserMove = (move: string) => {
    setChess(_ => { moveFixCastling(_, move); return _ })
  }

  const onAnalyseOnLichess = () => {
    let pgn = m_pgn()

    let formData = new FormData()
    formData.append('pgn', pgn)

    let side = 'white'
    fetch('https://lichess.org/api/import', { method: 'post', body: formData, })
      .then(_ => _.json())
      .then(_ => {
          let url = _["url"];
          window.open(`${url}/${side}#${m_steps().length}`, '_blank')
          });  
  }


  const rematch = () => {
    set_game_over(false)
    setChess(new Chess())
  }


  createEffect(on(game_over, (v) => {
        if (v) {
        let result = {
        moves: m_steps().map(_ => _.uci),
        color
        }
      Challenges.check_challenge_game(result, pack)
        }
        }))

  return (<>
    <Title> aidchess.com - Hardcore Chess </Title>
    <div class='hardcore'>
      <div class='board'>
      <Ground glyphs={m_ground_glyphs()} fen={m_fen()} isBlack={isBlack} onUserMove={onUserMove}/>
      </div>
      <div class='table'>
      <div class='ceval'>
        {-m_ai_cp()}
      </div>
      <div ref={_ => $replay_ref = _} class='replay'>
        <Replay steps={m_steps()}/>
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
