import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
query getProducts {
  products {
      _id
      name
      images{
          original
          thumbnail
      }
      description
      notes
      styles {
          name
          price
          reducedPrice
          weight {
            value
            unit
          }
          height {
            value
            unit
          }
      }
  }
}
`;

export const QUERY_SINGLE_PRODUCT = gql`
    query GetProduct($id: ID!) {
        getProduct(_id: $id) {
            _id
            name
            images{
                original
                thumbnail
            }
            description
            notes
            styles {
                name
                price
                reducedPrice
                weight {
                  value
                  unit
                }
                height { 
                  value 
                  unit
                }
            }
        }
    }
    `;

    export const QUERY_USER = gql`
    query user($username: String!) {
        users(username: $username) {
          _id
          username
          email
        }
      }
    `;

    export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;