# Axios Vs Fetch

## 1. Introduction.
* `Fetch` - 
    * Fetch API is a modern, built-in JavaScript API for making HTTP requests. 
    * It was introduced to standardize and simplify network requests in the browser, replacing older approaches like XMLHttpRequest (XHR).
* `Axios` - 
    * Axios is a popular, third-party HTTP client library that provides features on top of what Fetch can do, simplifying common tasks and providing a more complete set of utilities out-of-the-box.

## 2. Key Differences.
* **Browser Support and Polyfills**
	* `Fetch` -
	    * Older browsers (especially Internet Explorer) did not support Fetch natively. 
        * Developers often needed polyfills if they had to support legacy browsers.
	    * Modern browsers now fully support Fetch, making polyfills less necessary.
	* `Axios` -
	    * Works in older browsers without requiring an additional polyfill since it uses its own internal XHR implementation.
	    * This reliability made Axios more attractive when Fetch support was less widespread.
* **Syntax and Ease of Use**
	* `Fetch` -
	    * By default, it doesn’t automatically process JSON from the response. 
        * You typically need to call `response.json()` manually.
	    * Error handling can be a bit more verbose. 
        * For example, a failed Fetch request (like a 404) does not automatically throw an error; you still get a resolved promise, but with an HTTP status indicating an error.
	* `Axios` -
	    * Automatically transforms JSON data, so you typically get the parsed data directly in `response.data`.
	    * Automatic error handling for non-2xx status codes—if an HTTP status indicates an error, Axios will reject the promise, making it easier to handle errors.
* **Interceptors**
	* `Fetch` -
	    * Interceptors aren’t built-in. 
        * You must write custom logic or wrap Fetch calls in your own abstraction to handle repeated request/response transformations or error handling.
	* `Axios` -
	    * Offers request and response interceptors out of the box. 
        * This allows you to attach common behaviors (like adding authentication headers or logging) before a request is sent or after a response is received.

* **Request Cancellation**
	* `Fetch` -
	    * Has the concept of the AbortController and AbortSignal, but it was introduced later, and can be slightly more involved to set up.
	* `Axios` -
	    * Provides its own dedicated cancellation mechanism (using CancelToken or newer features) to stop requests. 
        * This was available before fetch had AbortController, making Axios appealing in scenarios where cancellation is needed.
* **Node.js Support**
	* `Fetch` -
	    * By default, Fetch is for browsers. 
        * There is a Node.js implementation of Fetch in newer Node versions, but historically developers had to rely on third-party libraries or polyfills in Node.
	* `Axios` -
	    * Works seamlessly in both browser and Node.js environments, making it a good universal solution.

## 3. Why Axios Came Into Play ?
* **Earlier Feature-Completeness** -
    * Axios provided features like automatic JSON parsing, better error handling, request/response interceptors, and broad browser support at a time when Fetch was still evolving.
* **Consistency Across Environments** -
    * Axios made it easy to write HTTP calls that worked the same way in browser and Node without extra configuration.
* **Simplicity in Common Tasks** -
    * Axios streamlined tasks like -
	    * Converting data to JSON
	    * Adding headers
	    * Handling error statuses automatically
* These advantages made developers adopt Axios quickly. 
* Over time, Fetch improved, but the developer experience of Axios and its ecosystem kept it popular.

## 4. Using Fetch vs. Using Axios Today.
* **Use Fetch if** -
	* You want a native, lightweight solution without additional libraries.
	* You are comfortable handling JSON parsing and errors manually.
	* You only need to support modern browsers (or you’re happy to add a polyfill for older ones).
* **Use Axios if** -
	* You want a unified, consistent API across browsers and Node.js.
	* You require advanced features like interceptors or built-in request cancellation that’s simpler to set up.
	* You want simpler, more direct error handling for non-2xx responses.
	* You prefer a more structured approach out of the box (automatic JSON parsing, etc.).

## 5. How This Helps You as a Developer ?
* **Cleaner Code** - 
    * Axios often leads to shorter, more readable code for typical use cases (e.g., getting JSON data, handling errors uniformly).
* **Error Handling & Debugging** - 
    * Having error statuses automatically throw rejections means you can handle them in a single .catch() block rather than manually checking status codes.
* **Scalability** - 
    * If you have a large application with many HTTP calls, using interceptors for authentication tokens, logging, or consistent error-handling can save you from writing repetitive code.