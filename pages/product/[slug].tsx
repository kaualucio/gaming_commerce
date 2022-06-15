import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import{ AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductImage from '../../components/ProductImage';
import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '../../services';
import { gql, useQuery } from '@apollo/client';
import { useCartContext } from '../../context/CartContext';
import ListProducts from '../../components/ListProducts';
import { getAllProducts, getProductsByCategory, getProductSingle } from '../../services/endpoints';


const Product = ({product}: any) => {
  const [releatedProducts, setReleatedProducts] = useState<any[]>([])
  const {addProductInCart, qty, incQuantity, decQuantity }= useCartContext()

  useEffect(() => {
    client.query({
      variables: {
        category: product[0].node.category.name
      },
      query: getProductsByCategory()
    }).then((data) => {
      setReleatedProducts(data.data.productsConnection.edges)
    })
  }, [product])

  const settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
  };

  return (
    <div className="p-12">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 "> {/*h-screen*/} 
        <div className="col-span-1 p-0">
          <Slider {...settings} className="rounded-lg">
            {
              product[0]?.node?.image.map((image: any, index: number) => (
                <ProductImage key={image.id} urlImage={image.url} altImage={image.id} />
              ))
            }
          </Slider>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <h2 className="text-3xl text-indigo-500 font-bold">{product[0]?.node?.name}</h2>
            <div className="flex items-center gap-1">
              <AiFillStar color="#df2030"/>
              <AiFillStar color="#df2030"/>
              <AiFillStar color="#df2030"/>
              <AiFillStar color="#df2030"/>
              <AiOutlineStar color="#df2030"/>
            </div>
            <div className="my-3">
              <h4 className="font-bold text-indigo-500">Details</h4>
              <p className="text-white">{product[0]?.node?.description}</p>
            </div>
            <div className="">
              <h3 className="mb-5 text-indigo-500 font-bold text-2xl">R${product[0]?.node?.price}</h3>
              <div className="flex items-center gap-2 text-white my-5">
                <h4 className="font-bold text-indigo-500">Quantidade: </h4>
                <div className="flex items-center text-center">
                  <button 
                    className="border w-10 h-10 text-2xl hover:bg-sky-500"
                    onClick={() => decQuantity()}  
                    >-</button>
                  <div className="border border-x-0 w-10 h-10 px-3 py-1 text-2xl">{qty}</div>
                  <button 
                    className="border w-10 h-10 text-2xl hover:bg-sky-500"
                    onClick={() => incQuantity()}
                    >+</button>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <button 
                  className="p-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg font-medium text-lg"
                  onClick={() => addProductInCart(product[0].node, qty)}
                  >Adicionar ao Carrinho</button>
                <button 
                  className="p-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg font-medium text-lg"
                >Comprar</button>
              </div>
            </div>
          </div>
        </div>
      <div className="mt-16">
        <h2 className="font-bold text-3xl mb-5 text-white">Produtos Relacionados</h2>
        {
          releatedProducts.length > 0 && (
            <ListProducts products={releatedProducts}/>
          )
        }
        
      </div>
    </div>
    
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { loading, error, data: { productsConnection: { edges } } }  = await client.query({
    variables: {
      slug: params?.slug
    },
    query: getProductSingle()
  })

  return {
    props: {
      product: edges
    }
  }

}

export const getStaticPaths: GetStaticPaths = async () => {
  const { loading, error, data: { productsConnection: { edges } } }  = await client.query({
    query: getAllProducts()
  })
  return {
    paths: edges.map((product: any) => ({ params: { slug: product.node.slug } })),
    fallback: true
  }
}

export default Product