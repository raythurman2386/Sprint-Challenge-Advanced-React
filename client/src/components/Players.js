import React from 'react'
import Player from './Player'
import { useData } from '../hooks/useData'

const Players = ({ data }) => {
  const [players, setPlayers] = useData(data)

  return (
    <div>
      {/* Loop over players and create a player card */}
      {players && players.map((player, index) => <Player key={index} player={player} />)}
    </div>
  )
}

export default Players
