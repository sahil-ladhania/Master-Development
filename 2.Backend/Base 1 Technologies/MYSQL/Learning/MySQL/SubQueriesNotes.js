/*

-----Sub-Queries-----

1. What is a Sub-Query ?
Answer :
* Subquery is a query embedded within another SQL query.
* Alternately call it a nested or an inner query. 
* Containing query is often referred to as the outer query.
* Subqueries are utilized to retrieve data that will be used in the main query as a condition to further restrict the data to be retrieved.
* Subqueries can be used in various parts of a query, including :-
    SELECT statement
    FROM clause
    WHERE clause
    GROUP BY clause
    HAVING clause
* General Syntax can be written as :-
    SELECT column_name [, column_name]
    FROM   table1 [, table2 ]
    WHERE  column_name OPERATOR
        (SELECT column_name [, column_name]
        FROM table1 [, table2 ]
        [WHERE])
* Types of Sub-Queries :-
    Scalar - Returns a single value (scalar) as its result.
    Row - Returns one or more rows of data.
    Column - Returns a single column of data.
    Table - Returns an entire table as its result.
Note - 
    Subqueries can be either correlated or uncorrelated.
    Correlated subquery is a subquery that uses values from the outer query.
    Un-Correlated subquery is a subquery that can be run independently of the outer query.


2. Types of Sub-Query.
Answer :
* There are mainly 4 types of Sub-Queries :-
    Scalar
    Row
    Column 
    Table
* Scalar Sub-Query :-
    Returns a single value (scalar) as its result.
    Query that returns exactly one column with a single value.
    Can be used anywhere in your SQL where expressions are allowed.
    Syntax of Scalar Sub-Query :-
        SELECT column_name [, column_name ]
        FROM   table1 [, table2 ]
        WHERE  column_name operator
            (SELECT column_name [, column_name ]
            FROM table_name 
            WHERE condition);
* Row Sub-Query :-
    Returns one or more rows of data.
    Return one or more rows to the outer SQL select query.
    Sub-Query returns multiple columns and rows, so it cannot be directly used where scalar expressions are used.
    Syntax of Row Sub-Query :-
        SELECT column_name [, column_name ]
        FROM   table1 [, table2 ]
        WHERE  (column_name [, column_name ])
            IN (SELECT column_name [, column_name ]
            FROM table_name 
            WHERE condition);
* Column Sub-Query :-
    Returns a single column of data.
    Return one or more columns to the outer SQL select query.
    Used when the subquery is expected to return more than one column to the main query.
    Syntax of Column Sub-Query :-
        SELECT column_name [, column_name ]
        FROM   table1 [, table2 ]
        WHERE  (SELECT column_name [, column_name ]
            FROM table_name 
            WHERE condition);
* Table Sub-Query :-
    Returns an entire table as its result.
    Used in the FROM clause and return a table that can be used as a table-reference in an SQL statement.
    Come in handy when you want to perform operations such as joining multiple tables, union data from multiple sources.
    Syntax of Table Sub-Query :-
        SELECT column_name [, column_name ]
        FROM
            (SELECT column_name [, column_name ]
            FROM   table1 [, table2 ])
        WHERE  condition;


3. Nested Sub-Queries.
Answer :
* Sub-Query is a query that is nested inside a main query.
* If a subquery is nested inside another subquery, it is called a nested subquery.
* Can be used in SELECT, INSERT, UPDATE, or DELETE statements or inside another subquery.
* Nested subqueries can get complicated quickly, but they are essential for performing complex database tasks.
* Syntax of Nested Sub-Query :-
    SELECT column_name [, column_name ]
    FROM   table1 [, table2 ]
    WHERE  column_name OPERATOR
        (SELECT column_name [, column_name ]
        FROM table1 [, table2 ]
        [WHERE])
* In a nested subquery, the inner subquery will run first and its result will be used to run the outer query.


4. Correlated Sub-Query.
Answer :
* Sub-Query that uses values from the outer query in its WHERE clause.
* Correlated subquery is evaluated once for each row processed by the outer query.
* Exists because it depends on the outer query and it cannot execute independently of the outer query because the subquery is correlated with the outer query as it uses its column in its WHERE clause.


*/