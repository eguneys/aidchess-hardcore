import { storedJsonProp, StoredJsonProp } from './storage'
import { ChallengeCompleted } from './challenges'
import { Node, initial_fen, FlatTree, FlatDoc } from 'lchessanalysis'
import { ReplayTree } from './replay_chess'

class _ChallengeStore {
  _key(key: string) {
    return ['aidchess', 'challenges', key].join('.')
  }

  _prop<T>(key: string, value: T) {
    return storedJsonProp(this._key(key), () => value)
  }

  clear() {
    this._completed([])
  }

  complete(completed: ChallengeCompleted) {
    let completeds = this.completeds
    completeds.push(completed)
    this._completed(completeds)
  }

  get completeds() {
    return this._completed()
  }

  _completed!: StoredJsonProp<Array<ChallengeCompleted>>

  constructor() {
    this._completed = this._prop<Array<ChallengeCompleted>>('completed', [])
  }
}

export const ChallengeStore = new _ChallengeStore()


class _ReplayStore {
  _key(key: string) {
    return ['aidchess', 'replays', key].join('.')
  }

  _prop<T>(key: string, value: T) {
    return storedJsonProp(this._key(key), () => value)
  }

  _replay!: StoredJsonProp<FlatDoc>

  set_replay(replay: ReplayTree) {
    this._replay(replay.flat_export)
  }

  get_replay() {
    return ReplayTree.flat_doc(this._replay())
  }

  constructor() {
    this._replay = this._prop<FlatDoc>('replay', FlatTree.apply(Node.make_root(initial_fen)))
  }
}

export const ReplayStore = new _ReplayStore()
