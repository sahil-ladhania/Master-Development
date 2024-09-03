import React from "react";
import Restaurant from "./Restaurant";

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

export default RestaurantContainer;