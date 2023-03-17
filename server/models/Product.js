const { Schema, model } = require("mongoose");

// Stats model - sub-document
const detailsSchema = new Schema({
    // Small, medium or large sizing
    size: {
        type: String,
    },
    // Full price of product
    price: {
        type: Number,
        required: true,
    },
    // Sale price of product
    reducedPrice: {
        type: Number,
    },
    // Weight of product
    weight: {
        type: String,
    },
    // Height of product
    height: {
        type: String,
    },
    // Image of product
    image: {
        type: String,
    },
});
// Product Model - parent document
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    // Can include product details ie. mature sizing
    description: {
        type: String,
        require: true,
    },
    // Main image for product
    image: {
        type: String,
        required: true,
    },
    // Can include things like care instructions and will render as HTML
    notes: {
        type: String,
    },
    // References the statsSchema sub-document
    details: [detailsSchema],
});



const product = model("product", productSchema);

module.exports = product;
