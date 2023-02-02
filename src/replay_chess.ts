import { Chess } from 'chess.js'
import { FlatDoc, Fen, Path, init, last, initial_fen, FlatTree, Node } from 'lchessanalysis'

function longestCommonPrefix(str1: string, str2: string) {
  let commonPrefix = "";
  let minLength = Math.min(str1.length, str2.length);

  for (let i = 0; i < minLength; i++) {
    if (str1[i] !== str2[i]) {
      break;
    }
    commonPrefix += str1[i];
  }

  return commonPrefix;
}

export class ReplayTree {


  static diff_trees = (w: ReplayTree, b: ReplayTree) => {

    let [w_root, w_children] = w.flat_export
    let [b_root, b_children] = b.flat_export

    let extra: Array<Path> = []
    let missing: Array<Path> = []

    w_children.forEach(([path, node]) => {

      if (!b_children.find(_ => _[0] === path)) {
        extra.push(path)
      }
    })

    b_children.forEach(([path, node]) => {

      if (!w_children.find(_ => _[0] === path)) {
        missing.push(path)
      }
    })


    let shortest_extra = []
    let shortest_missing = []

    extra.forEach(e => {
      if (!extra.find(_ => _.length < e.length && e.startsWith(_))) {
        shortest_extra.push(e)
      }
    })

    missing.forEach(e => {
      if (!missing.find(_ => _.length < e.length && e.startsWith(_))) {
        shortest_missing.push(e)
      }
    })


    return [shortest_extra, shortest_missing]
  }
  
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

  delete_path(path: Path) {
    let init_path = init(path)
    let last_path = last(path)
    this.root.delete_after(init_path, last_path)
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
