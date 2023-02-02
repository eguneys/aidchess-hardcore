import { Chess } from 'chess.js'
import { FlatDoc, Fen, Path, init, initial_fen, FlatTree, Node } from 'lchessanalysis'


export class ReplayTree {

  
  static make = () => {
    let res = new ReplayTree()
    res.root = Node.make_root(initial_fen)
    return res
  }

  static flat_doc = (doc: FlatDoc) => {
    let res = new ReplayTree()
    res.root = FlatTree.read(doc)
    return res
  }

  get flat_export() {
    return FlatTree.apply(this.root)
  }

  root!: Node

  node_at_path(path: Path) {
    return this.root.node_at_path_or_undefined(path)
  }

  moves() {
    let [fen, moves] = FlatTree.apply(this.root)
    return moves.map(([path, _]) => {
        let [initial, ...moves] = this.root.node_list(path)
        let chess = new Chess(initial.fen)
        moves.forEach(_ => chess.move(_.uci!, { sloppy: true }))
        let ms = chess.history()
        let san = ms[ms.length - 1]

        return `${path} ${san} {${_.comment??''}}`
        })
  }

  chess(path: Path) {
    let [initial, ...moves] = this.root.node_list(path)
      
      let chess = new Chess(initial.fen)
      moves.forEach(_ => chess.move(_.uci!, { sloppy: true }))
      return chess
  }

  fen(path: Path): Fen {
    return this.chess(path).fen() as Fen
  }


  add_move(path: Path, move: string, comment?: string) {
    let chess = this.chess(path)
    chess.move(move, { sloppy: true })
    let fen = chess.fen() as Fen
    let new_node = Node.make_branch(fen, move as any, comment)
    return this.root.add_node(new_node, path)
  }

  delete_variation(path: Path) {
    let [initial, ...moves] = this.root.node_list(path)
    if (moves.length === 0) return undefined
    let up_to_first_branch = moves[moves.length - 1].id
    for (let i = moves.length-2; i >= 0; i--) {
      let move = moves[i]
      if (move.children.length > 1) {
        break
      }
      up_to_first_branch = move.id + up_to_first_branch
    }
    let delete_after = path.slice(0, -up_to_first_branch.length)
    let delete_node = up_to_first_branch.slice(0, 2)
    this.root.delete_after(delete_after, delete_node)

    return delete_after
  }
}
