import {useState} from "react";

function ConditionalRenderingQuestions() {
    // State Variables
    const [buttonText, setButtonText] = useState("Login");
    const [isLogin, setIsLogin] = useState(false);
    const [userName, setUserName] = useState("");
    const [isAdmin, setIsAdmin] = useState(true);
    const [isMessageVisible, setIsMessageVisible] = useState(false);
    const [list, setList] = useState(["Item 1" , "Item 2"]);

    // Handler Functions
    const handleAuth = () => {
        setIsLogin(!isLogin);
        if(isLogin){
            setButtonText("Logout");
        }
        else{
            setButtonText("Login");
        }
    }
    const handleMessage = () => {
        setIsMessageVisible(!isMessageVisible);
    }

    return (
        <>
            <div className="p-20">
                <h1>Conditional Rendering Questions !!!</h1>
                {/* Question : 1*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        1. Show a “Login” button if the user is not logged in and a “Logout” button if the user is
                        logged in.
                    </h2>
                    <button onClick={handleAuth} value={isLogin} className="bg-amber-300 h-14 w-28">
                        {buttonText}
                    </button>
                </div>
                {/* Question : 2*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        2. Display a welcome message if a user’s name is provided; otherwise, display “Guest”.
                    </h2>
                    {
                        userName == "" ?
                            <span className="text-orange-600">Welcome Guest !</span>
                            :
                            <span className="text-orange-600">Welcome {userName} !</span>
                    }
                </div>
                {/* Question : 3*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        3. Based on a boolean variable isAdmin, render either an “Admin Dashboard” component or a “User
                        Dashboard” component.
                    </h2>
                    {
                        isAdmin ?
                            <span className="text-orange-600">Admin Dashboard</span>
                            :
                            <span className="text-orange-600">User Dashboard</span>
                    }
                </div>
                {/* Question : 4*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        4. Use a boolean value to hide or show an element on the screen when a button is clicked.
                    </h2>
                    <button onClick={handleMessage} className="bg-amber-300 h-14 w-52 mb-4">Toggle For Visibility</button>
                    {
                        isMessageVisible ?
                            <div className="bg-blue-400 h-20 w-40 flex justify-center items-center">
                                Hello World !
                            </div>
                            :
                            <div></div>
                    }
                </div>
                {/* Question : 5*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        5. Show a message like “List is empty” when a list has no items, and render the list when it does.
                    </h2>
                    {
                        list.length == 0 ?
                            <span className="text-orange-600">List is Empty !</span>
                            :
                            list.map((item , index) => (
                                <li key={index}>{item}</li>
                            ))
                    }
                </div>
            </div>
        </>
    );
}

export default ConditionalRenderingQuestions;