import React from "react";

const Filters = () => {
    return (
        <div className="filters bg-white p-6 shadow-md rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-4">Filter Restaurants</h2>

            {/* Cuisine Type */}
            <div className="mb-4">
                <h3 className="text-md font-medium mb-2">Cuisine Type</h3>
                <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option value="">All Cuisines</option>
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
                        <input type="checkbox" className="mr-2" /> 4 Stars & Above
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" /> 3 Stars & Above
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" /> 2 Stars & Above
                    </label>
                </div>
            </div>

            {/* Delivery Time */}
            <div className="mb-4">
                <h3 className="text-md font-medium mb-2">Delivery Time</h3>
                <select className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option value="">Any Time</option>
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
                        <input type="checkbox" className="mr-2" /> Top Rated
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" /> Most Reviewed
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Filters;