const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const path = require("path");
const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,

});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
// }

app.use(express.static(path.join(__dirname, "../client/dist/")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// / Stripe payment route
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {

  try {
    // paymentIntent is the object that contains the payment information
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'usd',
      amount: 1099,
      automatic_payment_methods: {
        enable: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    // return a 400 error response if the call fails
    return res.status(400).send({
      error: {
        massage: e.message,
      },
    });
  }
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  console.log(`Starting server on port ${PORT}...`);
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer();



// STRIPE l.p round 2 from stripe docs
// This is your test secret API key.
// const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);

// const YOUR_DOMAIN = 'https://georgia-evergreens.herokuapp.com/” || ‘https://localhost:3001’;';


// app.get("/config", (req, res) => {
//   res.send({
//     publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
//   });


// app.post('/create-payment-intent', async (req, res) => {});


//  Stripe l.p. 

// const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
// const bodyParser = require("body-parser")
// const cors = require("cors")