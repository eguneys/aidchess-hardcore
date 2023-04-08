import './lobby.scss'
import { createEffect, Show, For, onCleanup, createSignal, createMemo } from 'solid-js'
import { useNavigate, A } from '@solidjs/router'
import { Socket } from './socket'
import { Title } from '@solidjs/meta'
import Challenges, { Challenge } from './challenges'

type Memo<A> = () => A

export type Pack = {
  level: number,
  color: string
}

const packs = [
  {level: 5, color: 'white' },
  {level: 5, color: 'black' },
  {level: 8, color: 'white' },
  {level: 8, color: 'black' },
]

const MainPage = () => {


  const navigate = useNavigate()


  const play = () => {
    
    let { level, color } = selected_pack()
    navigate(`/hardcore?level=${level}&color=${color}`, { replace: true })
  }

  const clear_progress = () => {
   Challenges.clear()
     set_refresh_challenges(undefined)
  }

  const [i_pack, set_i_pack] = createSignal(0)
  const selected_pack = createMemo(() => packs[i_pack()])

  const selected_pack_name = createMemo(() => {
    return [selected_pack().color.toUpperCase(), 'Stockfish', selected_pack().level].join(' ')
  })

  const [refresh_challenges, set_refresh_challenges] = createSignal(undefined, { equals: false })
  const challenges: Memo<Array<Challenge>> = createMemo(() => {
      refresh_challenges(); 
      return Challenges.challenges
      })

  return (<>
        <Title> aidchess.com - Build an opening repertoire against Stockfish </Title>
        <div class="lobby">
          <div class="side">
            <div class='footer'>
              <A href='/about'>About</A>
              <A href='/dem'>DEM Exercises</A>
            </div>

          </div>
          <div class="app">
            <h2>Beat stockfish 8 the hard way.</h2>
            <span>Play hardcore chess, where you can restart at your first mistake, and build an opening repertoire.</span>
            <h3> Select a pack </h3>
            <div class='packs'>
             <For each={packs}>{ (pack, i) => 
               <div class='pack'>
                 <span class={'primary' + (pack === selected_pack() ? ' selected' : '')} onClick={() => { set_i_pack(i()) }}> <span class='color'>{pack.color}</span> Stockfish {pack.level}</span>

               </div>
            }</For>
            </div>
            <h3 class='pack-name'>{selected_pack_name()}</h3>
            <h4> Select a generation </h4>
            <small> You can select a generation when it's unlocked </small>
            <div class='generations'>
               <div class='generation'>
                 <span class={'primary selected'}>G0 50/50</span>
               </div>
               <div class='generation'>
                 <span class={'primary'}>G1 10/20</span>
               </div>
               <div class='generation'>
                 <span class={'primary disabled'}>G2 1/5</span>
               </div>
               <div class='generation'>
                 <span class={'primary disabled'}>G3 0/15</span>
               </div>
            </div>
            <button onClick={() => play() } class='fbt primary'> Start Game </button>
            <div class='challenges'>
              <h3> Challenges </h3>
              <For each={challenges()}>{ challenge =>
              <div>{challenge.description}
              <Show keyed when={Challenges.completed(challenge.key, selected_pack())} fallback={<span class='gray'> Uncompleted </span>}>{ nb =>
                <span class='green'> Completed {nb>1 ? `x${nb}` : ''} </span>
              }</Show>
              </div> 
              }</For>
              <span class='clear' onClick={() => clear_progress()}> Clear Progress </span>
            </div>
          </div>
       </div>
      </>)
}

export default MainPage
