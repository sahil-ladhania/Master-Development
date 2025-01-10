/*

1. What is Global Catches ?
* Global error handling is crucial for catching unhandled errors across the entire application. 
* It ensures that errors are appropriately logged and don't crash the application.
* Global Catch or Error-Handling Middleware is a special type of middleware function in Express that has four arguments instead of three ((err, req, res, next)). 
* Express recognizes it as an error-handling middleware because of these four arguments.

-----Code Example-----
// Error Handling Middleware
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  // Customize the error response based on your requirements
  res.status(500).json({ error: 'Something went wrong!' });
};

2. Why to use Global Catches ?
* Centralized Handling : Global catch blocks allow you to centrally manage and handle errors that occur anywhere in your application. Instead of handling errors at each specific location, you can capture and process them in a centralized location.
* Consistent Error Handling : Using a global catch mechanism ensures a consistent approach to error handling throughout the application. You can define how errors are logged, reported, or displayed in one place, making it easier to maintain a uniform user experience.
* Fallback Mechanism : Global catches often serve as a fallback mechanism. If an unexpected error occurs and is not handled locally, the global catch can capture it, preventing the application from crashing and providing an opportunity to log the error for further analysis.

*/