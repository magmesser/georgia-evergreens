import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing pages
import Header from "./components/Header"
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";


const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
});

function App() {
    // const [count, setCount] = useState(0)

    return (
      <div> 
        <ApolloProvider client={client}>

            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/products" element={<Products />} /> */}
                    <Route path="/contact" element={<ContactForm />} />
                    {/* <Route path="/profile" element={<Profile />} /> */}
                    {/* <Route path="/cart" element={<Cart />} /> */}
                </Routes>
                <Footer />
            </Router>
        </ApolloProvider>
    </div> 
    );
}

export default App;
