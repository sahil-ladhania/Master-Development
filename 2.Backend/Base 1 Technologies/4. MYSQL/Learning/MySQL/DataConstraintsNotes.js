/*

-----Data Constraints-----

1. Data constraints - 
    * Used to specify rules for the data in a table.
    * Used to limit the type of data that can go into a table.
    * Ensures the accuracy and reliability of the data in the table.


2. Types of SQL Data Constraints.
NOT NULL Constraint - 
    * Ensures that a column cannot have a NULL value.
UNIQUE Constraint - 
    * Ensures that all values in a column are different.
PRIMARY KEY Constraint - 
    * Uniquely identifies each record in a database table. 
    * Primary keys must contain UNIQUE values.
    * Exactly the same as the UNIQUE constraint but there can be many unique constraints in a table, but only one PRIMARY KEY constraint per table.
FOREIGN KEY Constraint - 
    * Prevents actions that would destroy links between tables.
    * Field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.
CHECK Constraint -
    * Ensures that all values in a column satisfies certain conditions.
DEFAULT Constraint -
    * Provides a default value for a column when none is specified.
INDEX Constraint -
    * Used to create and retrieve data from the database very quickly.
    * Indexes are not a part of the SQL standard and are not supported by all databases.


3. Primary Key.
Special relational database table field (or combination of fields) designated to uniquely identify all table records.
Main features :-
    * Must contain a unique value for each row of data.
    * Cannot contain null values.
Usage of Primary Key :-
    * You define a primary key for a table using the PRIMARY KEY constraint.
    * Table can have only one primary key.
    * You can define a primary key in SQL when you create or modify a table.
Syntax of Create Table With Primary Key :-
    CREATE TABLE Employees (
        ID INT PRIMARY KEY,
        NAME TEXT,
        AGE INT,
        ADDRESS CHAR(50)
    );
Modify Table to Add Primary Key :-
    ALTER TABLE Employees
    ADD PRIMARY KEY (ID);
Composite Primary Key :-
    We can also use multiple columns to define a primary key. Such key is known as composite key.
    Syntax Of Composite Key :-
        CREATE TABLE Customers (
            CustomerID INT,
            StoreID INT,
            CONSTRAINT pk_CustomerID_StoreID PRIMARY KEY (CustomerID,StoreID)
        );
    In this case, each combination of CustomerID and StoreID must be unique across the whole table.


4. Foreign Key.
Used to link two tables together.
Field (or collection of fields) in one table that refers to the primary key in another table.
Table with the foreign key is called the child table, and the one with the primary key is called the referenced or parent table.
Basic Syntax of Foreign Key :-
    ALTER TABLE child_table
    ADD FOREIGN KEY (fk_column)
    REFERENCES parent_table (parent_key_column);
Where :-
    * child_table is the table where you want to add the foreign key.
    * fk_column is the field in the child table that you want to use as foreign key.
    * parent_table is the table being referenced by the foreign key.
    * parent_key_column is the column in parent_table that fk_column points to.
Note :-
    * MySQL requires you to have the foreign key columns be indexed for performance reasons.
    * If they aren’t indexed already, the FOREIGN KEY constraint will implicitly index them for you.


5. Unique Key.
Ensures that all values in a column are different; that is, each value in the column should occur only once.
Both the UNIQUE and PRIMARY KEY constraints provide a guarantee for uniqueness for a column or set of columns.
However, a primary key cannot contain NULL since it uniquely identifies each row, and each table can have only one primary key.
On the other hand, a UNIQUE constraint allows for one NULL value, and a table can have multiple UNIQUE constraints.
Basic Syntax of Unique Key :-
    CREATE TABLE table_name (
        column1 data_type UNIQUE,
        column2 data_type,
        column3 data_type,
        ....
    );
Syntax of Adding a Unique Constraint to an Existing Table :-
    ALTER TABLE table_name
    ADD UNIQUE (column1, column2, ...);
Syntax of Dropping a Unique Constraint :-
ALTER TABLE table_name
DROP CONSTRAINT constraint_name;


6. Not Null.
Ensures that a column cannot have a NULL value.
Every row/record must contain a value for that column.
Way to enforce certain fields to be mandatory while inserting records or updating records in a table.
Syntax of Adding NOT NULL to an existing table :-
    ALTER TABLE Employees
    MODIFY Address varchar(255) NOT NULL;


7. CHECK.
Constraint that limits the value range that can be placed in a column.
Enforces domain integrity by limiting the values in a column to meet a certain condition.
Used in a column definition when you create or modify a table.
Syntax of CHECK :-
    CREATE TABLE table_name (
        column1 datatype CONSTRAINT constraint_name CHECK (condition),
        column2 datatype,
        ...
    );
Syntax of CHECK for Multiple Columns :-
    CREATE TABLE table_name (
        column1 datatype,
        column2 datatype,
        ...,
        CONSTRAINT constraint_name CHECK (condition)
    );

*/