import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../features/todo/todoSlice.js";

function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }

    return (
        <>
            <form onSubmit={addTodoHandler}>
                <input onChange={(e) => setInput(e.target.value)} className="border border-black p-4 ml-40 mr-2 my-40" value={input} type="text"  placeholder="Enter Todo..."/>
                <button className="bg-black text-white p-4">Add Todo</button>
            </form>
        </>
    );
}

export default AddTodo;