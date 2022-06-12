import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <form className="w-[500px] h-14 py-1 px-3 mx-auto flex items-center bg-[#252728] rounded-lg text-white">
      <select name="" className="p-3 cursor-pointer outline-none appearance-none text-sm font-medium form-select rounded-lg mr-3 w-28 bg-gradient-to-r from-sky-500 to-indigo-500 focus:bg-indigo-500">
        <option value="best-price">Melhor Preço</option>
        <option value="steam">Steam</option>
        <option value="ggate">Gamers Gate</option>
        <option value="igaming">Instant Gaming</option>
      </select>
      <input 
        className="w-full h-full border-0 bg-transparent outline-0 "
        type="text" 
        name="name" 
        placeholder="Nome do jogo"
      />
      <button type="submit" className="w-10 h-full bg-transparent flex items-center justify-end">
        <FiSearch fontSize={25} />
      </button>
    </form>
  )
}

export default Search