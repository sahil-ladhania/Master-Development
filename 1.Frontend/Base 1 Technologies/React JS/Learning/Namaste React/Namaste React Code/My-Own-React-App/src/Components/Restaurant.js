import React from "react";

const Restaurant = (props) => {
    // Getting Values From Props
    const restaurantName = props?.restaurant?.info?.name;
    const avgRating = props?.restaurant?.info?.avgRating;
    const locality = props?.restaurant?.info?.locality;
    const cuisine = props?.restaurant?.info?.cuisines.join(", ");
    const deliveryTime = props?.restaurant?.info?.sla?.deliveryTime;
    const totalRatings = props?.restaurant?.info?.totalRatingsString;
    return (
        <>
            <div className="restaurant bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="image">
                    <img className="w-full h-32 object-cover" src="https://imgs.search.brave.com/J_ARjs-AIe3XEzQx1mYOLG5xHQbPd4LUq7V_iz2g88w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/NzA0MTE3L3Bob3Rv/L3Jlc3RhdXJhbnQt/cGxhdGVzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1NaEZk/Tl9xVmd6b0hvdi1r/Z0Z4MHFXU1cwblpo/dDRsWlYxemluQzNF/YTQ0PQ" alt="Restaurant" />
                </div>
                <div className="restaurant-details p-4 flex flex-col justify-between">
                    <h2 className="text-xl font-bold text-orange-700 mb-2">{restaurantName}</h2>
                    <p className="text-gray-600">{deliveryTime} mins</p>
                    <p className="text-black-500">{cuisine}</p>
                    <p className="text-gray-600">{locality}</p>
                    <div className="rating flex items-center mt-2">
                        <span className="text-green-600 font-semibold mr-2">{avgRating}</span>
                        <svg className="w-4 h-4 text-green-700 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 15l-5.392 3.24 1.036-6.04L1.5 7.761l6.076-.882L10 2l2.424 4.879 6.076.882-4.144 4.438 1.036 6.04L10 15z"/>
                        </svg>
                        <span className="text-gray-600 ml-2">({totalRatings} ratings)</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Restaurant;