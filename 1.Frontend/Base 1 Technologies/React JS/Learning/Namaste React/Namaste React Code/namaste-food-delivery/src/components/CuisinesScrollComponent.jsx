import CuisineCardComponent from "@/components/CuisineCardComponent.jsx";

function CuisinesScrollComponent() {
    return (
        <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide p-4 cursor-pointer">
            <div className="inline-flex space-x-4">
                <CuisineCardComponent/>
                <CuisineCardComponent/>
                <CuisineCardComponent/>
                <CuisineCardComponent/>
                <CuisineCardComponent/>
                <CuisineCardComponent/>
                <CuisineCardComponent/>
                <CuisineCardComponent/>
                <CuisineCardComponent/>
                <CuisineCardComponent/>
                <CuisineCardComponent/>
                <CuisineCardComponent/>
                <CuisineCardComponent/>
            </div>
        </div>
    );
}

export default CuisinesScrollComponent;