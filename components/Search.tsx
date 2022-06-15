import React, { FormEvent, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

type SearchProps = {
  handleSearchProduct: (term: string, e: FormEvent) => Promise<any>
}

const Search = ({handleSearchProduct}: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <form onSubmit={(e) => handleSearchProduct(searchTerm, e)} className="lg:w-[500px] w-full h-14 py-1 px-3 mx-auto flex items-center bg-[#252728] rounded-lg text-white">
      <input 
        className="w-full h-full border-0 bg-transparent outline-0 "
        type="text" 
        name="name" 
        placeholder="Nome do produto"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="w-10 h-full bg-transparent flex items-center justify-end">
        <FiSearch fontSize={25} />
      </button>
    </form>
  )
}

export default Search