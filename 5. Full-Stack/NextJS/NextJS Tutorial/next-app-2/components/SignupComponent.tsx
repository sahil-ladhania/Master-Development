"use client"

import axios from "axios";
import { useState } from "react"

export default function SignupComponent(){
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handleSignup = async() => {
        console.log(name);
        console.log(email);
        console.log(password);
        const formdata = {
            "name" : name , 
            "email" : email , 
            "password" : password
        }
        const data = await axios.post("http://localhost:3000/api/user" , formdata);
        console.log(data);
    }
    
    return (
        <form className="flex flex-col">
                <input onChange={(e) => {setName(e.target.value)}} className="border h-10 w-2/12 my-4 mx-4" type="text" placeholder="Enter Name..."/>
                <input onChange={(e) => {setEmail(e.target.value)}} className="border h-10 w-2/12  my-4 mx-4" type="email" placeholder="Enter Email..."/>
                <input onChange={(e) => {setPassword(e.target.value)}} className="border h-10 w-2/12  my-4 mx-4" type="password" placeholder="Enter Password..."/>
                <button onClick={handleSignup} className="bg-amber-700 h-10 w-20 m-10">
                    Signup
                </button>
        </form>
    )   
}