import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing pages
// import ContactForm from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Products from "./pages/Products";

// stripe elements import statements here (see above)

import Payment from "./pages/Payment";
import Completion from "./pages/Completion";



const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
});

function App() {
    // const [count, setCount] = useState(0)

    // stripe options here (see above)



    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="App">
                    <Home />
                    {/* <Products /> */}
                    {/* <header className="App-header"> */}
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    {/* <div className='py-6'>
          <ContactForm />
        </div>
      </header> */}

                    {/* Footer component */}
                    {/* Stripes */}
                    <main>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Payment />} />
                                <Route path="/completion" element={<Completion />} />
                            </Routes>
                        </BrowserRouter>
                    </main>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
