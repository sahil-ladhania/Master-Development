import {useReducer} from "react";
import {reducer , initialState} from "./Reducer.js";

function UseReducerPractice() {
    const [state , dispatch] = useReducer(reducer , initialState);
    console.log("state : " , state);
    console.log("dispatch : " , dispatch);
    console.log("reducer : " , reducer);
    console.log("initialState : " , initialState);
    const handleIncrement = () => {
        dispatch({
            type: "increment"
        })
    }
    const handleDecrement = () => {
        dispatch({
            type: "decrement"
        })
    }
    return (
        <>
            <div className="p-20">
                <p>Count : {state.count}</p>
                <button onClick={handleIncrement} className="bg-amber-300 p-4 mr-2">+</button>
                <button onClick={handleDecrement} className="bg-amber-300 p-4">-</button>
            </div>
        </>
    );
}

export default UseReducerPractice;