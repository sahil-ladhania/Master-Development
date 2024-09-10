import React, {useEffect, useState} from "react";
import RestaurantContainer from "./RestaurantContainer";
import Filters from "./Filters";
import getRestaurants from "../Utils/getRestaurants";

const Body = () => {
    // State Variables
    const [restaurants, setRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    // Fetching all Restaurants
    useEffect(() => {
        getRestaurants()
            .then((restaurants) => {
                setRestaurants(restaurants);
                setFilteredRestaurants(restaurants);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    // Handler Functions
    const captureSearchInput = (e) => {
        let input = e.target.value;
        setSearchInput(input);
    }

    const searchRestaurants = () => {
        if(!searchInput) {
            setFilteredRestaurants(restaurants);
            return;
        }
        const filteredData = restaurants.filter((restaurant) => {
            return restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase());
        })
        setFilteredRestaurants(filteredData);
    }

    return (
        <>
            <div className="body bg-orange-50 p-8">
                <div className="search-component flex justify-center mb-8">
                    <input onChange={captureSearchInput} value={searchInput} className="search-bar p-2 w-1/2 border border-orange-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500" type="search" placeholder="Search Restaurant" />
                    <button onClick={searchRestaurants} className="search-button bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600">Search</button>
                </div>
                <Filters/>
                <RestaurantContainer searchedRestaurants={filteredRestaurants} />
            </div>
        </>
    )
}

export default Body;
