/*

1. What are Views ?
Answer :
* View is a Database Object.
* View is created over an SQL Query.
* View does not store any Data.
* View store the Structure of the Data.
* View is like a Virtual Table.
* View will always show you the latest Data added in the table.
* View will not show you the latest Structure of the table.
* Virtual tables that do not store data directly.
* Essentially a saved SQL query and can pull data from multiple tables or just present the data from one table in a different way.


2. Why we use Views ?
Answer :
* Security - 
    * By hiding the query used to generate the view. ----> Understand about Creating User Roles and Securing the DB.
* To Simplify Complex SQL Queries - 
    * Sharing a View is better than sharing complex query.
    * Avoid re-writing same complex query multiple times.


3. What are operations that can be done with Views ?
Answer :
* Creating Views - Create a view using the CREATE VIEW statement.
* Querying Views - After a view has been created, it can be used in the FROM clause of a SELECT statement, as if it’s an actual table.
* Updating Views - CREATE OR REPLACE VIEW statement is used to update a view.
* Dropping Views - Use the DROP VIEW statement.
Note - 
    * Not all database systems support the CREATE OR REPLACE VIEW statement.
    * Also, the updatability of a view depends on whether it includes functions, expressions, or multiple tables. 
    * Some databases might not let you update a view at all.


4. What are the Restrictions while working with Views ?
Answer :
SQL views :-
    * Cant contain a ORDER BY clause in the view definition.
    * Cant be Indexed.
    * Cant have Triggers or Default values.


5. How to Create Views ?
Answer :
* Creating views can be achieved through the CREATE VIEW statement. 
* View is a virtual table based on the result-set of an SQL statement.
* Contains rows and columns from one or more tables.
Syntax for the CREATE VIEW statement :-
    CREATE VIEW view_name AS
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition;
Note - 
    CREATE VIEW view_name - It creates a new view that you define with view_name.
    AS SELECT column1, column2 ... column_n - These are the columns you want in your view. You can choose one or more columns from one or more tables.
    FROM table_name - table_name is the name of the table from which you want to create the view.
    WHERE - It is an optional clause that you can use to specify conditions for displaying records.


6. Why is CREATE VIEW Used ?
Answer :
* When you want to save a particular query and its result set for future use. 
* This can simplify complex queries by breaking them up into manageable parts.


7. How to Modify Views ?
Answer :
* You can modify a VIEW in two ways :-
    Using CREATE OR REPLACE VIEW - 
        * This command helps you modify a VIEW but keeps the VIEW name intact. 
        * This is beneficial when you want to change the definition of the VIEW but do not want to change the VIEW name.
        * Syntax of Modify Using CREATE OR REPLACE VIEW -
            CREATE OR REPLACE VIEW view_name AS
            SELECT column1, column2, ...
            FROM table_name
            WHERE condition;
        * Rules when using CREATE OR REPLACE VIEW - 
            * Cannot change column name.
            * Cannot change column Data Type.
            * Cannot change the order of the column , but can add add new column at the end.
    Using the DROP VIEW and then CREATE VIEW - 
        * In this method, you first remove the VIEW using the DROP VIEW command and then recreate the view using the new definition with the CREATE VIEW command.
        * Syntax of Modify Using DROP VIEW and then CREATE VIEW -
            DROP VIEW view_name; ----> DROP the View First
            CREATE VIEW view_name AS ----> CREATE the View
            SELECT column1, column2, ...
            FROM table_name
            WHERE condition;
        * Note - 
            * If other views, stored procedures, or programs depend on this view, they will be affected after you drop the view. 
            * For this reason, using CREATE OR REPLACE VIEW is generally safer.
    Modifying Data through VIEW - 
        * In some cases, you can modify the data of the underlying tables via a VIEW.
        * Syntax of Updating a View -
            UPDATE view_name
            SET column1 = value1, column2 = value2, ...
            WHERE condition;
        * Note - 
            * However, not every VIEW is updatable. 
            * You can only modify the data if the VIEW you’re modifying is a simple VIEW that returns results from a single table without any aggregation or complex clauses. 
            * If you attempt to modify a complex view (i.e., it includes JOIN, GROUP BY, HAVING, DISTINCT), you will get an error.
* Rules when  - 
    * If you have more than one table , you cant update such views. 
    * If the query contain DISTINCT clause you cant update such views.
    * If query contains GROUP BY then cannpot update such views.
    * If query contains WITH clause then cannot update such views.
    * If query contains window functions then cannot update such views.


8. How to Drop a View ?
Answer :
* "Dropping” in SQL is the process of deleting an existing database object.
* In the context of views, “dropping” refers to deleting an existing view from the database.
* Once a view is dropped, it cannot be used any longer until it is recreated with the same or new definition. If you’re going to drop a view, ensure it’s not being used anywhere in your application or it will lead to errors.
* You can drop a view in SQL using the DROP VIEW statement. 
* The DROP VIEW statement removes one or more views from the database. 
* You specify the name of the view that you want to remove after the DROP VIEW clause.
* Syntax of Dropping an existing View :-
    DROP VIEW view_name;
* Syntax of Dropping multiple Views :-
    DROP VIEW view_name1, view_name2, ..., view_name_n;
* Note - 
    * Be careful when dropping views. Once a view is dropped, all the permissions granted on it will also be dropped.
    * Before dropping a view, you can check if the view exists by using the IF EXISTS parameter. 
    * If you drop a view that does not exist, you will get an error. To prevent this, you can use the IF EXISTS parameter.
    * Syntax of Checking If a View Exist :-
        DROP VIEW IF EXISTS view_name; 
    * In this case, if the view exists, it will be dropped. If the view does not exist, nothing happens and you don’t get an error.

*/