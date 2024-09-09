import React, {useEffect, useState} from "react";
import Restaurant from "./Restaurant";

const RestaurantContainer = () => {
    // State Variables For Storing Restaurants
    const [restaurants, setRestaurants] = useState([]);

    // Fetching Restaurants
    useEffect(() => {
        const getRestaurants = async () => {
            try {
                const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.637276854395076&lng=85.10403949767353&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
                const getData = await fetch(API_URL);
                const restaurants = await getData.json();
                const myRestaurants = restaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                setRestaurants(myRestaurants);
            }
            catch (error) {
                console.log("Error Getting the Restaurants : " + error);
            }
        }
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