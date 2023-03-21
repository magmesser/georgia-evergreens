// for ref: week 21-MERN 28-Stu_Mini-Project

import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!) {
    addUser(username: $username) {
      _id
      username
      email
      password
    }
  }
`;