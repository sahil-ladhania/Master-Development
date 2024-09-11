import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { ShoppingCart } from "lucide-react";

function HeaderComponent() {
    const cartItemCount = 12;

    return (
        <div className="header flex items-center justify-between h-20 px-6 shadow-md border-b border-gray-200 bg-white">
            <div className="logo-component">
                <h1 className="text-3xl font-bold text-orange-600">
                    <Link to="/">YUMMMZO</Link>
                </h1>
            </div>
            <div className="flex-grow max-w-xs">
                <Input
                    type="search"
                    placeholder="Search Restaurants"
                    className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white focus:outline-none focus:ring-0 focus:border-gray-300"
                />
            </div>
            <div className="flex items-center space-x-2">
                <span className="text-gray-700 dark:text-gray-300">🌞</span> {/* Sun icon for light mode */}
                <Switch className="h-6 w-12" />
                <span className="text-gray-700 dark:text-gray-300">🌜</span> {/* Moon icon for dark mode */}
            </div>
            <div className="nav-items flex items-center space-x-8">
                <ul className="flex space-x-8 text-lg font-semibold text-gray-700">
                    <li className="hover:text-orange-400 cursor-pointer">
                        <Link to="/restaurants">Restaurants</Link>
                    </li>
                    <li className="hover:text-orange-400 cursor-pointer">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="hover:text-orange-400 cursor-pointer">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="hover:text-orange-400 cursor-pointer">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="relative flex items-center hover:text-orange-400 cursor-pointer">
                        <Link to="/cart" className="relative flex items-center">
                            <ShoppingCart className="w-6 h-6 text-gray-700" />
                            {
                                cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full">
                                    {cartItemCount}
                                </span>
                                )
                            }
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderComponent;