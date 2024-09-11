import {Star} from "lucide-react";
import MenuContainerComponent from "@/components/MenuContainerComponent.jsx";

function Menu() {
    return (
        <div className="w-full min-w-[320px] max-w-[1200px] mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-black mb-6">Baskin Robbins - Ice Cream Desserts</h1>
            <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 mb-10">
                <div className="flex items-center justify-between w-2/6">
                    <div className="flex items-center mb-4">
                        <Star className="text-green-500 mr-2"/>
                        <h2 className="text-lg font-semibold text-gray-800">4.4</h2>
                    </div>
                    <p className="text-gray-600 mb-2 text-sm font-semibold">(591 ratings)</p>
                    <p className="text-gray-800 mb-2 text-sm font-semibold">Rs.200 for two</p>
                </div>
                <p className="text-orange-800 mb-2">Ice Cream</p>
                <p className="text-gray-800 font-bold text-sm">20 mins</p>
            </div>
            <MenuContainerComponent/>
        </div>
    );
}

export default Menu;