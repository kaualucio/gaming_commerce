import React, { FormEvent } from 'react'
import Search from './Search'

type SearchSectionProps = {
  handleSearchProduct: (term: string, e: FormEvent) => Promise<any>
}

const SearchSection = ({handleSearchProduct}: SearchSectionProps) => {


  return (
    <div className="lg:w-2/4 lg:mx-auto flex flex-col justify-center items-center text-center rounded-lg p-3 mb-10">
      <h1 className="text-5xl font-bold  text-white">Procure por um produto</h1>
      <p className="text-gray-600 w-96 mx-auto text-sm font-medium my-7">Temos vários produtos tanto para você iniciar no mundo gamer quanto para tunar seu setup! </p>
      <Search handleSearchProduct={handleSearchProduct} />
    </div>
  ) 
}

export default SearchSection