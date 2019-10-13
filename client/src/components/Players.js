import React from 'react'
import styled from 'styled-components'
import Player from './Player'
import { useData } from '../hooks/useData'

const Players = ({ data }) => {
  const [players, setPlayers] = useData(data)

  return (
    <PlayersWrapper>
      {/* Loop over players and create a player card */}
      {players && players.map((player, index) => <Player key={index} player={player} />)}
    </PlayersWrapper>
  )
}

export default Players

const PlayersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center
  width: 98%;
  margin: auto;
`