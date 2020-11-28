import React, {FunctionComponent} from 'react'

type CardProps = {
  cardId: string
  playerName: string | undefined
  isSelectedCard: boolean | undefined
  isGoodAnswer: boolean | undefined
}

const Card: FunctionComponent<CardProps> = ({
  cardId,
  playerName = '',
  isSelectedCard,
  isGoodAnswer,
}) => {
  return (
    <div className="card">
      <img
        src={`img/cards/${cardId}`}
        className={`card__img ${isSelectedCard ? 'card--selected' : ''} ${
          isGoodAnswer ? 'card--good' : ''
        }`}
      />
      {playerName && <div className="card__playerName">{playerName}</div>}
    </div>
  )
}

export {Card}
