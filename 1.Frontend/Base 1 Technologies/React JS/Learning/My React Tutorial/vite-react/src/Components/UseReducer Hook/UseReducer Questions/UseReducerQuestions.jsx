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
    const handleTaskChange = () => {
        
    }
    const handleTaskToggle = () => {

    }
    const handleAddTask = () => {
        
    }
    const handleDeleteTask = () => {

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
                {/* Question : 3*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        3. Create a component that manages a list of tasks with actions to add, remove, and toggle the completion status of tasks using useReducer.
                    </h2>
                    <div>
                        <input onChange={handleTaskChange} className="p-4 border border-black outline-none mr-4" type="text" placeholder="Enter Your Task..."/>
                        <button onClick={handleAddTask} className="bg-amber-300 p-4 rounded">Add Task</button>
                        {/*  OnClick of the Add task Button ---> Render List of Tasks with a CheckBox and Task Text and a Delete Button  */}
                        <div className="border border-black rounded p-2 w-fit flex items-center justify-between mt-2">
                            <input onChange={handleTaskToggle} className="mr-4" type="checkbox"/>
                            <label className="mr-4" htmlFor="task">Task 1</label>
                            <button onClick={handleDeleteTask} className="bg-amber-300 p-2 rounded">Delete Task</button>
                        </div>
                    </div>
                </div>
                {/* Question : 4*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        4. Create a component that fetches data from an API and manages the loading, success, and error states using useReducer.
                    </h2>
                </div>
                {/* Question : 5*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        5. Create a global state management system using useReducer and useContext to manage a user’s authentication state across the app.
                    </h2>
                </div>
            </div>
        </>
    );
}

export default UseReducerQuestions;