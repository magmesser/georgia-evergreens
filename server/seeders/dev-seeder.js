const PRODUCT_NAMES = [
    "Leyland Cypress",
    "Green Giant Arborvitae",
    "Emerald Green Arborvitae",
    "Oak Leaf Holly",
    "Nellie Steven's Holly",
];
const IMAGES = ["./src/assets/imgs/dev/emerald5.png", "./src/assets/imgs/dev/giants15.png"];
const THUMBNAILS = ["./src/assets/imgs/dev/em.png"];
const DESCRIPTIONS = [
    "One of the fastest-growing options for fantastic coverage. Because of its 50-foot mature height and quick growth rate, it is an ideal choice for those wanting more immediate coverage. It has feathery-like soft foliage and will grow wonderfully dense and tall. Not only is this Cypress drought tolerant, but it is also tolerant to salt air and polluted areas. ",
    "Resistant to disease and fungus, but it is also resistant to deer, making it the ideal screen for rural homes. And with its rich green foliage, whether its pruned, topped, or left alone, will grow into a beautiful and dense privacy barrier or divider.",
    "A beautifully bright, lush green evergreen, perfect for smaller gardens or narrow areas. At maturity it will reach only around 12 to 15 feet high, and around 3 to 4 feet wide, giving it a distinctive columnar shape. Whether you are looking to hedge, accent, or create a foundation, this low-maintenance, elegant tree is a perfect choice.",
    "Low maintenance, rich green evergreen shrub. And with its natural pyramidal form and mat thorny leaves, it makes for a beautiful and formal hedge. It is adaptable to most soil types, growing around 2 feet per year, developing into a magnificent privacy screen.",
];
const AMOUNT_UNITS = ["lbs", "cm", "ft", "kg"];
const STYLE_NAMES = ["small", "medium", "large"];

function randFloat(high, low = 0) {
    let f =  Math.random() * (high - low) + low;
    return Number(f.toFixed(2))
}

function randPrice(high = 1000, low = 100) {
    return randInt(high, (low = low)) - 0.01;
}

function randInt(high = 1, low = 0) {
    return Math.floor(randFloat(high, low));
}

function randomChoice(array) {
    if (array.length == 1) {
        return array[0]
    }
    return array[randInt(array.length)];
}

function newImage() {
    return {
        original: randomChoice(IMAGES),
        thumbnail: randomChoice(THUMBNAILS),
    };
}

function makeMultiple(num, func) {
    let ims = [];
    for (let i = 0; i < num; i++) {
        ims.push(func());
    }
    return ims;
}

function newAmount() {
    return {
        value: randFloat(100),
        unit: randomChoice(AMOUNT_UNITS),
    };
}

function newStyle(name, nImages = 1) {
    return {
        name: name,
        price: randPrice(),
        reducedPrice: randPrice(100), // optional
        weight: newAmount(),
        height: newAmount(),
        images: makeMultiple(nImages, newImage),
    };
}

function makeProduct(nImages = 1, notes = "") {
    return {
        name: randomChoice(PRODUCT_NAMES),
        description: randomChoice(DESCRIPTIONS),
        images: makeMultiple(nImages, newImage),
        notes: notes,
        styles: STYLE_NAMES.map((n) => newStyle(n)),
    };
}

function makeProducts(n) {
    return makeMultiple(n, makeProduct);
}

module.exports = { makeProducts };
