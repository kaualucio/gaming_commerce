import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_URI,
  cache: new InMemoryCache(),
  headers: {
    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_AUTHORIZATION}`
  }
})