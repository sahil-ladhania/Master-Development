import {useState} from "react";

function UseStateQuestions() {
    // State Variable
    const [text, setText] = useState("");
    const [onChecked, setOnChecked] = useState(false);
    const [counter, setCounter] = useState(0);
    const [buttonText, setButtonText] = useState("Hide Message");
    const [showMessage, setShowMessage] = useState("Hello World !");
    const [reactions, setReactions] = useState(0);

    // Handler Functions
    const handleTextChange = (eventObj) => {
        setText(eventObj.target.value);
    }
    const handleToggle = () => {
        setOnChecked(!onChecked);
    }
    const handleCounter = () => {
        setCounter(counter + 1);
    }
    const handleMessageToggle = () => {
        if(showMessage){
            setButtonText("Show Message");
            setShowMessage("");
        }
        else{
            setButtonText("Hide Message");
            setShowMessage("Hello World !");
        }
    }
    const handleLike = () => {
        setReactions(reactions + 1);
    }
    const handleDislike = () => {
        if(reactions > 0){
            setReactions(reactions - 1);
        }
    }

    return (
        <>
            <div className="p-20">
                <h1>useState Questions !!!</h1>
                {/* Question : 1*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        1. Create an input field where the typed text is displayed live in a separate paragraph below the input field.
                    </h2>
                    <input onChange={handleTextChange} className="outline p-4 mb-4" type="text" placeholder="Enter Something..."/>
                    <div className="h-40 w-60 border border-black p-2 text-orange-600">
                        {text}
                    </div>
                </div>
                {/* Question : 2*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        2. Implement a checkbox that toggles between “checked” and “unchecked” states and displays the current state as text below the checkbox.
                    </h2>
                    <input onClick={handleToggle} className="mr-4" type="checkbox"/>
                    <label className="text-orange-600" htmlFor="checkbox">
                        {onChecked ? "Checked" : "Un-Checked"}
                    </label>
                </div>
                {/* Question : 3*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        3. Use useState to keep track of how many times a button has been clicked and display the count.
                    </h2>
                    <button onClick={handleCounter} className="bg-amber-300 p-4 mr-4">You Clicked Me</button>
                    <span>{counter} times</span>
                </div>
                {/* Question : 4*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        4. Create a button that toggles the visibility of a message on the screen.
                    </h2>
                    <button onClick={handleMessageToggle} className="bg-amber-300 p-4 mr-4 h-16 w-40">{buttonText}</button>
                    <span>
                        {showMessage}
                    </span>
                </div>
                {/* Question : 5*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        5. Implement a “Like” and “Dislike” button that increases or decreases a counter respectively.
                    </h2>
                    <div>
                        <button onClick={handleLike} className="bg-amber-300 p-4 mr-4 h-16 w-40">Like</button>
                        <span className="p-4 mr-4 text-red-800 h-6 w-6">{reactions}</span>
                        <button onClick={handleDislike} className="bg-amber-300 p-4 h-16 w-40">Dislike</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UseStateQuestions;