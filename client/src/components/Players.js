import React, { useState, useEffect } from 'react'
import Player from './Player'

const Players = ({ data }) => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    setPlayers(data)
  }, [data])


  return (
    <div>
      {/* Loop over players and create a player card */}
      {players && players.map((player, index) => <Player key={index} player={player} />)}
    </div>
  )
}

export default Players
