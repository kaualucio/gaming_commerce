import React from 'react'
import GameSingle from './GameSingle'

const ListGames = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 p-3">
      <GameSingle />
      <GameSingle />
      <GameSingle />
      <GameSingle />
      <GameSingle />
    </div>
  )
}

export default ListGames