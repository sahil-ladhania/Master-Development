// String Methods :

// 1. .length - Returns the number of characters in a string.
// Usage :
// * Checking the length of a user's password to enforce a minimum character requirement during registration.
// * Dynamically adjusting the width of a progress bar based on the length of a file upload.
// * Limiting the length of a tweet or status update in a social media application.
const username = "sahil.ladhania";
console.log(`Length of username : ${username.length}`);

// 2. .indexOf() - Returns the index of the first occurrence of a specified value in a string.
// Usage :
// * Validating the presence of a specific substring in an email address for proper formatting.
// * Implementing a search functionality to find the position of a keyword in a document.
// * Creating an autocomplete feature by suggesting words based on the index of user input in a dictionary.
const sentence = "Hello , how are you ?";
console.log(sentence.indexOf("how"));

// 3. .lastIndexOf() - Returns the index of the last occurrence of a specified value in a string.
// Usage :
// * Locating the position of the last occurrence of a tag in an HTML document for efficient removal.
// * Extracting the file extension from a path by finding the last occurrence of the period.
// * Checking for the last occurrence of a specific character in a URL to extract the file name.
const paragraph = "This is a sample paragraph. Sample is repeated for emphasis.";
console.log(paragraph.lastIndexOf("Sample"));

// 4. .slice() - Extracts a section of a string and returns it as a new string.
// Usage :
// * Truncating a long description in a preview to display concise information.
// * Extracting the domain name from a URL for displaying shortened links.
// * Displaying a snippet of a blog post on a homepage by slicing the content.
const longText = "This is a lengthy text that needs to be shortened.";
console.log(longText.slice(0,20));

// 5. .substring() - Similar to slice, but doesn't allow negative indices.
// Usage :
// * Creating a substring based on start and end indices to extract a specific section of a JSON response.
// * Obtaining the first name from a full name by using substring with defined indices.
// * Implementing a character limit for user comments by extracting a substring of the input.
const document = "Important information: Confidential";
console.log(document.substring(0,12));

// 6. .replace() - Replaces a specified value with another value in a string.
// Usage :
// * Sanitizing user input by replacing prohibited characters with a safe alternative.
// * Implementing a profanity filter by replacing offensive words with asterisks.
// * Updating outdated terminology in a document through a find-and-replace mechanism.
const message = "Please replace this word.";
console.log(message.replace("replace" , "update"));

// 7. .split() - Splits a string into an array of substrings based on a specified delimiter.
// Usage :
// * Parsing CSV data into an array for easy manipulation and storage.
// * Breaking down a sentence into individual words for sentiment analysis.
// * Separating tags in a blog post to create a tag cloud for categorization.
const csvData = "John,Doe,30";
console.log(csvData.split(","));

// 8. .trim() - Removes whitespace from both ends of a string.
// Usage :
// * Cleaning up user input by removing leading and trailing spaces in form fields.
// * Improving search functionality by ignoring extra spaces in search queries.
// * Ensuring consistency in database entries by trimming whitespace from user inputs.
const userInput = "    Spaces removed!   ";
console.log(userInput.trim());

// 9. .toUpperCase() - Converts a string to uppercase.
// Usage :
// * Normalizing input for case-insensitive comparison of usernames during authentication.
// * Displaying headings or titles in a consistent uppercase format across a website.
// * Converting user input to uppercase before storing it in a database for uniformity.
const lowercaseText = "convert me";
console.log(lowercaseText.toUpperCase());

// 10. .toLowerCase() - Converts a string to lowercase.
// Usage :
// * Ensuring case consistency in email addresses for accurate matching during login.
// * Converting user input to lowercase for case-insensitive comparison in search functionality.
// * Displaying tags in a blog post consistently in lowercase for a uniform appearance.
const uppercaseText = "Convert Me";
console.log(uppercaseText.toLowerCase());

// Note - 1 : Difference Between .slice() and .substring() method.
// Differences :
// slice(start, end): Allows negative indices, where -1 refers to the last character, -2 to the
// second-to-last character, and so on. If the end parameter is omitted, it extracts to the end of
// the string.
// substring(start, end): Does not allow negative indices. If either parameter is negative or omitted,
// it is treated as 0.
const originalString = "Hello, World!";
// Using slice
const slicedResult = originalString.slice(7, -1); // Extracts characters from index 7 to the second-to-last character
console.log("Slice Result:", slicedResult); // Output: "World"
// Using substring
const substringResult = originalString.substring(7, 12); // Extracts characters from index 7 to index 11
console.log("Substring Result:", substringResult); // Output: "World"