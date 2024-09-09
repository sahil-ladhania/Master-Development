import React from "react";
import RestaurantContainer from "./RestaurantContainer";
import Filters from "./Filters";

const Body = () => {
    return (
        <>
            <div className="body bg-orange-50 p-8">
                <div className="search-component flex justify-center mb-8">
                    <input className="search-bar p-2 w-1/2 border border-orange-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500" type="search" placeholder="Search Restaurant" />
                    <button className="search-button bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600">Search</button>
                </div>
                <Filters/>
                <RestaurantContainer />
            </div>
        </>
    )
}

export default Body;
