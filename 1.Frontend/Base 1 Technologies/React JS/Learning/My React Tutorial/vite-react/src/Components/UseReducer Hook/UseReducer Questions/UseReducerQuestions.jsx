import {useReducer} from "react";
import {counterReducer, initialCounterState} from "./Reducer1.js";
import {formReducer, initialFormState} from "./Reducer2.js";

function UseReducerQuestions() {
    // useReducer Hooks
    const [counterState, counterDispatch] = useReducer(counterReducer , initialCounterState);
    const [formState, formDispatch] = useReducer(formReducer , initialFormState);
    // Handler Functions
    const handleIncrement = () => {
        counterDispatch({
            type: "INCREMENT"
        })
    }
    const handleDecrement = () => {
        counterDispatch({
            type: "DECREMENT"
        })
    }
    const handleReset = () => {
        counterDispatch({
            type: "RESET"
        })
    }
    const handleNameChange = (e) => {
        formDispatch({
            type: "Update_Name",
            payload: e.target.value
        })
    }
    const handleEmailChange = (e) => {
        formDispatch({
            type: "Update_Email",
            payload: e.target.value
        })
    }
    const handlePasswordChange = (e) => {
        formDispatch({
            type: "Update_Password",
            payload: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        formDispatch({
            type: "Submit_Form",
        })
    }
    return (
        <>
            <div className="p-20">
                <h1>UseReducer Questions !!!</h1>
                {/* Question : 1*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        1. Create a counter component using useReducer that supports increment, decrement, and reset actions.
                    </h2>
                    <div>
                        <span>Count : {counterState.count}</span>
                        <br/>
                        <button onClick={handleIncrement} className="bg-amber-300 p-4 mr-4 rounded">+</button>
                        <button onClick={handleDecrement} className="bg-amber-300 p-4 mr-4 rounded">-</button>
                        <button onClick={handleReset} className="bg-amber-300 p-4 mr-4 rounded">Reset</button>
                    </div>
                </div>
                {/* Question : 2*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        2. Create a form component that manages multiple input fields using useReducer.
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleNameChange} value={formState.name} className="p-4 outline-none border border-black mr-2" type="text" placeholder={"Enter name..."}/>
                        <input onChange={handleEmailChange} value={formState.email} className="p-4 outline-none border border-black mr-2" type="email" placeholder={"Enter email..."}/>
                        <input onChange={handlePasswordChange} value={formState.password} className="p-4 outline-none border border-black mr-2" type="password" placeholder={"Enter password..."}/>
                        <button className="bg-amber-300 p-4 rounded">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UseReducerQuestions;