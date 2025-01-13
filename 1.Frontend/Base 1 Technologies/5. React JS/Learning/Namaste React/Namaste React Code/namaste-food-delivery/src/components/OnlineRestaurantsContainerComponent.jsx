import RestaurantCardComponent from "@/components/RestaurantCardComponent.jsx";
import {useContext} from "react";
import {OnlineRestaurantContext} from "@/contexts/onlineRestaurantContext.jsx";

function OnlineRestaurantsContainerComponent() {
    const {onlineRestaurantsState} = useContext(OnlineRestaurantContext);
    console.log(onlineRestaurantsState);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <RestaurantCardComponent/>
            {
                onlineRestaurantsState.onlineRestaurants.length > 0 ?
                    onlineRestaurantsState.onlineRestaurants.map((restaurant) => (
                        <RestaurantCardComponent key={restaurant.info.id} restaurant={restaurant} />
                    ))
                    :
                    <h1>Loading...</h1>
            }
        </div>
    );
}

export default OnlineRestaurantsContainerComponent;