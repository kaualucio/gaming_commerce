import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { NodeInfoProduct } from '../pages'

type ProductSingleProps = {
  product: NodeInfoProduct
}

const ProductSingle = ({product}: ProductSingleProps) => {
  return (
    <Link href={`/product/${product.node.slug}`}>
    <div className="mx-2 p-3 text-center cursor-pointer rounded-lg bg-[#1f1f21]">
      <Image src={product.node.image[0].url} alt=""
        objectFit="cover"
        width={250}
        height={250}
        style={{borderRadius: '12px',}}
      />
      <div className="my-2 text-center text-white w-full">
        <h2 className="text-lg font-medium">{product.node.name.slice(0, 20)}...</h2>
        <p className="text-xl font-bold ">R${product.node.price}</p>
      </div>
    </div>
    </Link>
  )
}

export default ProductSingle