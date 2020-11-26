import React from 'react'

type CardProps = {
  cardId: string
  playerName: string | undefined
}

const Card: React.FunctionComponent<CardProps> = ({
  cardId,
  playerName = '',
}: CardProps) => {
  return (
    <div>
      <img src={`./public/img/cards/${cardId}.png`} />
      {playerName && <div>{playerName}</div>}
    </div>
  )
}

export {Card}
