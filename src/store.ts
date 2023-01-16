import { storedJsonProp, StoredJsonProp } from './storage'
import { ChallengeCompleted } from './challenges'

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
