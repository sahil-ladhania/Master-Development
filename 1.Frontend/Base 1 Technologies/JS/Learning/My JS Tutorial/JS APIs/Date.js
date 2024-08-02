// Date Methods :

const currentDate = new Date();

// 1. .getDate() - Returns the day of the month as a number (1-31).
// Usage :
// * Displaying the current day in a calendar application.
// * Calculating the due date for a task by adding a certain number of days.
// * Validating user input for a date to ensure it's within a specific range.
const currentDay = currentDate.getDate();
console.log(`Current Day of the Month : ${currentDay}`);

// 2. .getMonth() - Returns the month as a number (0-11), where January is 0 and December is 11.
// Usage :
// * Extracting the month from a given date to categorize data by months.
// * Dynamically updating content based on the current month.
// * Creating a dropdown menu for selecting a month in a date picker.
const currentMonth = currentDate.getMonth();
console.log(`Current Month (0-11) : ${currentMonth}`);

// 3. .getFullYear() - Returns the year (four digits) of the specified date.
// Usage :
// * Obtaining the current year for copyright information in a website footer.
// * Calculating the age of a user based on their birth year.
// * Checking if a given year is a leap year for special handling.
const currentYear = currentDate.getFullYear();
console.log(`Current Year : ${currentYear}`);

// 4. .getHours() - Returns the hour (0-23) of the specified date.
// Usage :
// * Scheduling tasks to run at specific hours of the day.
// * Displaying the timestamp of a message with the hour in a chat application.
// * Implementing time-based access control for certain features.
const currentHour = currentDate.getHours();
console.log(`Current Hour (0-23) : ${currentHour}`);

// 5. .getMinutes() - Returns the minutes (0-59) of the specified date.
// Usage :
// * Setting up countdowns by calculating the minutes remaining.
// * Logging the time a user spent on a particular activity.
// * Creating a timer for intervals in a productivity app.
const currentMinute = currentDate.getMinutes();
console.log(`Current Minutes (0-59) : ${currentMinute}`);

// 6. .getSeconds() - Returns the seconds (0-59) of the specified date.
// Usage :
// * Implementing a stopwatch feature in a fitness application.
// * Recording the time of occurrence for events with precision.
// * Adding a time stamp to log entries for debugging purposes.
const currentSeconds = currentDate.getSeconds();
console.log(`Current Seconds (0-59) : ${currentSeconds}`);

// 7. .setFullYear() - Sets the year of the specified date.
// Usage :
// * Updating the expiration date of a subscription by setting a new year.
// * Adjusting the start date of an event by changing the year.
// * Implementing a feature to change the year in a date picker.
console.log(currentYear);
currentDate.setFullYear(2025);
console.log(`Updated Year : ${currentDate.getFullYear()}`);

// 8. .setMonth() - Sets the month of the specified date.
// Usage :
// * Changing the month of a scheduled recurring task.
// * Setting a future date for a calendar event by updating the month.
// * Modifying the expiration date of a credit card by changing the month.
console.log(currentMonth);
currentDate.setMonth(5);
console.log(`Updated Month : ${currentDate.getMonth()}`);

// 9. .getTime() - Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC.
// Usage :
// * Calculating the time elapsed between two events.
// * Sorting a list of dates in ascending or descending order.
// * Managing time-based data in database records.
const myDate = new Date();
const timestamp = myDate.getTime();
console.log(`Timestamp in milliseconds : ${timestamp}`);