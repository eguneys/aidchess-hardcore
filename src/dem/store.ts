import { storedJsonProp, StoredJsonProp } from '../storage'

export type PuzzleCompleted = {
  title: string
}

class _DemSolveStore {
  _key(key: string) {
    return ['aidchess', 'dem_solves', key].join('.')
  }

  _prop<T>(key: string, value: T) {
    return storedJsonProp(this._key(key), () => value)
  }

  clear() {
    this._completed([])
  }

  complete(completed: PuzzleCompleted) {
    let completeds = this.completeds

    completeds = completeds.filter(_ => _.title !== completed.title)
    completeds.push(completed)
    this._completed(completeds)
  }

  get completeds() {
    return this._completed()
  }



  _completed!: StoredJsonProp<Array<PuzzleCompleted>>


  constructor() {
    this._completed = this._prop<Array<PuzzleCompleted>>('completed', [])
  }

}

export const DemSolveStore = new _DemSolveStore()
