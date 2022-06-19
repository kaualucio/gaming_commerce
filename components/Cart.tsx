import React, { Dispatch, SetStateAction } from 'react'
import { RiShoppingCartFill } from 'react-icons/ri'
import { FaTimes } from 'react-icons/fa'
import CartItem from './CartItem'
import { useCartContext } from '../context/CartContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import getStripe from '../services/stripe'

const Cart = () => {
  const { cartItems, totalQuantities, totalPrice, setOpenCart } = useCartContext()

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const result = await axios.post(`/api/stripe`, {
      cartItems
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if(result.status === 500) return toast.error('Algo deu errado na hora do checkout, tente novamente')

    toast.loading('Você está sendo redirecionado à página de pagamento, espere um momento')

    stripe.redirectToCheckout({ sessionId: result.data.id });

  }

  return (
    <div className="absolute z-20 top-0 bg-black bg-opacity-50 w-full h-full">
      <div className="z-30 w-[400px] h-full bg-white fixed top-0 right-0 p-5 overflow-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-3xl text-slate-900 flex items-center gap-3"><RiShoppingCartFill /> Meu carrinho</h2>
          <button 
            className="text-2xl text-[#f00] p-0"
            onClick={() => setOpenCart(false)}
            >
            <FaTimes />
          </button>
        </div>
        <p className="mb-3 text-lg font-medium text-slate-900">Items totais no carrinho: ({totalQuantities})</p>
        {
          cartItems.length > 0 ? (
            <>
              <div>
              {
                cartItems.map((item: any) => (
                  <CartItem key={item.id} item={item} />
                  ))
              }
            </div>  
            <div className="mt-5">
              <p className="mb-5 text-xl font-bold text-slate-900">Valor total: R${totalPrice.toFixed(2)}</p>
              <button 
                onClick={() => handleCheckout()}
                className="w-full h-16 text-white rounded-lg flex items-center justify-center text-xl font-medium bg-gradient-to-r from-[#FF416C] to-[#FF4B2B]">
                Finalizar compra
              </button>
            </div>
            </>
          ) : (
            <h2 className="text-lg font-medium text-slate-800">Não há nenhum produto no carrinho!</h2>
          )
        }
        
      </div>
    </div>
  )
}

export default Cart