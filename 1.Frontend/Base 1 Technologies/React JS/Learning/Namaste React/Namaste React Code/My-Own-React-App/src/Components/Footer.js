import React from "react";

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

export default Footer;