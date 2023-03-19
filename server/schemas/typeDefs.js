const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Amount {
        value: Float
        unit: String
    }

    type Image {
        original: String
        thumbnail: String
    }

    type Style {
        name: String
        price: Float
        reducedPrice: Float
        weight: Amount
        height: Amount
        image: String
    }

    type Product {
        _id: ID
        name: String
        description: String
        images: [Image]
        notes: String
        styles: [Style]
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
        styles: [Style]
        orders: [Order]
    }
`;

module.exports = typeDefs;
