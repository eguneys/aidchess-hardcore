import './guess.scss'
import { Show, createEffect, createResource, createMemo, createSignal } from 'solid-js'
import { useLocation, A } from '@solidjs/router'
import { Chessboard23 } from 'chessboard23'
import { Fen, MobileSituation } from 'lchessanalysis'
import { Title } from '@solidjs/meta'

let url = (path: string) => `https://raw.githubusercontent.com/eguneys/parse-pgn-fire-db/master/packs/${path}`


const get_pack = (path: string) => 
  fetch(url(path))
  .then(response => response.text())
  .then(_ =>
     _.split('\n').map(_ => {
        let [pack, id, game_id, _eval, nb_moves, fen] = _.split(',')
        return {
          pack,
          id,
          game_id,
          _eval: parseFloat(_eval),
          nb_moves,
          fen
        } }))



export default () => {

  const location = useLocation()

  let _path = location.state as string || 'starter'
  let _pack = '00'

  let path = createMemo(() => _path + _pack)

  let [pack] = createResource(path, get_pack)

  let nb_pack = createMemo(() => pack()?.length)
  let [i_pack, set_ipack] = createSignal(0)
  let current_pack = createMemo(() => pack()?.[i_pack()])

  let [guess, set_guess] = createSignal(0)
  let [guess_result, set_guess_result] = createSignal<number | undefined>(undefined, { equals: false })
  const next_puzzle = () => {
    set_guess_result(undefined)
    set_guess(0)
    set_ipack(_ => _ + 1)
  }

  const set_input_guess = (g: number) => {
    if (guess_result() === undefined) {
      set_guess(g)
    }
  }

  const click_guess = () => {
     
     let pack = current_pack()

     if (!pack) {
       return
     }
     let result = Math.round(pack._eval)
     set_guess_result(result)
  }

  const pretty_guess_result = createMemo(() => {
    let g = guess()
    let result = guess_result()
    if (result === undefined) {
    return undefined
    }

    if (g === result) {
      return 'correct'
    } else {
      if (Math.abs(g - result) < 2) {
        return 'close'
      } else {
        return 'wrong'
      }
    }
  })

  let pretty_guess = createMemo(() => {
      switch(guess()) {
        case -5:
        case -4:
         return `Black is winning`
        case -3:
         return `Black has big advantage`
        case -2:
         return `Black has advantage`
        case -1:
         return `Black is slightly better`
        case 0:
         return `Equal`
        case 5:
        case 4:
         return `White is winning`
        case 3:
         return `White has big advantage`
        case 2:
         return `White has advantage`
        case 1:
         return `White is slightly better`
      }
      return ``
  })


  return (<>
      <Title> aidchess.com - Guess Position Evaluation </Title>

     <div class='guess'>

       <Show when={pack.loading}>
         Loading...
       </Show>
       
       <div class='app'>
         <Show keyed when={current_pack()}>{ pack =>
            <div class='is2d board'>
               <Chessboard23 fen={MobileSituation.from_fen(pack.fen as Fen).board.pieses.join(' ')} shapes="" drag=""/>
            </div>
         }</Show>


         <div class='controls'>
           <h1> {path()} </h1>
           <span>{guess()}</span>
           <input type='range' min="-5" max="5" disabled={guess_result() !== undefined} value={guess()} onInput={e => set_input_guess(parseInt(e.currentTarget.value)) }></input>
           <span>{pretty_guess()}</span>
           <Show when={guess_result() === undefined}>
             <button class='primary' onClick={() => click_guess()} >Guess</button>
           </Show>
           <div class='result'>
             <Show when={pretty_guess_result() === 'correct'}>
               Correct
             </Show>
             <Show when={pretty_guess_result() === 'close'}>
               Close, but no.
               <span>The correct evaluation is {guess_result()}</span>
             </Show>
             <Show when={pretty_guess_result() === 'wrong'}>
               Wrong.
               <span>The correct evaluation is {guess_result()}</span>
             </Show>
           </div>
           <a href="#" onClick={() => next_puzzle() }> Next puzzle </a>
         </div>
       </div>
     </div>
     </>)
}
