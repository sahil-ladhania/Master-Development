import {useState} from "react";

function UseStatePractice() {
    let count = 0;

    // State Variables with Different Initial Values
    const [increment, setIncrement] = useState(0); // Number as Initial Value
    const [name, setName] = useState(""); // String as Initial Value
    const [isToggled, setIsToggled] = useState(false); // Boolean as Initial Value
    const [items, setItems] = useState([]); // Array as Initial Value
    const [user, setUser] = useState({ // Object as Initial Value
        name : "Sahil",
        age : 23
    })
    const [data, setData] = useState(null); // null as Initial Value
    const [user2, setUser2] = useState(undefined); // undefined as Initial Value

    console.log(useState()); // useState returning an array with two values : State Variable & Updater Function

    // Handler Functions
    const handleIncrement = () => {
        setIncrement(increment + 1);
        console.log(increment); // Why it Prints the previous value ?
        console.log(setIncrement); // What am I getting and Why ?
        console.log(setIncrement()); // What am I getting and Why ?
    }
    const handleInputChange = (eventObj) => {
        setName(eventObj.target.value);
    }
    const handleToggle = () => {
        setIsToggled(!isToggled);
    }
    const handleAddItem = () => {
        setItems([...items, `Item ${items.length + 1}`]);
    }
    const updateAge = () => {
        setUser(prevUser => ({ ...prevUser, age: prevUser.age + 1 }));
    }
    const fetchData = () => {
        console.log(increment); // Here it will print the updated value.
        setTimeout(() => {
            setData("Fetched Data");
        }, 2000);
    }
    const loadUser = () => {
        setTimeout(() => {
            setUser2({ name: "Sahil", age: 23 });
        }, 1000);
    }

    return (
        <>
            <div className="px-40 py-40 bg-slate-800">
                <h1 className="mb-6">Regural Variable</h1>
                <div className="mb-10">
                    <button onClick={() => count++} className="bg-amber-300 p-4 mr-4">Click to Increase Count : {count}</button>
                    <span>{increment}</span>
                </div>
                <h1 className="mb-6">Number as Initial Value</h1>
                <div className="mb-10">
                    <button onClick={handleIncrement} className="bg-amber-300 p-4 mr-4">Click to Increase Count</button>
                    <span>{increment}</span>
                </div>
                <h1 className="mb-6">String as Initial Value</h1>
                <div className="mb-10">
                    <input onChange={handleInputChange} className="outline p-4 mr-10" value={name} placeholder="Enter Name..."/>
                    <span>{name}</span>
                </div>
                <h1 className="mb-6">Boolean as Initial Value</h1>
                <div className="mb-10">
                    <button className="bg-amber-300 p-4 mr-4" onClick={handleToggle}>Toggle Me</button>
                    <span>{isToggled ? "ON" : "OFF"}</span>
                </div>
                <h1 className="mb-6">Array as Initial Value</h1>
                <div className="mb-10">
                    <button className="bg-amber-300 p-4 mr-4" onClick={handleAddItem}>Add Item</button>
                    <ul className="mt-5">
                        {
                            items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <h1 className="mb-6">Object as Initial Value</h1>
                <div className="mb-10">
                    <button className="bg-amber-300 p-4 mr-4" onClick={updateAge}>Increase Age</button>
                    <span className="mr-5">Name : {user.name}</span>
                    <span className="mr-5">Age : {user.age}</span>
                </div>
                <h1 className="mb-6">Null as Initial Value</h1>
                <div className="mb-10">
                    <button className="bg-amber-300 p-4 mr-4" onClick={fetchData}>Fetch Data</button>
                    <span className="mr-5">
                        Data : {data ? data : "No Data Available !!!"}
                    </span>
                </div>
                <h1 className="mb-6">Undefined as Initial Value</h1>
                <div className="mb-10">
                    <button className="bg-amber-300 p-4 mr-4" onClick={loadUser}>Fetch Data</button>
                    <span className="mr-5">
                        Name: {user2 ? user2.name : "Loading..."}
                    </span>
                    <span className="mr-5">
                        Age: {user2 ? user2.age : ""}
                    </span>
                </div>
            </div>
        </>
    );
}

export default UseStatePractice;