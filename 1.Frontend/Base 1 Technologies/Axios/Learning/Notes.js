/*

-----Introduction to Axios-----

1. What are HTTP Requests ?
Explanation :-
* HTTP (Hypertext Transfer Protocol) requests are messages sent by a client (like a browser or an API client) to a server to perform operations such as fetching data, sending data, or performing some actions on a web resource.
* There are several types of HTTP requests, like :
	•	GET - Fetches data from the server.
	•	POST - Submits data to the server to create or update a resource.
	•	PUT - Updates a resource on the server.
	•	DELETE - Deletes a resource from the server.

2. Why Axios over Fetch ?
Explanation :-
* Promise-Based - Axios automatically transforms response data to JSON unlike fetch, which requires manual .json() call.
* Interceptors - Allows modification of requests and responses globally.
* Error Handling - Axios provides easier error handling with statuses directly accessible.
* Timeouts - Axios allows setting timeouts for requests.
* Request Cancellation - With Axios, you can cancel requests using a cancel token.

3. What is Promise Based HTTP Client ?
Explanation :-
* A Promise-based HTTP client is a tool that allows you to send HTTP requests and handle responses using Promises, which enable asynchronous operations.
* Axios is such a client, making it easier to work with HTTP requests in a more readable and manageable way.

-----Installation and Setup-----

1. How to install Axios in Different Environments ?
Explanation :-
* Node.js - Install via npm: npm install axios
* Browser - Include Axios via CDN: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
* React/Vue/Angular Projects - Install via npm or yarn: npm install axios or yarn add axios.

2. What is Basic Configuration of Axios ?
Explanation :-
* Axios allows global configuration settings that apply to all requests, such as :
	Base URL - axios.defaults.baseURL = 'https://api.example.com';
	Timeout - axios.defaults.timeout = 10000; // 10 seconds
	Headers - axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

3. What is Axios Instances ?
Explanation :-
* An Axios instance is a copy of Axios with custom settings.
* It’s useful for managing different API requests with different base URLs, headers, or configurations.
* Example :
const instance = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

-----Basic Axios Request-----

1. How to make GET Request using Axios ?
Explanation :-
* The get() method fetches data from the server. You can pass query parameters as part of the URL.
* Example :
axios.get('/user?ID=12345')
    .then(response => console.log(response.data))
    .catch(error => console.log(error));

2. How to make POST Request using Axios ?
Explanation :-
* The post() method sends data to the server, usually to create a new resource.
* Example :
axios.post('/user', {
    firstName: 'John',
    lastName: 'Doe'
})
    .then(response => console.log(response.data))
    .catch(error => console.log(error));

3. How to make other Request using Axios ?
Explanation :-
* PUT Request - axios.put('/user/12345', {name: 'New Name'})
* DELETE Request - axios.delete('/user/12345')
* PATCH Request - axios.patch('/user/12345', {name: 'Updated Name'})

-----Handeling Responses-----

1. How to understand Responses and HTTP Status Codes ?
Explanation :-
* Axios provides an easy-to-read response object, where :
	•	response.data - contains the actual data from the server.
	•	response.status - gives the HTTP status code (e.g., 200, 404).
	•	response.statusText - provides a textual description of the status code.

2. How to access Headers and other Meta Information ?
Explanation :-
* You can access headers and other response metadata using :
* Example :
axios.get('/user/12345')
    .then(response => {
        console.log(response.headers);
        console.log(response.status);
        console.log(response.config);
    });

3. How to Handle Error with Axios ?
Explanation :-
* Axios provides a detailed error object that can help in debugging.
* Example :
axios.get('/user/12345')
    .then(response => console.log(response.data))
    .catch(error => {
        if (error.response) {
            // Server responded with a status other than 200 range
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        else if (error.request) {
            // No response was received
            console.log(error.request);
        }
        else {
            // Something happened in setting up the request
            console.log('Error', error.message);
        }
    });

-----Advanced Axios Request-----

1. How to set Custom Headers for Request ?
Explanation :-
* Custom headers can be set for a specific request or globally for all requests.
* For a Specific Request :
    axios.get('/user/12345', {
        headers: {
            'Authorization': 'Bearer yourToken',
            'Content-Type': 'application/json'
        }
    })
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
* Globally for All Requests :
    axios.defaults.headers.common['Authorization'] = 'Bearer yourToken';

2. How to Send Data and Handle URL Parameters ?
Explanation :-
* Sending Data in Requests :
    In POST requests, data is typically sent in the request body.
    Example :
    axios.post('/user', {
        firstName: 'John',
        lastName: 'Doe'
    })
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
* Handling URL Parameters :
    Query parameters can be passed using the params option.
    Example :
    axios.get('/user', {
        params: {
            ID: 12345
        }
    })
    .then(response => console.log(response.data))
    .catch(error => console.log(error));

3. What are Request and Response Interceptors ?
Explanation :-
* Interceptors allow you to run functions before a request is sent or after a response is received.
* Request Interceptors -
    Modify or log requests before they are sent.
    Example :
    axios.interceptors.request.use(config => {
        console.log('Request was sent');
        return config;
        },
        error => {
            return Promise.reject(error);
    });
* Response Interceptors -
    Modify or log responses before they are handled.
    Example :
    axios.interceptors.response.use(response => {
        console.log('Response received');
        return response;
        },
        error => {
            return Promise.reject(error);
    });

-----Axios With API-----

1. How to connect and consume an API with Axios ?
Explanation :-
* To consume an API, make requests to the API endpoint using Axios.
* The get() method sends a request to the API and retrieves the data.
* Example :
axios.get('https://api.example.com/data')
    .then(response => console.log(response.data))
    .catch(error => console.log(error));

2. How to Handle API Responses ?
Explanation :-
* API responses can be handled based on the status code or the data received.
* Check the status code to determine how to handle the response.
* Example :
axios.get('https://api.example.com/data')
    .then(response => {
        if (response.status === 200) {
            console.log('Data:', response.data);
        }
        else {
            console.log('Unexpected status code:', response.status);
        }
    })
    .catch(error => console.log('Error:', error));

3. How to work with Async/Await ?
Explanation :-
* Async/await makes handling promises more readable in modern JavaScript.
* await pauses the function execution until the promise resolves, making the code easier to read and write.
* Example :
async function fetchData() {
    try {
        const response = await axios.get('https://api.example.com/data');
        console.log(response.data);
    }
    catch (error) {
        console.log(error);
    }
}
fetchData();

-----Advanced Axios Techniques-----

1. What is Axios.create ?
Explanation :-
* axios.create() allows you to create a new Axios instance with custom settings.
* Each instance can have its own configuration, useful for interacting with different APIs.
* Example :
const instance = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

2. How to handle simultaneous Request usign Axios.all ?
Explanation :-
* axios.all() allows you to run multiple requests simultaneously and wait for all of them to complete.
* axios.spread is used to spread the results into individual arguments.
* Example :
axios.all([
    axios.get('/user/12345'),
    axios.get('/user/67890')
])
.then(axios.spread((user1, user2) => {
    console.log(user1.data, user2.data);
}));

3. What are Config Defaults ?
Explanation :-
* Config defaults allow you to set default values for all Axios requests.
* These defaults apply to every request unless overridden.
* Example :
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'Bearer yourToken';
axios.defaults.timeout = 10000;

-----Cancel Token-----

1. What is Cancel Token ?
Explanation :-
* A Cancel Token in Axios allows you to cancel an HTTP request before it completes.
* This is particularly useful in scenarios like :
	Avoiding Redundant Requests - If a user performs a new action that makes the previous request unnecessary.
	Improving Performance - Cancelling requests that are no longer needed can save resources.

2. How to implement Request Cancellation ?
Explanation :-
* You can implement request cancellation using the CancelToken provided by Axios.
* The cancel function is stored and called later to cancel the request.
* Example :
const CancelToken = axios.CancelToken;
let cancel;
axios.get('/user/12345', {
    cancelToken: new CancelToken(function executor(c) {
        cancel = c;
    })
})
.then(response => console.log(response.data))
.catch(error => {
    if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
    }
    else {
        console.log(error);
    }
});
// To cancel the request
cancel('Operation canceled by the user.');

3. What are the use-cases of Cancel Token in Real Life Projects ?
Explanation :-
* Search Autocomplete - Cancel the previous request if a new search query is entered before the previous one completes.
* User Navigation - If a user navigates away from a page, cancel any ongoing requests associated with that page to save bandwidth and resources.
* Form Submission - Cancel a previous form submission request if the user resubmits the form with updated data.

-----Cookies and CSRF Protection-----

1. What are Cookies and CSRF Protection ?
Explanation :-
* Cookies -
    Small pieces of data stored on the client side, often used for session management, storing user preferences, or tracking.
* CSRF (Cross-Site Request Forgery) Protection -
    A security measure to protect against unauthorized actions performed on behalf of an authenticated user.
    CSRF tokens are used to verify the authenticity of requests.

2. How to Implement it with Axios ?
Explanation :-
* Sending Cookies -
    To include cookies in requests, you can set the withCredentials option.
    Example :
    axios.get('/user', {
        withCredentials: true
    });
* CSRF Protection -
    Often involves sending a CSRF token in the headers.
    This ensures that the request is coming from a trusted source.
    Example :
    axios.post('/user', data, {
        headers: { 'X-CSRF-Token': 'your-csrf-token' }
    });

-----Testing Axios Request-----

1. How to Test HTTP Request ?
Explanation :-
* Mocking -
    Use libraries like jest and axios-mock-adapter to mock HTTP requests and test different scenarios.
    Mocking allows you to test how your application handles different responses without making actual network calls.
* Example :
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axios);
mock.onGet('/users').reply(200, [{ id: 1, name: 'John Doe' }]);
axios.get('/users').then(response => {
    expect(response.data).toEqual([{ id: 1, name: 'John Doe' }]);
});

2. What is Test Cases for Axios Request ?
Explanation :-
* Success Case - Verify that the correct data is returned when a request is successful.
* Error Handling - Test how your application responds to various error scenarios (e.g., 404, 500 status codes).
* Timeout - Test how your application handles timeouts and delayed responses.
* Request Cancellation - Ensure that requests are properly canceled when needed.

-----Optimizing Axios Requests-----

1. What are some HTTP Request Optimizing Techniques ?
Explanation :-
* Caching - Store frequently requested data to reduce the number of network calls.
* Throttling/Debouncing - Limit the rate of requests sent, especially in scenarios like search or form inputs.
* Lazy Loading - Load data only when necessary, such as when the user scrolls down a page.
* Compression - Use Gzip or Brotli compression to reduce the size of the data being transferred

2. How to Apply it with Axios ?
Explanation :-
* Caching -
    Implement caching manually or use a library that works with Axios.
    Example :
    axios.get('/user/12345', { cache: true });
* Throttling/Debouncing -
    Use a throttling or debouncing utility to limit request frequency.
    Example :
    import _ from 'lodash';
    const debouncedRequest = _.debounce(() => {
        axios.get('/user/12345').then(response => console.log(response.data));
    }, 300);
    debouncedRequest(); // Call this function when needed
* Lazy Loading -
    Trigger requests only when the user scrolls to a certain part of the page.

-----Miscellaneous-----

1. What are some Common Problems with Axios and their Solution ?
Explanation :-
* Problem - CORS Issues
    Solution - Ensure the server supports CORS or use a proxy server to bypass it.
* Problem - Timeouts
    Solution - Set a reasonable timeout limit and handle timeout errors gracefully.
    Example :
    axios.get('/user', { timeout: 5000 })
        .then(response => console.log(response.data))
        .catch(error => {
            if (error.code === 'ECONNABORTED') {
                console.log('Request timed out');
            }
    });
* Problem - Unexpected Data Formats
    Solution - Specify the expected response format or manually transform the response.
    Example :
    axios.get('/user', { responseType: 'json' })
        .then(response => console.log(response.data))
        .catch(error => console.log(error));

*/
