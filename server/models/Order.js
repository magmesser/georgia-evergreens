const { Schema, model } = require("mongoose");

// Order model 
const orderSchema = new Schema(
    {
        orderNumber: {
            type: Number,
            unique: true,
            required: true
        },
        orderDate: {
            type: Date,
            required: true
        },
        price: {
            type: Number, 
            required: true
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }
        ],
        user: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
    }
);

// Example orderSeeds.json data 
// {
//     "orderNumber": 1,
//     "orderDate": "03/16/2023",
//     "price": 10.00,
//     "prodcuts": "Evergreen",
//     "user": "Maggie"
// }

const Order = model('Order', orderSchema);

module.exports = Order;