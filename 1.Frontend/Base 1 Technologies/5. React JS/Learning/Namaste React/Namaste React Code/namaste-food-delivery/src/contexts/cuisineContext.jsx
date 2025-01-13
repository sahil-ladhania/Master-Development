import {createContext, useReducer} from "react";
import {cuisineInitialState, cuisineReducer} from "@/reducers/reducer.jsx";

// Created Cuisine Context
export const CuisineContext = createContext("No Cuisines !!!");

// Created Cuisine Provider
export const CuisineProvider = ({ children }) => {

    // Defining Global States
    const [cuisineState, cuisineDispatch] = useReducer(cuisineReducer , cuisineInitialState);

    return(
        <CuisineContext.Provider value={{ cuisineState , cuisineDispatch }}>
            {children}
        </CuisineContext.Provider>
    )
}