const { Product, User } =  require ('../models');

const resolvers = {
    Query: {
        products: async () => {
            return await Product.find({});
        }, 
        product: async (parent, { productId }) => {
            return await Product.findOne({_id: productId });
        }, 
        users: async () => {
            return await User.find({});
        }
    }
};

module.exports = resolvers;