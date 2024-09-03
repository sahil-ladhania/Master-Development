import React from "react";
import ReactDOM from "react-dom/client";

// -----Components-----

// Header Component
const Header = () => {
    return (
        <>
            <div className="header flex items-center justify-between h-20 bg-orange-100 px-6 shadow-md">
                <div className="logo-component">
                    <h1 className="text-3xl font-bold text-orange-600">YUMMMZO</h1>
                </div>
                <div className="nav-items">
                    <ul className="flex space-x-8 text-lg font-semibold text-orange-700">
                        <li className="hover:text-orange-500 cursor-pointer">Home</li>
                        <li className="hover:text-orange-500 cursor-pointer">About Us</li>
                        <li className="hover:text-orange-500 cursor-pointer">Contact Us</li>
                        <li className="hover:text-orange-500 cursor-pointer">Cart</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
// Restaurant Card Component
const Restaurant = (props) => {
    console.log(props);
    return (
        <>
            <div className="restaurant bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="image">
                    <img className="w-full h-32 object-cover" src={props.restaurantImage} alt="Restaurant" />
                </div>
                <div className="restaurant-details p-4">
                    <h2 className="text-xl font-bold text-orange-700 mb-2">{props.restaurantName}</h2>
                    <p className="text-gray-600">{props.deliveryTime}</p>
                    <p className="text-gray-500">{props.cuisine}</p>
                    <p className="text-gray-500">{props.address}</p>
                    <div className="rating flex items-center mt-2">
                        <span className="text-green-600 font-semibold mr-2">{props.totalStar}</span>
                        <svg className="w-4 h-4 text-green-700 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 15l-5.392 3.24 1.036-6.04L1.5 7.761l6.076-.882L10 2l2.424 4.879 6.076.882-4.144 4.438 1.036 6.04L10 15z"/>
                        </svg>
                        <span className="text-gray-600 ml-2">({props.totalRatings}+ ratings)</span>
                    </div>
                </div>
            </div>
        </>
    )
}
// Restaurant Container Component
const RestaurantContainer = () => {
    return (
        <>
            <div className="restaurant-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Restaurant
                    restaurantImage = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/60497022-434e-4d21-bc0e-813fea770ae5_654087.JPG"
                    restaurantName = "Burger Singh"
                    deliveryTime = "35-40 mins"
                    cuisine = "Burgers , American"
                    address = "Lodipur"
                    totalStar = "4.2"
                    totalRatings = "300"
                />
                <Restaurant
                    restaurantImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/9f9d80f5-2d7c-4294-be31-a216f523f216_939316.jpg"
                    restaurantName="Pizza Hut"
                    deliveryTime="20-25 mins"
                    cuisine="Pizza, Italian"
                    address="Kankarbagh"
                    totalStar="4.5"
                    totalRatings="500"
                />
                <Restaurant
                    restaurantImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fbvndqwcv3zrmxiusccw"
                    restaurantName="Subway"
                    deliveryTime="15-20 mins"
                    cuisine="Sandwiches, Healthy"
                    address="Rajendra Nagar"
                    totalStar="4.0"
                    totalRatings="250"
                />
                <Restaurant
                    restaurantImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8"
                    restaurantName="Domino's Pizza"
                    deliveryTime="30-35 mins"
                    cuisine="Pizza, Fast Food"
                    address="Fraser Road"
                    totalStar="4.3"
                    totalRatings="400"
                />
                <Restaurant
                    restaurantImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yzqubz6qqh0l4pgtpk6y"
                    restaurantName="KFC"
                    deliveryTime="25-30 mins"
                    cuisine="Fried Chicken, American"
                    address="Boring Road"
                    totalStar="4.1"
                    totalRatings="600"
                />
                <Restaurant
                    restaurantImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/90012597629321295211c3881c8bb0af"
                    restaurantName="Biryani By Kilo"
                    deliveryTime="40-45 mins"
                    cuisine="Biryani, North Indian"
                    address="Ashok Nagar"
                    totalStar="4.4"
                    totalRatings="350"
                />
                <Restaurant
                    restaurantImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b70c7d23d197251b7b315b7e4d8173ae"
                    restaurantName="Haldiram's"
                    deliveryTime="10-15 mins"
                    cuisine="Sweets, North Indian"
                    address="Bailey Road"
                    totalStar="4.6"
                    totalRatings="750"
                />
                <Restaurant
                    restaurantImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5fc65633202a23ecfcd11c07e8b89b75"
                    restaurantName="Cafe Coffee Day"
                    deliveryTime="15-20 mins"
                    cuisine="Beverages, Coffee"
                    address="Boring Road"
                    totalStar="4.0"
                    totalRatings="200"
                />
            </div>
        </>
    )
}
// Body Component
const Body = () => {
    return (
        <>
            <div className="body bg-orange-50 p-8">
                <div className="search-component flex justify-center mb-8">
                    <input className="search-bar p-2 w-1/2 border border-orange-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500" type="search" placeholder="Search Restaurant" />
                    <button className="search-button bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600">Search</button>
                </div>
                <RestaurantContainer />
            </div>
        </>
    )
}
// Footer Component
const Footer = () => {
    return (
        <>
            <div className="footer bg-orange-700 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 YUMMMZO. All Rights Reserved.</p>
                    <p className="mt-2">Follow us on:</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="hover:text-gray-200">Facebook</a>
                        <a href="#" className="hover:text-gray-200">Twitter</a>
                        <a href="#" className="hover:text-gray-200">Instagram</a>
                    </div>
                </div>
            </div>
        </>
    )
}

// AppLayout(Main) Component
const AppLayout = () => {
    return (
        <>
            <div className="app flex flex-col min-h-screen">
                <Header />
                <div className="flex-grow">
                    <Body />
                </div>
                <Footer />
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)