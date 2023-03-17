const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        product: [Product]
    }

    type Product {
        _id: ID
        name: String
        description: String
        image: String
        notes: String
        stats: [Stats]
    }

    type Stats {
        _id: ID
        size: Int
        price: Float
        reducedPrice: Float
        weight: String
        height: String
        image: String
    }

    type Order {
        _id: ID
        user: [User]
        number: ID
        date: String
        price: String
    }
    
    type Query {
        users: [User]
        products: [Product]
        stats: [Stats]
        order: [Order]
    }
    `;

    module.exports = typeDefs;