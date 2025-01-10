/*

-----DML(Data Manipulation Language)-----

1. DML
Answer :
Data Manipulation Language(DML) is a subset of SQL.
Primary Functions - Insert, Retrieve, Update and Delete data from the database.
DML contains four commands which are :-
    INSERT INTO - Used to insert new rows (records) into a table.
    SELECT - Used to select data from a database. Data returned is stored in a result table, called the result-set.
    UPDATE - Used to modify the existing rows in a table.
    DELETE FROM - Used to delete existing rows (records) from a table.


2. SELECT
Answer :
Majorly used for fetching data from the database.
Some important SELECT Commands :-
    SELECT DISTINCT - Used to return only distinct (different) values. DISTINCT keyword eliminates duplicate records from the results.
    SELECT WHERE - Gives us the ability to filter records based on a condition.
    SELECT ORDER BY - Sort the result-set in ascending or descending order.
Syntax of SELECT DISTINCT :-
    SELECT DISTINCT column1, column2, ...
    FROM table_name;
Syntax of SELECT WHERE :-
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition;
Syntax of SELECT ORDER BY :-
    SELECT column1, column2, ...
    FROM table_name
    ORDER BY column ASC|DESC; ----> Default sort order is ascending.


3. FROM
Answer :
Specifies the tables from which the retrieval should be made.
Integral part of SELECT statements and variants of SELECT like SELECT INTO and SELECT WHERE. 
FROM can be used to Join tables as well.
Typically, FROM is followed by space delimited list of tables in which the SELECT operation is to be executed. If you need to pull data from multiple tables, you would separate each table with a comma.
Note - 
    Always respect the order of operations in SQL.
    FROM clause works only after tables are identified.
    In Complex SQL queries where you might need to pull data from multiple tables, aliases are used to temporarily rename the tables within the individual SQL statement.


4. HAVING
Answer :
Clause in SQL that allows you to filter result sets in a GROUP BY clause.
Used to mention conditions on the groups being selected.
HAVING is mainly used with the GROUP BY clause to filter the results that a GROUP BY returns.
Similar to a WHERE clause, but operates on the results of a grouping. 
WHERE clause places conditions on the selected columns, whereas the HAVING clause places conditions on groups created by the GROUP BY clause.
Syntax of HAVING with GROUP BY :-
    SELECT column_name, function(column_name)
    FROM table_name
    WHERE condition
    GROUP BY column_name
    HAVING function(column_name) condition value;


5. GROUP BY
Answer :
Clause in SQL that is used to arrange identical data into groups.
Clause comes under the category of Group Functions, alongside the likes of Count, Sum, Average, etc.
Syntax of GROUP BY :-
    SELECT column1, column2
    FROM table_name
    GROUP BY column1, column2;

6. GROUP BY with HAVING
Answer :
Can also be used with the Having keyword.
Having keyword allows you to filter the results of the group function.


7. JOINs
Answer :
Used to retrieve data from two or more data tables, based on a related column between them.
Key types of JOINs are :-
    INNER JOIN - Returns records with matching values in both tables.
    LEFT (OUTER) JOIN - Returns all records from the left table, and matched records from the right table.
    RIGHT (OUTER) JOIN - Returns all records from the right table, and matched records from the left table.
    FULL (OUTER) JOIN - Returns all records when either a match is found in either left (table1) or right (table2) table records.
    SELF JOIN - Join in which a table is joined with itself.
    CARTESIAN JOIN - If WHERE clause is omitted, the join operation produces a Cartesian product of the tables involved in the join. Size of a Cartesian product result set is the number of rows in the first table multiplied by the number of rows in the second table.
Syntax of INNER JOIN :-
    SELECT table1.column1, table2.column2...
    FROM table1
    INNER JOIN table2
    ON table1.matching_column = table2.matching_column;

Syntax of LEFT (OUTER) JOIN :-
    SELECT table1.column1, table2.column2...
    FROM table1
    LEFT JOIN table2
    ON table1.matching_column = table2.matching_column;

Syntax of RIGHT (OUTER) JOIN :-
    SELECT table1.column1, table2.column2...
    FROM table1
    RIGHT JOIN table2
    ON table1.matching_column = table2.matching_column;

Syntax of FULL (OUTER) JOIN :-
    SELECT table1.column1, table2.column2...
    FROM table1
    FULL JOIN table2
    ON table1.matching_column = table2.matching_column;

Syntax of SELF JOIN :-
    SELECT a.column_name, b.column_name...
    FROM table_name AS a, table_name AS b
    WHERE condition;

Syntax of CARTESIAN JOIN :-
    SELECT table1.column1, table2.column2...
    FROM table1, table2;


8. INSERT
Answer :
Used to add new rows of data to a table in a database.
Two main forms of the INSERT command :-
    INSERT INTO -  If columns are not named, expects a full set of columns.
    INSERT INTO table_name (column1, column2, ...) - Where only named columns will be filled with data.
Syntax of Insert Full Set Of Columns :-
    INSERT INTO table_name 
    VALUES (value1, value2, ..., valueN);
Syntax of Selectively Insert Data :-
    INSERT INTO table_name (column1, column2, ..., columnN)  
    VALUES (value1, value2, ..., valueN);
Syntax of Insert Data from another table :-
    INSERT INTO table1 (column1, column2, ... , columnN)
    SELECT column1, column2, ... , columnN 
    FROM table2 
    WHERE condition;
Note -
    Crucial point is that your columns in both SELECT and INSERT INTO command must be in same order and their datatypes must be compatible.
    Kindly ensure that database table has enough space to hold inserted data, else it will resulting in OVERFLOW error.
    Always make sure to provide correct and compatible data types for the columns.
    SQL engine won’t allow you to add data that doesn’t match the column’s declared data type.


9. UPDATE
Answer :
Used to modify the existing records in a table.
Useful when you need to update existing data within a database.
Important points to remember before updating records in SQL :-
    WHERE clause in the UPDATE statement specifies which records to modify. If you omit the WHERE clause, all records in the table will be updated!
    Be careful when updating records in SQL. If you inadvertently run an UPDATE statement without a WHERE clause, you will rewrite all the data in the table.
Syntax of UPDATE :-
    UPDATE table_name
    SET column1 = value1, column2 = value2...., columnN = valueN
    WHERE [condition];
Note - 
    table_name - Specifies the table where you want to update records.
    SET - This keyword is used to set the column values.
    column1, column2... columnN - These are the columns of the table that you want to change.
    value1, value2... valueN - These are the new values that you want to assign for your columns.
    WHERE - This clause specifies which records need to be updated. It selects records based on one or more conditions.


10. DELETE
Answer :
Used to delete existing records in a table.
Straightforward process, but care must be taken because the DELETE statement is destructive and cannot be undone by default.
Syntax of DELETE :-
    DELETE FROM table_name [WHERE condition];

*/