import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

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

