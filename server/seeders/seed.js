const db = require("../config/connection");
const { User, Product } = require("../models");
const userSeeds = require("./userSeeds.json");
// Real data product seeds
// const productSeeds = require("./productSeeds.json");
// ----- Dev data -----
const { makeProducts } = require("./dev-seeder.js");
// ------

db.once("open", async () => {
    try {
        await Product.deleteMany({});
        await User.deleteMany({});
        // Product seeder function
        productSeeds = makeProducts(10)
        console.log(productSeeds[0])
        console.log(productSeeds[0].images[0])
        console.log(productSeeds[0].styles[0])
        await Product.create(productSeeds);
        await User.create(userSeeds);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log("all done!");
    process.exit(0);
});
