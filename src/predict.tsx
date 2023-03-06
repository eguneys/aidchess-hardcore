import './predict.scss'
import { Show, on, createEffect, createSignal, createMemo } from 'solid-js'
import { Title } from '@solidjs/meta'
import { Ground } from './ground'
import Chessreplay23 from 'chessreplay23'
import { Chess } from 'chess.js'
import { Color, init, Path } from 'lchessanalysis'
import { ReplayTree } from './replay_chess'
import { set_$ref, Ref, make_wheel_from_ref } from 'solid-play'
import { ReplayStore } from './store'
import { ReplayAi } from './replay_ai'

const color_path = (path: Path, color: Color) => path.length % 4 === (color === 'w' ? 2 : 0)

export default () => {

  return (<>
    <Title> aidchess.com - Guess Lines </Title>
    <div class='guess-app'> <GameStart/> </div>
      </>)
}

const GameStart = () => {

  const [path, set_path] = createSignal('')
  const [base_replay, set_base_replay] = createSignal(ReplayTree.make(), { equals: false })
  const [replay, set_replay] = createSignal(ReplayStore.get_replay(), { equals: false })

  createEffect(() => {
    ReplayStore.set_replay(replay())
      })


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
      let r_child_paths = replay().root.child_paths
      let base_moves = base_replay().moves().map(_ => {
         let [path, uci, comment] = _.split(' ')
         if (r_child_paths.includes(path)) {
           comment = `{__base child__}`
         } else {
         comment = `{__base__}`
         }
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

  const onDeleteMove = () => {
    let delete_path = path()
      set_base_replay(_ => {
        _.delete_path(path())
        return _
        })
      set_replay(_ => {
        _.delete_path(path())
        return _
        })
    set_path(init(delete_path))
  }

  const onDeleteSiblings = () => {
    let delete_path = path()
      set_base_replay(_ => {
        _.delete_siblings(path())
        return _
        })
      set_replay(_ => {
        _.delete_siblings(path())
        return _
        })
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
          <button onClick={onDeleteMove}>Delete move</button>
          <button onClick={onDeleteSiblings}>Delete Siblings</button>
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
