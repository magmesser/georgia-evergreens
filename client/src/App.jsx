import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing pages
import ContactForm from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
});

function App() {
    // const [count, setCount] = useState(0)

    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="App">
                    <Home />
                    {/* <header className="App-header"> */}
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    {/* <div className='py-6'>
          <ContactForm />
        </div>
      </header> */}

                    {/* Footer component */}
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
