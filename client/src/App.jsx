import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing pages
import Header from "./components/Header"
import ContactForm from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";


const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
});

function App() {

    return (
      <div> 
        <ApolloProvider client={client}>

            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/products" element={<Products />} /> */}
                    {/* <Route path="/contacts" element={<ContactForm />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/cart" element={<Cart />} /> */}
                </Routes>
                <Footer />
            </Router>

        </ApolloProvider>
    </div> 
    );
}

export default App;
