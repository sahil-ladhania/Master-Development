import {useState} from "react";

function ListAndKeysQuestions() {
    // State Variables
    const [searchText, setSearchText] = useState("");
    const numbers = [1,2,3,4,5];
    const products = [
        { id: 1, name: 'Laptop', price: 1500 },
        { id: 2, name: 'Smartphone', price: 800 },
        { id: 3, name: 'Tablet', price: 400 },
        { id: 4, name: 'Smartwatch', price: 200 },
        { id: 5, name: 'Headphones', price: 100 }
    ];
    const items = [
        'React',
        'JavaScript',
        'HTML',
        'CSS',
        'Node.js'
    ];
    const actions = [
        'Save',
        'Delete',
        'Edit',
        'Cancel',
        'Submit'
    ];
    const users = [
        { id: 1, username: 'john_doe', email: 'john@example.com' },
        { id: 2, username: 'jane_smith', email: 'jane@example.com' },
        { id: 3, username: 'alice_jones', email: 'alice@example.com' },
        { id: 4, username: 'bob_brown', email: 'bob@example.com' },
        { id: 5, username: 'charlie_black', email: 'charlie@example.com' }
    ];
    const names = [
        'Alice',
        'Bob',
        'Charlotte',
        'David',
        'Eleanor',
        'Fiona',
        'George',
        'Hannah'
    ];
    const tasks = [
        { id: 1, description: 'Complete homework', completed: true },
        { id: 2, description: 'Read a book', completed: false },
        { id: 3, description: 'Go grocery shopping', completed: true },
        { id: 4, description: 'Clean the house', completed: false },
        { id: 5, description: 'Finish project', completed: true }
    ];
    const productss = [
        { id: 1, name: 'Laptop', price: 1500 },
        { id: 2, name: 'Smartphone', price: 800 },
        { id: 3, name: 'Tablet', price: 400 },
        { id: 4, name: 'Smartwatch', price: 200 },
        { id: 5, name: 'Headphones', price: 100 }
    ];
    // Filter Operations
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const longerThan5 = names.filter(name => name.length > 5);
    const completedTask = tasks.filter(task => task.completed === true);
    const productsunder500 = productss.filter(product => product.price <= 500);
    // Handler Function
    const handleSearch = (e) => {
        const searchText = e.target.value;
        console.log(searchText);
        setSearchText(searchText);
    }
    const filteredNames = names.filter(name => name.toLowerCase().includes(searchText.toLowerCase()));
    return (
        <>
            <div className="p-20">
                <h1 className="mb-10">List and Keys Questions !!!</h1>
                <div className="mb-10">map Questions :-</div>
                {/* Question : 1*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        1. Given an array of numbers, render each number inside a li element in an unordered list.
                    </h2>
                    <ul>
                        {
                            numbers.map((number , index) => (
                                <li className="text-red-800" key={index}>{number}</li>
                            ))
                        }
                    </ul>
                </div>
                {/* Question : 2*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        2. Given an array of product objects, render just the names of the products in a list.
                    </h2>
                    <ul>
                        {
                            products.map((product , index) => (
                                <li className="text-red-800" key={index}>{product.name}</li>
                            ))
                        }
                    </ul>
                </div>
                {/* Question : 3*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        3. Take an array of strings and render them in a numbered list (ol).
                    </h2>
                    <ul>
                        {
                            items.map((item, index) => (
                                <li className="text-red-800" key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                {/* Question : 4*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        4. Given an array of actions (like “Save”, “Delete”), render a button for each action.
                    </h2>
                    <ol>
                        {
                            actions.map((action, index) => (
                                <li key={index}><button className="bg-amber-300 h-14 w-20 mb-2">{action}</button></li>
                            ))
                        }
                    </ol>
                </div>
                {/* Question : 5*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        5. Given an array of user objects, render just the usernames in a p tag.
                    </h2>
                    <ul>
                        {
                            users.map((user , index) => (
                                <li key={index}><p className="text-red-800">{user.username}</p></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="mb-10">filter Questions :-</div>
                {/* Question : 1*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        1. Given an array of numbers, filter out and display only the even numbers.
                    </h2>
                    <ul>
                        {
                            evenNumbers.map((item, index) => (
                                <li className="text-red-800" key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                {/* Question : 2*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        2. Given an array of names, filter and display only those names longer than 5 characters.
                    </h2>
                    <ul>
                        {
                            longerThan5.map((task, index) => (
                                <li className="text-red-800" key={index}>{task}</li>
                            ))
                        }
                    </ul>
                </div>
                {/* Question : 3*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        3. Given an array of task objects, filter and display only the completed tasks.
                    </h2>
                    <ul>
                        {
                            completedTask.map((task, index) => (
                                <li className="text-red-800" key={index}>{task.description}</li>
                            ))
                        }
                    </ul>
                </div>
                {/* Question : 4*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        4. Filter and display products that are under a certain price from a product list.
                    </h2>
                    <ul>
                        {
                            productsunder500.map((product, index) => (
                                <li className="text-red-800" key={index}>{product.name}</li>
                            ))
                        }
                    </ul>
                </div>
                {/* Question : 5*/}
                <div className="my-5">
                    <h2 className="mb-4">
                        5. Implement a simple search that filters a list of names based on the user’s input.
                    </h2>
                    <input onChange={handleSearch} value={searchText} className="outline p-4 mb-4" type="text" placeholder="Search names..."/>
                    <div className="mt-2 border-2 border-amber-950 px-5 w-1/12 h-60 py-5">
                        <ul>
                            {
                                filteredNames.map((name, index) => (
                                    <li className="text-red-800" key={index}>{name}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListAndKeysQuestions;