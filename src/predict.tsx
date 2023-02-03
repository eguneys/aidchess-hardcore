import './predict.scss'
import { Show, on, createEffect, createSignal, createMemo } from 'solid-js'
import { Title } from '@solidjs/meta'
import { Ground } from './ground'
import Chessreplay23 from 'chessreplay23'
import { Chess } from 'chess.js'
import { init, Path } from 'lchessanalysis'
import { ReplayTree } from './replay_chess'
import { set_$ref, Ref, make_wheel_from_ref } from 'solid-play'
import { ReplayStore } from './store'
import { ReplayAi } from './replay_ai'

export default () => {

  return (<>
    <Title> aidchess.com - Guess Lines </Title>
    <div class='guess-app'>
      <Show when={true}
fallback={
      <OpeningPrep on_start={(color) => { }}/>
}>
       <GameStart/>
      </Show>
      </div>
      </>)
}

const GameStart = () => {

  const [path, set_path] = createSignal('')
  const [base_replay, set_base_replay] = createSignal(ReplayTree.make(), { equals: false })
  const [replay, set_replay] = createSignal(ReplayStore.get_replay(), { equals: false })

   const [comparing, set_comparing] = createSignal(false)
    const onCompare = () => {

      set_comparing(true)
      const replay_ai = ReplayAi.make(
          base_replay(),
          () => {},
          () => { 
          let [extra, missing] = ReplayTree.diff_trees(replay(), replay_ai.root) 
          let white_extra = extra.filter(_ => _.length % 4 === 2)
          let black_extra = extra.filter(_ => _.length % 4 === 0)
          let white_missing = missing.filter(_ => _.length % 4 === 0)

          set_replay(_ => {
              black_extra.forEach(e => _.delete_path(e))
              return _
              })

          set_replay(_ => {
              white_missing.forEach(e => {
                  let node = replay_ai.root.node_at_path(e)!
                  _.add_move(init(e), node.uci!)
                  })
              return _
              })

          set_base_replay(replay().clone)

          set_base_replay(_ => {
              white_extra.forEach(e => _.delete_children(e))
              return _
              })

          set_comparing(false)
          })
    }


  const m_node = createMemo(() => replay().node_at_path(path()))
  const m_moves = createMemo(() => {
      let base_moves = base_replay().moves().map(_ => {
         let [path, uci, comment] = _.split(' ')
         comment = `{__base__}`
         return [path, uci, comment].join(' ')
          })
      let moves = replay().moves().filter(_ =>
          !base_moves.find(b => b.split(' ')[0] === _.split(' ')[0])) 
      .map(_ => {
         let [path, uci, comment] = _.split(' ')
         comment = `{__ghost__}`
         return [path, uci, comment].join(' ')
         })

       return [...base_moves, ...moves]

      })
  createEffect(() => {
      console.log(m_moves())
      })
  const m_chess = createMemo(() => replay().chess(path()))
  const m_fen = createMemo(() => replay().fen(path()))

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

  const onDeleteVariation = () => {
    let delete_after
      set_replay(_ => {
        delete_after = _.delete_variation(path())
        return _
        })
      if (delete_after !== undefined) {
        set_path(delete_after)
      }
  }



  let board_ref = Ref.make
  let replay_ref = Ref.make

  const on_wheel = (dir: number) => {
    if (dir < 0) {
      set_path(_ => init(_))
    } else {
     const _up = m_node()?.children[0]
     if (_up) {
       set_path(_ => _ + _up.id)
     }
    }
  }

  make_wheel_from_ref({ on_wheel }, board_ref)
  make_wheel_from_ref({ on_wheel }, replay_ref)


  createEffect(() => console.log(m_moves()))

  return (<>
    <div class='opening-prep-scene'>
      <div ref={set_$ref(board_ref)} class='board'>
        <Ground glyphs={[]} fen={m_fen()} isBlack={false} onUserMove={onUserMove}/>
      </div>
      <div class='table'>
        <div class='info'>
        </div>
        <div ref={set_$ref(replay_ref)} class='replay'>
          <Chessreplay23 moves={m_moves()} on_path={path()} on_click={_ => set_path(_)}/>
        </div>
        <div class='controls'>
          <button onClick={onDeleteVariation}>Delete variation</button>
        </div>
        <div class='action'>
          <Show when={comparing()} fallback={
          <button onClick={onCompare} class='primary'>Compare AI</button>
}>
  Comparing...
</Show>
        </div>
        </div>
    </div>
  </>)
}

type OpeningPrepProps = { on_start: (color?: string) => void }
const OpeningPrep = (props: OpeningPrepProps) => {

  const [path, set_path] = createSignal('')
  const [replay, set_replay] = createSignal(ReplayStore.get_replay(), { equals: false })

  createEffect(() => {
    ReplayStore.set_replay(replay())
      })

  const m_node = createMemo(() => replay().node_at_path(path()))
  const m_moves = createMemo(() => replay().moves())
  const m_chess = createMemo(() => replay().chess(path()))
  const m_fen = createMemo(() => replay().fen(path()))


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

  const onDeleteVariation = () => {
    let delete_after
      set_replay(_ => {
        delete_after = _.delete_variation(path())
        return _
        })
      if (delete_after !== undefined) {
        set_path(delete_after)
      }
  }

  const [selected_color, set_selected_color] = createSignal<string | undefined>()
  const onStartGame = () => {
    props.on_start(selected_color())
  }

  let board_ref = Ref.make
  let replay_ref = Ref.make

  const on_wheel = (dir: number) => {
    if (dir < 0) {
      set_path(_ => init(_))
    } else {
     const _up = m_node()?.children[0]
     if (_up) {
       set_path(_ => _ + _up.id)
     }
    }
  }

  make_wheel_from_ref({ on_wheel }, board_ref)
  make_wheel_from_ref({ on_wheel }, replay_ref)



  const primary_selected_if = (color: string | undefined) => {
    if (selected_color() === color) {
      return `primary selected`
    }
    return `primary`
  }
  
  return (<>
    <div class='opening-prep-scene'>
      <div ref={set_$ref(board_ref)} class='board'>
        <Ground glyphs={[]} fen={m_fen()} isBlack={false} onUserMove={onUserMove}/>
      </div>
      <div class='table'>
        <div class='info'>
          1. Build your opening repertoire as a preset
        </div>
        <div ref={set_$ref(replay_ref)} class='replay'>
          <Chessreplay23 moves={m_moves()} on_path={path()} on_click={_ => set_path(_)}/>
        </div>
        <div class='controls'>
          <button onClick={onDeleteVariation}>Delete variation</button>
        </div>
        <div class='action'>
          <div>2. Create a challenge</div>
          <h3> Select a color </h3>
          <div class='packs colors'>
            <div class='pack' onClick={() => set_selected_color('w')}><span class={primary_selected_if('w')}> White </span></div>
            <div class='pack' onClick={() => set_selected_color('b')}><span class={primary_selected_if('b')}> Black </span></div>
            <div class='pack' onClick={() => set_selected_color()}><span class={primary_selected_if(undefined)}> Random </span></div>
          </div>
          <button class='primary' onClick={onStartGame}>Start Game</button>
        </div>
        </div>
        </div>
      </>)
}
