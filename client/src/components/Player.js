import React from 'react'

const Player = ({ player }) => {
  return (
    <div>
      <h1>{player.name}</h1>
      <h3>{player.country}</h3>
      <p>{player.searches}</p>
    </div>
  )
}

export default Player
