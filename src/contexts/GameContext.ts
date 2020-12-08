import {createContext} from 'react'
import {GameContextType} from '../types/game/GameContextType'

const GameContext = createContext<GameContextType>({
  players: [],
  name: '',
  step: 'lobby',
  setPlayers: () => {},
  host: false,
})

export {GameContext}
