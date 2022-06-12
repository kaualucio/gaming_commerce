import React from 'react'
import Search from './Search'

const SearchSection = () => {
  return (
    <div className="sm:w-full w-2/4 flex flex-col justify-center items-center mx-auto rounded-lg p-3 mb-10">
      <h1 className="text-5xl font-bold  text-white">Procure por um Jogo</h1>
      <p className="text-gray-600 w-96 mx-auto text-sm font-medium my-7">Temos vários jogos, das mais diversas plataformas de games do mundo, disponíveis para compra! </p>
      <Search />
    </div>
  ) 
}

export default SearchSection