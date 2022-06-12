import React from 'react'

const active = "bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg p-2"

const Filter = () => {
  return (
    <div className="p-3 h-16 bg-[#252728] rounded-lg text-white flex items-center gap-5 mb-5">
      <h2 className="text-xl font-bold mr-1">Jogos disponíveis na/pelos:</h2>
      <button className={`text-md font-medium inline-block ${active}`}>
        Melhores Preços
      </button>
      <button className={`text-lg font-medium inline-block `}>
        Steam
      </button>
      <button className={`text-lg font-medium inline-block `}>
        Gamers Gate
      </button>
      <button className={`text-lg font-medium inline-block`}>
        Instant Gaming
      </button>
    </div>
  )
}

export default Filter