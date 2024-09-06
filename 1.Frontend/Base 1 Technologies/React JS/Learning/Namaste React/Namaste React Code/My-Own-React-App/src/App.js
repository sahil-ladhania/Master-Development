import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";

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

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>
    },
    {
        path: '/about',
        element: <AboutUs/>
    },
    {
        path: '/contact',
        element: <ContactUs/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

