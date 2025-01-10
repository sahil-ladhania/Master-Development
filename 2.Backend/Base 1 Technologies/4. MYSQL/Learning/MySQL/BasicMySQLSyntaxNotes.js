/*

-----Basic SQL Syntax-----

1. SQL Keywords.
Answer :
Keywords in SQL provide instructions as to what action should be performed.
Some of the primary SQL keywords :-
    SELECT - Retrieves data from a database.
    FROM - Used in conjunction with SELECT to specify the table from which to fetch data.
    WHERE - Used to filter records. Incorporating a WHERE clause, you might specify conditions that must be met.
    INSERT INTO - Used to insert new data into a database.
    UPDATE - Updates existing data within a table.
    DELETE - Removes one or more records from a table.
    CREATE DATABASE - Creates a new database.


2. MYSQL Data Types.
Answer :
Define the type of data that can be stored in a database table’s column.
Some Important Data Types :-
    INTEGER - Stores whole numbers without decimal points.
    VARCHAR - Variable-length string data.
    CHAR - Fixed-length string data.
    TEXT - Large text data.
    DATE - Stores dates in YYYY-MM-DD format.
    TIME - Stores time values in HH:MM:SS format.
    DATETIME - Combination of date and time in YYYY-MM-DD HH:MM:SS format.
    DECIMAL - Exact numeric data with decimal points.
    BOOLEAN - Stores true or false values.
    BINARY - Stores binary data.
    ENUM - Stores one value from a predefined set of values.
    BLOB - Stores large binary objects like images or files.


3. Operators
Answer :
Used to perform operations like comparisons and arithmetic calculations.
Very crucial in forming queries.
Operators are divided into the following types :-
    Arithmetic Operators - Used to perform mathematical operations.
        + : Addition
        - : Subtraction
        * : Multiplication
        / : Division
        % : Modulus
    Comparison Operators - Used in the where clause to compare one expression with another.
        = : Equal
        != or <> : Not equal
        > : Greater than
        < : Less than
        >=: Greater than or equal
        <=: Less than or equal
    Logical Operators - Used to combine the result set of two different component conditions.
        AND: Returns true if both components are true.
        OR : Returns true if any one of the component is true.
        NOT: Returns the opposite boolean value of the condition.
    Bitwise Operators - Perform bit-level operations on the inputs. Less commonly used in SQL.
        & : Bitwise AND
        | : Bitwise OR
        ^ : Bitwise XOR


4. SELECT
Answer :
Used in SQL to pick out specific data from a database.
Used to select from the database what you would like to display.
Syntax of SELECT :-
    SELECT column(s)
    FROM table
    WHERE condition;
Note :-
    column(s) - Enter the name(s) of the column(s) that you want to display.
    table - The name of the table from where you want to retrieve data.
    WHERE - Optional. This is a filter to display only the rows where this condition is true.


5. INSERT
Answer :
Used to add new rows of data to a table in the database.
Three forms of the INSERT statement :-
    INSERT INTO values - Specifies both the column names and the values to be inserted.
    INSERT INTO set - Specify each column you want to insert data into, and then the data for that column.
    INSERT INTO select - Used to copy data from one table and insert it into another table OR Insert data into specific columns from another table.
Syntax of INSERT INTO values :-
    INSERT INTO table_name (column1, column2, column3, ...)
    VALUES (value1, value2, value3, ...);
Syntax of INSERT INTO set :-
    INSERT INTO table_name 
    SET column1 = value1, column2 = value2, ...;
Syntax of INSERT INTO select :-
    INSERT INTO table_name1 (column1, column2, column3, ...)
    SELECT column1, column2, column3, ...
    FROM table_name2
    WHERE condition;


6. UPDATE
Answer :
Used to modify the existing data in a database.
Very useful when you need to change the values assigned to specific fields in an existing row or set of rows.
Syntax of UPDATE :-
    UPDATE table_name
    SET column1 = value1, column2 = value2, ...
    WHERE condition;
Note :-
    table_name - The name of the table where an update will be performed.
    SET - This clause specifies the column name and the new value that it should be updated to.
    column1, column2, ... - The column names in the table.
    value1, value2, ... - The new values that you want to record into the database.
    WHERE - This clause specifies the conditions that identify which row(s) to update.


7. DELETE
Answer :
Used to remove existing records from a database.
Destructive operation and may permanently erase data from your database.
With the DELETE statement, you can perform the following :-
    Delete All Rows - DELETE statement without a WHERE clause deletes all rows in a table. Operation is irreversible.
    Delete Specific Rows - When combined with the WHERE clause, the DELETE SQL statement erases specific rows that meet the condition.
Syntax of DELETE all Rows :-
    DELETE FROM table_name;
Syntax of DELETE specific Rows :-
    DELETE FROM table_name WHERE condition;


*/