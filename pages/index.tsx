import type { GetStaticProps } from 'next'
import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import FoundProducts from '../components/FoundProducts'
import ListProducts from '../components/ListProducts'
import SearchSection from '../components/SearchSection'
import { client } from '../services'
import { getAllProducts, searchForProducts } from '../services/endpoints'

export type Product = {
  id: string,
  name: string,
  slug: string,
  price: number,
  image: any[],
  category: Record<string, string>,
  description?: string
}

export type  NodeInfoProduct = {
  node: Product
}

type HomePageProps = {
  productsList: NodeInfoProduct[]
}

const categorys = ["PC", "Periféricos", "Cadeiras"]
const Home = ({productsList}: HomePageProps) => {
  const [foundProducts, setFoundProducts] = useState<any[]>([])
  const productsCategoryPC = productsList.filter((product: any) => product.node.category.name === categorys[0])
  const productsCategoryPeripherals = productsList.filter((product: any) => product.node.category.name === categorys[1])
  const productsCategoryChairs = productsList.filter((product: any) => product.node.category.name === categorys[2])
  
  console.log(productsCategoryChairs)

  const handleSearchProduct = async (term: string, e: FormEvent) => {
    e.preventDefault()
    try {
      if(term === '') {
        setFoundProducts([])
        return toast.error('Campos vazios não são permitidos')
      }

      const { loading, error, data } = await client.query({
        variables: {
          searchTerm: term
        },
        query: searchForProducts()
      }) 

      if(data.productsConnection.edges.length === 0) {
        return alert('Nenhum resultado encontrado!')
      }

      return setFoundProducts(data.productsConnection.edges)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full p-5 md:px-7 lg:px-10">
      <SearchSection handleSearchProduct={handleSearchProduct} />
      <div className="p-5 text-white">
        {foundProducts.length === 0 ? (
         <>
           <div className="mb-7">
              <h2 className="font-bold text-3xl mb-5">{categorys[0]}&apos;s Gamer</h2>
              <ListProducts products={productsCategoryPC}/>
            </div>

            <div className="mb-7">
              <h2 className="font-bold text-3xl mb-5">{categorys[1]}&apos;s Gamer</h2>
              <ListProducts products={productsCategoryPeripherals}/>
            </div>

            <div className="mb-7">
              <h2 className="font-bold text-3xl mb-5">{categorys[2]}&apos;s Gamer</h2>
              <ListProducts products={productsCategoryChairs}/>
            </div>
         </>
        )
          : (
            <FoundProducts foundProducts={foundProducts} />
          )
        }
        
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const { loading, error, data }  = await client.query({
    query: getAllProducts()
  })

  console.log(data.productsConnection.edges)
  return {
    props: {
      productsList: data.productsConnection.edges
    }
  }

}

export default Home
