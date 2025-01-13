import {createContext, useReducer} from "react";
import {onlineRestaurantsInitialState, onlineRestaurantsReducer} from "@/reducers/reducer.jsx";

// Created Online Restaurants Context
export const OnlineRestaurantContext = createContext();

// Created Online Restaurants Provider
export const OnlineRestaurantProvider = ({children}) => {

    // Defining Global States
    const [onlineRestaurantsState, onlineRestaurantsDispatch] = useReducer(onlineRestaurantsReducer , onlineRestaurantsInitialState);

    return (
        <OnlineRestaurantContext.Provider value={{ onlineRestaurantsState, onlineRestaurantsDispatch }}>
            {children}
        </OnlineRestaurantContext.Provider>
    )
}