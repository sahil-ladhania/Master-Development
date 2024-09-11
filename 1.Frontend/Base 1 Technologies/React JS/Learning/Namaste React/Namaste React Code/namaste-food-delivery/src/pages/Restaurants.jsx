import OnlineRestaurantsContainerComponent from "@/components/OnlineRestaurantsContainerComponent.jsx";
import ButtonContainerComponent from "@/components/ButtonContainerComponent.jsx";

function Restaurants() {
    return (
        <>
            <div className="w-full min-w-[320px] max-w-[1200px] mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold text-gray-800 mb-10">Restaurants with online food delivery in Patna</h1>
                {/* Filters Section */}
                <ButtonContainerComponent/>
                {/* Online Restaurants Location */}
                <OnlineRestaurantsContainerComponent/>
            </div>
        </>
    );
}

export default Restaurants;