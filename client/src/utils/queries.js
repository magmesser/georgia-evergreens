import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
    query getProducts {
        products {
            _id
            name
            image{
                original
                thumbnail
            }
            description
            notes
            styles {
                name
                price
                reducedPrice
                weight
                height
            }
        }
    }
`;

export const QUERY_SINGLE_PRODUCT = gql`
    query getSingleProduct($productId: ID!) {
        product(productId: $productId) {
            _id
            name
            image{
                original
                thumbnail
            }
            description
            notes
            styles {
                name
                price
                reducedPrice
                weight
                height
            }
        }
    }
    `;

    export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
          _id
          username
          email
        }
      }
    `;