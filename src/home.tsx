import './lobby.scss'
import { createEffect, Show, For, onCleanup, createSignal, createMemo } from 'solid-js'
import { useNavigate, A } from '@solidjs/router'
import { Socket } from './socket'
import { Title } from '@solidjs/meta'
import Challenges, { Challenge } from './challenges'

type Memo<A> = () => A


const MainPage = () => {


  const navigate = useNavigate()


  const play = (state: number, color?: string) => {
    navigate(`/hardcore?level=${state}` + (color ? `&color=${color}` : ''), { replace: true })
  }

  const clear_progress = () => {
   Challenges.clear()
     set_refresh_challenges(undefined)
  }

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
            </div>

          </div>
          <div class="app">
            <h2>Beat stockfish 8 the hard way.</h2>
            <span>Play hardcore chess, where you can restart at your first mistake, and build an opening repertoire.</span>
            <div class='pack'>
              <button class='primary' onClick={() => { play(7) }}>White Stockfish 7</button>
            </div>
            <div class='pack'>
              <button class='primary' onClick={() => { play(7, 'black') }}>Black Stockfish 7</button>
            </div>
            <div class='challenges'>
              <h3> Challenges </h3>
              <For each={challenges()}>{ challenge =>
              <div>{challenge.description}
              <Show when={challenge.completed} fallback={<span class='gray'> Uncompleted </span>}>
                <span class='green'> Completed </span>
              </Show>
              </div> 
              }</For>
              <span class='clear' onClick={() => clear_progress()}> Clear Progress </span>
            </div>
          </div>
       </div>
      </>)
}

export default MainPage
