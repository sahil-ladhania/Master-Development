/*

1. Why are you getting this as output in the console when you run UseEffectPractice.jsx File ?
* The multiple console logs you're seeing are due to how the cleanup function is defined and how `isMounted` is being handled within your
`useEffect` hook. Let me explain step by step :
    Console Logs Explanation -
        Initial Logs
        UseEffectPractice.jsx:10 true
        - This log corresponds to the first `console.log(isMounted);` inside the `useEffect` hook, just after `isMounted` is set to `true`.
        - Since `useEffect` runs when the component mounts, you see this `true` log first.
    Cleanup Logs -
        UseEffectPractice.jsx:28 false
        - This log is from the cleanup function where `isMounted = false` is being set and logged.
        - Cleanup functions in `useEffect` run when the component unmounts or before the effect runs again (if dependencies change).
    Re-Runs of the Effect -
        UseEffectPractice.jsx:10 true
        UseEffectPractice.jsx:14
        Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/users/1', redirected: false, status: 200, ok: true, …}
        UseEffectPractice.jsx:16
        {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}
        - This sequence shows that the `useEffect` is being triggered again after the cleanup function has run.
        - The logs inside the `fetchData` function (`console.log(response);` and `console.log(result);`) indicate that the API call is
        being made again, leading to multiple API responses being logged.

2. Why Is This Happening ?
a. Cleanup Function Misuse.
    - The cleanup function is supposed to be defined as a function and not take parameters (as it does in your case).
    return () => {
        isMounted = false;
        console.log(isMounted);
    }
    Instead of :
    return (isMounted) => {
        isMounted = false;
        console.log(isMounted);
    }
    - The way you've written it, the cleanup function is taking `isMounted` as a parameter, which is unnecessary and can cause unexpected
    behavior.
b. Re-Triggering of `useEffect`
    - In a well-behaved component, `useEffect` with an empty dependency array `[]` should only run once (when the component mounts) and
    then clean up when the component unmounts.
    - However, since your cleanup function is written incorrectly, it might be causing `useEffect` to behave unexpectedly, potentially leading
    to it being re-triggered.

3. How to Fix It ?
* Update the cleanup function to be properly defined without any parameters -
useEffect(() => {
    let isMounted = true;
    console.log(isMounted);
    const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            console.log(response);
            const result = await response.json();
            console.log(result);
            if(isMounted){
                setData(result);
            }
        }
        catch (error) {
            console.log("Error Fetching Data : " , error);
        }
    }
    fetchData();
    return () => {
        isMounted = false;
        console.log(isMounted);
    };
}, []);

4. What is the main reason for what we are getting in the console ?
* The behavior you're seeing is due to the React Strict Mode in your development environment.
* React Strict Mode intentionally calls certain lifecycle methods (including `useEffect`) twice in development mode to help identify side
effects.

5. Why Does This Happen ?
* In development mode , if your app is wrapped in `StrictMode`, React will intentionally mount, unmount, and remount components to help
developers find unexpected side effects. This is done by calling the `useEffect` hook twice :
    First Render (Mount) - The `useEffect` is triggered, logs `true` for `isMounted`, fetches the data, and logs the API response and result.
    Unmount (Cleanup) - The cleanup function is called, setting `isMounted` to `false` and logging `false`.
    Second Render (Remount) - React immediately remounts the component, calling `useEffect` again, setting `isMounted` to `true` again,
                            and re-fetching the data.

6. What to Do ?
* This behavior is normal in development mode, especially if `StrictMode` is enabled. It doesn't happen in production builds.
* If you check your console in a production environment, you’ll see that the effect runs only once, as expected.

7. How to Check and Disable StrictMode (if needed) ?
* If you're using `StrictMode` in your React app, it might look like this :
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
* To disable `StrictMode` temporarily (for testing), you can remove or comment out the `<React.StrictMode>` wrapper :
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
    <App />,  // Without StrictMode
    document.getElementById('root')
);

8. Which is the main reason for what we got in the console ?
* React StrictMode :
    StrictMode is the main reason you're seeing the `useEffect` being triggered multiple times in your console logs during development.
    React StrictMode deliberately calls the component's lifecycle methods (including `useEffect`) twice in development mode to help catch
    unexpected side effects.
    This behavior is specific to development and won't occur in production.
* Key Points about StrictMode :
    - StrictMode triggers `useEffect` twice - once during the initial mount and again after the component unmounts and remounts immediately.
    - This is why you see the sequence of `true -> false -> true` for the `isMounted` flag in your console logs.
    - This behavior is intentional and designed to help developers identify potential issues in their code.

* Cleanup Function :
    The cleanup function is an important part of the `useEffect` hook.
    It runs when the component is about to unmount or before the effect is re-run (if dependencies change).
    In your original code, there was a misuse of the cleanup function where it was written incorrectly :
    return (isMounted) => {
        isMounted = false;
        console.log(isMounted);
    };
    This misuse could cause unexpected behavior in the application, but it wasn't the primary reason for the multiple logs. Correcting it to :
    return () => {
        isMounted = false;
        console.log(isMounted);
    };
    Ensures that the `isMounted` flag is properly set to `false` during cleanup, avoiding any potential issues when the component unmounts.
* Key Points about Cleanup Function :
    - The cleanup function is correctly used to prevent updates to unmounted components.
    - It runs when the component unmounts or when the effect is about to re-run.
    - Fixing the cleanup function doesn't affect the double `useEffect` call caused by StrictMode, but it ensures your component behaves
    correctly during unmounting.

* Conclusion :
    - StrictMode is the main reason for the multiple logs and `useEffect` calls you're seeing in development mode.
    - The cleanup function misuse was a separate issue that needed fixing to ensure correct behavior during component unmounting, but it
    wasn't the cause of the multiple logs.

9. Explain the code ?
const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
console.log(response);
const result = await response.json();
console.log(result);
* fetch is a built-in JavaScript function that initiates a network request to the specified URL and returns a Promise that resolves to the
Response object representing the response to the request.
    •	URL: "https://jsonplaceholder.typicode.com/users/1"
    •	Returns: A Promise that resolves to a Response object.
* response contains the Response object returned by the fetch call. This object represents the HTTP response, including :
    •	Status Code - HTTP status code (e.g., 200, 404).
    •	Status Text - HTTP status message (e.g., “OK”).
    •	Headers - Metadata about the response (e.g., content type).
    •	Body - The actual data returned by the server, which can be accessed in various formats.
* The Response object is an instance of the Response class.
* response.json() is a method on the Response object that parses the response body as JSON.
* This method also returns a Promise that resolves to the result of parsing the body text as JSON.
* The Purpose is to convert the response body, which is in the form of a JSON string, into a JavaScript object.

10. What is Dependency Array ?
* The dependency array is the second argument of the useEffect hook.
* It is an array that contains variables that the effect depends on.
* The main purpose is that it tells React to re-run the effect only when one or more of the dependencies change.
* If the dependencies don’t change, React skips running the effect.
* Syntax :
    useEffect(() => {
        // Effect logic here
    }, [dependencies]);
    [dependencies] - An array of variables that the effect depends on.

11. How Does Dependency Array Work ?
* Initial Render - The effect runs after the initial render.
* Subsequent Renders - The effect runs only if one or more variables in the dependency array have changed since the last render.
* Cleanup - The effect’s cleanup function (if provided) runs before the effect re-runs or when the component unmounts.

12. What are the cases of useEffect ?
* There are three main cases :
    When We want to run the 'Effect Only Once (on Mount)'.
    When We want to run the 'Effect When Dependencies Change'.
    When We want to run the 'Effect After Every Render'.
* Effect Runs Once (on Mount) -
    Use Case : You want the effect to run only once, right after the component mounts.
    How to Achieve : Pass an empty array ([]) as the second argument to useEffect, also called dependency array.
    Behavior :
            •	Runs only after the initial render.
            •	Cleanup function (if provided) runs when the component unmounts.
* Effect Runs When Dependencies Change -
    Use Case : You want the effect to run when specific dependencies change.
    How to Achieve : Pass an array of dependencies to useEffect. The effect runs whenever any of the dependencies change.
    Behavior :
            •	Runs after the initial render and whenever any of the specified dependencies change.
            •	Cleanup function (if provided) runs before the effect re-runs or when the component unmounts.
* Effect Runs After Every Render -
    Use Case : You want the effect to run after every render, including the initial render and subsequent re-renders.
    How to Achieve : Do not pass a second argument (empty array) or pass undefined.
    Behavior :
            •	Runs after every render, including initial and subsequent renders.
            •	Cleanup function (if provided) runs after every render before the effect re-runs.

*/