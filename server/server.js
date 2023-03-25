const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const http = require("http");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
}

app.use(express.static(path.join(__dirname, "../client/dist/")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
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

// Stripe payment router
// app.get("/", (req, res) => {
//   const path = resolve(process.env.STATIC_DIR + "/index.html");
//   res.sendFile(path);
// });

// app.get("/config", (req, res) => {
//   res.send({
//     publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
//   });
// });

// app.post("/create-payment-intent", async (req, res) => {

//   try {
// paymentIntent is the object that contains the payment information
//   const paymentIntent = await stripe.paymentIntents.create({
//     currency: 'usd',
//     amount: 1099,
//     automatic_payment_methods: {
//       enable: true,
//     },
//   });

//   res.send({ clientSecret: paymentIntent.client_secret });
// } catch (e) {
// Return a 400 error response if the call fails
//     return res.status(400).send({
//       error: {
//         massage: e.message,
//       },
//     });
//   }
// });

// app.listen(5252, () =>
//   console.log(`Node server listening at http://localhost:5252`)
// );
