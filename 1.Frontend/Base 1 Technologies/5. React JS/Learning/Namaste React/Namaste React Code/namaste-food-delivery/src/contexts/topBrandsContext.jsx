import {createContext, useReducer} from "react";
import {topBrandsInitialState, topBrandsReducer} from "@/reducers/reducer.jsx";

// Created Top Brands Context
export const TopBrandsContext = createContext();

// Created Top Brands Provider
export const TopBrandsProvider = ({children}) => {

    // Defining Global States
    const [topBrandsState, topBrandsDispatch] = useReducer(topBrandsReducer , topBrandsInitialState);

    return(
        <TopBrandsContext.Provider value={{ topBrandsState, topBrandsDispatch }}>
            {children}
        </TopBrandsContext.Provider>
    )
}