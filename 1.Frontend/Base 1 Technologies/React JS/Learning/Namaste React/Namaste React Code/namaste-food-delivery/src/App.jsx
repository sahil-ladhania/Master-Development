import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "@/pages/Home.jsx";
import AboutUs from "@/pages/AboutUs.jsx";
import ContactUs from "@/pages/ContactUs.jsx";
import Cart from "@/pages/Cart.jsx";
import Login from "@/pages/Login.jsx";
import HeaderComponent from "@/components/HeaderComponent.jsx";
import FooterComponent from "@/components/FooterComponent.jsx";
import Signup from "@/pages/Signup.jsx";
import Menu from "@/pages/Menu.jsx";
import {CuisineProvider} from "@/contexts/cuisineContext.jsx";
import {TopBrandsProvider} from "@/contexts/topBrandsContext.jsx";
import {OnlineRestaurantProvider} from "@/contexts/onlineRestaurantContext.jsx";

function App() {
    return (
        <>
            <CuisineProvider>
                <TopBrandsProvider>
                    <OnlineRestaurantProvider>
                        <Router>
                            <div className="app flex flex-col min-h-screen">
                                <HeaderComponent />
                                <div className="flex-grow">
                                    <Routes>
                                        {/*  Main Pages  */}
                                        <Route path="/" element={<Home />} />
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
                    </OnlineRestaurantProvider>
                </TopBrandsProvider>
            </CuisineProvider>
        </>
    );
}

export default App;