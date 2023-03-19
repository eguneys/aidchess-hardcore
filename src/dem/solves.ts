import { DemSolveStore } from './store'

class _Solves {


  complete(title: string) {
    DemSolveStore.complete({ title })
  }

  is_complete(title: string) {
    return !!DemSolveStore.completeds.find(_ => _.title === title)
  }
}

export const Solves = new _Solves()
