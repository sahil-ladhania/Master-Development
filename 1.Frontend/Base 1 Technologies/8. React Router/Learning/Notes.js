/*

-----React Router Basics-----

1. What is Client Side Routing ?
Explanation :-
* React Router enables "client side routing".
* In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders
the HTML sent from the server.
* Client-side routing ek approach hai jo modern web applications mein use hoti hai, jisme routing ka kaam browser par hota hai, server par nahi. 
* Chaliye is concept ko step-by-step samajhte hain :
    Traditional (Server-Side Routing) - 
        •	Jab bhi aap kisi naye page pe jaane ke liye URL change karte ho, browser ek HTTP request server ko bhejta hai.
	    •	Server naye HTML page ko bhejta hai, jo browser dubara se load karta hai.
        •	Example: Old-school websites jisme har naye page ke liye poora server request hota tha.
    Client-Side Routing - 
        •	Client-side routing mein, application ka ek single HTML file hota hai (Single Page Application - SPA).
	    •	Browser pe React Router (ya koi aur router library) use hoti hai jo JavaScript ke through pages ko manage karta hai.
        •	Jab URL change hota hai, browser server ko request nahi bhejta. Instead, router page components ko dynamically load karta hai.
	    •	No Full Reload: Sirf page ka ek specific part re-render hota hai, isliye performance better hoti hai.
* How it works :
    	•	Jab user app ko access karta hai, server ek static index.html file deta hai.
	    •	React Router JavaScript ke madad se URL ko track karta hai aur decide karta hai ki kaunsa component dikhana hai.
	    •	Server ko sirf initial request ke liye call hota hai, baaki sab kuch browser mein hota hai.
* Benefits of Client-Side Routing :
    	•	Faster Navigation - Sirf necessary data/component re-render hote hain, isliye naye page par jaana fast hota hai.
	    •	Rich User Experience - Transitions aur animations easily add ho sakte hain.
	    •	Reduced Server Load - Kyunki baar-baar poori HTML file nahi mangi ja rahi.
* Drawbacks of Client-Side Routing :
    	•	SEO Issues - SPAs mein, crawlers ko content load karne mein dikkat ho sakti hai.
	    •	First Load Slower - Sab resources (JS, CSS) ek baar mein load hote hain, isliye initial load thoda slow hota hai.
	    •	Complex State Management - Routing ke saath application state manage karna challenging ho sakta hai.

2. What is React Router ?
Explanation :-
* React Router is a standard library for routing in React.
* React Router ek popular library hai jo React applications mein client-side routing implement karne ke liye use hoti hai. 
* Ye developer ko different URLs ke basis par alag-alag React components dikhane ki facility provide karti hai, bina page reload kiye.
* React Router Ka Role :
    •	React apps mein generally ek Single Page Application (SPA) hoti hai, jisme ek hi HTML file load hoti hai.
    •	React Router allow karta hai ki app me multiple “pages” ka illusion create kiya jaye by dynamically rendering components based on the URL.
* Key Features of React Router :
    Dynamic Routing - 
        •	Routes URL ke basis pe decide karte hain kaunsa component dikhana hai.
	    •	Routing ka logic React ke component tree ke saath integrate hota hai.
    Declarative Syntax -
        •	Routes ko JSX ke andar define karte ho using <Route> components, jo easy-to-read aur maintainable hota hai.
    Nested Routing -
        •	Ek route ke andar doosre routes define kar sakte ho for complex layouts.
    Dynamic Parameters -    
        •	URL ke andar parameters (/product/:id) ko pass karne aur use karne ka support.
    Programmatic Navigation -
        •	React Router provide karta hai methods jaise useNavigate jo code ke through navigation allow karta hai.
* Benefits of React Router :
    Single Page App Experience -
	    •	URL change hota hai bina poora page reload kiye.
	Seamless Navigation -
	    •	Browser ke “back” aur “forward” buttons ko bhi support karta hai.
	Flexible -
	    •	Complex layouts aur dynamic parameters handle kar sakta hai.
	Extensive Features -
	    •	Nested routes, lazy loading, protected routes, etc.

3. How to install React Router ?
Explanation :-
* Installing the library is the first step to utilizing its routing capabilities in your React project.
* Install via npm :
    npm install react-router-dom

4. Why do we even need a react router ?
Explanation :-
* React Router ki zarurat samajhne ke liye, pehle samajhte hain ki bina React Router ke ek app kaise behave karega aur phir React Router kya solve karta hai.
* Bina React Router Ke Problem :
    Single Page Application (SPA) Ka Limitation -
        •	React apps by default ek hi page load karte hain (index.html).
	    •	Agar aapko alag-alag components (e.g., Home, About, Contact) dikhane hain, toh manually conditional rendering likhni padti hai, jo complex aur error-prone ho sakti hai.
        •	Ex -
            const App = () => {
                const [page, setPage] = useState('home');
                return (
                    <div>
                    <button onClick={() => setPage('home')}>Home</button>
                    <button onClick={() => setPage('about')}>About</button>
                    {page === 'home' && <Home />}
                    {page === 'about' && <About />}
                    </div>
                );
            };
            Issues :
                •	Manually URLs update nahi hote.
	            •	Browser ke back aur forward buttons ka support nahi hota.
	            •	SEO friendly nahi hota, kyunki URL path meaningful nahi hote.
    React Router Ka Solution -
        •	React Router ye problems solve karta hai by managing client-side routing automatically, URL ke basis par React components ko dynamically load karke.
* Why we need React Router :
    Dynamic URL Mapping - 
        •	React Router allow karta hai ki har URL ke liye ek unique component render ho.
        •	URLs meaningful hote hain jo user-friendly aur SEO-friendly hain.
        •	Ex -
                / -> Home Page
	            /about -> About Page
                /products/:id -> Product Details Page
    Navigation Bina Reload Ke -
        •	React Router page reload kiye bina URL change aur navigation karta hai.
	    •	Ye browser ke default “back” aur “forward” buttons ka support bhi provide karta hai.
    Nested and Complex Routing -
        	•	Aap nested layouts ya multiple levels ke routes create kar sakte ho.
            •	Ex - 
                /dashboard/settings/profile
            •	Yahan Dashboard, Settings, aur Profile ek layered structure mein dikh sakte hain.
    SEO Improvements -
        	•	React Router server-side rendering (SSR) ke saath integrate ho sakta hai (e.g., Next.js), jo crawlers ko SPA ke content read karne deta hai.
    Programmatic Navigation -
        	•	React Router programmatically navigate karne ki facility deta hai (e.g., useNavigate), jo complex workflows mein kaam aata hai.
            •	Ex - 
                    Login ke baad user ko automatically dashboard par le jaana.

5. How were we suppose to do the same thing in core JS (Vanilla JS) ?
Explanation :-
* Vanilla JS (Core JavaScript) mein client-side routing ka kaam manually karna padta tha, jo tedious aur complex hota tha. 
* Let’s break this down step by step to understand how routing was implemented before libraries like React Router came into existence.
* Basic Idea of Routing in Vanilla JS :
    	•	Client-side routing ke liye URLs ko track karna aur manually content update karna hota tha.
	    •	Isme browser ka window.location aur history API ka use hota tha to detect URL changes aur content dynamically load karne ke liye DOM manipulation hoti thi.
* Steps to Implement Routing in Vanilla JS :
    Define Routes
    Render Content Based on URL
    Navigation Using Anchor Tags
    Listen to URL Changes (Back/Forward Buttons)
* Problems in Vanilla JS Routing :
    Manual DOM Manipulation -
	    •	Har route ke liye content ko manually update karna hota hai, jo error-prone aur difficult hai.
	Code Complexity -
	    •	Larger apps ke liye multiple nested routes aur parameters ko handle karna tough ho jata hai.
	No Component-Based Approach -
	    •	React Router mein har route ek component se linked hota hai, jo reusability aur modularity provide karta hai. 
        •	Vanilla JS mein yeh sab manually handle karna padta hai.
	Performance Issues -
	    •	Re-rendering aur state management ko manual handle karna inefficient ho sakta hai.
* Why React Router is Better :
    Declarative Syntax -
        •	React Router ka use karna easy hai aur code modular banata hai.
	Nested Routes -
        •	Complex layouts simplify ho jate hain.
	State & Routing Integration -
        •	Routing aur component state seamlessly integrated hote hain.
	Lazy Loading -
        •	React Router lazy loading support karta hai, jo Vanilla JS mein manually karna padta.

6. How does this React Router works internally ?
Explanation :-
* React Router ke internal kaam ko samajhne ke liye, humein samajhna hoga ki ye kaise React ke features aur browser ke APIs ka use karke routing manage karta hai. 
* Let’s break it down step by step.
* React Router Ka Core Idea :
    React Router browser ke URL ko track karta hai aur us URL ke basis par components ko render karta hai bina page reload kare. 
    Ye achieve karne ke liye, ye React Context, Browser History API, aur Custom Components ka use karta hai.
* Key Concepts Behind React Router :
    Browser History API - 
        •	React Router browser ke native history object ka use karta hai. 
        •	Iska kaam hota hai URL ko update karna aur navigation ko handle karna bina server request kiye.
        •	Key Functions -
	            history.pushState() – URL ko change karta hai aur ek new state push karta hai.
	            history.replaceState() – Current state ko replace karta hai bina new entry add kare.
	            popstate event – Jab user “back” ya “forward” button click kare, ye event trigger hota hai.
    React Context - 
        •   React Router ek context provider banata hai (jaise <Router /> component) jo current route ke baare mein information puri app mein pass karta hai.
	    •	Router Component: Ye context provide karta hai.
	    •	useLocation, useNavigate, useParams Hooks: Ye context se data access karte hain jaise current location, navigation methods, aur route parameters.
    Dynamic Rendering of Components -
        •	React Router ka kaam hai ki URL ke basis par decide kare kaunsa component render hoga. 
        •	Ye kaam Routes aur Route components karte hain:
	    •	Routes ka role hai URL ko match karna.
	    •	Agar URL match kare, toh matching Route ka component render hota hai.

7. What is the core funda of React Router ?
Explanation :-
* React Router ka core funda hai, “URL ke basis par components ko declaratively render karna, bina page reload kare, aur app ko SPA (Single Page Application) banate hue smooth navigation provide karna.”
* Core Fundas :
    •	React Router browser ke URL ko track karta hai aur uske basis par specific React components ko render karta hai.
	•	Har route ko ek path aur ek component ke saath map kiya jata hai.
* No Page Reloads :
    	•	Traditional multi-page applications mein har navigation pe server se nayi HTML file load hoti thi. 
        •	React Router mein bina page reload kiye navigation hota hai, kyunki:
	    •	React Router browser ke History API ka use karta hai.
	    •	Page ka state aur DOM maintain rehta hai.
* Declarative Routing :
    	•	React Router declarative syntax use karta hai, jisme developer ko bas yeh batana hota hai ki kaunsa path kis component se linked hai.
	    •	Kis path pe kya dikhana hai, yeh component structure ke saath define karna simple hai.  
* Component-Based Approach :
    	•	Har route ek React component se associated hota hai, jo modular aur reusable code likhne mein madad karta hai.
	    •	Nested routes se complex layouts ko simplify kiya ja sakta hai.
* Smooth User Experience :
    	•	React Router page transitions aur navigation ko seamless banata hai, jo ek native app-like experience provide karta hai.
	    •	Bina reloading ke har interaction instantly handle hoti hai.

8. What is the difference between the way we use to handle in VanillaJS and React Router ?
Explanation :-
* React Router simplifies routing by :
	Eliminating manual DOM updates.
	Handling state preservation.
	Providing clean, component-based structure.
	Making nested and dynamic routing straightforward.

-----Main Concepts-----

1. What is the 3 Main Job of React Router ?
Explanation :-
* URL Handling (Routing)
    React Router browser ke URL ko track karta hai aur uske basis par specific React components render karta hai.
	    •	URL aur app state ko sync mein rakhta hai.
	    •	Ex - Agar URL /about hai, toh woh <About /> component ko render karega.
    Core Points -
	    •	URL change hone par bina page reload ke UI update hota hai.
	    •	BrowserRouter ya HashRouter ke through browser ke History API ko handle karta hai.
* Declarative Navigation
    React Router declarative syntax provide karta hai, jisme tum easily routes define kar sakte ho. 
    Tumhe bas yeh batana hota hai ki kaunsa path kis component se linked hai, aur React Router baki ka kaam handle karta hai.
    Core Points:
	    •	Navigation links ko <Link> aur <NavLink> components ke through create karte ho.
	    •	Nested routes aur dynamic routes ko easily define kar sakte ho.
* Component Rendering (UI Updates)
    React Router ensures ki har URL ke liye correct component render ho, bina manual DOM manipulation ki zarurat ke.
	    •	Routes ke basis par app ka structure modular aur manageable rehta hai.
	    •	Jo bhi route match karega, sirf wahi component render hoga.
    Core Points:
	    •	Nested routes se complex layouts ko simplify kiya jata hai.
	    •	Dynamic content, like parameters or queries, ko handle karta hai (e.g., /product/:id).
	    •	Specific tools jaise useParams, useNavigate, aur useLocation ke through routing ko customize karte ho.

2. What is a URL in React Router ?
Explanation :-
* The URL in the address bar is simply the URL.
* It's not a route in React Router, it's just a URL.
* React Router me, URL ka matlab hai Uniform Resource Locator, jo ek web address ki tarah kaam karta hai aur app ke andar routes define karta hai. 
* Har URL ko ek specific React component se map kiya jata hai, jo SPA (Single Page Application) behavior ensure karta hai.

3. What is a Location in React Router ?
Explanation :-
* React Router me Location ek object hota hai jo current URL ki complete information ko represent karta hai. 
* Iska use navigation ke waqt route-related details ko access karne ke liye hota hai, jaise ki.
	Current Pathname (URL)
	Query Parameters
	State (jo navigation ke sath pass ki gayi ho)
* React Router ka useLocation hook hume ye location object deta hai.
* Location Object Key Properties.
	pathname
	    •	Current URL ka path.
	    •	Example: Agar tum /about route pe ho, toh pathname ki value /about hogi.
	search
	    •	Query string jo URL ke sath hoti hai.
	    •	Example: /search?q=react → search = ?q=react.
	hash
	    •	URL me koi fragment identifier ho, toh wo represent karta hai.
	    •	Example: /about#team → hash = #team.
	state
	    •	Extra data jo Link ya navigate() ke sath bheji gayi ho.
	    •	Example: { from: '/home' } (manually passed state).
* How to Access Location -
    React Router ka useLocation hook ka use karke location object ko access karte hain.
    Ex - 
        import { useLocation } from "react-router-dom";
        function CurrentLocation() {
            const location = useLocation();
            return (
                <div>
                    <p>Pathname: {location.pathname}</p>
                    <p>Search: {location.search}</p>
                    <p>Hash: {location.hash}</p>
                </div>
            );
        }

4. What is Location State ?
Explanation :-
* Location State is a value that persists with a location but isn't encoded in the URL.
* It’s stored invisibly in the browser’s memory, unlike hash or search params.

5. What is a History Stack ?
Explanation :-
* The History Stack is a record of each location the user navigates to, maintained by the browser.
* It allows users to see the history stack by clicking and holding the back button.

6. What is Client Side Routing (CSR) ?
Explanation :-
* CSR allows developers to manipulate the browser history stack without making a document request to the server.
* It enables routing in a single HTML document.

7. What is History in React Router ?
Explanation :-
* History is an object that allows React Router to subscribe to URL changes and provides APIs to manipulate the browser history stack programmatically.

8. What are History Actions ?
Explanation :-
* History Actions include POP, PUSH, and REPLACE.
* They describe how users arrive at a URL, with PUSH adding a new entry, REPLACE replacing the current entry, and POP happening when the back or forward buttons are used.

9. What is a Segment ?
Explanation :-
* A Segment is a part of a URL or path pattern between `/` characters.
* For example, in "/users/123", "users" and "123" are two segments.

10. What is a Path Pattern ?
Explanation :-
* A Path Pattern looks like a URL but includes special characters for matching routes, such as dynamic segments ("/users/:userId") or star segments ("/docs/*").

11. What is a Dynamic Segment ?
Explanation :-
* A Dynamic Segment is a part of a path pattern that can match any value, such as "/users/:userId" matching URLs like "/users/123".

12. What are URL Params ?
Explanation :-
* URL Params are the parsed values from the URL that match a dynamic segment.

13. What is a Router ?
Explanation :-
* A Router is a stateful, top-level component in React Router that makes all other components and hooks work.

14. What is Route Config ?
Explanation :-
* Route Config is a tree of route objects that are ranked and matched against the current location to create a branch of route matches.

15. What is a Route ?
Explanation :-
* A Route is an object or Route Element typically with a shape of `{ path, element }` or `<Route path element>`.
* It renders the element when the path pattern matches the current URL.

16. What is a Route Element ?
Explanation :-
* A Route Element, or `<Route>`, is used to define a route by `<Routes>`, and its props are read to create the route.

17. What are Nested Routes ?
Explanation :-
* Nested Routes allow routes to have child routes, matching multiple routes in a nested branch. This enables automatic layout nesting through outlets, relative links, etc.

18. What are Relative Links ?
Explanation :-
* Relative Links are links that don’t start with `/` and inherit the closest route in which they are rendered.
* This simplifies linking to deeper URLs.

19. What is a Match ?
Explanation :-
* A Match is an object holding information when a route matches the URL, such as URL params and pathname.

20. What are Matches ?
Explanation :-
* Matches is an array of routes or branches of the route config that match the current location, enabling nested routes.

21. What is a Parent Route ?
Explanation :-
* A Parent Route is a route that contains child routes.

22. What is an Outlet ?
Explanation :-
* An Outlet is a component that renders the next match in a set of matches.

23. What is an Index Route ?
Explanation :-
* An Index Route is a child route with no path that renders in the parent's outlet at the parent’s URL.

24. What is a Layout Route ?
Explanation :-
* A Layout Route is a parent route without a path, used exclusively for grouping child routes inside a specific layout.

-----Routing Strategy-----

1. What are Nested Routes ?
Explanation :-
* Nested Routes allow you to render routes inside other routes.
* They help in creating hierarchical structures.
* Nested routes are useful for organizing complex layouts where some pages are sub-sections of others.
* Nested Routing is the general idea of coupling segments of the URL to component hierarchy and data.
* Example :
    <Route path="/dashboard" component={Dashboard}>
        <Route path="/dashboard/stats" component={Stats} />
    </Route>
* Visualise Nested Routes - https://remix.run/_docs/routing

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
