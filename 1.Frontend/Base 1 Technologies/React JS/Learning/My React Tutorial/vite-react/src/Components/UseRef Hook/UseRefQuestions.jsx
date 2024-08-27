import {useEffect, useRef, useState} from "react";

function UseRefQuestions() {
    // State Variables
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);
    // useRef Hook
    const inputRef = useRef(null);
    const countRef = useRef(0);
    const divRef = useRef(null);
    const timerRef = useRef(null);
    const inputtRef = useRef(null);
    // Handler Functions
    const handleFormSubmit = (e) => {
        e.preventDefault();
        inputRef.current.focus();
    }
    const handleCount = () => {
        countRef.current = count;
        setCount(count + 1);
    }
    const handleAnimation = () => {
        divRef.current.classList.add("animate-bounce");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = inputtRef.current.value;
        console.log(inputValue);
    }
    // UseEffect
    useEffect(() => {
        console.log("Component Mounted");
        // Start the timer
        timerRef.current = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        return () => {
            clearInterval(timerRef.current);
            console.log("Timer stopped and Component Unmounted");
        };
    }, []);

    return (
        <>
            <div className="p-20">
                <h1>UseRef Questions !!!</h1>
                {/* Question : 1*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        1. Create a form with an input field and a button. When the button is clicked, the input field should gain focus.
                    </h2>
                    <form onSubmit={handleFormSubmit}>
                        <input ref={inputRef} className="outline p-4 mr-4 input" type="name" placeholder="Enter Something..."/>
                        <button className="bg-amber-300 p-4">Submit</button>
                    </form>
                </div>
                {/* Question : 2*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        2. Create a component that tracks the current and previous values of a counter.
                    </h2>
                    <div>
                        <button onClick={handleCount} className="bg-amber-300 p-4 mb-4">Click to Increase</button>
                        <div className="h-10">
                            <span>Current Counter Value : </span>
                            <span className="text-orange-600">{count}</span>
                        </div>
                        <div className="h-10">
                            <span>Previous Counter Value : </span>
                            <span className="text-orange-600">{countRef.current}</span>
                        </div>
                    </div>
                </div>
                {/* Question : 3*/}
                <div className="my-5">
                    <h2 className="mb-4">
                    3. Create a component that triggers a CSS animation on a div when a button is clicked.
                    </h2>
                    <button onClick={handleAnimation} className="bg-amber-300 p-4 mb-8">Click For Annimation</button>
                    <div ref={divRef} className="h-20 w-20 bg-blue-400 rounded"></div>
                </div>
                {/* Question : 4*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        4. Create a timer that tracks the number of seconds since the component was mounted. Use useRef to store the timer ID and stop the timer when the component unmounts.
                    </h2>
                    <div>
                        <h1>Timer : {seconds} seconds</h1>
                    </div>
                </div>
                {/* Question : 5*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        5. Create an uncontrolled form component where the input value is accessed using a ref on form submission.
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <input ref={inputtRef} className="p-4 border border-black outline-none mr-4" type="text" placeholder="Enter Something..."/>
                        <button className="bg-amber-300 p-4">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UseRefQuestions;