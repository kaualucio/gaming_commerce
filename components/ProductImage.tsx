import Image from 'next/image'
import React from 'react'

type ProductImageProps = {
  urlImage: string,
  altImage: string
}

const ProductImage = ({urlImage, altImage}: ProductImageProps) => {
  return (
    <Image src={urlImage} alt=""
        width={500}
        height={500}
        objectFit="cover"
        style={{borderRadius: '12px'}}
        />
  )
}

export default ProductImage