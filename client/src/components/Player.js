import React from 'react'
import styled from 'styled-components'

const Player = ({ player }) => {
  return (
    <PlayerWrapper data-testid="player-test-id">
      <h1>{player.name}</h1>
      <h3>{player.country}</h3>
      <p>{player.searches}</p>
    </PlayerWrapper>
  )
}

export default Player

const PlayerWrapper = styled.div`
  width: 30%;
  margin: 1rem auto;
  text-align: center;
  padding: 1rem 2rem 1rem;
  border: .5px solid gray;
  border-radius: 8px;
  opacity: .8;

  h1 {
    font-size: 2.5rem;
    padding: 1rem 0;
  }

  h3 {
    font-size: 1.8rem;
    padding: 1rem 0;
  }

  p {
    font-size: 1.2rem;
    padding: 1rem 0;
  }
`