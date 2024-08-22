/*
-----CLI Tools-----

1. What are CLI Tools ?
Explanation :-
* CLI (Command Line Interface) Tools are programs or utilities that allow users to interact with software by typing commands into a terminal or command prompt.
* They are often used to automate tasks, manage software, and interact with applications in a more controlled and scriptable way.

2. Why are CLI Tools used ?
Explanation :-
* Efficiency - CLI tools can perform tasks faster than GUIs because they require fewer resources and can be automated with scripts.
* Automation - They can be easily scripted to perform repetitive tasks automatically.
* Control - CLI tools provide more granular control over software and systems, allowing users to execute complex commands with precision.
* Remote Access - They can be used to manage systems remotely, especially on servers without a graphical interface.

3. Give me some examples of CLI Tools ?
Explanation :-
* Node Package Manager (npm) - Used for managing JavaScript packages.
* Git - A version control tool to track code changes.
* Webpack - A module bundler for JavaScript applications.
* Vite - A build tool designed to enhance development speed and efficiency (we’ll discuss this in more detail next).

4. What is Vite ?
Explanation :-
* Vite is a modern build tool that significantly improves the development experience for front-end projects.
* Unlike traditional bundlers like Webpack, Vite provides fast server start, instant updates (HMR - Hot Module Replacement), and optimized production builds.
* It’s particularly designed for modern JavaScript frameworks like React.

5. Why is Vite + React better than npm + React ?
Explanation :-
* Faster Development - Vite offers instant server start and quicker Hot Module Replacement (HMR).
* Modern Bundling - Vite uses ES modules, avoiding the need for bundling during development.
* Optimized Builds - Vite creates more efficient and smaller production builds compared to traditional bundlers like Webpack with npm.

-----React Foundation-----

1. What is React Project Directory ?
Explanation :-
* public/ Folder :
	Contains static files like index.html which serves as the entry point for your React app.
* src/ Folder :
	Contains your JavaScript files, including components, styles, and other assets. It’s where most of your React code lives.

2. What is Module Bundler ?
Explanation :-
* A module bundler is a tool that combines multiple JavaScript modules and their dependencies into a single or a few output files (bundles).
* Key Functions :
	Dependency Management - Resolves and bundles dependencies among JavaScript files and other assets like CSS or images.
	Code Splitting - Breaks down the code into smaller chunks that can be loaded on demand to improve performance.
	Transpiling - Converts modern JavaScript (or other languages like TypeScript) into browser-compatible JavaScript.
	Minification - Reduces the size of the output files by removing unnecessary code and whitespace.
* Benefit of a Module Bundler :
	Optimized Performance - Reduces the number of HTTP requests and improves load times by bundling and minifying code.
	Simplified Development - Manages dependencies and assets automatically, making it easier to develop and maintain complex applications.

3. What is Webpack ?
Explanation :-
* Webpack is a module bundler that takes JavaScript files and their dependencies, and bundles them into a single file or a few files. It handles various tasks like transpiling, bundling, and code splitting.

4. What is Babel ?
Explanation :-
* Babel is a JavaScript compiler that converts modern JavaScript (ES6+) into backward-compatible JavaScript that can run in older browsers.
* It allows you to use the latest language features without worrying about browser support.

5. What is difference between package.json & package-lock.json ?
Explanation :-
* package.json :
	Manages project metadata, dependencies, scripts, and configurations.
* package-lock.json :
	Locks the versions of dependencies to ensure consistent installations across different environments.

6. What is DOM, ReactDOM, & Virtual DOM ?
Explanation :-
* DOM (Document Object Model) :
	The standard representation of HTML elements as objects in the browser.
    Manipulating the DOM directly can be slow.
* ReactDOM :
	The package that provides methods for interacting with the DOM in React, such as rendering components to the DOM.
* Virtual DOM :
	A lightweight copy of the real DOM used by React to optimize updates.
    React compares the virtual DOM with the real DOM and updates only the changed parts

7. What is index.html, App.js, index.js, & package.json in a Simple React Project ?
Explanation :-
* index.html (in public/) :
	The HTML template that includes a <div id="root"></div> element where React components will be rendered.
* App.js (in src/) :
	Contains the main React component for your application.
* index.js (in src/) :
	The entry point for the React app where ReactDOM renders the App component into the root element.
* package.json :
	Defines project dependencies, scripts, and other configurations. React scripts are typically used to run the project.

8. How JavaScript Runs Without Script Tags ?
Explanation :-
* React scripts (via tools like Webpack or Vite) automatically handle the inclusion of JavaScript files and their dependencies, so you don’t need to manually add script tags in index.html.

9. What is index.html, App.js, index.js, & package.json in a React + Vite Project ?
Explanation :-
* index.html (in public/) :
	Similar to the simple React project but often includes a script tag pointing to the Vite-generated bundle.
* App.js (in src/) :
	Contains the main React component, same as in the simple project.
* index.js (in src/) :
	Entry point for rendering components, but Vite handles bundling and development server.
* package.json :
	Includes Vite and other dependencies. Scripts are set up to start the Vite development server.

10. What is the difference Between React and React + Vite ?
Explanation :-
* React is the library for building UI components.
* React + Vite combines React with Vite for a faster development experience and optimized build process. Vite provides instant server start, fast HMR, and efficient bundling

11. What is createRoot method ?
Explanation :-
* ReactDOM.createRoot(document.getElementById('root')).render(<App />);
	Initializes the React application and renders the App component into the DOM element with id root.
    This is the entry point for React 18’s new root API for better performance and concurrency features.

12. What is React Fiber ?
Explanation :-
* React Fiber is a complete rewrite of the React reconciliation algorithm, designed to improve the rendering performance.
* It allows React to split rendering work into chunks, making updates more efficient and responsive.

13. What is Reconciliators & Reconciliation ?
Explanation :-
* Reconciliators are the components of the algorithm that manage this process, ensuring minimal updates and improving performance.
* Reconciliation is the process of updating the DOM to match the React component tree. React uses an algorithm to efficiently determine what has changed and update only those parts of the DOM.

14. What does this block of Code means ?
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
Explanation :-
* import React from 'react';
	Imports the React library necessary for writing React components.
* import ReactDOM from 'react-dom/client';
	Imports the ReactDOM package for rendering React components to the DOM.
* import App from './App';
	Imports the main App component from the App.js file.
* ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
	createRoot - Initializes the React root.
	document.getElementById('root') - Finds the DOM element with id root.
	render(<React.StrictMode><App /></React.StrictMode>) - Renders the App component inside React.StrictMode, which helps with detecting potential problems in the application.

-----React Internals-----

1. What are SPA ?
Explanation :-
* SPA (Single Page Application) -
    Single Page Application (SPA) is a type of web application or website that interacts with the user by dynamically rewriting the current page, rather than loading entire new pages from the server.
* Key Characteristics :
    Loads a single HTML page initially.
    Subsequent interactions and navigation are handled by dynamically updating the content on the page through JavaScript.
    Utilizes AJAX or Fetch API to communicate with the server and fetch data without reloading the entire page.
    Provides a more fluid and seamless user experience by avoiding full-page reloads.

2. What are Client-Side Bundle ?
Explanation :-
* Client-Side Bundle -
    Client-Side Bundle refers to a collection of JavaScript files and other assets bundled together to be delivered to the client's web browser.
* Key Components :
    JavaScript Files -
        The application's logic and functionality are written in JavaScript files.
        Bundling involves combining these files into a single or multiple bundles.
    Stylesheets, Images, and Other Assets -
        Along with JavaScript, other assets like stylesheets, images, and fonts may be included in the bundle for efficient delivery to the client.
* Advantages :
    Reduces the number of HTTP requests, improving loading times.
    Enables code splitting and lazy loading for optimizing performance.
    Simplifies deployment and maintenance by organizing code into manageable bundles.

3. What is Client-side Routing ?
Explanation :-
* Client-side Routing -
    Client-side routing refers to the process of managing navigation within a Single Page Application (SPA) entirely on the client side, without making additional requests to the server for each new view.
* Key Features :
    Utilizes the browser's History API to manipulate the URL without triggering full page reloads.
    Enables dynamic content updates based on the route, improving user experience.
    Typically implemented using libraries like React Router for React applications or Vue Router for Vue.js applications.
* Advantages :
    Enhances the performance of SPAs by avoiding the need for server round-trips during navigation.
    Allows for a smoother and more responsive user interface as content is updated dynamically.
    Enables bookmarking, sharing, and direct linking to specific views within the SPA.

4. What does React Returns ?
Explanation :-
* In React, a component can only return a single root element, commonly wrapped in a parent container (like a div).

5. Why is it so that in App Component , we need to have a top level component call it a div(<div> </div>) or fragment(<> </>) ?
Explanation :-
* Reconciliation Process :
    React mein reconciliation process ka istemal hota hai virtual DOM ke changes ko real DOM mein update karne ke liye.
    Single-root element hone se, React ko previous aur current states of the virtual DOM ke beech ka comparison karne mein madad milti hai.
* Single-Root Structure :
    Ek single-root structure rakhne se, React ko updates ko real DOM mein efficiently apply karne ka clear entry point milta hai.
    Isse reconciliation process ko simplify kar diya jata hai.
* Maintaining Structure and Readability :
    Single-root element constraint React components mein ek straightforward aur predictable structure maintain karne mein madad karta hai.
    Isse code ko padhne aur samajhne mein asani hoti hai.
* Use of Fragments :
    React fragments (`<></>` ya `<React.Fragment></React.Fragment>`) provide flexibility without violating the single-root rule.
    Fragments ek additional parent node ko introduce kiye bina multiple elements ko group karne ki anumati dete hain.

-----Functional Components-----

1. What is JSX ?
Explanation :-
* JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code directly within your JavaScript files.
* JSX is used in React to describe what the UI should look like.
* Under the hood, JSX is transformed into regular JavaScript objects that React can render.

2. What is Props ?
Explanation :-
* Props (short for Properties) are arguments passed into React components, allowing you to pass data from a parent component to a child component.
* Props are read-only, meaning they cannot be modified by the component receiving them.

3. What is State ?
Explanation :-
* State is an object in a React component that holds dynamic values that can change over time.
* Unlike props, state is managed within the component and can be updated using the setState method (or useState in functional components), which triggers a re-render.

4. What is the Difference between Props and State ?
Explanation :-
* Props :
	•	Passed from parent to child component.
	•	Read-only, cannot be modified by the receiving component.
* State :
	•	Managed within the component itself.
	•	Can be updated, which triggers re-rendering.

5. What is Conditional Rendering ?
Explanation :-
* Conditional Rendering in React allows you to render different UI elements based on a condition.
* It’s like using if-else in JavaScript but applied to the rendering of components or elements.
* We can do this using Ternary Operator or Short Circuit Evaluation.
* Using Ternary Operator :
    The Ternary Operator is a concise way to perform conditional rendering. It works like an if-else statement but in a single line.
    Syntax -
        condition ? trueValue : falseValue
        	•	condition: This is the condition that you want to evaluate.
	        •	trueValue: This is the value or component that will be rendered if the condition is true.
	        •	falseValue: This is the value or component that will be rendered if the condition is false.
* Using Short Circuit Evaluation :
    Short Circuit Evaluation is another way to conditionally render elements. It leverages the logical && and || operators to either render or skip rendering.
    Syntax of && -
        condition && trueValue
        If condition is true, trueValue will be rendered. If condition is false, nothing will be rendered.
    Syntax of || -
        condition || falseValue
        If condition is false, falseValue will be rendered. If condition is true, the condition itself is returned (which usually means rendering nothing, but it depends on the exact use case).

6. What is Composition ?
Explanation :-
* Composition is a design pattern in React where you can build complex UIs by combining smaller, reusable components.
* Instead of relying on inheritance, React encourages composition to reuse code and structure components logically.

7. What is the difference between div & Fragment(<>) ?
Explanation :-
* Main difference yeh hai ki fragments ka use karke hum multiple elements ko group kar sakte hain bina kisi additional parent node ko introduce kiye, jabki div ka use karne par ek additional div element create hota hai.

-----Rendering-----

1. What is Re-Rendering in React ?
Explanation :-
* Process of updating and rendering components to reflect changes in the application's state or props.
* When there's a change in the state or props of a component, React re-renders that component and any affected child components.
* It's important to note that a rerender doesn't necessarily mean a complete re-rendering of the entire DOM, instead, React efficiently updates only the necessary parts of the DOM.
* Basically, anytime a final DOM manipulation happens or when react actually updates the DOM it is called a re-render.

2. When Does Re-Rendering Happen ?
Explanation :-
* Re-Rendering happens in Two Cases :
    * State Variable Changes -
        Jab bhi koi state variable component ke andar utilize kiya jata hai aur uski value change hoti hai, tab component rerender hota hai.
        Yeh changes component ke UI ko update karne ke liye hoti hain, jisse naye data ya state ko reflect kiya ja sake.
    * Parent Component Re-render -
        Agar kisi parent component ka rerender hota hai, to saare uske child components bhi rerender hote hain.
        Yeh cascading effect ensure karta hai ki component tree ke saare components ek sath synchronized rahein.

3. Do we need more re-renders or less re-renders for optimal performance ?
Explanation :-
* For optimal performance, we aim to have less re-renders rather than more re-renders.

4. How to Minimize the number of re-renders in an App ?
Explanation :-
* There are broadly Two ways :
    Push the State down -
        State ko neeche ke components tak pass karte hain jahan us state ka istemal kiya jaata hai.
        State ko neeche push karke, agar kisi component ka state change hota hai to sirf us component ko hi rerender karna padega, aur uske upper ke components ko nahi.
    By Using Memoization -
        Memoization ka matlab hai ki kisi function ya computation ke result ko cache mein store karke future mein us result ko phir se use karna.
        Is technique ko use karke hum expensive computations ya functions ke results ko cache kar sakte hain, jisse unhe baar baar recalculate karne ki zarurat na ho aur rerenders ko minimize kiya ja sake.
        Memoization ka istemal karke, hum components ko sirf unke props mein koi change hota hai tab hi rerender karna sikh sakte hain, aur static elements ko rerendering se bacha sakte hain.
        We use useMemo Hook for this purpose.

5. What is Component Lifecycle ?
Explanation :-
* Component Lifecycle refers to the sequence of events (methods) in a React component’s life, from its creation (mounting) to updates (updating) and finally removal (unmounting).
* In class components, these are managed with lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

6. What are Lists ? and Keys ?
Explanation :-
* Lists in React are used to display a collection of items.

7. What are Keys ?
Explanation :-
* Unique Identification - Har ek list item ko ek unique key prop assign karna zaroori hai. Yeh item ko uniquely identify karta hai.
* Keys are unique identifiers assigned to each item in a list, helping React efficiently update and re-render only the necessary elements when the list changes.
* Keys should be unique among siblings.

8. Why are Keys needed ?
Explanation :-
* Efficient Updates -
    Key prop k hone se React ko pata chalta hai ki kaun se items mein changes huye hain, kya add kiya gaya hai, aur kya remove kiya gaya hai.
    Isse React updates ko efficient tareeke se track kar sakta hai aur sirf zaroori changes ko render karta hai.
* Preventing Unnecessary Rerenders -
    Key prop ke use se puri list ke un-necessary re-renders ko roka ja sakta hai.
    Agar key prop unique nahi hai ya fir use hi nahi kiya gaya hai, to React ko changes ko track karne mein dikkat hoti hai aur poora list ko dubara render karna pad sakta hai, jisse performance par asar padta hai.

9. What are Wrapper Component in React ?
Explanation :-
* Wrapper components ka use common styling ya thematic elements ko encapsulate karne ke liye kiya jata hai jo ki application ke alag-alag hisson mein consistent tareeke se apply hona chahiye.
* Wrapper components specific sections ya functionalities ke liye containers ke roop mein kaam karte hain.
* Isse hume ek saaf aur modular structure milta hai jismein har section ko alag-alag components mein encapsulate kiya ja sakta hai.

10. What is the difference between Class vs Functional Based Component ?
Explanation :-
* Class Based Components :
    ES6 Classes - Class-based components ES6 classes hote hain jo React.Component se extend karte hain.
    Access to Lifecycle Methods - Inko React dvara provide kiye gaye lifecycle methods jaise ki componentDidMount, componentDidUpdate, aur componentWillUnmount ka access hota hai.
    State Management - State aur lifecycle methods ko class-based components ke andar manage kiya jata hai.
    Pre-Hooks Era - Ye components React 16.8 mein hooks ke introduction se pehle ka primary type tha.
* Functional Based Components :
    Simplicity and Conciseness - Functional components simpler aur concise hote hain. Ye basically JavaScript functions hote hain jo props ko argument ke roop mein lete hain aur React elements ko return karte hain.
    Hooks Introduction - React 16.8 ke version mein hooks ke introduction ke saath, functional components ko state manage aur lifecycle methods ka use karne ki capability mili. useState aur useEffect jaise hooks ke istemal se state management aur side effects ko handle kiya ja sakta hai.
    Readability and Ease of Writing - Ye components aam taur par padhne aur likhne mein aasan hote hain.
* Notes :
    Functional components ab React mein components likhne ka preferred tareeka ban gaya hai hooks ki wajah se, jo ki unki saralata aur additional capabilities ke karan hota hai.
    useState aur useEffect jaise hooks functional components ko state manage aur side effects perform karne ki shakti dete hain, jisse wo class-based components ki tarah powerful ho jate hain.
    Class-based components ab bhi kuch codebases mein istemal hote hain, khaaskar un projects mein jo functional components par migrate nahi huye hain ya purane React versions ke saath kaam kar rahe hain.

11. What does Render Props means ?
Explanation :-
* Render Props is a pattern in React where a component shares code between different components by passing a function as a prop.
* This function is used to render dynamic content, making the component more flexible.

12. What is Refs ?
Explanation :-
* Refs (short for References) are a way to access DOM elements or React elements directly.
* They allow you to interact with the DOM in a more imperative way, like focusing an input field, triggering animations, or integrating with third-party libraries.

13. What are Events ?
Explanation :-
* Events in React are actions that can trigger responses, like clicks, key presses, or form submissions.
* React handles events differently from native DOM elements, using a synthetic event system that ensures consistent behavior across different browsers.

14. What are Higher Order Components ?
Explanation :-
* Higher-Order Components (HOCs) are functions that take a component and return a new component with additional props or behavior.
* HOCs are used to reuse component logic, such as managing state or handling side effects, across multiple components.

-----Hooks-----

1. What are Hooks ?
Explanation :-
* Functions that allow functional components in React to have state and lifecycle features that were previously available only in class components.

2. What is use of Hooks ?
Explanation :-
* These are some of the use-cases of using Hooks :
    Managing State
    Handle Side Effects
    Optimize Performance
    etc...
* Each hook serves a specific purpose, contributing to a more modular and maintainable codebase.

3. What is useState ?
Explanation :-
* useState is a Hook that allows you to add state to functional components.
* It returns an array with two elements :
    Current State Value.
    Function to Update It.
* Syntax :
    const [state, setState] = useState(initialState);
        Meaning of Syntax :
            state - Variable that holds current state value.
            setState - Function to update the current state.
            initialState - Initial Value of the state variable.
* Use-Cases :
    Managing simple component-level state.
    Handling form input fields.
    Toggling UI elements between different states.
    Implementing counters, toggles, and checkboxes.
    Storing and updating dynamic data in the component.

4. What is the need of it ?
Explanation :-
* State Management -
    useState enables functional components to hold and manage state, making them more powerful and capable of handling dynamic data.
    State variables ko add karne ke liye hota hai.
    Functional Components ko stateful logic provide karta hai.

5. What are Side Effects ?
Explanation :-
* React mein "side effects" typically component rendering process ke bahar hote hain.
* Ye operations ya behaviors hote hain jo user interface ko render karne ke alawa aur kisi prakar ka asar dalte hain.
* Ismein data fetching, subscriptions, manual DOM manipulations, timers, aur other aise actions included hote hain jo UI rendering se beyond hote hain.

6. What is Component Mount and Component Un-Mount ?
Explanation :-
* Mount - Mounting ka matlab hai ki ek component pehli baar DOM mein render hota hai.
* Un-Mount - Unmounting ka matlab hai ki ek component DOM se hata diya jata hai yaani ki uska rendering khatam ho jata hai.

7. What is useEffect ?
Explanation :-
* useEffect is a Hook that lets you perform side effects in functional components.
* These side effects can include data fetching, subscriptions, or manually updating the DOM.
* Syntax :
    useEffect(() => {
        // Side effect code
        return () => { ----> Returing Cleanup Function
            // Cleanup code
        };
    }, [dependencies]);
        Meaning of Syntax :
            () => {} - Effect function jo side effects ko define karta hai.
            return () => {} - Cleanup function jo effect ke baad chalega.
            dependencies - Optional array jo specify karta hai ki effect ko kis changes ke liye run karna hai.
            Cleanup Function -
                Special function in React’s useEffect hook that is used to clean up side effects when a component unmounts or before the effect runs again.
                Return a function from the useEffect callback.
                This function will be executed when the component unmounts or before the effect re-runs.
                Its nothing but a normal function , here we have just used Arrow Functions , we can also return a named function like this :
                    return function cleanup() {
                        // Cleanup logic
                    };
* Use-Cases :
    Fetching data from APIs.
    Subscribing to external data sources or events.
    Updating the document title or other parts of the DOM.
    Managing timers and intervals.
    Cleaning up subscriptions, event listeners, or other resources.

8. What is the need of it ?
Explanation :-
* Side Effects Management -
    It allows you to run code at specific points in the component lifecycle (e.g., after rendering), replacing lifecycle methods like componentDidMount and componentDidUpdate.
    Side effects ko manage karne ke liye hota hai, jaise ki data fetching, subscriptions, aur DOM updates.
    Ye component lifecycle methods (componentDidMount, componentDidUpdate, aur componentWillUnmount) ke functionality ko functional components mein provide karta hai.

9. What is useMemo ?
Explanation :-
* useMemo is a Hook that memoizes the result of a function.
* It returns a memoized value that only recalculates when its dependencies change.
* Syntax :
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
        Meaning of Syntax :
            () => {} - Function jo memoized value ko compute karta hai.
            [a, b] - Array jo specify karta hai ki memoized value ko kis changes par recompute karna hai.
* Use-Cases :
    Computing derived data from props or state.
    Optimizing performance by caching expensive calculations.
    Preventing unnecessary re-renders in child components.
    Memoizing callback functions to prevent re-creation on every render.
    Enhancing the performance of complex computations in the component.

10. What is the need of it ?
Explanation :-
* Performance Optimization -
    It helps avoid expensive calculations on every render by caching results until dependencies change.
    Expensive computations ko memoize (cache) karne ke liye hota hai.
    Ye computations ko cache karke performance ko optimize karta hai, kyunki yeh computations har render cycle mein dobara se nhi chalaye jate hain.

11. What is useCallback ?
Explanation :-
* useCallback is a Hook that memoizes a callback function.
* It returns a memoized version of the callback that only changes if one of the dependencies changes.
* Syntax :
    const memoizedCallback = useCallback(() => {
        // Callback function code
    }, [dependencies]);
        Meaning of Syntax :
            () => {} - Function jo memoized callback function ko define karta hai.
            [dependencies] - Array jo specify karta hai ki callback function ko kis changes par recompute karna hai.
* Use-Cases :
    Memoizing event handlers to prevent re-creation on every render.
    Optimizing performance by caching callback functions used as props.
    Preventing unnecessary re-renders in child components that depend on callback functions.
    Enhancing the performance of components with complex event handling logic.
    Memoizing functions passed down to deeply nested child components.

12. What is the need of it ?
Explanation :-
* Performance Optimization -
    It helps prevent unnecessary re-renders by ensuring that functions passed as props only change when necessary, reducing the computational load.
    Memoized callback functions ko create karne ke liye hota hai.
    Ye callback functions ko cache karke performance ko optimize karta hai, kyunki yeh functions har render cycle mein dobara se na banaye jaaye.

13. What is useRef ?
Explanation :-
* useRef is a Hook that returns a mutable ref object, which persists across renders.
* It can be used to access DOM elements or store any mutable value.
* Syntax :
    const refContainer = useRef(initialValue);
        Meaning of Syntax :
            initialValue - Optional parameter jo useRef ke initial value ke roop mein set kiya jata hai.
* Use-Cases :
    Accessing and interacting with DOM elements imperatively.
    Persisting values across re-renders without causing re-renders.
    Storing mutable values that persist across component re-renders.
    Referencing child components or elements within a component.
    Managing focus, animations, or other imperative operations in functional components.

14. What is the need of it ?
Explanation :-
* Direct DOM Access -
    It allows you to interact with DOM elements or keep a value that doesn’t trigger re-renders when changed.
    Reference ko maintain karne ke liye use hota hai, jo component ke render lifecycle ke bahar rehta hai.
    Ye reference ko persist karta hai, jisse hum component ke alag-alag render cycles ke beech mein bhi usse access kar sakein.

15. What is the difference between useEffect , useMemo , useCallback ?
Explanation :-
* useEffect :
    Purpose - Manages side effects in functional components.
    Triggers - Runs after rendering and on subsequent re-renders.
    Use Cases - Fetching data, subscriptions, manually changing the DOM, etc.
    Syntax -
    useEffect(() => {
        // Side effect logic here
        return () => {
            // Cleanup logic (optional)
        };
    }, [dependencies]);
* useMemo :
    Purpose - Memoizes the result of a computation to avoid unnecessary recalculations.
    Triggers - Runs during rendering.
    Use Cases - Memoizing expensive calculations, preventing unnecessary re-renders.
    Syntax -
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
* useCallback :
    Purpose - Memoizes a callback function to prevent unnecessary re-renders of child components.
    Triggers - Runs during rendering.
    Use Cases - Preventing unnecessary re-renders when passing callbacks to child components.
    Syntax -
    const memoizedCallback = useCallback(() => {
        // Callback logic here
    }, [dependencies]);
* Summary -
    useEffect is for handling side effects, useMemo is for memoizing values, and useCallback is for memoizing callback functions.
    Each serves a different purpose in optimizing and managing the behavior of React components.

16. What is the difference between memo & useMemo ?
Explanation :-
* What are they :
    memo
        Higher-order component (HOC) provided by React.
        Used to memoize functional components, preventing unnecessary re-renders when the component receives the same props.
    useMemo
        Hook provided by React.
        Used to memoize the result of expensive calculations within functional components.
* What they are used for :
    memo
        Used to optimize functional components by memoizing them based on their props.
        Prevents unnecessary re-renders of the component when its props haven't changed.
    useMemo
        Used to optimize performance by memoizing the result of expensive calculations within functional components.
        The memoized value is only recomputed when one of the dependencies (specified in the dependency array) has changed.
* How they are used :
    memo
        Wrap the functional component with memo to memoize it.
        React will automatically compare the previous and current props to determine whether the component needs to be re-rendered.
        Eg - const MemoizedComponent = memo(MyComponent);
    useMemo
        Use the useMemo hook within a functional component to memoize a value.
        Pass a function that computes the value and an array of dependencies to the useMemo hook.
        React will execute the function and memoize its result. The memoized value will only be recomputed when one of the dependencies changes.
        Eg - const memoizedValue = useMemo(() => computeExpensiveValue(dep1, dep2), [dep1, dep2]);
* Syntax of Using It :
    memo
        const MemoizedComponent = memo(MyComponent);
    useMemo
        const memoizedValue = useMemo(() => computeExpensiveValue(dep1, dep2), [dep1, dep2]);
* UseCases of Each :
    memo
        Memoize functional components to optimize rendering performance, especially for components that frequently re-render with the same props.
        Ideal for optimizing the performance of presentational components that are primarily driven by props.
    useMemo
        Memoize the result of expensive calculations within functional components to optimize performance.
        Useful when you have a computation that depends on some values and you want to avoid re-computing it unnecessarily on every render.
        Commonly used for memoizing derived data, complex transformations, or expensive computations.

17. What is Prop Drilling in React ?
Explanation :-
* Prop drilling refers to the process of passing data from a top-level component down to deeper levels through intermediate components.
* It happens when a piece of state needs to be accessible by a component deep in the component tree, and it gets passed down as a prop through all the intermediate components.

18. Why do we need Prop-Drilling ?
Explanation :-
* State Management -
    Prop drilling is often used to manage state in a React application.
    By passing state down through the component tree, you can share data between components without resorting to more advanced state management solutions like context or state management libraries.
* Simplicity -
    Prop drilling keeps the application structure simple and makes it easier to understand the flow of data.
    It's a straightforward way of handling data without introducing more complex tools.

19. How to Pass Props & Access Props ?
Explanation :-
* Passing Props :
    -----ParentComponent.js-----
    import React from 'react';
    import ChildComponent from './ChildComponent';
    const ParentComponent = () => {
        // Define props
        const data = "Hello, child component!";
        return (
            <div>
                Pass props to child component....
                <ChildComponent message={data} />
            </div>
        );
    }
    export default ParentComponent;
* Accessing Props :
-----ChildComponent.js-----
    import React from 'react';
    const ChildComponent = (props) => {
        // Access props
        const receivedMessage = props.message;
        return (
            <div>
                Use props...
                <p>{receivedMessage}</p>
            </div>
        );
    }
    export default ChildComponent;

20. What are some Drawbacks of Prop Drilling ?
Explanation :-
* Readability -
    Prop drilling can make the code less readable, especially when you have many levels of components.
    It might be hard to trace where a particular prop is coming from.
* Maintenance -
    If the structure of the component tree changes, and the prop needs to be passed through additional components, it requires modifications in multiple places.
* Note -
    While prop drilling is a simple and effective way to manage state in some cases, for larger applications or more complex state management, consider using tools like React Context or state management libraries.
    These can help avoid the drawbacks of prop drilling while providing a cleaner solution for state sharing.

21. What is Context API in React ?
Explanation :-
* Context API is a feature in React that provides a way to share values like props between components without explicitly passing them through each level of the component tree.
* It helps solve the prop drilling problem by allowing data to be accessed by components at any level without the need to pass it through intermediate components.

22. What is useContext ?
Explanation :-
* useContext is a Hook that allows you to consume context values in functional components.
* It lets you pass data through the component tree without passing props manually at every level.

23. What is the need of it ?
Explanation :-
* Global State Management -
    It simplifies the process of sharing data across multiple components, avoiding prop drilling.

24. What are Key Components of Context API ?
Explanation :-
* createContext - Function used to create a context. It returns an object with two components :
    Provider and Consumer
    const MyContext = React.createContext();
* Provider - Component responsible for providing the context value to its descendants. It is placed at the top of the component tree.
    <MyContext.Provider value={some value}>
        Components that can access the context value...
    </MyContext.Provider>
* Consumer or useContext Hook - Component that allows components to consume the context value. Alternatively, the useContext hook can be used for a more concise syntax.
    <MyContext.Consumer>
        {value => render something based on the context value }
    </MyContext.Consumer>
    or
    const value = useContext(MyContext);

25. What are advantages of Context API ?
Explanation :-
* Avoids Prop Drilling -
    Context API eliminates the need for passing props through intermediate components, making the code cleaner and more maintainable.
* Global State -
    It allows you to manage global state that can be accessed by components across the application.
* Note -
    While Context API is a powerful tool, it's essential to use it judiciously and consider factors like the size and complexity of the application.
    For complex state management needs, additional tools like Redux might be more suitable.

26. What are some Problems with Context API ?
Explanation :-
* Context API in React is a powerful tool for solving the prop drilling problem by allowing the passing of data through the component tree without the need for explicit props at every level. However, it does not inherently address the re-rendering issue.
* When using the Context API, updates to the context can trigger re-renders of all components that consume that context, even if the specific data they need hasn't changed. This can potentially lead to unnecessary re-renders and impact the performance of the application.
* To mitigate this, developers can use techniques such as memoization (with useMemo or React.memo) to prevent unnecessary re-renders of components that don't depend on the changes in context. Additionally, libraries like Redux, Recoil, or Zustand provide more fine-grained control over state updates and re-renders compared to the built-in Context API.

27. What are some Other Solutions ?
Explanation :-
* Recoil, Redux, and Context API are all solutions for managing state in React applications, each offering different features and trade-offs.
* Context API :
    Role - Context API is a feature provided by React that allows components to share state without prop drilling. It creates a context and a provider to wrap components that need access to that context.
    Advantages - Simplicity, built-in React feature.
* Recoil :
    Role - Recoil is a state management library developed by Facebook for React applications. It introduces the concept of atoms and selectors to manage state globally. It can be considered a more advanced and feature-rich alternative to Context API.
    Advantages - Advanced features like selectors, better performance optimizations.
* Redux :
    Role - Redux is a powerful state management library often used with React. It introduces a global store and follows a unidirectional data flow. While Redux provides more features than Context API, it comes with additional concepts and boilerplate.
    Advantages - Middleware support, time-travel debugging, broader ecosystem.

28. What to Consider Between above Three ?
Explanation :-
* This will depend on three factors :-
    Complexity -
        Context API is simple and built into React, making it a good choice for simpler state management. Recoil provides more features and optimizations, while Redux is powerful but comes with additional complexity.
    Scalability -
        Recoil and Redux are often preferred for larger applications due to their ability to manage complex state logic.
    Community Support -
        Redux has a large and established community with a wide range of middleware and tools. Recoil is newer but gaining popularity, while Context API is part of the React core.

29. What to Choose ?
Explanation :-
* Use Context API for Simplicity -
    For simpler state management needs, especially in smaller applications or when simplicity is a priority.
* Consider Recoil for Advanced Features -
    When advanced state management features, like selectors and performance optimizations, are needed.
* Opt for Redux for Scalability -
    In larger applications where scalability, middleware, and a broader ecosystem are important factors.

30. What is useReducer ?
Explanation :-
* useReducer is a Hook that manages complex state logic in React functional components.
* It takes a reducer function and an initial state.
* It returns the current state and a dispatch function to trigger state updates based on an action.
* Syntax :
    const [state, dispatch] = useReducer(reducer, initialState);
        Meaning of Syntax :
            reducer: A function that determines how the state changes based on the action.
            initialState: The initial state value.
            dispatch: A function used to send actions to the reducer to update the state.
Use-Cases :
	Managing complex state logic with multiple sub-values.
	Handling state transitions that depend on the previous state.
	Reducing the need for deeply nested state updates in components.
	When state management requires a more predictable update pattern.
	Managing state in large applications where useState becomes cumbersome.

31. What is the need of it ?
Explanation :-
* Complex State Management -
    It’s useful for managing state transitions in a more predictable and scalable way, especially when dealing with complex state logic or multiple actions.

32. What are Custom Hooks ?
Explanation :-
* Custom Hooks are functions that let you extract and reuse logic across multiple components.
* They allow you to encapsulate stateful logic in a reusable manner.
* Syntax :
    function useCustomHook() {
        // Custom logic and state
        return [state, setState];
    }
        Meaning of Syntax :
            useCustomHook: The custom hook function name, typically starting with “use”.
            state, setState: Example return values which could include any state or logic needed.
* Use-Cases :
    Extracting reusable logic from components to avoid code duplication.
	Encapsulating complex stateful logic or side effects that are used across multiple components.
	Simplifying components by offloading repetitive logic to custom hooks.
	Creating modular and maintainable code by isolating state management and side effects.

33. What is the need of it ?
Explanation :-
* Code Reusability - Custom Hooks help in extracting repetitive logic, making your components cleaner and more maintainable.

34. How to create Custom Hooks ?
Explanation :-
* To create a Custom Hook, write a function that uses built-in Hooks (like useState, useEffect, etc.) and prefix the function name with “use”.
* This function can then be used in any component.

35. What are some Hooks Best Practices ?
Explanation :-
* Hooks Best Practices :
	•	Only call Hooks at the top level of a component.
	•	Only call Hooks from React functions or Custom Hooks.
	•	Keep dependencies up to date in useEffect, useMemo, and useCallback.
	•	Avoid unnecessary re-renders by using useCallback and useMemo wisely.

-----Routers-----

1. What is Routing ?
Explanation :-
* Routing in React is a mechanism that allows you to manage navigation and control the content displayed in your application based on the URL. It's essential for several reasons :
    Multi-Page Applications (MPAs).
    User Experience.
    Bookmarking and Sharing.
    Code Organization.
    State Preservation.
    Conditional Rendering.
* Routing in web development refers to the process of determining which content to display based on the URL.
* In a Single Page Application (SPA) like those built with React, routing allows the app to dynamically change the displayed content without reloading the entire page.
* Note -
    To implement routing in a React application, developers often use libraries like React Router.
    React Router provides a set of components and functions to define routes, handle navigation, and manage the application's history, making it an essential tool for building robust and navigable React applications.

2. What is the need of it ?
Explanation :-
* Dynamic Content Display - Routing allows you to create a multi-page experience within an SPA, where different URLs lead to different content, improving user navigation and experience.
* State Management - It enables the application to manage and maintain state across different views without full page reloads, keeping the user experience smooth and responsive.

3. What is React Router ?
Explanation :-
* React Router is a popular library for handling routing in React applications.
* It allows you to define routes in your application and navigate between different components or views based on the URL.
* It supports nested routing, dynamic routing, and offers hooks for more advanced control over navigation and history.

4. What is React Router DOM ?
Explanation :-
* In React, routing is commonly achieved using the React Router DOM library, which provides a set of components for handling navigation within a React application.
* The main components involved in React Router DOM are BrowserRouter, Routes, and Route.
* Here's an overview of how routing is typically implemented using these components :-
    BrowserRouter -
        Top-level component that should be used to wrap your entire application. It enables the use of routing features throughout your React application. It utilizes the HTML5 History API to manipulate the URL without triggering full page reloads.
    Routes -
        Routes component is used to define the routes for your application. Inside the Routes component, you specify individual Route components for each route in your application. Routes component can contain multiple Route components, each representing a different view or page.
    Route -
        Route component is responsible for rendering specific components based on the current URL path. It takes two main props: path and element. Path prop defines the URL path that should match for the route to be rendered, and the element prop specifies the component to render when the path matches.
* Note -
    This is a basic setup for using React Router DOM.
    You can extend this by adding nested routes, handling dynamic route parameters, and incorporating additional features provided by React Router DOM for more advanced routing scenarios.

5. How to use React Router DOM ?
Explanation :-
* Install React Router DOM - npm install react-router-dom
* Setting up Routes.
* Create the Main App Component -
    Set up your main App component with React Router to handle routing.
* Navigate Programmatically -
    If you want to navigate programmatically, you can use 'window.location.href'.
    const navigateToDashboard = () => {
        window.location.href = '/dashboard';
    };
    However, using 'Link' from React Router is a preferred way for declarative navigation within a React app.
* Shared UI -
    If you want to share UI components between the landing page and the dashboard, you can create a common component and use it in both Landing and Dashboard components.
* Issue with window.location.href :
    When using window.location.href for navigation in a React application, it triggers a full page reload, which is not desirable in client-side routing. A full page reload involves fetching the HTML, CSS, and other assets again, leading to a slower and less efficient user experience.
    To address this issue, React Router DOM provides a solution in the form of the useNavigate hook. This hook is designed for programmatic navigation within a React component without triggering a full page reload. By using useNavigate, you can ensure smoother transitions between different views in a single-page application (SPA) without unnecessary overhead.
    The `useNavigate` hook in React Router DOM is designed to work within the context of a `BrowserRouter`. It should be used inside a component that is a descendant of `BrowserRouter` to ensure access to the correct router context. This limitation is intentional, as `useNavigate` relies on the router context for scoped navigation, enabling seamless client-side routing without triggering a full page reload. Placing the hook within the correct context ensures its proper functionality for dynamic view and URL updates.

*/
