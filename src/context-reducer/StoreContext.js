import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const addBasket = (product) => {
        const updateBasket = state.products;
        updateBasket.push(product);
        updatePrice(updateBasket);
        dispatch({
            type: "add",
            payload: updateBasket,
        })
    }

    const removeBasket = (product) => {
        const updatedBasket = state.products.filter(cur => cur.name !== product.name);
        updatePrice(updatedBasket);
        dispatch({
            type: "remove",
            payload: updatedBasket,
        })
    }

    const updatePrice = (products) => {
        let total = 0;
        products.forEach(product => {
            total += product.price;
        });
        dispatch({
            type: "update price",
            payload: total
        })
    }
    const value = {
        total: state.total,
        products: state.products,
        addBasket,
        removeBasket,
    }
    return <StoreContext.Provider value={value}>
        {children}
    </StoreContext.Provider>
} 