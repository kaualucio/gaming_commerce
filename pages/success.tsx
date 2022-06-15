import Link from 'next/link'
import React from 'react'

const Success = () => {
  return (
    <div className="h-screen flex justify-center p-20">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-3">Obrigado por comprar em nossa loja, esperamos ver você por aqui mais vezes!</h1>
        <Link href="/">
          <a className="text-indigo-500 text-md">
            Voltar às compras
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Success