import React from "react";

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

export default Header;