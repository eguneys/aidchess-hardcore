import { Pack } from './home'
import { ChallengeStore } from './store'

const same_pack = (a: Pack, b: Pack) => {
  return a.color === b.color && a.level === b.level
}

export type Challenge = {
  key: string,
  description: string
}

export type ChallengeCompleted = {
  pack: Pack,
  key: string
}

export type GameResult = {
  moves: Array<string>,
  color: string
}

const challenges = [
  {
  key: '20',
  description: 'Get to 20 moves'
  },
  {
  key: '30',
  description: 'Get to 30 moves'
},
 {
  key: '40',
  description: 'Get to 40 moves'
 }
]

class Challenges {

  static make = () => {
    let res = new Challenges()
    return res
  }


  get challenges() {
    return challenges
  }

  complete(key: string, pack: Pack) {
    ChallengeStore.complete({
      key,
      pack
    })
  }

  completed(key: string, pack: Pack) {
    return ChallengeStore.completeds.filter(_ =>
      _.key === key &&
      same_pack(pack, _.pack)
    ).length
  }

  clear() {
    ChallengeStore.clear()
  }

  check_challenge_game = (game: GameResult, pack: Pack) => {
    if (game.moves.length >= 80) {
      this.complete('40', pack)
    } else if (game.moves.length >= 60) {
      this.complete('30', pack)
    } else if (game.moves.length >= 40) {
      this.complete('20', pack)
    }
  }

}


export default Challenges.make()
