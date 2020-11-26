import React from 'react'
import PropTypes, {InferProps} from 'prop-types'
import {type} from 'os'

function Card({
  cardId,
  playerName = '',
  isSelectedCard,
  isGoodAnswer,
}: InferProps<typeof Card.propTypes>) {
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

Card.propTypes = {
  cardId: PropTypes.string.isRequired,
  playerName: PropTypes.string,
  isSelectedCard: PropTypes.bool,
  isGoodAnswer: PropTypes.bool,
}

export {Card}
