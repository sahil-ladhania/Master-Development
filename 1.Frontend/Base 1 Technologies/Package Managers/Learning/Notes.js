/*

-----Introduction to Package Managers-----

1. What are Package Managers ?
Explanation :-
* Tools that automate the process of installing, updating, configuring, and removing software packages or dependencies.

2. What is the Need of it ?
Explanation :-
* Simplifies dependency management, ensures consistent environments, and automates the process of package installation and updates.

3. What are different types of Package Managers ?
Explanation :-
* System Package Managers - apt (Ubuntu), yum (CentOS)
* Language-Specific Package Managers - npm (Node.js), pip (Python)
* Container Package Managers - docker, helm

4. Why are Package Managers used ?
Explanation :-
* To handle package dependencies, manage versions, and automate software setup, which saves time and reduces errors.

-----Introduction to npm-----

1. What are Basics of npm ?
Explanation :-
* Node Package Manager (npm) is a package manager for JavaScript, primarily used with Node.js. It helps install and manage libraries and tools.

2. What is npm Workflow ?
Explanation :-
* Install Packages - npm install package-name
* Update Packages - npm update
* Remove Packages - npm uninstall package-name
* Manage Dependencies - Defined in package.json

3. How to install and update npm ?
Explanation :-
* Install npm - Typically installed with Node.js.
* Use npm install -g npm to update.

4. What is npm Versioning ?
Explanation :-
* npm packages use semantic versioning (Semver) to specify versions.
* Follow format - MAJOR.MINOR.PATCH.

-----Using npm with NodeJS-----

1. Setting up a NodeJS Project with npm ?
Explanation :-
* Initialize project -
    npm init or npm init -y (for default setup).
    This creates a package.json file.

2. How npm interacts with NodeJS ?
Explanation :-
* npm manages the dependencies listed in package.json and installs them into the node_modules directory.

3. How to update and manage NodeJS versions with npm ?
Explanation :-
* Use nvm (Node Version Manager) for managing multiple Node.js versions, not npm directly.

-----Understanding package.json-----

1. How to create a package.json File ?
Explanation :-
* Run npm init in your project directory.
* It guides you through creating a package.json file.

2. How to understand the package.json Structure ?
Explanation :-
* name - Project name
* version - Project version
* scripts - Define custom commands
* dependencies - List of required packages
* devDependencies - Packages used in development

3. What is Versioning in package.json File ?
Explanation :-
* Defines the versions of dependencies required for the project.

4. How to use npm Scripts ?
Explanation :-
* Define custom scripts in scripts section of package.json.
* Run with npm run script-name.

-----Managing Local Dependencies-----

1. How to Install Packages Locally ?
Explanation :-
* Run npm install package-name.
* This installs the package into the node_modules directory.

2. How to update and remove local Packages ?
Explanation :-
* Update - npm update package-name
* Remove - npm uninstall package-name

3. How to understand local dependencies and dev dependencies ?
Explanation :-
* Dependencies - Required for production.
* DevDependencies - Required only for development (e.g., testing tools).

4. Why is npm ls used ?
Explanation :-
* Lists installed packages and their versions, showing the dependency tree.

-----Managing Global Dependencies-----

1. How to Install Packages Globally ?
Explanation :-
* Run npm install -g package-name.
2. How to update and remove global Packages ?
Explanation :-
* Update - npm update -g package-name
* Remove - npm uninstall -g package-name

3. How to understand global dependencies ?
Explanation :-
* Packages installed globally are available system-wide, not just in a specific project.

-----Using npm CLI-----

1. What are some npm CLI Commands ?
Explanation :-
* npm init
* npm install
* npm update
* npm uninstall
* npm list

2. How to use npm init , npm install , npm uninstall ?
Explanation :-
* npm init - Create a package.json file
* npm install - Install dependencies
* npm uninstall - Remove dependencies

3. How to customize npm's CLI through .npmrc ?
Explanation :-
* Create or edit .npmrc file in your project or user home directory to set configuration options

4. How to use npm outdated and npm update ?
Explanation :-
* npm outdated - Lists outdated packages.
* npm update - Updates packages to the latest version respecting version constraints.

-----Understanding Semver (Semantic Versioning)-----

1. What is Basics of Semver ?
Explanation :-
* Versioning format - MAJOR.MINOR.PATCH
* MAJOR - Breaking changes
* MINOR - New features, backward-compatible
* PATCH - Bug fixes, backward-compatible

2. How to specify ranges of valid versions ?
Explanation :-
* Use operators in package.json: ^, ~, >=, etc.

3. What is major , minor , and patch updates ?
Explanation :-
* Major - Incompatible changes
* Minor - New features
* Patch - Bug fixes

-----Working with npm Scrips-----

1. How npm Scripts Work ?
Explanation :-
* Custom scripts defined in package.json can be run with npm run script-name.

2. How to create custom Scripts ?
Explanation :-
* Add to scripts section in package.json.
* Example : "test": "mocha"

3. What is Lifecycle Scripts ?
Explanation :-
* Built-in npm scripts that run at different stages.
* Example : preinstall, postinstall.

-----Understanding and Working with npm Registry-----

1. What is Basics of npm Registry ?
Explanation :-
* Central repository where npm packages are published and fetched from.

2. How to Publish a Package to the npm Registry ?
Explanation :-
* Run npm publish in the package directory.

3. How to Update and Manage Packages in the npm Registry ?
Explanation :-
* Use npm update to update versions, npm deprecate to mark packages as deprecated.

-----Interacting with npm Community-----

1. How to Search for Packages ?
Explanation :-
* Use npm search package-name or search on npm website.

2. How to Contribute to an existing Package ?
Explanation :-
* Fork the repository, make changes, and submit a pull request.

3. How to report issues and Bugs ?
Explanation :-
* Use the GitHub issues page of the package repository to report.

-----Using npm For Frontend Development-----

1. How to use npm in conjunction with JS Frameworks ?
Explanation :-
* Install framework-specific packages (e.g., React, Vue) using npm.

2. How to build Frontend assets using npm Scripts ?
Explanation :-
* Define build scripts in package.json.
* Example :  "build": "webpack"

3. How to manage Frontend Dependencies ?
Explanation :-
* Use dependencies and devDependencies in package.json to manage frontend libraries and tools.

-----Advanced npm Topics-----

1. How to understand package-lock.json File ?
Explanation :-
* Contains exact versions of dependencies installed, ensuring consistent installs across environments.

2. How to use npm ci for Continous Integration Environment ?
Explanation :-
* npm ci installs dependencies from package-lock.json to ensure reproducible builds.

3. What are some TroubleShooting Commonly faced Issues ?
Explanation :-
* Resolve conflicts, clean cache with npm cache clean --force, and check permissions.

4. How to manage NodeJS Environment with nvm and npm ?
Explanation :-
* Use nvm to manage multiple Node.js versions.
* Use npm within each Node.js version environment.

*/
