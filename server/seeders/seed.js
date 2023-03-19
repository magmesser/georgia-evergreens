const db = require("../config/connection");
const { User, Product } = require("../models");
const userSeeds = require("./userSeeds.json");
// Real data product seeds
// const productSeeds = require("./productSeeds.json");
// ----- Dev data -----
const { makeProducts } = require("./dev-seeder.js");
const product = require("../models/Product");
// ------

db.once("open", async () => {
    try {
        await Product.deleteMany({});
        await User.deleteMany({});

        productSeeds = makeProducts(10)
        console.log(productSeeds)
        await Product.create(productSeeds);
        await User.create(userSeeds);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log("all done!");
    process.exit(0);
});
