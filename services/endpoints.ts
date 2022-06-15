import { gql } from '@apollo/client';


export const getAllProducts = () => {
  return gql`
  query GetAllProducts {
    productsConnection {
      edges {
        node {
          id
          name
          slug
          price
          image {
            url
          }
          category {
            ... on Category {
              name
            }
          }
        }
      }
    }
  }

`
}

export const searchForProducts = () => {
  return gql`
    query searchForProducts($searchTerm: String) {
      productsConnection(where: {name_contains: $searchTerm}) {
        edges {
          node {
            id
            name
            slug
            price
            image {
              url
            }
            category {
              ... on Category {
                name
              }
            }
          }
        }
      }
    }
  `
}

export const getProductsByCategory = () => {
  return gql`
    query GetProductsByCategory($category: String) {
      productsConnection(where: { category: { name: $category } }) {
        edges {
          node {
            name
            slug
            price
            image {
              url
            }
            category {
              ... on Category {
                name
              }
            }
          }
        }
      }
    }
  `
}

export const getProductSingle = () => {
  return gql`
    query GetProductSingle($slug:String) {
      productsConnection(where: {slug: $slug }) {
        edges {
          node {
            id
            name
            slug
            description
            price
            image {
              id
              url
            }
            category {
              ... on Category {
                name
              }
            }
          }
        }
      }
    }
  `
}