import Image from 'next/image'
import React from 'react'

const GameSingle = () => {
  return (
    <div className="p-3 rounded-lg bg-[#1f1f21] relative">
      <Image src="https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_sm_120.jpg?t=1649065890" alt=""
      objectFit="cover"
      width={500}
      height={300}
      style={{borderRadius: '12px', }}
      />
      <div className="my-2 text-white">
      <span className="absolute top-[-10px] right-[-10px] w-10 h-10  rounded-full bg-[#f00] flex items-center justify-center">-50%</span>
        <h2 className="text-lg font-medium">Nome do jogo</h2>
        <div className="my-2 text-xl font-bold flex items-center gap-5 relative">
          <p>De: $59.99</p>
          <p>Por: $29.99</p>
        </div>
        <p className="text-md  font-medium">Rate: 76% mostly positive</p>
        <button className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg py-2 font-medium px-5 mt-3">Comprar</button>
      </div>
    </div>
  )
}

export default GameSingle