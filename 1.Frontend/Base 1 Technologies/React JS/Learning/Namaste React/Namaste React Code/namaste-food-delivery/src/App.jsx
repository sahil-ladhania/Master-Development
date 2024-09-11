import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "@/pages/Home.jsx";
import Restaurants from "@/pages/Restaurants.jsx";
import AboutUs from "@/pages/AboutUs.jsx";
import ContactUs from "@/pages/ContactUs.jsx";
import Cart from "@/pages/Cart.jsx";
import Login from "@/pages/Login.jsx";
import HeaderComponent from "@/components/HeaderComponent.jsx";
import FooterComponent from "@/components/FooterComponent.jsx";
import Signup from "@/pages/Signup.jsx";
import Menu from "@/pages/Menu.jsx";

function App() {
    return (
        <>
            <Router>
                <div className="app flex flex-col min-h-screen">
                    <HeaderComponent />
                    <div className="flex-grow">
                        <Routes>
                            {/*  Main Pages  */}
                            <Route path="/" element={<Home />} />
                            <Route path="/restaurants" element={<Restaurants />} />
                            <Route path="/menu" element={<Menu />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/contact" element={<ContactUs />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </Routes>
                    </div>
                    <FooterComponent />
                </div>
            </Router>
        </>
    );
}

export default App;