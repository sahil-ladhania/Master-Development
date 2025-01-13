import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Cart from "./Components/Cart";

const AppLayout = () => {
    return (
        <>
            <Router>
                <div className="app flex flex-col min-h-screen">
                    <Header />
                    <div className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Body />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/contact" element={<ContactUs />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

