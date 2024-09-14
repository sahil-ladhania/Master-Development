/*

-----All About State Management-----

1. What is State Management ?
Explanation :-
* State management refers to the process of handling and maintaining the state or data of an application throughout its lifecycle.
* In frontend development, state typically represents the current condition or values of variables in an application.
* Effective state management is crucial for building dynamic and interactive user interfaces.
* In React and other frontend frameworks, there are various methods to manage state :-
    Local Component State -
        Each component in React can have its own local state managed using the `useState` hook.
        Local state is confined to the component it belongs to and is primarily used for managing component-specific data.
    Context API -
        React provides the Context API to manage global state that needs to be accessed by multiple components.
        It allows the sharing of state across the component tree without having to pass props manually through each level.
    State Management Libraries (e.g., Redux, Recoil) -
        Specialized state management libraries offer advanced features for handling complex global state in large applications.
        These libraries often introduce concepts like actions, reducers, and a centralized store for maintaining state.
    Recoil -
        Recoil is a state management library developed by Facebook specifically for React applications.
        It introduces the concept of atoms and selectors, providing a more flexible and scalable approach to managing and sharing state.
* Note -
    The choice of state management method depends on the complexity and requirements of the application.
    Effective state management enhances the predictability, maintainability, and scalability of the application, ensuring a smooth and responsive user experience.

2. What is Redux ?
Explanation :-
* Redux is a state management library used to manage and centralize application state across components.
* Key Point - It provides a predictable way to manage state with unidirectional data flow.

-----Introduction to Redux-----

1. What are the Basic Principles of Redux ?
Explanation :-
* Single Source of Truth - The entire application state is stored in a single object (store).
* State is Read-Only - State can only be changed by emitting an action.
* Changes are Made with Pure Functions - Reducers are pure functions that take current state and action, and return new state.

2. What are the use cases of Redux ?
Explanation :-
* Large applications where many components share state.
* Handling complex state logic.
* Predictable state management with time-travel debugging.

3. How to install and setup Redux ?
Explanation :-
* Install Redux and React-Redux via npm - npm install redux react-redux
* Set up a store and wrap your React app with the Provider component.

4. What is the concept of Actions in Redux ?
Explanation :-
* Actions are payloads of information sent to the store to update state.
* Key Point - They are plain JavaScript objects with a type property that describes the action being performed.

5. What is the difference between Redux, Redux Toolkit, and React-Redux ?
Explanation :-
* Redux :
	•	Redux is a state management library that provides a predictable way to manage application state.
	•	It includes concepts like store, reducers, and actions.
	•	Why it is used -
                        To manage global state in a scalable, predictable manner.
	•	How it is used -
                        Manually writing actions, reducers, and creating the store.
* Redux Toolkit :
	•	A more modern, simplified version of Redux that provides utilities to reduce boilerplate code.
	•	Why it is used -
                        It simplifies common tasks like setting up the store, handling actions, and creating slices.
	•	How it is used -
                        Provides createSlice, configureStore, and createAsyncThunk to simplify setup.
* React-Redux :
	•	A binding library that connects Redux to React.
	•	Why it is used -
                        To access Redux store and dispatch actions in React components.
	•	How it is used -
                        With hooks like useSelector and useDispatch, or older connect HOC.

6. What to Use with React ?
Explanation :-
* React-Redux is mandatory to connect Redux with React.
* Redux Toolkit is highly recommended over plain Redux because it simplifies setup and reduces boilerplate.
* The combination you use in React apps :
	Redux Toolkit for managing state.
	React-Redux for connecting Redux to React components.

-----Basics of Redux-----

1. What is a Store ?
Explanation :-
* What it is - The single source of truth where the entire app’s state is stored.
* Why it is used - To centralize and manage all the state in one place.
* How it is used - You create a store using configureStore or createStore.
* Ex -
    export const store = configureStore({
        reducer: todoReducer
    });

2. What are Reducers ?
Explanation :-
* What they are - Pure functions that specify how the state changes in response to actions.
* Why they are used - To update the store’s state based on specific actions.
* How they are used - Reducers take the current state and an action and return a new state.
* Ex -
    const todoSlice = createSlice({
        name: 'todo',
        initialState,
        reducers: {
            addTodo: (state, action) => {
                state.todos.push({ id: nanoid(), text: action.payload });
            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter(todo => todo.id !== action.payload);
            },
        },
    });

3. What is useSelector ?
Explanation :-
* What it is - A React hook that allows you to access state from the Redux store in a component.
* Why it is used - To read specific parts of the state without re-rendering the entire app.
* How it is used - Inside functional components.
* Ex -
    const todos = useSelector((state) => state.todos);

4. What is useDispatch ?
Explanation :-
* What it is - A React hook used to dispatch actions to the Redux store.
* Why it is used - To trigger state changes by dispatching actions.
* How it is used - Called inside event handlers or logic functions in components.
* Ex -
    const dispatch = useDispatch();
    dispatch(addTodo(input));

-----Basic Flow of Using Redux While Building an App-----

1. How to setup/use Redux while building an App in React ?
Explanation :-
* Define the Store :
    Start by setting up the store using configureStore from Redux Toolkit.
    Include all your reducers inside the store configuration.
    Ex -
        import { configureStore } from '@reduxjs/toolkit';
        import todoReducer from '../features/todo/todoSlice';
        export const store = configureStore({ reducer: todoReducer });
* Create a Slice/Reducer :
    Define a slice using createSlice from Redux Toolkit.
    This will contain the initial state, reducers, and actions.
    Ex -
        export const todoSlice = createSlice({
            name: 'todo',
            initialState,
            reducers: {
                addTodo: (state, action) => { Logic }
                removeTodo: (state, action) => { Logic }
            },
        });
        export const { addTodo, removeTodo } = todoSlice.actions;
        export default todoSlice.reducer;
* Connect Store with React :
    Use the Provider from React-Redux to wrap your React app, passing in the store so that all components can access the global state.
    Ex -
        import { Provider } from 'react-redux';
        import { store } from './app/store';
        <Provider store={store}>
            <App />
        </Provider>;
* Access State in Components (useSelector) :
    Inside a React component (e.g., Todos), use the useSelector hook to retrieve the state from the Redux store.
    Ex -
        const todos = useSelector((state) => state.todos);
* Dispatch Actions (useDispatch) :
    In components where you want to modify the state (e.g., adding/removing todos), use useDispatch to trigger actions.
    Ex -
        const dispatch = useDispatch();
        dispatch(addTodo(input)); -----> Adds a new todo item
* Handle Actions in Reducers :
    The dispatched action will be caught by the reducer defined in your slice (todoSlice), and it will update the state.
    Ex -
        export const todoSlice = createSlice({
            // reducer logic handling addTodo and removeTodo
        });
* Render State in Components :
    After updating the state, React components that use useSelector will re-render with the new state.
    Ex -
        return todos.map(todo => <div>{todo.text}</div>);

-----Setting Up the Redux Store-----

1. What is Redux Store ?
Explanation :-
* The store is the centralized place that holds the application state.
* Key Point - It provides methods like getState(), dispatch(), and subscribe() to manage and access state.

2. How to create a Redux Store ?
Explanation :-
* Use createStore() function from Redux :
    import { createStore } from 'redux';
    const store = createStore(reducer);

3. How to access a Redux Store ?
Explanation :-
* Access store using store.getState() or via the useSelector hook in React components.

4. What is Reducers in Redux ?
Explanation :-
* Reducers are pure functions that determine how state changes in response to actions.
* Key Point - They take current state and an action, and return the new state.

-----Actions in Redux-----

1. How to create a Basic Action ?
Explanation :-
* Define an action as a plain JavaScript object with a type and optionally a payload.
* Ex -
    const incrementAction = { type: 'INCREMENT' };

2. What is Action Object ?
Explanation :-
* Action objects have at least a type property, and they describe what should happen in the state.

3. How to Dispatch Actions ?
Explanation :-
* Actions are dispatched using store.dispatch().
* Ex -
    store.dispatch(incrementAction);

4. How to create Asynchronous Actions ?
Explanation :-
* Use middleware like redux-thunk for async actions.
* Ex -
    const fetchData = () => (dispatch) => {
        fetch('/data')
            .then(response => response.json())
            .then(data => dispatch({ type: 'FETCH_SUCCESS', payload: data }));
    };

5. How to use Actions Creators ?
Explanation :-
* Action creators are functions that return action objects.
* Ex -
    const increment = () => ({ type: 'INCREMENT' });

-----Reducers in Redux-----

1. What is the Basics of Reducers ?
Explanation :-
* Reducers are functions that specify how the application’s state changes based on actions.
* Key Point - They must be pure and return the updated state.

2. What is Actions and Reducers ?
Explanation :-
* Actions trigger state changes, and reducers define how state changes in response to actions.

3. What is Composition of Reducers ?
Explanation :-
* Splitting large reducers into smaller ones and combining them using combineReducers().

4. What does Splitting of Reducers means ?
Explanation :-
* Splitting reducers allows you to manage different parts of the state with separate reducers.

5. What is the Logic behind Reducers ?
Explanation :-
* Reducers ensure predictable state transitions based on the action type and payload.

-----Middlewares in Redux-----

1. What is Middleware ?
Explanation :-
* Middleware is code that runs between dispatching an action and the moment it reaches the reducer.
* Key Point: Used for logging, async operations, etc.

2. How to create a Middleware ?
Explanation :-
* Middleware is a function that returns a function and has access to dispatch and getState.
* Ex -
    const logger = store => next => action => {
        console.log('dispatching', action);
        return next(action);
    };

3. What is Redux Thunk ?
Explanation :-
* A middleware that allows writing async logic with Redux by dispatching functions instead of actions.

4. How to use Redux Thunk for Async Logic ?
Explanation :-
* With Redux Thunk, you can dispatch async actions.
* Ex -
    const fetchData = () => async (dispatch) => {
        const response = await fetch('/api/data');
        const data = await response.json();
        dispatch({ type: 'DATA_LOADED', payload: data });
    };

5. How to log Middleware ?
Explanation :-
* Use a middleware like redux-logger to log actions.
* For Installation - npm install redux-logger

6. How to handle Asynchronous logic in Middleware ?
Explanation :-
* Use middlewares like redux-thunk or redux-saga to handle async operations.

-----Integration with React-----

1. What is React-Redux combine ?
Explanation :-
* React-Redux combines Redux with React, allowing components to access state from the store.

2. How to setup React-Redux Provider ?
Explanation :-
* Wrap the root component in the Provider from react-redux to pass the store to the app.
* Ex -
    import { Provider } from 'react-redux';
    <Provider store={store}>
        <App />
    </Provider>

3. How to connect Redux Store to React ?
Explanation :-
* Use the useSelector hook to read from the store and useDispatch to dispatch actions in functional components.

4. How to use Redux Hooks in Functional Components ?
Explanation :-
* useSelector - Selects data from the Redux store.
* useDispatch - Dispatches actions to the store.

-----Error Handeling in Redux-----

1. What is the Basics of Error Management ?
Explanation :-
* Error management ensures smooth user experience by catching errors and preventing app crashes.
* Key Point - Handle both synchronous and asynchronous errors in Redux, especially during API calls.

2. How to handle Synchronous Errors in Redux ?
Explanation :-
* Use try-catch blocks inside reducers or when dispatching actions to catch any immediate errors.
* Ex -
    const reducer = (state, action) => {
        try {
            // logic
        }
        catch (error) {
            console.error(error);
        }
    };

3. How to handle Asynchronous Errors in Redux ?
Explanation :-
* Wrap async action creators (like API calls) in try-catch to handle failures.
* Ex -
    const fetchData = () => async (dispatch) => {
        try {
            const response = await fetch('/data');
            const data = await response.json();
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error });
        }
    };

4. How to use Error Boundaries with Redux ?
Explanation :-
* Error boundaries are a React feature that allows catching errors in the component tree.
* Combine error boundaries with Redux to handle component-level errors gracefully, ensuring state consistency.

-----Redux DevTools-----

1. How to setup Redux DevTools ?
Explanation :-
* Install Redux DevTools for your browser and integrate it with the store using composeWithDevTools.
* Ex -
    import { createStore } from 'redux';
    import { composeWithDevTools } from 'redux-devtools-extension';
    const store = createStore(reducer, composeWithDevTools());

2. How to inspect State and Actions with DevTools ?
Explanation :-
* In the DevTools panel, track the state changes and actions dispatched during app interaction, providing an overview of how state evolves.

3. What is Time Travelling with Redux DevTools ?
Explanation :-
* Time travelling allows you to go back and forth through the application’s dispatched actions and state changes to debug behavior over time.

4. How to use DevTools in Debugging ?
Explanation :-
* Use the “diff” feature to compare previous and current state changes and locate issues with specific actions.

-----Performance and Optimization in Redux-----

1. What are some Common Performance Issues ?
Explanation :-
* Over-dispatching actions.
* Unnecessary re-renders caused by deeply nested state changes.
* Inefficient selectors and excessive API calls.

2. How to use Reselect for Memoization ?
Explanation :-
* Reselect creates memoized selectors, which help prevent unnecessary re-renders by recomputing derived state only when relevant input changes.
* Ex -
    import { createSelector } from 'reselect';
    const selectItems = state => state.items;
    const selectVisibleItems = createSelector(
        [selectItems],
        items => items.filter(item => item.visible)
    );

3. What does it mean by Normalizing Stale Shape ?
Explanation :-
* Storing state in a flat, normalized format to avoid deeply nested data structures, which can lead to performance degradation. Tools like normalizr can help.

4. How to Avoid un-necessary renders and computations ?
Explanation :-
* Use memoized selectors (Reselect).
* Split large components into smaller ones and only re-render relevant parts.
* Use the useMemo and useCallback hooks in React to optimize rendering.

-----Advanced Redux Practices-----

1. What is Redux-Saga ?
Explanation :-
* Redux-Saga is a middleware for handling complex side effects (like async calls) by using generator functions.
* Key Point - Sagas listen to actions and run side effects outside the main Redux flow.

2. What is Server Side Rendering with Redux ?
Explanation :-
* Server-Side Rendering (SSR) with Redux involves hydrating the initial state on the server and passing it to the client to render the app with data already available.

3. What is Code Splitting and Lazy Loading in Redux ?
Explanation :-
* Code splitting allows loading only the parts of the application that are required at runtime, which helps in performance optimization, especially for large apps.
* Lazy load reducers using combineReducers dynamically when new parts of the app are loaded.

4. How to use Immutable.js for Immutable State ?
Explanation :-
* Immutable.js helps manage immutable data structures in Redux, ensuring that state updates return new copies rather than modifying the existing state directly.

*/
