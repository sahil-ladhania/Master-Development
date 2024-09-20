/*

-----JOINs-----

1. Joins - Used to combine rows from two or more tables, based on a related column between them.


2. Types of JOIN -
    * INNER JOIN - Returns records that have matching values in both tables.
    * LEFT(Outer) JOIN - Returns all records from the left table, and the matched records from the right table. Also returns NULL if there is no match.
    * RIGHT(Outer) JOIN - Returns all records from the right table, and the matched records from the left table. Also returns null if there is no match.
    * FULL(Outer) JOIN - Returns all records when there is a match in either left (table1) or right (table2) table records. Also returns null if there is no match.
    * SELF JOIN - Regular join, but the table is joined with itself.
    * CROSS JOIN - Each row from 1st table joins with all the rows of another table. If table contain x rows and y rows in 2nd one the result set will be (x * y) rows.
Note - JOINS can be used with SELECT, UPDATE, and DELETE statements.


3. INNER JOIN :-
    * Returns the records with matching values in both tables.
    * Operation compares each row of the first table with each row of the second table to find all pairs of rows that satisfy the join predicate.
Few things to consider in case of INNER JOIN :-
    * It is a default join in SQL.
    * If you mention JOIN in your query without specifying the type, SQL considers it as an INNER JOIN.
    * Returns only the matching rows from both the tables.
    * If there is no match, the returned is an empty result.
Syntax of INNER JOIN :-
    SELECT column_name(s)
    FROM table1
    INNER JOIN table2
    ON table1.column_name = table2.column_name;


4. LEFT(OUTER) JOIN.
    * Combines rows from two or more tables based on a related column between them and returns all rows from the left table (table1) and the matched rows from the right table (table2).
    * If there is no match, the result is NULL on the right side.
Syntax of LEFT(OUTER) JOIN :-
    SELECT column_name(s)
    FROM table1
    LEFT JOIN table2
    ON table1.column_name = table2.column_name;
How SQL LEFT JOIN Works :-
    * LEFT JOIN keyword returns all records from the left table (table1), and the matched records from the right table (table2).
    * Result is NULL from the right side, if there is no match.


5. RIGHT(OUTER) JOIN.
    * Returns all records from the right table (table2), and the matched records from the left table (table1).
    * If there is no match, the result is NULL on the left side.
Syntax of RIGHT(OUTER) JOIN :-
    SELECT column_name(s)
    FROM table1
    RIGHT JOIN table2
    ON table1.column_name = table2.column_name;


6. FULL(OUTER) JOIN.
    * Method to combine rows from two or more tables, based on a related column between them.
    * Returns all rows from the left table (table1) and from the right table (table2).
    * Combines the results of both left and right outer joins and returns all (matched or unmatched) rows from the tables on both sides of the join clause.
Syntax of FULL(OUTER) JOIN :-
    SELECT column_name(s)
    FROM table1
    FULL OUTER JOIN table2
    ON table1.column_name = table2.column_name;


7. SELF JOIN.
    * Table is joined to itself.
    * Might sound counter-intuitive, but it’s actually quite useful in scenarios where comparison operations need to be made within a table.
    * Essentially, it is used to combine rows with other rows in the same table when there’s a match based on the condition provided.
    * Since it’s a join operation on the same table, alias(es) for table(s) must be used to avoid confusion during the join operation.
Syntax of SELF JOIN :-
    SELECT a.column_name, b.column_name
    FROM table_name AS a, table_name AS b
    WHERE a.common_field = b.common_field;


8. CROSS JOIN.
    * Combine every row of the first table with every row of the second table.
    * Also known as the Cartesian product of the two tables.
    * Does not require any condition to join.
    * Issue with cross join is it returns the Cartesian product of the two tables, which can result in large numbers of rows and heavy resource usage. 
Syntax of CROSS JOIN :-
    SELECT column_name(s)
    FROM table1
    CROSS JOIN table2;

*/