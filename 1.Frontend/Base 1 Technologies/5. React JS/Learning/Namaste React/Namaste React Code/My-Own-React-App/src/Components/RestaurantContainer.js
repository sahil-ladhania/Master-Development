import React from "react";
import Restaurant from "./Restaurant";

const RestaurantContainer = (props) => {
    const { searchedRestaurants } = props;

    return (
        <>
            <div className="restaurant-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    searchedRestaurants.length === 0 ?
                        <h1 className="h-full">Loading...</h1>
                        :
                        searchedRestaurants.map((restaurant) => (
                            <Restaurant key={restaurant.info.id} restaurant={restaurant} />
                        ))
                }
            </div>
        </>
    )
}

export default RestaurantContainer;