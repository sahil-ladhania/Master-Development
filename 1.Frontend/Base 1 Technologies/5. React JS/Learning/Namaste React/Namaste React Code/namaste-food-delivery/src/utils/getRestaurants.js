import {API_URL} from "@/utils/Constants.js";

const getHomePageData = async () => {
    try {
        const getData = await fetch(API_URL);
        const getRestaurants = await getData.json();
        const myCuisines = getRestaurants?.data?.cards[0]?.card?.card?.imageGridCards?.info;
        const myOnlineRestaurant = getRestaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const myTopRestaurantChains = getRestaurants?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(myCuisines);
        console.log(myOnlineRestaurant);
        console.log(myTopRestaurantChains);
        return { myCuisines, myOnlineRestaurant , myTopRestaurantChains };
    }
    catch (error) {
        console.error("Error Fetching Data : ", error);
    }
}

export default getHomePageData;