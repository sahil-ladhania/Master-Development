import {useEffect, useState} from "react";

function UseEffectQuestions() {
    // State Variables
    const [data, setData] = useState(null);
    const [counter, setCounter] = useState(0);

    // UseEffect - First Question
    useEffect(() => {
        alert("Component Mounted...");
    }, []);

    // UseEffect - Second Question
    useEffect(() => {
        let isMounted = true;
        console.log(isMounted);
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
                console.log("Whole Response : " , response);
                const myData = await response.json();
                console.log("My Data : " , myData);
                if(isMounted){
                    setData(myData);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
        return () => {
            isMounted = false;
            console.log(isMounted);
        }
    }, []);

    // UseEffect - Third Question
    useEffect(() => {
        console.log("Component Mounted");
        let count = 1;
        const intervalId = setInterval(() => {
            count++;
            console.log(count);
        }, 1000);
        return () => {
            clearInterval(intervalId);
            console.log("Component Un-Mounted");
        }
    }, []);

    // UseEffect - Fourth Question
    useEffect(() => {
        console.log("Component Mounted");
        return () => {
            console.log("Component Unmounted");
        };
    }, []);

    // UseEffect - Fifth Question
    useEffect(() => {
        document.title = `Counter : ${counter}`;
    }, [counter]);

    // Handler Functions
    const handleCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <div className="p-20">
                <h1>useEffect Questions !!!</h1>
                {/* Question : 1*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        1. Show an alert when the component first mounts using useEffect.
                    </h2>
                </div>
                {/* Question : 2*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        2. Fetch a piece of static data from a local file or mock API when the component mounts and display it.
                    </h2>
                    <div>
                        <div>
                            Name : {data ? data.name : "Loading..."}
                        </div>
                        <div>
                            Email : {data ? data.email : "Loading..."}
                        </div>
                    </div>
                </div>
                {/* Question : 3*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        3. Start a timer when the component loads and log the time passed every second.
                    </h2>
                </div>
                {/* Question : 4*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        4. Set up a useEffect that logs “Component unmounted” when the component is removed from the DOM.
                    </h2>
                </div>
                {/* Question : 5*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        5. Update the document’s title to reflect the value of a counter each time it changes.
                    </h2>
                    <button onClick={handleCounter} className="bg-amber-300 p-4 mr-4">Click Me</button>
                    <span>{counter}</span>
                </div>
            </div>
        </>
    );
}

export default UseEffectQuestions;