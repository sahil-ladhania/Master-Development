import {createContext, useContext, useReducer} from "react";
import { faker } from '@faker-js/faker';
import {cartReducer, productReducer} from "./Reducer.jsx";

export const CartContext = createContext();

function Context({ children }) {
    // Generating Random Products
    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5])
    }));
    // Creating Cart Reducer
    const [state, dispatch] = useReducer(cartReducer , {
        products: products,
        cart : []
    });
    // Creating Filters Reducer
    const [productState, productDispatch] = useReducer(productReducer , {
        byStock : false,
        byFastDelivery: false,
        searchQuery : "",
    })
    return (
        <CartContext.Provider value={{ state , dispatch , productState , productDispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export default Context;

export const CartState = () => {
    return useContext(CartContext);
}