import React from 'react'
import ProductSingle from './ProductSingle'

type FoundProductsProps = {
  foundProducts: any[]
}


const FoundProducts = ({ foundProducts }: FoundProductsProps) => {
  console.log(foundProducts)
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-5">Resultados encontrados: {foundProducts.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {
          foundProducts.map((product: any) => (
            <ProductSingle key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export default FoundProducts