import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import { StoreProvider } from "./utils/state";

// Importing page

import Products from "./pages/Products";
import Header from "./components/Header";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import OrderHistory from "./components/OrderHistory";


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
    uri: "http://localhost:3001/graphql",
    // credentials: 'same-origin'
    // uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("id_token");
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        },
    };
});
console.log(authLink)

const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    // link: httpLink,
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <main className="flex flex-col min-h-screen">
                <Router>
                    <StoreProvider>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<Products />} />
                            {/* <Route path="/productdetails/:id" element={<SingleProduct />}/> */}
                            <Route path="/productdetails/:id" element={<OrderHistory />}/>
                            <Route path="/contact" element={<ContactForm />} />
                            <Route path="/profile" element={<Profile />} />
                            {/* <Route path="/cart" element={<MyCart />} /> */}
                        </Routes>
                        <Footer />
                    </StoreProvider>
                </Router>
            </main>
        </ApolloProvider>
    );
}

export default App;
