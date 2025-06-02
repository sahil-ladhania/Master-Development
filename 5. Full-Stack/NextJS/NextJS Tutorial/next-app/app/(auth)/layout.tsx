import React from "react";

export default function name({ children } : {
    children : React.ReactNode
}) {
    return (
        <>
            <div className="border-b text-center border-gray-300">
                20% off for the next three days !!!
            </div>
            {children}
        </>
    );
}