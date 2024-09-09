
const getRestaurants = async () => {
    try {
        const API_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.637276854395076&lng=85.10403949767353&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const getData = await fetch(API_URL);
        const restaurants = await getData.json();
        const myRestaurants = restaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        return myRestaurants;
    }
    catch (error) {
        console.log("Error Getting the Restaurants : " + error);
    }
}

export default getRestaurants;