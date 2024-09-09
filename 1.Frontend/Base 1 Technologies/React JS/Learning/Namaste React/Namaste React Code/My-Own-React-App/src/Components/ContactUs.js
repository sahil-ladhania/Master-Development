import React, {useState} from 'react';

const ContactUs = () => {
    // State Variables
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Handler Functions
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name : " + name);
        console.log("Email : " + email);
        console.log("Message : " + message);
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div className="container my-10 mx-auto p-8 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-700 mb-4">
                If you have any questions or feedback, feel free to reach out to us.
                We are here to help and ensure that your experience is as smooth as possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-600 mb-2">Name:</label>
                    <input onChange={handleName} type="text" value={name} className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name"/>
                </div>
                <div>
                    <label className="block text-gray-600 mb-2">Email:</label>
                    <input onChange={handleEmail} type="email" value={email} className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email"/>
                </div>
                <div>
                    <label className="block text-gray-600 mb-2">Message:</label>
                    <textarea onChange={handleMessage} value={message} className="w-full p-2 border border-gray-300 rounded" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600" type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactUs;