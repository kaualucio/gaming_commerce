import { Toaster } from 'react-hot-toast';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ApolloProvider } from '@apollo/client'
import { client } from '../services'
import { CartContextProvider } from '../context/CartContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <CartContextProvider>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
      </ApolloProvider>
  )
}

export default MyApp
