import Head from 'next/head'
import React, { ReactNode, useState } from 'react'
import { useCartContext } from '../context/CartContext'
import Cart from './Cart'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  const { openCart } = useCartContext()

  return (
    <div className={`w-full h-max bg-[#161819] relative z-10`}>
      <Head>
        <title>initGamingShop - Commerce</title>
      </Head>
      <Header />
      <main className="h-full">
        {openCart && <Cart />}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout