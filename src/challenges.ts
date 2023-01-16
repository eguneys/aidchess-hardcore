import { ChallengeStore } from './store'

export type Challenge = {
  key: string,
  description: string,
  completed?: true
}

export type GameResult = {
  moves: Array<string>,
  color: string
}

const challenges = [
  {
  key: 'white20',
  description: 'Get to 20 moves with White'
}, {
  key: 'black20',
  description: 'Get to 20 moves with Black'
},
  {
  key: 'white30',
  description: 'Get to 30 moves with White'
}, {
  key: 'black30',
  description: 'Get to 30 moves with Black'
},

 {
  key: 'white40',
  description: 'Get to 40 moves with White'
}, {
  key: 'black40',
  description: 'Get to 40 moves with Black'
}

]

const deep_copy = (_: any) => JSON.parse(JSON.stringify(_))

class Challenges {

  static make = () => {
    let res = new Challenges()
    res.boot()

    return res
  }


  challenges!: Array<Challenge>

  private boot() {

    this.challenges = deep_copy(challenges)

    let { completeds } = ChallengeStore

    this.challenges.forEach(_ => {
      if (completeds.includes(_.key)) {
        _.completed = true
      } else {

        _.completed = undefined
      }
    })
  }

  complete(key: string) {

    ChallengeStore.complete(key)
    this.boot()
  }

  clear() {
    ChallengeStore.clear()
    this.boot()
  }

  check_challenge_game = (game: GameResult) => {

    if (game.moves.length >= 80) {
      if (game.color === 'white') {
        this.complete('white40')
      } else {
        this.complete('black40')
      }
    } else if (game.moves.length >= 60) {
      if (game.color === 'white') {
        this.complete('white30')
      } else {
        this.complete('black30')
      }
    } else if (game.moves.length >= 40) {
      if (game.color === 'white') {
        this.complete('white20')
      } else {
        this.complete('black20')
      }
    }
  }

}


export default Challenges.make()
