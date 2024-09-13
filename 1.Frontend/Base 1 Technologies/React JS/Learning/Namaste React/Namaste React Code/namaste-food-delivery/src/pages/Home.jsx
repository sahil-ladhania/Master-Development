import BodyComponent from "@/components/BodyComponent.jsx";
import {useContext, useEffect} from "react";
import getHomePageData from "@/utils/getRestaurants.js";
import ButtonContainerComponent from "@/components/ButtonContainerComponent.jsx";
import OnlineRestaurantsContainerComponent from "@/components/OnlineRestaurantsContainerComponent.jsx";
import {CuisineContext} from "@/contexts/cuisineContext.jsx";
import {TopBrandsContext} from "@/contexts/topBrandsContext.jsx";
import {OnlineRestaurantContext} from "@/contexts/onlineRestaurantContext.jsx";

function Home() {
    // Getting Cuisines State
    const {cuisineState , cuisineDispatch} = useContext(CuisineContext);
    console.log(cuisineState);
    // Getting Top Brands State
    const {topBrandsState, topBrandsDispatch} = useContext(TopBrandsContext);
    console.log(topBrandsState);
    // Getting Online Restaurants State
    const {onlineRestaurantsState, onlineRestaurantsDispatch} = useContext(OnlineRestaurantContext);
    console.log(onlineRestaurantsState);

    // Getting Data For Homepage
    useEffect(() => {
        const fetchData = async () => {
            try {
                cuisineDispatch({
                    type: 'FETCH_LOADING'
                })
                topBrandsDispatch({
                    type: 'FETCH_LOADING'
                })
                onlineRestaurantsDispatch({
                    type: 'FETCH_LOADING'
                })
                const data = await getHomePageData();
                console.log(data);
                cuisineDispatch({
                    type: 'FETCH_SUCCESS',
                    payload: data.myCuisines
                })
                topBrandsDispatch({
                    type: 'FETCH_SUCCESS',
                    payload: data.myTopRestaurantChains
                })
                onlineRestaurantsDispatch({
                    type: 'FETCH_SUCCESS',
                    payload: data.myOnlineRestaurant
                })
            }
            catch (error) {
                cuisineDispatch({
                    type: 'FETCH_ERROR',
                    payload: error.message
                })
                topBrandsDispatch({
                    type: 'FETCH_ERROR',
                    payload: error.message
                })
                onlineRestaurantsDispatch({
                    type: 'FETCH_ERROR',
                    payload: error.message
                })
            }
        }
        fetchData()
            .catch((error) => {
                console.error('Error in fetchData : ', error);
            })
    }, [cuisineDispatch , topBrandsDispatch, onlineRestaurantsDispatch]);

    return (
        <>
            <div className="w-full min-w-[320px] max-w-[1200px] mx-auto px-4 py-8">
                <BodyComponent/>
                <h1 className="text-3xl font-semibold text-gray-800 mb-14">
                    Restaurants with online food delivery in Patna
                </h1>
                {/* Filters Section */}
                <ButtonContainerComponent/>
                {/* Online Restaurants Location */}
                <OnlineRestaurantsContainerComponent/>
            </div>
        </>
    );
}

export default Home;