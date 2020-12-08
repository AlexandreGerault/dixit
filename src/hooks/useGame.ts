import {useContext} from 'react'
import {GameContext} from '../contexts/GameContext'

const useGame = () => {
  const context = useContext(GameContext)

  if (!context) {
    throw new Error(
      'The <Game> component should be wrapped inside a <GameContextProviderComponent>',
    )
  }

  const {players, step, host} = context

  return {players, step, host}
}

export {useGame}
