// Signup.jsx
import { Button } from "@/components/ui/button"; // Adjust the path as needed
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom"; // Adjust the path as needed

function Signup() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">Signup</h1>
                <Link className="text-orange-600 mb-4 block" to="/login">
                    or login to your account
                </Link>
                <Input className="mb-4" type="text" placeholder="Enter Phone Number" />
                <Input className="mb-4" placeholder="Enter Name" />
                <Input className="mb-4" placeholder="Enter Email" />
                <Button className="w-full">Continue</Button>
                <p className="mt-4 text-gray-600 text-sm">By creating an account, I accept the Terms & Conditions & Privacy Policy</p>
            </div>
        </div>
    );
}

export default Signup;