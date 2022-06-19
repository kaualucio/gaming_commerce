import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import { RiShoppingCartLine, RiShoppingCartFill } from 'react-icons/ri'
import { useCartContext } from '../context/CartContext'

const Header = () => {
  const {cartItems, setOpenCart }= useCartContext()
  return (
    <div className="w-full py-3 px-5 md:px-7 lg:px-10 mb-5">
      <div className="flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl text-white font-medium">initGamingShop</a>
        </Link>
        <button 
          type="button" 
          className="relative text-white"
          onClick={() => setOpenCart(true)} 
          >
          {cartItems.length > 0 
            ? <RiShoppingCartFill fontSize={20} /> 
            : <RiShoppingCartLine fontSize={20} />}
         
          <span className="flex items-center text-sm justify-center w-3.5 h-3.5 rounded-full bg-[#f00] absolute top-[-5px] right-[-5px]">{cartItems.length}</span>
        </button>
      </div>
    </div>
  )
}

export default Header