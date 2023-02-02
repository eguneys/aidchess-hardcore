import { Chess } from 'chess.js'
import { head, init, Path, FlatTree, Fen, Node } from 'lchessanalysis'
import { ReplayTree } from './replay_chess'
import CevalCtrl from './ceval/ctrl'
import { Step } from './ceval/types'

let ceval = new CevalCtrl({ 
  emit(e: Tree.LocalEval) { 
    ReplayAi.ai.local_eval(e)
    if (e.depth >= level) {
      ReplayAi.ai.crunch_one()
    }
  }})

let crunch_limit = 10
let level = 16

const pathsOfFen = (node: Node, fen: Fen): Array<Path>  => {
  let [root, children] = FlatTree.apply(node)

  if (root.fen === fen) {
    return ['']
  }

  return children.filter(([path, _]) => _.fen === fen).map(_ => _[0])
}

export class ReplayAi {

  static ai = new ReplayAi()
  
  static make = (on_root_changed: () => void, on_crunch_done: () => void) => {

    let { ai } = ReplayAi

    ai.root = ReplayTree.make()
    ai.nb_crunch = 0
    ai.path_depths = new Map()
    ai.on_root_changed = on_root_changed
    ai.on_crunch_done = on_crunch_done

    ai.crunch_one()

    return ai
  }

  local_eval(e: Tree.LocalEval) {
    let paths = pathsOfFen(this.root.root, e.fen as Fen)
    paths.forEach(path => {
      this.path_depths.set(path, e.depth)
      e.pvs.forEach(pvs => {
        let i_path = path
        let cp = (pvs.cp! / 100)
        let depth = pvs.depth
        let moves = pvs.moves.slice(0, 4)
        for (let move of moves) {
          let parent = this.root.node_at_path(i_path)!
          if (parent.children.find(_ => _.uci === move)) {
            break
          }
          let new_path = this.root.add_move(i_path, move, undefined)!
          i_path = new_path
        }
      })
    })
    this.on_root_changed()
  }

  crunch_one() {
    this.nb_crunch++;
    if (this.nb_crunch === crunch_limit) {
      this.on_crunch_done()
    }
    if (this.nb_crunch > crunch_limit) { return }

    Node.breadfirst(this.root.root, (path, node) => {

      let depth = this.path_depths.get(path)

      if (!depth || depth < level) {
        let nodes = this.root.root.node_list(path)
        let steps = nodes.map((_, i) => ({
          ply: i,
          uci: _.uci as any,
          fen: _.fen,
          san: ''
        }))

        ceval.start('', steps)
        return true
      }

      return false
    })
  }

  path_depths!: Map<Path, number>
  root!: ReplayTree
  nb_crunch!: number

  on_root_changed!: () => void
  on_crunch_done!: () => void
}
