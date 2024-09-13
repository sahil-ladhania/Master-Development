import RestaurantCardComponent from "@/components/RestaurantCardComponent.jsx";
import {useContext} from "react";
import {TopBrandsContext} from "@/contexts/topBrandsContext.jsx";

function TopRestaurantsContainerComponent() {
    // Getting Top Restaurants State
    const {topBrandsState} = useContext(TopBrandsContext)
    console.log(topBrandsState);

    return (
        <div className="mt-8">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Top restaurant chains in Patna</h1>
            <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide p-4 cursor-pointer">
                <div className="inline-flex space-x-4">
                    {
                        topBrandsState.topBrands.length > 0 ?
                            topBrandsState.topBrands.map((topBrand) => (
                                <RestaurantCardComponent key={topBrand.info.id} topBrand={topBrand} />
                            ))
                            :
                            <h1>Loading...</h1>
                    }
                </div>
            </div>
        </div>
    );
}

export default TopRestaurantsContainerComponent;