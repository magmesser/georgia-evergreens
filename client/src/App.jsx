import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing pages
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
        <ApolloProvider client={client}>
            
        </ApolloProvider>
    );
}

export default App;
