// for ref: week 21-MERN 28-Stu_Mini-Project

import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
        _id
        username
        email
        password
    }
  }
`;