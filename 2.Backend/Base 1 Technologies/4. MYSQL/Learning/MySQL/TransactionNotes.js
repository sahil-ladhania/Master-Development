/*

1. What is a Transaction ?
Answer :
* Unit of work that is performed against a database.
* Units or sequences of work accomplished in a logical order, whether in a manual fashion by a user or automatically by some sort of a database program.
* Used to ensure data integrity and to handle database errors while processing.
* Transactions are controlled by the following commands :-
    BEGIN TRANSACTION :-
        * Used to start a new transaction.
        * Syntax of BEGIN TRANSACTION -
            BEGIN TRANSACTION; 
    COMMIT :-
        * Transactional command used to save changes invoked by a transaction to the database.
        * Syntax of COMMIT -
            COMMIT;
        * When you commit the transaction, the changes are permanently saved in the database.
    ROLLBACK :-
        * Transactional command used to undo transactions that have not already been saved to the database.
        * Syntax of ROLLBACK -
            ROLLBACK;
        * When you roll back a transaction, all changes made since the last commit in the database are undone, and the database is rolled back to the state it was in at the last commit.
* Ex of a Transaction :-
    BEGIN TRANSACTION;
    UPDATE Accounts SET Balance = Balance - 100 WHERE id = 1;
    UPDATE Accounts SET Balance = Balance + 100 WHERE id = 2;
    IF @@ERROR = 0
        COMMIT;
    ELSE
        ROLLBACK;
* For the transaction to be successful, all commands must execute successfully. If any command fails, the transaction fails, the database state is left unchanged and an error is returned.


2. What is BEGIN in Transaction ?
Answer :
* Keyword used to start a transaction.
* When you issue a BEGIN statement, you're essentially telling MySQL that you're about to start a series of operations that you want to treat as a single unit. 
* It marks the beginning of a transaction block.
* After the BEGIN statement, the transaction is considered to be “open” and remains so until it is committed or rolled back.
* Once you’ve initiated a transaction with BEGIN, all the subsequent SQL statements will be a part of this transaction until an explicit COMMIT or ROLLBACK is given.
* Syntax of BEGIN :-
    BEGIN TRANSACTION;
    or 
    BEGIN;
* Ex of BEGIN :-
    BEGIN;
    INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
    VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
    COMMIT;
    -----> If something goes wrong with one of the SQL statements within the transaction (after the BEGIN; statement), you can choose to ROLLBACK the transaction, which means canceling all the changes made in this transaction up to the point of error.


3. What is COMMIT in Transaction ?
Answer :
* Used to save all the modifications made by the current transaction to the database.
* Ends the current transaction and makes permanent all changes performed in the transaction.
* Way of ending your transaction and saving your changes to the database.
* After the SQL COMMIT statement is executed, it can not be rolled back, which means you can’t undo the operations.
* Used when the user is satisfied with the changes made in the transaction, and these changes can now be made permanent in the database.
* Now, imagine you've performed a series of tasks within your transaction room, such as updating rows, inserting new data, or deleting records. 
* When you're satisfied that everything went smoothly and you want to make those changes permanent, you shout "COMMIT!" This action tells MySQL to finalize all the changes made during the transaction and make them permanent in the database. 
* It's like sealing the deal or saving your progress in a game.
* Syntax of COMMIT -
    COMMIT;
* Note - 
    * In some databases, if AUTOCOMMIT is enabled (which is typically the default setting), then every single SQL statement is treated as a transaction and automatically committed right after it is executed.
* Ex of COMMIT - 
    BEGIN TRANSACTION;
    UPDATE Account SET amount = amount - 2000 WHERE name = 'A';
    UPDATE Account SET amount = amount + 2000 WHERE name = 'B';
    COMMIT;


4. What is ROLLBACK in Transaction ?
Answer :
* ROLLBACK command is a transactional control language (TCL) instruction that undoes an unsuccessful or unsatisfactory running transaction.
* Process also applies to SQL Server where all individual statements in SQL Server are treated as a single atomic transaction.
* When a ROLLBACK command is issued, all the operations (such as Insert, Delete, Update, etc.) are undone and the database is restored to its initial state before the transaction started.
* We use ROLLBACK in two cases :-
    * If the transaction is unacceptable or unsuccessful.
    * If you want to revert the unwanted changes.
* Sometimes things don't go as planned. 
* Maybe you made a mistake, encountered an error, or changed your mind halfway through the transaction. 
* In such cases, you need an escape plan, and that's where ROLLBACK comes in. 
* It's your "get out of jail free" card. 
* When you issue a ROLLBACK command, MySQL cancels all the changes made during the current transaction, reverting the database to its state before the transaction began. 
* It's like hitting the undo button, erasing any unintended changes as if they never happened.
* Syntax of ROLLBACK - 
    ROLLBACK;
* Ex of ROLLBACK - 
    BEGIN TRANSACTION;  
    -- This would delete all rows from the table.
    DELETE FROM Employee;
    -- Oh no! That's not what I wanted. Let's roll that back.
    ROLLBACK;
Note - 
    * SQL also allows the usage of SAVEPOINTs along with the ROLLBACK command, which allows rolling back to a specific point in a transaction, instead of rolling back the entire transaction.


5. What is SAVEPOINT in Transaction ?
Answer :
* Way of implementing subtransactions (nested transactions) within a relational database management system by indicating a particular point within a transaction that a user can “roll back” to in case of failure.
* Main property of a savepoint is that it enables you to create a rollback segment within a transaction.
* Allows you to revert the changes made to the database after the Savepoint without having to discard the entire transaction.
* Used in instances where if a particular operation fails, you would like to revert the database to the state it was in before the operation was attempted, but you do not want to give up on the entire transaction.
* Picture yourself navigating through a maze of transactions, making progress but unsure if you'll hit a dead-end. 
* SAVEPOINT acts as a checkpoint along the way. 
* It allows you to mark a specific point within a transaction, so if things go awry later on, you can return to that checkpoint without starting over from the beginning. 
* It's like dropping a pin on a map, giving you the option to backtrack if needed.
* Syntax of SAVEPOINT - 
    SAVEPOINT savepoint_name;
* Ex of SAVEPOINT - 
    START TRANSACTION;
    INSERT INTO Table1 (Column1) VALUES ('Value1');
    SAVEPOINT SP1;
    INSERT INTO Table1 (Column1) VALUES ('Value2');
    ROLLBACK TO SP1;
    COMMIT;
* Releasing SAVEPOINT -
    * Deletes a savepoint within a transaction.
    * Action of releasing a savepoint removes the named savepoint from the set of savepoints of the current transaction. 
    * No changes are undone.
    * Syntax of Releasing SAVEPOINT -
        RELEASE SAVEPOINT savepoint_name;
* Removing SAVEPOINT -
    * ROLLBACK TO SAVEPOINT removes a savepoint within a transaction.
    * Statement rolls back a transaction to the named savepoint without terminating the transaction.
    * Syntax of Removing SAVEPOINT -
        ROLLBACK TRANSACTION TO savepoint_name;
* Note - 
    * Savepoint names are not case sensitive and must obey the syntax rules of the server.

*/