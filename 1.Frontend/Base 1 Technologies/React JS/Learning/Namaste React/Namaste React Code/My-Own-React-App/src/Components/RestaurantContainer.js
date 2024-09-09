import React, {useEffect, useState} from "react";
import Restaurant from "./Restaurant";
import getRestaurants from "../Utils/getRestaurants";

const RestaurantContainer = () => {
    // State Variables For Storing Restaurants
    const [restaurants, setRestaurants] = useState([]);

    // Fetching Restaurants
    useEffect(() => {
        getRestaurants()
            .then((restaurants) => {
                setRestaurants(restaurants);
            })
            .catch((error) => {
                console.log(error);
            })
        getRestaurants();
    }, []);

    return (
        <>
            <div className="restaurant-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    restaurants.length === 0 ?
                        <h1 className="h-full">Loading...</h1>
                        :
                        restaurants.map((restaurant) => (
                            <Restaurant key={restaurant.info.id} restaurant={restaurant} />
                        ))
                }
            </div>
        </>
    )
}

export default RestaurantContainer;