import Player from './Player'
import {GameStep} from './Step'

type GameContextType = {
  players: Player[]
  name: string
  step: GameStep
  setPlayers: Function
  host: boolean
}

export type {GameContextType}
