import './opening.scss'
import { Show, on, createEffect, createSignal, createMemo } from 'solid-js'
import { Title } from '@solidjs/meta'
import { pgn } from './pgn'

import { set_$ref, Ref, make_wheel_from_ref } from 'solid-play'
import Chessreplay23 from 'chessreplay23'
import { Ground } from './ground'
import { ReplayTree } from './replay_chess'

export default () => {
  return (<>
    <Title> aidchess.com - Openings Exercise </Title>
    <Openings/>
    </>)

}


const Openings = () => {


  let [game_over, set_game_over] = createSignal(false)

  const [path, set_path] = createSignal('')
  const [replay, set_replay] = createSignal(ReplayTree.make(), { equals: false })
  const m_moves = createMemo(() => replay().moves())
  const m_chess = createMemo(() => replay().chess(path()))
    const m_fen = createMemo(() => replay().fen(path()))

  const m_pgn = createMemo(() => m_chess().pgn())

  const onUserMove = (move: string) => {
    let new_path
    set_replay(_ => { 
        new_path = _.add_move(path(), move); 
        return _ 
        })
    if (new_path) {
      set_path(new_path)
    }
  }

  let board_ref = Ref.make
  let replay_ref = Ref.make


  const rematch = () => {
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
          window.open(`${url}/${side}#${m_moves().length}`, '_blank')
          });  
  }


  const game_score = createMemo(() => {
      return Math.floor(m_moves().length / 2)
      })

  return (<>
      <div class='openings'>
      <div class='board'>
      <Ground glyphs={[]} fen={m_fen()} isBlack={false} onUserMove={onUserMove}/>
      </div>
      <div class='table'>
      <div ref={set_$ref(replay_ref)} class='replay'>
        <Chessreplay23 moves={m_moves()} on_path={path()} on_click={_ => set_path(_)}/>
        <Show when={game_over()}>
        <div class='result-wrap'>
           <div class='result'>{game_score()}</div>
           Out of book.
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
