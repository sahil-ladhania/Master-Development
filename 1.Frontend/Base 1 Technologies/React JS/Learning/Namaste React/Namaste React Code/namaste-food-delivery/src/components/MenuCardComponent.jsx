import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import { Star } from "lucide-react";

function MenuCardComponent() {
    return (
        <Card className="bg-white shadow-lg rounded-lg border border-gray-200 max-w-xs">
            <CardHeader>
                <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/gyjleaxantrzv8uxfqtv"
                    alt="Menu Item"
                    className="w-full h-40 object-cover rounded-t-lg"
                />
            </CardHeader>
            <CardContent>
                <CardTitle className="text-xl font-semibold text-gray-800 mb-2">Item Name</CardTitle>
                <div className="flex items-center mb-2">
                    <Star className="text-yellow-500 mr-1" />
                    <span className="text-gray-800 mr-2">4.5</span>
                    <span className="text-gray-600">(200 ratings)</span>
                </div>
                <p className="text-gray-800 font-bold text-lg mb-2">Rs. 250</p>
                <p className="text-gray-600 mb-4 text-sm">Delicious description of the menu item goes here.</p>
            </CardContent>
            <CardFooter>
                <button className="w-full py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700">
                    Add to Cart
                </button>
            </CardFooter>
        </Card>
    );
}

export default MenuCardComponent;