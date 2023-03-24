import React, { createContext, useContext, useReducer } from "react";
import { productReducer } from "./reducers";

const StoreContext = createContext();

// Defining App state 
const initialState = {
    products: [],
    cart: [],
    cartOpen: false,
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);
    return <StoreContext.Provider value={[state, dispatch]} {...props} />;
};

function useStoreContext() {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext, initialState};
