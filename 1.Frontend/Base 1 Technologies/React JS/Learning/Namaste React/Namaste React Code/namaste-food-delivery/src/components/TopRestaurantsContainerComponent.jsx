import RestaurantCardComponent from "@/components/RestaurantCardComponent.jsx";

function TopRestaurantsContainerComponent() {
    return (
        <div className="mt-8">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Top restaurant chains in Patna</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <RestaurantCardComponent />
                <RestaurantCardComponent />
                <RestaurantCardComponent />
                <RestaurantCardComponent />
                <RestaurantCardComponent />
                <RestaurantCardComponent />
                <RestaurantCardComponent />
                <RestaurantCardComponent />
            </div>
        </div>
    );
}

export default TopRestaurantsContainerComponent;