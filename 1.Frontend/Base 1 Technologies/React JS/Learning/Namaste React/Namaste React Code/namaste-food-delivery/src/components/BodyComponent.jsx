import CuisinesScrollComponent from "@/components/CuisinesScrollComponent.jsx";
import TopRestaurantsContainerComponent from "@/components/TopRestaurantsContainerComponent.jsx";

function BodyComponent() {
    return (
        <div className="w-full min-w-[320px] max-w-[1200px] mx-auto px-4 py-8">
            {/* Cuisines Section */}
            <div className="mb-10">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Sahil, what's on your mind?</h1>
                <CuisinesScrollComponent/>
            </div>
            {/* Top Restaurants Chains */}
            <div>
                <TopRestaurantsContainerComponent/>
            </div>
        </div>
    );
}

export default BodyComponent;