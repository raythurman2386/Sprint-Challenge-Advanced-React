import React from 'react'
import styled from 'styled-components'

const Player = ({ player }) => {
  return (
    <PlayerWrapper>
      <h1>{player.name}</h1>
      <h3>{player.country}</h3>
      <p>{player.searches}</p>
    </PlayerWrapper>
  )
}

export default Player

const PlayerWrapper = styled.div`
  width: 30%;
  text-align: center;

`