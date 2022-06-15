import Head from 'next/head'
import React, { ReactNode, useState } from 'react'
import Cart from './Cart'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  const [openCart, setOpenCart] = useState(false)
  return (
    <div className={`w-full h-max bg-[#161819] relative z-10`}>
      <Head>
        <title>initGamingShop - Commerce</title>
      </Head>
      <Header setOpenCart={setOpenCart} />
      <main className="h-full">
        {openCart && <Cart setOpenCart={setOpenCart} />}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout