/*

-----DDL(Data Definition Language)-----

1. DDL
Answer :
Data Definition Language(DDL) is a subset of SQL.
Primary Functions - Create, Modify, and Delete Database Structures But Not Data.
DDL Commands :-
    CREATE - Used to create the database or its objects (like table, index, function, views, store procedure, and triggers).
    DROP - Used to delete an existing database or table.
    ALTER - Used to alter the structure of the database. Used to add, delete/drop or modify columns in an existing table. 
    TRUNCATE - Used to remove all records from a table, including all spaces allocated for the records which are removed.
    RENAME - Used to rename an object in the database.
Syntax of CREATE :-
    CREATE TABLE table_name (
    column1 data_type(size),
    column2 data_type(size),
    ...
    );
Syntax of DROP :-
    DROP TABLE table_name;
Syntax of ALTER :-
    ALTER TABLE table_name ADD column_name datatype;
    ALTER TABLE table_name DROP COLUMN column_name;
    ALTER TABLE table_name MODIFY COLUMN column_name datatype(size);
Syntax of TRUNCATE :-
    TRUNCATE TABLE table_name;
Syntax of RENAME :-
    RENAME TABLE old_table_name TO new_table_name;


2. Create Table
Answer :
Syntax of CREATE Table :-
    CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
    ....
    );
Note :-
    table_name - Name of the table that you want to create.
    column1, column2,... - Columns in the table.
    datatype -  Data Type for the column, such as varchar, int, date, etc.


3. Alter Table
Answer :
Syntax of Adding One Column :-
    ALTER TABLE tableName
    ADD columnName datatype;
Syntax of Adding Multiple Column :-
    ALTER TABLE tableName
    ADD (columnName1 datatype,
        columnName2 datatype,
        ...
        );

Syntax of Droping One Column :-
    ALTER TABLE tableName
    DROP COLUMN columnName;
Syntax of Droping Multiple Column :-
    ALTER TABLE tableName
    DROP (columnName1,
        columnName2,
        ...
        );

Syntax of Modifing Datatype of a Column :-
    ALTER TABLE tableName
    ALTER COLUMN columnName TYPE newDataType;

Syntax of Adding Constraints :-
    ALTER TABLE tableName
    ADD CONSTRAINT constraintName
    PRIMARY KEY (column1, column2, ... column_n);
Syntax of Droping Constraints :-
    ALTER TABLE tableName
    DROP CONSTRAINT constraintName;


4. Truncate Table
Answer :
Syntax of TRUNCATE table :-
    TRUNCATE TABLE table_name;

*/