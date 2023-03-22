const { AuthenticationError } = require('apollo-server-express');
const { Product, User } =  require ('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        products: async () => {
            return await Product.find({});
        }, 
        users: async () => {
            return await User.find({});
        },
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
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
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
   },
};

module.exports = resolvers;

// [product: async (parent, { productId }) => {
//     return await Product.findOne({_id: productId });
// }, ]