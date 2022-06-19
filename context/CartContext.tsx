import React, { createContext, ReactNode, useContext, useState } from 'react'
import toast from 'react-hot-toast'

type CartContextProps = {
  children: ReactNode
}
const CartContext = createContext<any>(null)

export const CartContextProvider = ({children}: CartContextProps) => {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)
  const [openCart, setOpenCart] = useState(false)

  const addProductInCart = (product: any, quantity: number) => {
    const productExistInCart = cartItems.find(item => item.id === product.id)
    setTotalPrice(prevState => prevState + product.price * quantity)
    setTotalQuantities(prevState => prevState + quantity)
    
    if(productExistInCart) {
      productExistInCart.quantity = quantity
      const updatedCart = cartItems.filter(item => item.id !== product.id)  
      setCartItems([...updatedCart, productExistInCart])
    }else {
      setCartItems(prevState => [...prevState, { ...product, quantity: quantity }])
    }

    return toast.success(`${quantity}x do produto ${product.name} foi adicionado ao carrinho!`)
  }
  
  const removeProductInCart = (product: any) => {
    const productExistInCart = cartItems.find(item => item.id === product.id)
    setTotalPrice(prevState => prevState - productExistInCart.price * productExistInCart.quantity)
    setTotalQuantities(prevState => prevState - productExistInCart.quantity)
    const updatedCart = cartItems.filter(item => item.id !== productExistInCart.id)  
    setCartItems(updatedCart)
  }

  const toggleCartItemsQuantity = (product: any, type: string) => {
    const productExistInCart = cartItems.find(item => item.id === product.id)
    
    const updatedCart = cartItems.filter(item => item.id !== productExistInCart.id)  
    if(type === 'inc') {
      productExistInCart.quantity += 1
      setTotalPrice(prevState => prevState + productExistInCart.price)
      setTotalQuantities(prevState => prevState + 1)
    }else if(type === 'dec') {
      if(productExistInCart.quantity <= 1) {
        setCartItems(updatedCart)
      }else {
        productExistInCart.quantity -= 1
      }
      setTotalPrice(prevState => prevState - productExistInCart.price)
      setTotalQuantities(prevState => prevState - 1)
    }

    
  }

  const incQuantity = () => {
    setQty(prevState => prevState + 1)
  }

  const decQuantity = () => {
    setQty(prevState => {
      if(prevState < 2) return 1

      return prevState - 1
    })
  }


  return (
    <CartContext.Provider value={{ 
      cartItems, 
      qty, 
      addProductInCart, 
      removeProductInCart,
      totalPrice, 
      incQuantity,
      decQuantity,
      totalQuantities,
      toggleCartItemsQuantity,
      setOpenCart,
      openCart
      }}>
      {children}
    </CartContext.Provider>
  )
}

 
export const useCartContext = () => useContext(CartContext);