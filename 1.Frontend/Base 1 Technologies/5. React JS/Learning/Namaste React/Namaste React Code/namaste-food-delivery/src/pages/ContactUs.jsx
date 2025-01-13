import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

function ContactUs() {
    return (
        <>
            <div className="container my-10 mx-auto p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-700 mb-4">
                    If you have any questions or feedback, feel free to reach out to us.
                    We are here to help and ensure that your experience is as smooth as possible.
                </p>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-600 mb-2">Name:</label>
                        <input type="text" value="" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name"/>
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Email:</label>
                        <input  type="email" value=""  className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email"/>
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-2">Message:</label>
                        <textarea value="" className="w-full p-2 border border-gray-300 rounded" rows="4"  placeholder="Your Message"></textarea>
                    </div>
                    <Button className="bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md">
                        <Send className="mr-2 h-4 w-4" />
                        Send
                    </Button>
                </form>
            </div>
        </>
    );
}

export default ContactUs;