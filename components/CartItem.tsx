import Image from 'next/image'
import React from 'react'

const CartItem = () => {
  return (
    <div className="bg-gray-100 p-3 rounded-lg flex items-center gap-5 shadow-lg mb-5">
      <div>
        <Image src="https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_sm_120.jpg?t=1649065890" alt=""
        objectFit="cover"
        width={100}
        height={100}
        style={{borderRadius: '12px', }}
        />
      </div>
      <div className="text-slate-800">
        <h3 className="font-medium text-xl">Nome do jogo</h3>
        <p className="font-medium text-lg">$29.99</p>
        <div className="flex mt-3 font-bold">
          <button className="border w-10 border-gray-600 text-[#f00] px-2 text-lg">-</button>
          <p className="border border-x-0 border-gray-600 px-3 text-xl">1</p>
          <button className="border w-10 border-gray-600 text-[#f00] px-2 text-lg">+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem