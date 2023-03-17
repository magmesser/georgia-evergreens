const { Product, User } =  require ('../models');

const resolvers = {
    Query: {
        products: async () => {
            return await Product.find({});
        }, 
        users: async () => {
            return await User.find({});
        }
    }
};

module.exports = resolvers;