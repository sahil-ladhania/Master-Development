/*

-----Aggregate Queries-----

1. Aggregate Functions - 
    * Inbuilt functions that are used to perform some calculation on the data and return a single value. 
    * This is why they form the basis for “aggregate queries”. 
    * These functions operate on a set of rows and return a single summarized result.
    * Aggregate queries are simply a way of summarizing information in your database.
    * Although they are a powerful tool, they can become complex very quickly, especially if you start nesting them together or combining multiple aggregate functions in a single query.


2. List of Some Aggregate Functions.
COUNT() - Counts the number of rows.
SUM() - Returns the sum of a numeric column.
AVG() - Returns the average value of a numeric column.
MIN() - Returns the smallest value of the selected column.
MAX() - Returns the largest value of the selected column.
GROUP BY - 
    * To separate the results into groups of accumulated data, you can use the GROUP BY clause.
    * "A group” is represented by ROW(s) that have the same value in the specific column(s).
    * GROUP BY clause can be used in a SELECT statement to collect data across multiple records and group by some columns.
HAVING - 
    * HAVING clause is used with the GROUP BY clause, it applies to summarized group records, unlike the ‘where’ clause.
    * Added to SQL because the WHERE keyword could not be used with aggregate functions.

*/