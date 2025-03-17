/*

1. Why does the isMounted flag in my useEffect log true initially, but after saving the file, it logs false and then true again? And why does the data display correctly only on the initial page load?
Explanation :-
* When you save the file, React triggers Hot Module Replacement (HMR), which updates only the changed parts of the component without a full page reload. 
* This results in the following behavior :-
	On the initial page load, the useEffect hook runs, setting isMounted to true and fetching the data.
	After saving the file, React performs HMR, which triggers the cleanup function (isMounted = false) to simulate an unmount.
	Then, useEffect runs again, logging true (as the component is “remounted”) and fetches the data again.
* Even though the cleanup runs during HMR, it doesn’t affect the data display because isMounted ensures that the state is only updated if the component is still mounted. 
* The true and false logs are part of HMR’s process and don’t affect the actual component behavior.

2. Why Does This Happen ?
* In development mode , if your app is wrapped in `StrictMode`, React will intentionally mount, unmount, and remount components to help developers find unexpected side effects. 
* This is done by calling the `useEffect` hook twice :-
    First Render (Mount) - The `useEffect` is triggered, logs `true` for `isMounted`, fetches the data, and logs the API response and result.
    Unmount (Cleanup) - The cleanup function is called, setting `isMounted` to `false` and logging `false`.
    Second Render (Remount) - React immediately remounts the component, calling `useEffect` again, setting `isMounted` to `true` again, and re-fetching the data.

3. What to Do ?
* This behavior is normal in development mode, especially if `StrictMode` is enabled. 
* It doesn't happen in production builds.
* If you check your console in a production environment, you’ll see that the effect runs only once, as expected.

4. What is Dependency Array ?
* The dependency array is the second argument of the useEffect hook.
* It is an array that contains variables that the effect depends on.
* The main purpose is that it tells React to re-run the effect only when one or more of the dependencies change.
* If the dependencies don’t change, React skips running the effect.
* Syntax :
    useEffect(() => {
        // Effect logic here
    }, [dependencies]);
    [dependencies] - An array of variables that the effect depends on.

5. How Does Dependency Array Work ?
* Initial Render - The effect runs after the initial render.
* Subsequent Renders - The effect runs only if one or more variables in the dependency array have changed since the last render.
* Cleanup - The effect’s cleanup function (if provided) runs before the effect re-runs or when the component unmounts.

6. What are the cases of useEffect ?
* There are three main cases :
    •	When We want to run the 'Effect Only Once (on Mount)'.
    •	When We want to run the 'Effect When Dependencies Change'.
    •	When We want to run the 'Effect After Every Render'.
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