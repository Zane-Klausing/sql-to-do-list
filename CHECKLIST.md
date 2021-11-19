# INITIALIZING STUFF:

 * Think through table structure.
 -- Actually make some CREATE TABLE statements.
 * Make a new git branch for "initializing stuff".

 * Add files and folders to project directory.
    * Don't forget .gitignore!

##### Front-End:
    * Mock up the basic HTML
    * Source CSS and JS files

##### Back-End:
    * Use Postico to make a database
    * Use Postico to create "todos" table
    * Run npm init
    * npm install the stuff we need
        - Express
        - PG
    * Implement minimum code for working Express server in server.js
    * Wire up database connection in pool.js file


# FEATURES

    * Create a task   (C)
        - Store in db
        - Rerender DOM     (R)

    * Task should be able to be deleted   (D)
        - Rerender DOM    (R)

    * Task should be able to be set as "complete"   (U)
        - Apply css to differentiate "complete" task (checked off?)
        - Task's status of complete should be stored in the DataBase (UPDATE TASK)
        - Rerender DOM    (R)

    * CSS it up and make it pretty
