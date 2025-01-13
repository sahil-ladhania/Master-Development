import {useDispatch, useSelector} from "react-redux";
import {removeTodo} from "../features/todo/todoSlice.js";

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const deleteTodoHandler = (id) => {
        dispatch(removeTodo(id));
    }

    return (
        <>
            {
                todos.map((todo) => {
                    return (
                        <div className="ml-40 border p-4 border-black flex items-center justify-between w-5/12" key={todo.id}>
                            <li className="list-none">{todo.text}</li>
                            <button className="p-4 bg-black text-white" onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Todos;