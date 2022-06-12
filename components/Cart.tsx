import React, { Dispatch, SetStateAction } from 'react'
import { RiShoppingCartFill } from 'react-icons/ri'
import { FaTimes } from 'react-icons/fa'
import CartItem from './CartItem'

type CartProps = {
  setOpenCart: Dispatch<SetStateAction<boolean>>,
}

const Cart = ({setOpenCart}: CartProps) => {
  return (
    <div className="absolute z-20 top-0 bg-black bg-opacity-50 w-full h-full">
      <div className="z-30 w-96 h-full bg-white fixed top-0 right-0 p-5 overflow-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-3xl text-slate-900 flex items-center gap-3"><RiShoppingCartFill /> Meu carrinho</h2>
          <button 
            className="text-2xl text-[#f00] p-0"
            onClick={() => setOpenCart(false)}
            >
            <FaTimes />
          </button>
        </div>
        <div className="">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="mt-5">
          <button className="w-full h-16 text-white rounded-lg flex items-center justify-center text-xl font-medium bg-gradient-to-r from-[#FF416C] to-[#FF4B2B]">
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart