import React from 'react'
import ProductSingle from './ProductSingle'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import type { NodeInfoProduct } from '../pages'


type ListProductsProps = {
  products: NodeInfoProduct[]
}

const ListProducts = ({products}: ListProductsProps) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 1000,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: products.length >= 4 ? 4 : 2,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: products.length >= 4 ? 4 : products.length,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="">
      <Slider {...settings}>
      {
        products.map((product) => (
          <ProductSingle key={product.node.id} product={product}/>
        ))
      }
      </Slider>

    </div>
  )
}

export default ListProducts