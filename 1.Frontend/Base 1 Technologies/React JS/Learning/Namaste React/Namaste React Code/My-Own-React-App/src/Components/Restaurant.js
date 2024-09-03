import React from "react";

const Restaurant = (props) => {
    console.log(props);
    return (
        <>
            <div className="restaurant bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="image">
                    <img className="w-full h-32 object-cover" src={props.restaurantImage} alt="Restaurant" />
                </div>
                <div className="restaurant-details p-4">
                    <h2 className="text-xl font-bold text-orange-700 mb-2">{props.restaurantName}</h2>
                    <p className="text-gray-600">{props.deliveryTime}</p>
                    <p className="text-gray-500">{props.cuisine}</p>
                    <p className="text-gray-500">{props.address}</p>
                    <div className="rating flex items-center mt-2">
                        <span className="text-green-600 font-semibold mr-2">{props.totalStar}</span>
                        <svg className="w-4 h-4 text-green-700 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 15l-5.392 3.24 1.036-6.04L1.5 7.761l6.076-.882L10 2l2.424 4.879 6.076.882-4.144 4.438 1.036 6.04L10 15z"/>
                        </svg>
                        <span className="text-gray-600 ml-2">({props.totalRatings}+ ratings)</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Restaurant;