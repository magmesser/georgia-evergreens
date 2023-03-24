const { AuthenticationError } = require("apollo-server-express");
const { Product, User, Order } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        // Find all users
        getUsers: async () => {
            return await User.find({});
        },
        // Finding all products
        getProducts: async () => {
            return await Product.find({});
        },
        // Finding a single product
        getProduct: async (parent, args, context, info) => {
            return await Product.findOne({ _id: args._id });
        },
        // For searching for a product by it's name
        getProductsWithName: async (parent, args, context) => {
            return (await Product.find({})).filter((p) =>
                p.name.toLowerCase().includes(args.name.toLowerCase())
            );
        },
        getOrders: async () => {
          return (await Order.find()).map((o) => {
            return {
              ...o,
              date: new Date.parse(o.date)
            } 
          })
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError("You need to be logged in!");
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError(
                    "No user found with this email address"
                );
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(user);

            return { token, user };
        },
    },
};

module.exports = resolvers;
