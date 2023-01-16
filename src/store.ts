import { storedJsonProp, StoredJsonProp } from './storage'

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

  complete(key: string) {
    let completed = this.completeds
    if (!completed.includes(key)) {
      completed.push(key)
    }
    this._completed(completed)
  }

  get completeds() {
    return this._completed()
  }

  _completed!: StoredJsonProp<Array<string>>

  constructor() {
    this._completed = this._prop<Array<string>>('completed', [])
  }
}

export const ChallengeStore = new _ChallengeStore()
