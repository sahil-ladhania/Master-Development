/*

-----React Router Basics-----

1. What is React Router ?
Explanation :-
* React Router is a standard library for routing in React.
* It enables navigation among different components, allowing users to change the browser URL and keep the UI in sync with the URL.
* Key Concept :
    Single Page Application (SPA) –
        React Router allows you to create a seamless experience by loading only the necessary components when the URL changes, without refreshing the entire page.

2. How to install React Router ?
Explanation :-
* Installing the library is the first step to utilizing its routing capabilities in your React project.
* Install via npm :
    npm install react-router-dom

3. How to setup a Basic Route ?
Explanation :-
* A basic route involves defining paths that map to specific components.
* The Router component wraps the application, and the Route component defines the path and the component to render.
* Example :
    import { BrowserRouter as Router, Route } from 'react-router-dom';
    import Home from './Home';
    function App() {
        return (
            <Router>
                <Route path="/" component={Home} />
            </Router>
        );
    }

-----Understanding React Router Components-----

1. What is a Router ?
Explanation :-
* The Router component provides the context for routing in your application.
* Types :
    BrowserRouter, HashRouter, etc., each having different URL management techniques.
* Key Point :
    The router wraps your app to manage navigation based on the URL.

2. What is a Route ?
Explanation :-
* A Route component renders the component based on the matching URL path.
* The path prop defines the URL pattern, and component specifies which component to render.
* Example :
    <Route path="/about" component={About} />

3. What is a Link ?
Explanation :-
* Link is a component that allows navigation between routes without reloading the page.
*  It’s a substitute for traditional <a> tags, optimized for SPA navigation.
* Example :
    <Link to="/about">About</Link>

4. What is a Switch ?
Explanation :-
* The Switch component renders the first child Route that matches the location.
* It helps in rendering only the first matching route, avoiding multiple routes rendering.
* Example :
    <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>

-----Routing Strategy-----

1. What are Nested Routes ?
Explanation :-
* Nested Routes allow you to render routes inside other routes.
* They help in creating hierarchical structures.
* Nested routes are useful for organizing complex layouts where some pages are sub-sections of others.
* Example :
    <Route path="/dashboard" component={Dashboard}>
        <Route path="/dashboard/stats" component={Stats} />
    </Route>

2. What are Relative Paths ?
Explanation :-
* Relative Paths are paths that are defined relative to the current route.
* Relative paths simplify routing by allowing you to build on the current route rather than redefining the full path.
* Example :
    If the current route is /dashboard, a relative path could be stats, making the full path /dashboard/stats.

3. What are Route Parameters ?
Explanation :-
* Route Parameters are dynamic segments in the URL that can be captured and used within components.
* They allow you to pass data via the URL, which can be accessed in the component through props (e.g., props.match.params.id).
* Example :
    <Route path="/user/:id" component={UserProfile} />

-----Redirects with React Router-----

1. What is Redirect Component ?
Explanation :-
* The Redirect component is used to navigate programmatically to a different route.
* Useful for navigating users based on conditions like authentication or post-submit actions.
* Example :
    <Redirect to="/login" />

2. What is Conditional Redirects ?
Explanation :-
* Conditional Redirects occur when a redirect happens based on certain conditions, like user login status.
* They help in controlling user flow, ensuring only authorized users access certain routes.
* Example :
    {isLoggedIn ? <Redirect to="/dashboard" /> : <Login />}

3. What is Redirect with States ?
Explanation :-
* Redirect with States allows you to pass additional state information during a redirect.
*  It’s useful when you need to pass data between components during navigation.
* Example :
    <Redirect to={{
        pathname: "/dashboard",
        state: { from: props.location }
    }} />

-----Working with Query Strings-----

1. How to read Query Strings ?
Explanation :-
* Query Strings are key-value pairs in the URL that can be read using React Router’s useLocation or query-string library.
* Allows extracting data from the URL, often used for filtering, sorting, or passing data.
* Example :
    const query = new URLSearchParams(useLocation().search);
    const token = query.get("token");

2. How to update Query Strings ?
Explanation :-
* Query strings can be updated using the useHistory hook in React Router.
* It’s important for updating the URL without reloading the page, keeping the UI in sync.
* Example :
    let history = useHistory();
    history.push({
        search: '?sort=name'
    });

3. What are some best practice of React Router and Query Strings ?
Explanation :-
* Consistency - Keep query strings format consistent across routes.
* Encoding - Always encode special characters.
* Modularity - Use utility functions to manage query strings to avoid duplication.

-----Programmatically Navigating with React Router-----

1. What is History Object and How to use it ?
Explanation :-
* The History Object is used to manage and manipulate the browser history stack.
* It allows navigation programmatically without using the Link or Redirect components.
* The history object is powerful for navigating, going back, or replacing the current route in scenarios like form submissions or conditional navigation.
* Example :
    import { useHistory } from 'react-router-dom';
    function MyComponent() {
        let history = useHistory();
        function handleClick() {
            history.push('/home');
        }
        return <button onClick={handleClick}>Go Home</button>;
    }

2. What is push method ?
Explanation :-
* The push Method adds a new entry to the history stack and navigates to the specified path.
* The push method allows users to navigate while still being able to go back to the previous page with the browser’s back button.
* Example :
    history.push('/about');

3. What is replace method ?
Explanation :-
* The replace Method replaces the current entry on the history stack with the specified path, without adding a new entry.
* The replace method is useful when you want to navigate without allowing the user to go back to the previous page, like after a successful form submission.
* Example :
    history.replace('/profile');

-----Error Handeling in React Router-----

1. How to create a 404 Not Found Route ?
Explanation :-
* A 404 Not Found Route is a route that catches all unmatched URLs and displays a custom “Page Not Found” component.
* It should be placed at the end of all routes to catch any paths that don’t match the predefined routes.
* Example :
    <Route component={NotFound} />

2. How to handle undefined Routes ?
Explanation :-
* Undefined routes can be handled using the Switch component to render a specific component for unmatched routes.
* The last Route without a path prop will handle all undefined routes.
* Example :
    <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
    </Switch>

3. How to Redirect to 404 Page when routes doesnt match ?
Explanation :-
* You can redirect to a 404 page using a Redirect component when no routes match.
* This method ensures users are redirected to a custom 404 page instead of being stuck on a broken route.
* Example :
    <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/404" />
    </Switch>

-----Protecting Routes with React Router-----

1. What is user Authentication in React ?
Explanation :-
* User Authentication involves checking if a user is logged in before allowing access to certain routes.
* This is typically managed using state management and conditional rendering in React.

2. How to protect routes with Route Props ?
Explanation :-
* Protect routes by wrapping them in a component that checks authentication status before rendering the target component.
* This method ensures that only authenticated users can access certain routes.
* Example :
    function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
        {...rest}
        render={props =>
            isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
        }
        />
    );
    }

3. How to redirect after Login ?
Explanation :-
* After a successful login, you can redirect users to a protected route using the history.push method.
* Redirecting after login enhances user experience by taking them directly to the desired page after authentication.
* Example :
    function handleLogin() {
    // Perform login logic
        history.push('/dashboard');
    }

-----Optimizing React Router-----

1. How to use React.lazy for Code Splitting ?
Explanation :-
* React.lazy allows you to load components lazily, which means only when they are needed.
* This helps in reducing the initial bundle size, making your application load faster.
* Code splitting is crucial for optimizing large applications, improving load times by splitting your code into smaller, more manageable chunks.
* Example :
    const Home = React.lazy(() => import('./Home'));
    function App() {
        return (
            <Router>
                <Route path="/home" component={Home} />
            </Router>
        );
    }

2. How to implement Suspense with React Router ?
Explanation :-
* Suspense works with React.lazy to show a fallback UI (like a loading spinner) while the lazy-loaded component is being fetched.
* Suspense is essential when using React.lazy to ensure a smooth user experience during the loading of components.
* Example :
    const Home = React.lazy(() => import('./Home'));
    function App() {
        return (
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route path="/home" component={Home} />
                </Suspense>
            </Router>
        );
    }

3. What is pre-loading Routes ?
Explanation :-
* Pre-loading Routes involves loading certain components in the background while the user is interacting with the app, so they are ready to display when needed.
* Example :
    Use import() for pre-loading components based on user interaction or predictions of the next route they might visit.
* Pre-loading improves perceived performance by reducing the wait time when a user navigates to a new route.

-----Advanced React Router Concepts-----

1. What are Multiple Routers ?
Explanation :-
* Multiple Routers can be used when different parts of your app need independent routing, such as nested routers in different components.
* This setup is useful for complex applications where different sections of the app have their own navigation logic.
* Example :
    <BrowserRouter>
        <App />
    </BrowserRouter>
    <BrowserRouter>
        <Admin />
    </BrowserRouter>

2. What is Animations Transistions ?
Explanation :-
* Animation Transitions in React Router involve adding animations between route changes to improve user experience.
* Animating route transitions can make your app feel more polished and responsive.
* Example :
    Use libraries like react-transition-group or framer-motion to animate components when routes change.
    import { CSSTransition, TransitionGroup } from 'react-transition-group';
    function App() {
        return (
            <TransitionGroup>
                <CSSTransition timeout={300} classNames="fade">
                    <Route path="/about" component={About} />
                </CSSTransition>
            </TransitionGroup>
        );
    }

3. How to integrate it with Recoil ?
Explanation :-
* Recoil is a state management library for React, and integrating it with React Router allows you to manage global state while navigating through different routes.
* This integration helps in maintaining a consistent state across different routes in your application.
* Example :
    Use Recoil hooks (useRecoilState, useRecoilValue) inside components that are rendered via routes to manage and share state across your application.
    function Profile() {
        const [user, setUser] = useRecoilState(userState);
        return <div>{user.name}</div>;
    }

-----Debugging in React Router-----
1. What are some Common Issues and Solutions ?
Explanation :-
* Common Issues :
	•	Route Not Matching - Ensure path props are correct and Switch is used if needed.
	•	Component Not Rendering - Check for exact paths or component import errors.
	•	Infinite Redirects - This happens due to incorrect conditions in redirects or protected routes.
* Solutions :
	•	Use console.log to debug route parameters and props.
	•	Check the order of routes inside the Switch component.
	•	Ensure state management is correctly synced with route changes.

2. How to utilize React Router Prompt ?
Explanation :-
* Prompt is used to prevent navigation under certain conditions, like unsaved changes in a form.
* Prompt helps in preventing accidental navigation that could lead to loss of data or unsaved changes.
* Example :
    import { Prompt } from 'react-router-dom';
    function FormComponent() {
        return (
            <form>
                <Prompt
                    when={isFormDirty}
                    message="You have unsaved changes, are you sure you want to leave?"
                />
                // Form Elements
            </form>
            );
    }

3. How to Debug with DevTools ?
Explanation :-
* React DevTools can be used to inspect the component tree, props, and state related to React Router.
* Example :
	Use React DevTools to check if the correct components are rendered and if their props, including route parameters, are correct.

*/
