import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header flex items-center justify-between h-20 bg-orange-100 px-6 shadow-md">
                <div className="logo-component">
                    <h1 className="text-3xl font-bold text-orange-600">
                        <Link to="/">YUMMMZO</Link>
                    </h1>
                </div>
                <div className="nav-items">
                    <ul className="flex space-x-8 text-lg font-semibold text-orange-700">
                        <li className="hover:text-orange-500 cursor-pointer">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-orange-500 cursor-pointer">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="hover:text-orange-500 cursor-pointer">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li className="hover:text-orange-500 cursor-pointer">
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;