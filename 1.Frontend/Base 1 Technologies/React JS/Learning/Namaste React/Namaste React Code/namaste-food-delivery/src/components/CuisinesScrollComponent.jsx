import CuisineCardComponent from "@/components/CuisineCardComponent.jsx";
import {useContext} from "react";
import {CuisineContext} from "@/contexts/cuisineContext.jsx";

function CuisinesScrollComponent() {
    // Getting Cuisine Context
    const {cuisineState} = useContext(CuisineContext);

    return (
        <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide p-4 cursor-pointer">
            <div className="inline-flex space-x-4">
                {
                    cuisineState.cuisines.length > 0 ?
                        cuisineState.cuisines.map((cuisine) => (
                            <CuisineCardComponent key={cuisine.id} cuisine={cuisine} />
                        ))
                        :
                        <h1>Loading...</h1>
                }
            </div>
        </div>
    );
}

export default CuisinesScrollComponent;