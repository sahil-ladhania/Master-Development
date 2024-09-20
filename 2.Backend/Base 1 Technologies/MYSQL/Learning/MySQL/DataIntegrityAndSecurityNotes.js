/*

1. What are the types of Integrity ?
Answer :
Entity Integrity - 
    * Ensures that each row in a table is uniquely identified by a primary key.
    * Ensures that there are no duplicate rows in a table.
    * Often managed with the help of the primary key.
Domain Integrity - 
    * Enforces data validity by defining rules for allowable data values in each column.
    * Enforces valid entries for a given column by restricting the type, the format, or the range of possible values.
Refrential Integrity - 
    * Ensures the consistency and integrity of relational links between tables through foreign key constraints.
    * Ensures that relationships between tables remain consistent.
    * Foreign key in one table must always refer to the Primary key in another table.
User Defined Integrity - 
    * Additional integrity constraints defined by users to meet specific business requirements. 
    * Refers to a set of rules specified by a user, which do not belong to the entity, domain, or referential integrity.
    * For example, a user might define a rule that an employee’s hire date must be less than 3 months in the future.


2. What are Data Integrity Constraints ?
Answer :
* Used to specify rules for the data in a table.
* Ensure the accuracy and reliability of the data within the table.
* If there is any violation between the constraint and the action, the action is aborted by the constraint.
* Constraints are classified into two types :- 
    * Column Level - Apply to individual columns.
    * Table Level - Apply to the entire table.
* NOT NULL -
    * Ensures that a column cannot have NULL values.
* UNIQUE - 
    * Ensures that all values in a column are unique.
* Primary Key - 
    * Ensures each row in a table is uniquely identified. 
    * It's a combination of NOT NULL and UNIQUE.
* Foreign Key - 
    * Enforces a link between data in two tables. 
    * It ensures referential integrity.
* CHECK - 
    * Verifies that all values in a column satisfy certain conditions.


3. How to create a new User and Role ?
Answer :
Syntax for Creating USER :-
    CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
Syntax for ROLE :-
    CREATE ROLE rolename;
Syntax for Granting ROLE to USER :-
    GRANT rolename TO 'username'@'localhost';
Syntax for Giving Priviledges to ROLE :-
    GRANT SELECT, INSERT ON database_name.table_name TO rolename;



4. What is GRANT & REVOKE ?
Answer :
* GRANT and REVOKE are Data Control Language (DCL) commands.
* Used for providing and removing user privileges respectively.
* GRANT :-
    * Allows specific privileges to MySQL users, such as SELECT, INSERT, UPDATE, DELETE, REFERENCES, ALL.
    * Syntax of GRANT -
        GRANT privileges ON database_name.table_name TO 'username'@'localhost';
    * Ex of GRANT - 
        GRANT SELECT, INSERT ON mydatabase.* TO 'myuser'@'localhost';
* REVOKE :-
    * Removes specified privileges from MySQL users.
    * Syntax of REVOKE -
        REVOKE privileges ON database_name.table_name FROM 'username'@'localhost';
    * Ex of REVOKE -
        REVOKE INSERT ON mydatabase.* FROM 'myuser'@'localhost';
Note - 
    * Permission management is an important aspect of database management, understanding, and using GRANT and REVOKE operations help in maintaining the integrity and security of your data in SQL.


5. What are some DB Security Practices ?
Answer :
Least Privilege Principle - 
    * Grant users only the minimum permissions they need.
Regular Updates - 
    * Keep MySQL and other software updated to patch vulnerabilities.
Complex and Secure Passwords - 
    * Encourage users to use strong passwords.
Limiting Remote Access - 
    * Allow remote connections only when necessary.
Avoid Using SQL Server Admin Account - 
    * Use separate accounts with limited privileges.
Encrypt Communication - 
    * Encrypt data transmission between client and server.
Database Backups - 
    * Regularly backup your database to prevent data loss.
Monitoring and Auditing - 
    * Monitor database activity and audit logs for suspicious behavior.
Regular Vulnerability Scanning - 
    * Scan for vulnerabilities in the database and fix them promptly.
SQL Injection - 
    * Protect against SQL injection attacks by using parameterized queries or prepared statements.

*/