import React, {useEffect, useState} from "react";
import getRestaurants from "../Utils/getRestaurants";

const Filters = () => {
    // State Variables
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [selectedCuisine, setSelectedCuisine] = useState("all-cuisines");
    const [selectedDeliveryTime, setSelectedDeliveryTime] = useState("any-time");
    const [selectedRating, setSelectedRating] = useState([]);
    const [selectedPopularity, setSelectedPopularity] = useState([]);

    // Getting the Restaurants Data
    useEffect(() => {
        getRestaurants()
            .then((restaurants) => {
                setAllRestaurants(restaurants);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    // Handler Functions
    const filterRestaurantsByCuisine = (e) => {
        console.log(e.target.value);
    }

    const filterRestaurantsByDeliveryTime = (e) => {
        console.log(e.target.value);
    }

    const filterRestaurantsByRating = (e) => {
        console.log(e.target.value);
    }

    const filterRestaurantsByPopularity = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className="filters bg-white p-6 shadow-md rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-4">Filter Restaurants</h2>
            {/* Cuisine Type */}
            <div className="mb-4">
                <h3 className="text-md font-medium mb-2">Cuisine Type</h3>
                <select
                    onChange={filterRestaurantsByCuisine}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option value="all-cuisines">All Cuisines</option>
                    <option value="north-indian">North Indian</option>
                    <option value="chinese">Chinese</option>
                    <option value="biryani">Biryani</option>
                    <option value="kebabs">Kebabs</option>
                    <option value="deserts">Deserts</option>
                    <option value="american">American</option>
                </select>
            </div>
            {/* Rating */}
            <div className="mb-4">
                <h3 className="text-md font-medium mb-2">Rating</h3>
                <div className="flex flex-col space-y-2">
                    <label className="flex items-center">
                        <input onChange={filterRestaurantsByRating} type="checkbox" className="mr-2" /> 4 Stars & Above
                    </label>
                    <label className="flex items-center">
                        <input onChange={filterRestaurantsByRating} type="checkbox" className="mr-2" /> 3 Stars & Above
                    </label>
                    <label className="flex items-center">
                        <input onChange={filterRestaurantsByRating} type="checkbox" className="mr-2" /> 2 Stars & Above
                    </label>
                </div>
            </div>
            {/* Delivery Time */}
            <div className="mb-4">
                <h3 className="text-md font-medium mb-2">Delivery Time</h3>
                <select
                    onChange={filterRestaurantsByDeliveryTime}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option value="any-time">Any Time</option>
                    <option value="30">Within 30 Minutes</option>
                    <option value="45">45-60 Minutes</option>
                    <option value="60">Over 60 Minutes</option>
                </select>
            </div>
            {/* Popularity */}
            <div>
                <h3 className="text-md font-medium mb-2">Popularity</h3>
                <div className="flex flex-col space-y-2">
                    <label className="flex items-center">
                        <input onChange={filterRestaurantsByPopularity} type="checkbox" className="mr-2" /> Top Rated
                    </label>
                    <label className="flex items-center">
                        <input onChange={filterRestaurantsByPopularity} type="checkbox" className="mr-2" /> Most Reviewed
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Filters;