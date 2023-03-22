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

// [product: async (parent, { productId }) => {
//     return await Product.findOne({_id: productId });
// }, ]