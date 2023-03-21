import './dem.scss'
import { Dynamic } from 'solid-js/web'
import { batch, For, Show, on, createEffect, createResource, createSignal, createMemo } from 'solid-js'
import { Title } from '@solidjs/meta'
import { list, match_study, LoadChapter } from './study'
import { OPicker, read_more_pgn } from './pgn'
import { set_$ref, Ref, make_wheel_from_ref } from 'solid-play'
import Chessreplay23 from 'chessreplay23'
import { Ground } from '../ground'
import { ReplayTree } from '../replay_chess'
import { Solves } from './solves'


const active = (active: boolean) => active ? 'active' : ''


type Status = 'loading' | 'solving' | 'solved' | 'failed'

export default function DEM() {

  let [status, set_status] = createSignal<Status>('loading')


  let [active_link, set_active_link] = createSignal(0)

  let m_link = createMemo(() => list[active_link()])

  let [resource] = createResource(() => m_link().link, match_study)

  let more_pgn = createMemo(() => {
    let _ = resource()
    if (_) {
      return read_more_pgn(_.pgn)
    }
    return []
  })

  let [active_chapter, set_active_chapter] = createSignal(0)

  let active_pgn = createMemo(() => {
    let a = active_chapter()
    let _ = more_pgn()
    if (_) {
    return _[a]
    }
return undefined
    })


   const [refresh_completed, set_refresh_completed] = createSignal(undefined, { equals: false })

  const [path, set_path] = createSignal('')
  const [replay, set_replay] = createSignal(ReplayTree.make(), { equals: false })
  const m_moves = createMemo(() => replay().moves())
  const m_chess = createMemo(() => replay().chess(path()))
  const m_fen = createMemo(() => replay().fen(path()))

  const m_pgn = createMemo(() => m_chess().pgn())

  const long_color: any = {
   w: 'White',
   b: 'Black'
  }
  const [initial_color, set_initial_color] = createSignal('w')
  const m_turn_color = createMemo(() => long_color[initial_color()])

  const do_reset = () => {
    const pgn = active_pgn()
    set_status('solving')
    batch(() => {
        set_replay(ReplayTree.make(pgn!.fen as any))
        set_path('')
        if (pgn.title.match(' pw')) {
          set_initial_color('w')
        } else if (pgn.title.match(' pb')) {
          set_initial_color('b')
        } else {
          set_initial_color(fen_turn(pgn!.fen!))
        }
        })
  }

  createEffect(on(active_pgn, active_pgn => {
   if (!active_pgn) {
     return
   }
   do_reset()
   }))

  createEffect(() => {
      let a = active_pgn()

      let s = status()
      if (a && s === 'solved') {
      Solves.complete(a.title)
      set_refresh_completed()
      }
      })

  const m_active_picker = createMemo(() => {
      const pgn = active_pgn()
      if (pgn) {
      return new OPicker(pgn)
      }
      return undefined
      })

  const m_active_pos = createMemo(() => {

    const picker = m_active_picker()
    if (!picker) {
      return
    }
    return picker.by_fen.get(m_fen())
    })

  createEffect(on(m_fen, fen => {

    const picker = m_active_picker()
    if (!picker) {
      return
    }

    if (picker.by_fen.size === 0) {
      set_status('solved')
    }

     let turn = fen_turn(fen)
 
     if (turn !== initial_color()) {
       const move = picker.pick_move(m_fen())
       if (move) {
         do_make_move(move)
       } else {
         if (status() !== 'failed') {
           set_status('solved')
         }
       }
     }
   }))
   

  const onUserMove = (move: string) => {

    const pos = m_active_pos()
    if (!pos) {
      return
    }

    if (!pos.moves.includes(move)) {
      set_status('failed')
    }

    do_make_move(move)
  }

  const do_make_move = (move: string) => {
    let new_path
    set_replay(_ => { 
        new_path = _.add_move(path(), move); 
        return _ 
        })
    if (new_path) {
      set_path(new_path)
    }
  }

  let replay_ref = Ref.make



  const Solving = () => {
    return (<>
        {m_turn_color()}'s turn, find the solution.
        <div class='show'>
        <a class='button' target='_blank' href={active_pgn()?.site}>View Solution on Lichess</a>
        </div>
        </>)
  }

  const Loading = () => {
   return (<>
     <span>Loading puzzles please wait..</span>
       </>)
  }

  const Solved = () => {
   return (<>
     <span>Puzzle complete!</span>
     <div><a onClick={() => set_active_chapter(active_chapter() + 1)}>Next puzzle</a></div>
     </>)
  }

  const Failed = () => {
   return (<>
     <span>Failed.</span>
     <div><a onClick={() => do_reset()}>Try again</a></div>
     <div class='show'>
     <a class='button' target='_blank' href={active_pgn()?.site}>View Solution on Lichess</a>
     </div>
       </>)
  }

  const feedbacks = {
    loading: Loading,
    solving: Solving,
    solved: Solved,
    failed: Failed
  }

  return (<>
    <div class='dem'>
    <div class='board-replay'>
      <div class='board'>
        <Ground glyphs={[]} fen={m_fen()} isBlack={false} onUserMove={onUserMove}/>
      </div>
      <div ref={set_$ref(replay_ref)} class='replay'>
        <Chessreplay23 moves={m_moves()} on_path={path()} on_click={_ => set_path(_)}/>
      </div>
      <div class='feedback'>
        <Dynamic component={feedbacks[status()]}/>
      </div>
    </div>
    <div class='studies'>
      <For each={list}>{ (link, i) =>
        <div onClick={() => set_active_link(i())} class={active(i() === active_link())}>
        <span>{i()+1}</span>
        <h3>{link.title}</h3>
        </div>
      }</For>
    </div>
    <div class='side'>

    <div class='chapters'>
      <For each={more_pgn()}>{(opgn, i) =>
        <div onClick={() => set_active_chapter(i())} class={active(i() === active_chapter())}>
        <span>{i()+1}</span>
        <h3>{opgn.title}</h3>
        <Show when={refresh_completed() || Solves.is_complete(opgn.title)}><span>Completed</span></Show>
        </div>
      }</For>
    </div>
    </div>
    </div>
      </>)
}

const fen_turn = (fen: Fen) => fen.split(' ')[1]
