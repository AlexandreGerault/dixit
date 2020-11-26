type Player = {
  name: string
  master: boolean
  status: 'done' | 'pending' | undefined
  score: number
}

export default Player
