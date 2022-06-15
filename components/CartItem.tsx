import Image from 'next/image'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useCartContext } from '../context/CartContext'

const CartItem = ({item}: any) => {
  const { removeProductInCart, toggleCartItemsQuantity } = useCartContext()
  return (
    <div className="bg-gray-100 p-3 rounded-lg flex items-center gap-5 shadow-lg mb-5">
      <div>
        <Image src={item.image[0].url} alt={item.image[0].id}
        objectFit="cover"
        width={100}
        height={100}
        style={{borderRadius: '12px', }}
        />
      </div>
      <div className="text-slate-800 w-full">
        <h3 className="font-medium text-xl">{item.name}</h3>
        <p className="font-medium text-lg">R${item.price}</p>
        <div className="flex items-center justify-between mt-3 font-bold w-full">
          <div className="flex">
            <button 
              className="border w-10 border-gray-600 text-[#f00] px-2 text-lg"
              onClick={() => toggleCartItemsQuantity(item, 'dec')}
              >-</button>
            <p className="border border-x-0 border-gray-600 px-3 text-xl">{item.quantity}</p>
            <button 
              className="border w-10 border-gray-600 text-[#f00] px-2 text-lg"
              onClick={() => toggleCartItemsQuantity(item, 'inc')}
              >+</button>
          </div>
          <button 
            className="py-2 px-3 border border-[#f00] rounded-lg "
            onClick={() => removeProductInCart(item)}
            >
            <FaTimes color="#f00" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem