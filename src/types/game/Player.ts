type Player = {
  pseudo: string
  master: boolean
  status: 'done' | 'pending' | undefined
  score: number
}

export default Player
