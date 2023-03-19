const { Schema, model } = require("mongoose");

// Image model - sub-document
const imageSchema = new Schema({
    original: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
    },
});

const amountSchema = new Schema({
    value: {
        type: Number,
        required: true,
    },
    unit: {
        type: String,
    },
});

// Stats model - sub-document
const stylesSchema = new Schema({
    name: {
        type: String
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
    weight: amountSchema,

    // Height of product
    height: amountSchema,

    // Image of product
    images: [imageSchema],
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
    images: [imageSchema],
    // Can include things like care instructions and will render as HTML
    notes: {
        type: String,
    },
    // References the statsSchema sub-document
    styles: [stylesSchema],
});

const product = model("product", productSchema);

module.exports = product;
