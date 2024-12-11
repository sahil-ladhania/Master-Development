/*

-----All About State Management-----

1. What is a State?
Explanation :-
* State is ek JavaScript object jo kisi component ke andar data ko track karne ke liye use hota hai. 
* Yeh data dynamically change ho sakta hai depending on user actions ya application logic.
* Ex - 
    Agar ek button ka “like count” dikhana ho, toh likeCount state ke andar rakhenge. 
    Jab user button click karega, toh yeh state update hogi aur UI reflect karega.
    const [likeCount, setLikeCount] = useState(0); -----> React State


2. Why do we need to manage the State?
Explanation :-
* State ko manage karna zaroori hai kyunki application ke behavior aur UI ka data ke saath sync rehna zaroori hai.
* Key Reasons :
    UI Re-rendering - 
        Jab bhi state change hoti hai, React automatically UI ko re-render karta hai, jisse user ko updated information milti hai.
	Complexity Handling - 
        Bade applications mein bohot saare components hote hain jo same data share karte hain. 
        Agar state management sahi se na ho, toh bugs aur data inconsistencies ho sakti hain.
	Predictability - 
        State management tools (like Redux) ek predictable pattern provide karte hain jisme app ka data flow samajhna aur debug karna asaan hota hai.


3. What are different ways to manage State?
Explanation :-
* State management ke liye different approaches hain :
    Local State - 
        React ka inbuilt useState hook ya class components mein this.state.
        •	Usage - Single component ke liye simple state management.
	    •	Limitation - Ek component ke state ko doosre components ke saath share karna mushkil hota hai.
    Global State - 
        Entire application ke liye ek shared state jisme multiple components ko data access karne ki ability hoti hai.
        •	Tools - Redux, MobX, Zustand, Jotai, Recoil.
    Context API - 
        React ka inbuilt API jo data ko props drilling ke bina deeply nested components tak pohchane deta hai.
        •	Usage - Small-scale apps ya jab global state kaafi simple ho.
	    •	Limitation - Large-scale apps ke liye Context API slow aur complex ho sakti hai.
    Server State - 
        Server-side se fetch kiya gaya data ko manage karna, jaise API responses.
    	•	Tools - React Query, SWR
	    •	Usage - Real-time server syncing ke liye.
    URL State - 
        URL ke query parameters ya path ke through state ko track karna.
        •	Tools - React Router.


4. Why to use any state management tool over Context and Reducer?
Explanation :-
* Context + Reducer kaafi helpful hote hain par large-scale apps ke liye limitations hoti hain, isliye tools like Redux prefer kiye jaate hain.
* Limitations of Context + Reducer :
    Performance Issues - 
        Jab bhi context value update hoti hai, us context ke sabhi consuming components re-render hote hain, chahe unko change ki zarurat na ho.
	Boilerplate Code - 
        Reducer ke saath implementation mein kaafi repetitive aur verbose code likhna padta hai.
	Debugging Difficulty - 
        Context API ke through complex data flow ko debug karna mushkil hota hai.
* Why Redux (or other tools) :
    Centralized Store - 
        Redux ek centralized store provide karta hai jaha saara global state ek jagah maintain hota hai.
	Predictable State Updates - 
        Actions aur reducers ke wajah se Redux ka data flow predictable aur testable hota hai.
	Middleware Support - 
        Asynchronous tasks (like API calls) ko Redux middleware (like redux-thunk ya redux-saga) ke through handle karna asaan hota hai.
	DevTools - 
        Redux DevTools debugging ke liye kaafi powerful hoti hain.
	Scalability - 
        Bade apps ke liye Redux ka architecture scalable aur maintainable hota hai.


5. What is State Management ?
Explanation :-
* State Management ka matlab hai application ke state (data) ko effectively track karna aur control karna jisse application ka behavior predictable aur organized rahe.
* Jab ek application mein kai components hote hain, jo ek doosre ke saath interact karte hain ya data share karte hain, toh un sab ke beech state ko manage karna complex ho sakta hai. 
* State Management ka purpose yeh complexity ko handle karna hai.
* Key Concepts of State Management - 
    State Definition -
        •	State is woh data jo kisi specific moment pe application ko describe karta hai.
	    •	Example: Current user details, logged-in status, cart items, etc.
	State Flow -
	    •	Single Source of Truth - Saari state ek jagah maintain hoti hai aur sabhi components ko wahi state milti hai.
	    •	Unidirectional Data Flow - State changes ek specific pattern follow karte hain, jaise Redux mein actions → reducers → store.
	State Updates -
	    •	State ko directly mutate nahi karna chahiye. 
        •	Updates hamesha controlled aur predictable hone chahiye (e.g., using setState, reducers, etc.).
* Real-Life Analogy :
    Sochiye ek factory hai jisme raw materials (state) ko manage karna hai.
	State Management ka kaam hai raw materials ko sahi jagah, sahi time pe deliver karna aur ensure karna ki factory smoothly kaam kare.
    Agar factory mein materials ka flow unpredictable ho, toh chaos ho jayega (UI aur logic unsynced ho jayenge). 
    State Management isi chaos ko control karta hai.
* Note -
    The choice of state management method depends on the complexity and requirements of the application.
    Effective state management enhances the predictability, maintainability, and scalability of the application, ensuring a smooth and responsive user experience.


6. What is Redux ?
Explanation :-
* Redux ek JavaScript library hai jo application state management ke liye use hoti hai. 
* Yeh ek predictable state container provide karti hai, jisme aapka entire application ka state ek centralized store mein hota hai.
* Key Features of Redux :
	Centralized State Management - 
        Redux ek single source of truth maintain karta hai, jisme poora state ek hi store ke andar hota hai.
	Predictable State Updates - 
        Redux ka state update hone ka process ek fixed flow follow karta hai - Action → Reducer → New State
	Unidirectional Data Flow - 
        Redux data ko ek direction mein flow karne deta hai, jo debugging aur maintenance ko asaan banata hai.
	Middleware Support - 
        Redux ko asynchronous tasks (like API calls) handle karne ke liye middleware use karte hain, jaise redux-thunk ya redux-saga.
* Redux Flow (How it Works) :
    Redux ka kaam ek 3-step process par based hota hai.
    Store - 
        Redux ka store ek jagah hota hai jaha application ka entire state store hota hai.
        Yeh ek read-only object hai jo state ko maintain karta hai aur components ke saath share karta hai.
    Action -
        Action ek object hota hai jo state mein change karne ka intent batata hai.
        Ex - 
            const incrementAction = {
                type: 'INCREMENT',   ---> Action Type
                payload: 1           ---> Data to update
            };
    Reducer - 
        Reducer ek pure function hota hai jo old state aur action ko accept karta hai aur ek new state return karta hai.
        Ex - 
            const counterReducer = (state = 0, action) => {
                switch (action.type) {
                    case 'INCREMENT':
                    return state + action.payload;
                    case 'DECREMENT':
                    return state - action.payload;
                    default:
                    return state;
                }
            };
* Real-Life Analogy of Redux :
    Sochiye ek banking system hai jisme Redux kaam karta hai.
    Store - Bank ka ek centralized account hai jo sabka balance store karta hai.
    Action - Customer form submit karta hai (e.g., deposit ₹100).
    Reducer - Bank ka system deposit ka logic run karta hai aur account ka new balance calculate karta hai.
    Updated State - Balance update hone ke baad customer ko updated amount dikhta hai.
* Redux Flow in Diagram - 
    Components --> Dispatch an Action --> Reducer --> Store (State Updated) --> Components Re-render


-----Introduction to Redux-----

1. What are the Basic Principles of Redux ?
Explanation :-
* Redux ke architecture ke piche teen important principles hote hain jo state management ko simple, predictable, aur scalable banate hain.
    •	Single Source of Truth :
        Redux mein poora application ka state ek hi centralized store mein maintain hota hai.
        Yeh ek single source of truth ka concept hai, jaha saari information ek jagah pe hoti hai, jo sab components ke liye accessible hoti hai.
        Why is it important :
        	Consistency - 
                Application ka har component ek hi state ko use karega, isse data mismatch nahi hoga.
	        Easier Debugging - 
                Agar koi bug aata hai, toh aap ek hi store ka state check karke samajh sakte ho kaha problem hai.
	        Global Accessibility - 
                Redux ka store kisi bhi component ke liye accessible hota hai, chahe wo kitne bhi nested ho.
        Yeh store saari information ek jagah store karta hai aur sare components ke liye ek trusted data source hai.
        Ex - 
            const store = {
                user: { name: "Sahil", age: 22 },
                cart: [ { id: 1, name: "Book", price: 200 } ],
                isLoggedIn: true
            };
    •	State is Read-Only :
            Redux ke store ka state directly mutate (modify) nahi kiya ja sakta. 
            Agar aapko state change karna hai, toh aapko actions aur reducers ke through karna hoga.
            Why is it important :
            	Immutable State - 
                    Directly state ko modify karna unpredictable behavior create kar sakta hai. 
                    Redux mein state immutability maintain hoti hai.
	            Predictable Updates - 
                    State hamesha ek fixed process (Action → Reducer → New State) ke through update hota hai, jo debugging aur testing ke liye helpful hai.
                Ex - 
                    Incorrect way (Mutating State).
                        store.user.name = "Aman"; ---> Direct modification (Not allowed in Redux)
                    Correct way.
                        const action = { type: "UPDATE_USER_NAME", payload: "Aman" };
                        ---> Reducer state ko immutably update karega
    •	Changes are Made with Pure Functions :
            Redux mein state changes karne ka kaam reducers handle karte hain, jo pure functions hote hain.
            Pure Function ka matlab hai ek function ka output sirf uske inputs pe depend karta hai, aur wo koi side-effects nahi produce karta.
            Ex - 
                const counterReducer = (state = 0, action) => {
                    switch (action.type) {
                        case "INCREMENT":
                        return state + 1;
                        case "DECREMENT":
                        return state - 1;
                        default:
                        return state; ---> Pure function ensures no mutation of state
                    }
                };
            Why Pure Functions :
                Predictable State Updates - Pure functions ensure ki same inputs ke liye hamesha same output milega.
	            Debugging is Easier - Pure functions mein koi hidden side-effects nahi hote, toh debugging easy hota hai.
	            State Immutability - State ko mutate karne ke bajaye nayi state return hoti hai, jo Redux ke principle ko maintain karta hai.


2. What are the use cases of Redux ?
Explanation :-
* Redux ko har application mein use karna zaroori nahi hota, lekin kuch specific scenarios aur use cases hote hain jaha Redux kaafi helpful sabit hota hai.
* Usecases :
    Complex State Management :
        Use Case - 
            Agar application ka state kaafi complex aur interconnected hai, jaise multiple components ko ek hi state share karna ho.
            Ex - 
                E-commerce app: Cart state, user state, and product details state share hona chahiye across components (e.g., Navbar, Product List, Cart Page).
    Global State Sharing :
        Use Case - 
            Jab state ko deeply nested components ke saath share karna ho, jaha props drilling tedious ho sakta hai.
            Ex - 
                Authentication - Logged-in user ka data (username, token) poore app mein accessible hona chahiye. Redux isse efficiently handle karta hai.
                Theme Management - Light/Dark theme ka state poore application ke multiple components mein propagate karna.
    Consistent State Across Views :
        Use Case - 
            Agar app mein ek view pe hone wale state changes ka impact dusre view pe bhi dekhna ho.
            Ex - 
                Real-time Chat Application - Ek user ka message kisi aur user ke screen pe turant dikhna chahiye.
                Stock Trading App - Price updates ko multiple screens pe sync karna.
    Debugging and Testing :
        Use Case - 
            Jab application ka state aur uske transitions ko track karna ho for debugging aur testing.
            Ex - 
                Large applications jaha state changes ka impact samajhna ho. Redux ke saath Redux DevTools milta hai jo state changes ka graphical representation deta hai.
    API Calls and Asynchronous Actions :
        Use Case - 
            Jab multiple asynchronous API calls ko handle karna ho aur unka state manage karna ho.
            Ex - 
                Data fetching - API se data fetch karne ke baad loading, success, ya error state track karna.
                Pagination - Server se paginated data fetch karte samay Redux middleware ka use karna.
    State Persistence :
        Use Case - 
            Jab application ka state localStorage ya sessionStorage ke through persist karna ho.
            Ex -    
                Form data persistence - Agar user ne kuch data fill kiya aur page refresh ho gaya, toh data lose na ho.
                Cart Management - E-commerce app ka cart state browser close hone ke baad bhi wapas aaye.
    Real-Time Applications :
        Use Case - 
            Jab app mein real-time data updates dikhane ho, jaise notifications ya live updates.
            Ex - 
                Sports Live Score App - Redux ek consistent state maintain karne mein help karta hai.
                Real-time location tracking - Delivery app mein delivery boy ka live location track karna.
    Large-Scale Applications :
        Use Case - 
            Jab application ka size bada ho aur state ka management complex ho raha ho.
        Ex - 
            SaaS Platforms - Multiple dashboards, user roles, aur permissions ko efficiently manage karna.
            Content Management System (CMS) - Different user access levels aur content states ka management.
    Avoiding Props Drilling :
        Use Case -
            Jab deeply nested components ko parent ke through state pass karna tedious ho raha ho.
            Ex - 
                Nested Comment Systems - Comment replies aur votes ka state manage karna.
    Multi-Step Workflows :
        Use Case - 
            Jab application ke andar ek multi-step workflow ho jisme states ko carry forward karna ho.
            Ex - 
                Form Wizard - Multi-step forms jaha har step ka state track karna ho.
                Checkout Process - E-commerce app ka cart, delivery address, payment info ka state handle karna.
* When NOT to Use Redux :
    Agar application -
	    •	Small hai aur sirf local state sufficient hai.
	    •	Simple UI aur less dynamic interactions hai.
	    •	Context API aur hooks (like useState, useReducer) kaam kar rahe hain.


3. How to install and setup Redux ?
Explanation :-
* Install Redux and React-Redux via npm - npm install redux react-redux
* Set up a store and wrap your React app with the Provider component.


6. What is the difference between Redux, Redux Toolkit, and React-Redux ?
Explanation :-
* Redux ecosystem mein ye teeno tools kaafi important roles play karte hain, lekin inke kaam aur functionalities alag hain. 
* Redux :
    Redux ek state management library hai jo predictable state management provide karti hai. 
    Ye ek standalone library hai aur kisi bhi UI framework ke saath use ki ja sakti hai (React, Angular, Vue, etc.).
    Features :
        •	Predictable state container.
        •	Manages global state and provides a unidirectional data flow.
        •	Consists of three main components - Store, Actions, and Reducers.
    Use Case :
        Agar aapko ek application ka complex state manage karna hai aur aap Redux ka manual implementation karna chahte ho, toh use karte hain.
    Challenges in Redux :
        Boilerplate Code - Actions, reducers, and store setup karna manually kaafi verbose hota hai.
	    Middleware Setup - Async actions handle karna (e.g., API calls) ke liye manually middleware add karna padta hai (like redux-thunk).
	    Scalability Issues - Badi applications ke liye Redux setup complex aur time-consuming ho sakta hai.
* Redux Toolkit (RTK) :
    Redux Toolkit (RTK) ek opinionated abstraction hai jo Redux ka ek modern and developer-friendly version provide karta hai. 
    Ye Redux ka “official, recommended way” hai for efficient state management.
    Features :
        •	Simplified Configuration - Store setup karna kaafi easy hota hai using configureStore().
	    •	Less Boilerplate - RTK reducers ko handle karne ke liye createSlice() provide karta hai, jo actions aur reducers ko ek saath define karta hai.
	    •	Built-in Middleware - Async actions ke liye redux-thunk by default included hota hai.
	    •	Immutability with Immer - RTK internally Immer.js use karta hai, jisse state mutations easy aur safe ho jati hain.
	    •	Built-in Utilities - Jaise createAsyncThunk for handling async logic like API calls.
    Use Case :
        Jab Redux ke complexity ko kam karke modern tools ke saath kaam karna ho, jaise ek scalable aur maintainable architecture banana.
* React-Redux :
    React-Redux ek library hai jo Redux ko React applications ke saath integrate karne ke liye use hoti hai. 
    Ye React aur Redux ke beech ek bridge ka kaam karta hai.
    Features :
        •	Provides Provider component to connect Redux store to React component tree.
	    •	Simplifies state access using useSelector hook (to read state) and useDispatch hook (to dispatch actions).
	    •	Manages performance optimizations automatically.
    Use Case : 
        Jab Redux ko specifically React applications mein use karna ho.
    Example Workflow :
        Wrap your app with <Provider> to make Redux store accessible in React.
	    Use useSelector to access state in functional components.
	    Use useDispatch to dispatch actions from components.
* Refer to image in the folder.


7. What to Use with React ?
Explanation :-
* React-Redux is mandatory to connect Redux with React.
* Redux Toolkit is highly recommended over plain Redux because it simplifies setup and reduces boilerplate.
* The combination you use in React apps :
	Redux Toolkit for managing state.
	React-Redux for connecting Redux to React components.


-----Basics of Redux-----

1. What is the concept of Actions in Redux ?
Explanation :-
* Redux mein Actions ek fundamental concept hai jo application ke state ko update karne ke liye use hota hai. 
* Redux mein, Action ek plain JavaScript object hota hai jo describe karta hai ki application mein kya change karna hai.
    •	Action ka type property hota hai jo batata hai ki kis tarah ka kaam hona chahiye.
	•	Agar zarurat ho, additional data ko carry karne ke liye payload property ka use hota hai.
* Why Actions are Used :
    Redux ke architecture mein, state ko directly update karna allowed nahi hota.
    Actions ek communication channel provide karte hain jo components se Redux store ko batata hai ki kya karna hai.
    Ex - 
        Button click hone pe ek specific action dispatch hota hai jo state change karta hai.
* Structure of an Action :
    Ek action ke structure mein do main cheezein hoti hain.
        type - Ek string constant jo action ko identify karta hai.
	    payload - (Optional) Extra information jo state update ke liye chahiye hoti hai.
    Ex - 
        const incrementAction = {
            type: "INCREMENT" ---> Describes what action is being performed
        };
        const addToCartAction = {
            type: "ADD_TO_CART",
            payload: { ---> Extra Info
                id: 1,
                name: "Laptop",
                price: 50000
            }
        };
* Key Points About Actions :
	•	Immutable - Actions ko mutate nahi kiya ja sakta.
	•	Plain Object - Action ek plain JavaScript object hota hai.
	•	Descriptive - Type property hamesha describe karti hai ki action kya perform karega.
	•	Middleware Support - Middleware (like redux-thunk ya redux-saga) asynchronous actions ke liye extra capabilities add karte hain.
* How Actions Work in Redux Flow :
    Actions Redux ke data flow mein ek important role play karte hain.
    	Dispatch an Action - Jab user koi event trigger karta hai (e.g., button click), toh ek action dispatch hota hai.
	    Reducer Receives the Action - Reducer action ka type check karta hai aur uske basis pe nayi state return karta hai.
    Flow :
    	User triggers an event (e.g., clicks a button).
	    An action is created and dispatched to the store.
	    The store sends the action to the reducer.
	    The reducer processes the action and updates the state.
	    The updated state is passed to the UI.
* Example of Action Creation in Redux :
    Without Action Creator -
        const incrementAction = {
            type: "INCREMENT"
        };
    With Action Creator (Function) -
        const increment = () => {
            return { type: "INCREMENT" };
        };
        const addToCart = (item) => {
            return {
                type: "ADD_TO_CART",
                payload: item
            };
        };
* Why Use Action Creators :
    •	Reusable functions for creating actions.
	•	Reduces duplication and makes code cleaner.
* Synchronous vs Asynchronous Actions :
    Synchronous Actions -
        Directly dispatch hone wale actions jo reducers ko immediately trigger karte hain.
        Ex - 
            const increment = () => ({ type: "INCREMENT" });
            store.dispatch(increment());
    Asynchronous Actions -
        Agar koi async operation (like API call) perform karna ho, toh middleware ka use hota hai (e.g., redux-thunk ya redux-saga).
        Ex - 
            const fetchData = () => {
                return async (dispatch) => {
                    const data = await fetch("https://api.example.com/data");
                    const result = await data.json();
                    dispatch({ type: "FETCH_SUCCESS", payload: result });
                };
            };

2. What is a Store ?
Explanation :-
* Redux mein Store ek aisa container hai jisme application ka poora state store hota hai. 
* Yaani, jo bhi data aapke app ko manage karne ke liye zaroori hai, wo sab store mein hota hai.
* Key Points About Store :
    Centralized State -
        Store mein saara state centralized hota hai. 
        Matlab, jitni bhi components ko application ke state ki zaroorat hoti hai, wo sab Redux ke store se interact karte hain.
    Read-Only State - 
        Store ka state read-only hota hai. 
        Aap direct state ko change nahi kar sakte. Agar state ko update karna hai, toh aapko actions dispatch karne padte hain, aur reducers ke through state ko update kiya jata hai.
    Only One Store - 
        Redux mein ek hi store hota hai, jo poore app ke liye state ko manage karta hai. 
        Yeh single source of truth ka concept follow karta hai, yani state ka ek hi source hota hai.
    Store Methods - 
        Redux store kuch important methods provide karta hai jo aapko state ke saath interact karne mein help karte hain.
            getState() - 
                Yeh method current state ko return karta hai.
            dispatch(action) - 
                Jab bhi aapko state ko update karna ho, toh aap action dispatch karte ho jo store ke through state ko update karta hai.
            subscribe(listener) - 
                Yeh method state mein koi change hone par listener ko notify karta hai. 
                React components isse use karte hain taaki jab state change ho, toh component re-render ho jaye.
    Store Update Kaise Hoti Hai -
        Store ki state ko update karne ke liye actions dispatch kiye jaate hain. 
        Action batata hai ki state mein kya change karna hai, aur reducers decide karte hain ki state mein actual changes kaise apply honge.

3. What are Reducers ?
Explanation :-
* Reducers ek aise pure functions hote hain jo application ke state ko update karte hain. 
* Jab aap action dispatch karte ho, reducer decide karta hai ki us action ke basis pe state kaise update hoga.
* Key Points About Reducers :
    Pure Functions - 
        Reducers pure functions hote hain, yani jo input dene par predictable output denge. 
        Agar same input hoga, toh hamesha same output milega. 
        Yeh function state aur action ko input leta hai aur new state return karta hai.
    State Update - 
        Reducers state ko update karte hain, lekin wo directly state ko mutate (change) nahi karte. 
        Instead, wo naya state object return karte hain, jo purane state ki copy hoti hai with updated values.
    Immutable State - 
        Redux mein state ko immutable rakhna hota hai, yani aap state ko directly modify nahi kar sakte. 
        Agar aapko state update karni hai, toh aapko spread operator ya koi aur method use karke naya state object create karna padta hai.
    Handling Actions - 
        Reducer ko action milta hai, jisme ek type hota hai jo batata hai ki state mein kya change karna hai. 
        Reducer action ke type ko check karta hai aur accordingly state ko update karta hai.
    Initial State - 
        Reducer ko ek initial state chahiye hota hai, jo default value ko set karta hai jab state pehli baar initialize hota hai.
* How Reducers Work :
    State aur Action ko Input Ke Roop Mein Lena -
        Reducer function ko do arguments milte hain.
            State (current state) - Yeh wo state hoti hai jo abhi tak update ho chuki hoti hai.
            Action - Yeh wo object hota hai jo type (action ka type) aur kabhi-kabhi payload (additional data) carry karta hai.
    State ko Update Karna -
        Reducer action ke type ko dekhkar state ko update karta hai aur naya state object return karta hai.


4. What is useSelector ?
Explanation :-
* useSelector ek React-Redux hook hai jo aapko Redux store ke state ko read karne mein madad karta hai. 
* Iska use karke aap Redux store se kisi bhi specific part ko access kar sakte ho.
* Key Points about useSelector :
    State Access -
        useSelector ko Redux store ka state provide hota hai, aur isse aap wo specific data select kar sakte ho jo aapko component mein chahiye.
    Selector Function -
        useSelector ko ek selector function dena padta hai, jo state ko input ke roop mein leta hai aur wo value return karta hai jo aapko chahiye.
    Automatic Re-rendering -
        Jab bhi store ka state change hota hai, useSelector hook se related component re-render ho jata hai, jo ek reactive approach deta hai.
    Memoization -
        React-Redux internally selector function ko optimize karta hai. 
        Agar state ke selected part mein koi change nahi hota, toh component re-render nahi hota.


5. What is useDispatch ?
Explanation :-
* useDispatch ek aur React-Redux hook hai jo aapko actions dispatch karne mein madad karta hai. 
* Iska use karke aap Redux store mein koi action send kar sakte ho jo state ko update kare.
* Key Points about useDispatch :
    Dispatching Actions -
        useDispatch aapko ek dispatch function deta hai, jisse aap Redux store ko actions bhej sakte ho.
    Triggering State Changes -
        Action dispatch karte waqt, aap state ko update karne ke liye action object send karte ho jo ek type aur payload carry karta hai.
    Component se State Update -
        useDispatch ko use karke aap component se direct Redux store ko update kar sakte ho.


-----Imp Methods-----

1. What is configureStore ?
Explanation :-
* Purpose - Creates the Redux store.
* Options :
	reducer - An object mapping slice names to their reducers.
* Type - Takes an object as input.


2. What is createSlice ?
Explanation :-
* Purpose - Simplifies creating slices of the state.
* Options :
	name - A string to identify the slice.
	initialState - The initial state for the slice.
	reducers - An object defining reducer functions.
* Returns : 
    An object with -
	    actions - Automatically generated action creators.
	    reducer - The slice reducer function.


3. What is useDispatch ?
Explanation :-
* Purpose - A React hook to access the dispatch function.
* Usage - Call it in a component to dispatch actions.
* Returns - The dispatch function.


-----Redux Flow-----

1. How is the Redux Flow works in a React App ?
Explanation :-
* Refer to Image in the Folder.
* Component Interaction -
	A component (e.g., a button) initiates an action by dispatching it. This could be in response to a user interaction like a click event.
* Dispatching an Action -
	The action, which is essentially an object describing what happened (with a type and optionally a payload), is dispatched to the Redux store.
* Reducer -
	The reducer function takes the current state and the action as arguments. It uses the action’s type to decide how to update the state and then returns a new state.
* Store -
	The store updates its state with the new state returned by the reducer.
	It then triggers a re-render of the components that are subscribed to the updated state.
* Component Re-renders -
	The components that rely on the updated part of the state will re-render to reflect the new data.


-----Basic Flow of Using Redux-Toolkit While Building an App-----

1. How to setup/use Redux-Toolkit while building an App in React ?
Explanation :-
* To set up and use Redux Toolkit (RTK) in a React app, follow these step-by-step instructions. 
* We’ll cover how to set up Redux Toolkit, create a Redux store, and use it in your components.
* Install Required Packages :
    npm install @reduxjs/toolkit react-redux
* Create a Redux Store :
    Once the dependencies are installed, you need to create a Redux store using configureStore from Redux Toolkit.
    Steps to Create Store -
        Create a store.js file inside your src folder (or any folder you prefer).
        Use configureStore to create your Redux store and pass it reducers.
        configureStore automatically sets up Redux DevTools and middlewares for you, so you don’t need to manually configure them.
* Create a Slice (Reducers and Actions) :
    Redux Toolkit introduces a concept called Slice which combines reducers and actions. 
    You can create your slices for different features in your app.
    Steps to Create a Slice -
        Create a new file for your slice, e.g., userSlice.js.
        Use createSlice from Redux Toolkit to create the state, reducers, and actions for your feature.
* Provide the Store to React :
    To make the Redux store available to all React components, wrap your root component (App.js) with the Provider component from React-Redux.
    Steps to Provide the Store -
        Open index.js (or the entry point file).
        Wrap your app in the Provider component and pass the store to it.
        This makes the Redux store available throughout your app.
* Use Redux State and Dispatch in Your Components :
    Now that the Redux store is set up and provided to your app, you can use the useSelector hook to access state and the useDispatch hook to dispatch actions.
    Steps to Use State and Dispatch in Components -
        Access the State - Use useSelector to read the state from the Redux store.
        Dispatch Actions - Use useDispatch to dispatch actions to update the Redux state.
* Test Redux Setup :
    Finally, you can run your app and verify that your Redux state management is working as expected.
    npm run dev / npm start
    

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
