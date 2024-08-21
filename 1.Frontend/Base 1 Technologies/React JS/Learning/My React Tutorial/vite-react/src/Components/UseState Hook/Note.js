/*

1. Spread Operator (...) in State Management.
•	Definition - The ... syntax, known as the spread operator, is used to create a shallow copy of an array or object.
•	Purpose - It allows you to add or modify elements/properties in a new array or object without mutating the original state.
•	Example with Array -
setItems([...items, `Item ${items.length + 1}`]);
    •	Explanation -
        •	items : Current state (an array).
        •	[...items] : Creates a shallow copy of the items array.
        •	Item ${items.length + 1} : New item added to the array.
        •	Result : The new array includes all existing items plus the new item, and the state is updated with this new array.
•	Example with Object -
setUser(prevUser => ({ ...prevUser, age: prevUser.age + 1 }));
    •	Explanation -
        •	prevUser : Current state (an object).
        •	...prevUser : Creates a shallow copy of the prevUser object.
        •	age: prevUser.age + 1 : Updates the age property while keeping other properties unchanged.
        •	Result : The new object is a copy of prevUser with the age property incremented, and the state is updated with this new object.

2. Understanding prevUser (or prevState)
•	Definition - prevUser (or similar) is a parameter representing the current state before the update.
•	Usage - It’s passed into a function used inside setUser or setState, ensuring that the state update is based on the most recent state.
•	Why Use prevUser?:
    •	State Dependence - When the new state depends on the previous state, using a function with prevUser ensures that you work with the most up-to-date state.
    •	Asynchronous Updates - React may batch state updates for performance. Using prevUser avoids potential bugs by always referring to the latest state.

3. Key Concepts
•	Immutability :
    •	React encourages immutability—creating a new version of state rather than modifying the existing state directly.
    •	Benefits - Prevents unexpected bugs and ensures that React re-renders the component correctly when the state changes.
•	State Updates in React :
    •	When updating state that depends on the previous state, always use a function inside setState (e.g., setUser(prevUser => {...})).
    •	This guarantees that the state update is based on the most recent state, even if updates are batched or asynchronous.

*/