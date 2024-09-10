/*

-----Introduction to Package Managers-----

1. What are Package Managers ?
Explanation :-
* Tools that automate the process of installing, updating, configuring, and removing software packages or dependencies.
* Package managers tools hote hain jo aapke project ke liye libraries ya dependencies ko manage karte hain.
* Ye tools aapko easily install, update, aur remove karne mein madad karte hain.
* Example: npm, yarn.
* Main purpose - Dependency management ko simplify karna.

2. What is the Need of it ?
Explanation :-
* Simplifies dependency management, ensures consistent environments, and automates the process of package installation and updates.
* Taaki aapko manually dependencies manage na karni pade.
* Ye automatically correct version install karta hai, conflicts resolve karta hai, aur project ko up-to-date rakhta hai.
* Benefit - Time save hota hai aur consistency maintain hoti hai across projects.

3. What are different types of Package Managers ?
Explanation :-
* System Package Managers :
    Ye operating system level pe libraries aur software install karte hain.
    Ye OS ki core dependencies ko manage karte hain.
    Example - apt (Ubuntu), yum (CentOS), brew (macOS).
* Language-Specific Package Managers :
    Programming languages ke liye specific hote hain, jo language-based libraries ko manage karte hain.
    Example - npm (JavaScript -> Not Exactly), pip (Python), gem (Ruby).
* Container Package Managers :
    Ye containers (like Docker) ke andar dependencies manage karte hain.
    Example - Docker Hub, jo pre-built container images ko manage aur distribute karta hai.

4. Why are Package Managers used ?
Explanation :-
* To handle package dependencies, manage versions, and automate software setup, which saves time and reduces errors.
1. Easy Installation - Dependencies ko quickly install karte hain.
2. Version Management - Correct version handle karte hain taaki conflicts na ho.
3. Updates - Dependencies ko automatically update kar sakte hain.
4. Dependency Resolution - Multiple packages ke beech conflicts solve karte hain.
5. Project Organization - Sab dependencies ek hi jagah organized rakhte hain, making the project more maintainable.

-----Introduction to npm-----

1. What are Basics of npm ?
Explanation :-
* Node Package Manager (npm) is a package manager for JavaScript, primarily used with Node.js.
* npm is not exactly Node Package Manager.
* npm primarily JavaScript aur Node.js ke liye bana hai, but technically npm sirf JavaScript tak limited nahi hai.
* npm ek general package manager ban gaya hai jo JavaScript ke alawa bhi kuch other tools aur projects ke liye use ho sakta hai.
* npm website pe naam change hone ka reason ye hai ki npm ka full form Node Package Manager se badal ke “now managing packages” type of phrase ki taraf shift ho gaya hai, kyunki npm ab sirf Node.js tak limited nahi hai, balki aur bhi tools aur configurations ke liye useful ban gaya hai.

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
* npm mein, versioning se aap track kar sakte ho ki kaunsi version stable hai aur kaun si version aapke project ke saath compatible hai.
* npm Versioning ko SemVer (Semantic Versioning) kehte hain, jisme version numbers ko 3 parts mein divide kiya jaata hai :
    MAJOR.MINOR.PATCH
    •	MAJOR (1) -
        Version - 1.0.0
        Agar MAJOR version change hota hai (e.g. 1.0.0 se 2.0.0), iska matlab hai breaking changes kiye gaye hain, jo purane code ko break kar sakte hain.
        Agar aap old version se new version pe migrate karte ho, to aapko apna code bhi update karna padega.
        Ex - Function signature ya return type change ho gaya, toh purana code ab kaam nahi karega.
	•	MINOR (4) -
        Version - 1.1.0
        Agar MINOR version change hota hai (e.g. 1.0.0 se 1.1.0), iska matlab new features add kiye gaye hain, lekin purana code break nahi hoga.
        Aapko new feature milenge without any changes in your code.
        Ex - Koi new function ya method add ho gaya, but purane functions as-it-is kaam karte rahenge.
	•	PATCH (2) -
        Version - 1.0.1
        Agar PATCH version change hota hai (e.g. 1.0.0 se 1.0.1), iska matlab small bug fixes ya improvements kiye gaye hain.
        Yeh updates backward-compatible hote hain, matlab aapko apna code bilkul change karne ki zaroorat nahi hai.
        Ex - Ek small bug fix ya performance improvement kiya gaya ho, jo code ko break nahi karega.

-----Using npm with NodeJS-----

1. Setting up a NodeJS Project with npm ?
Explanation :-
* Initialize project -
    npm init or npm init -y (for default setup).
    This creates a package.json file.

2. How npm interacts with NodeJS ?
Explanation :-
* npm manages the dependencies listed in package.json and installs them into the node_modules directory.
* Dependency Management -
    npm Node.js projects ke liye libraries aur packages ko manage karta hai.
    Jab aap npm install command run karte ho, npm specified dependencies ko download aur install karta hai, jo Node.js runtime environment me use hoti hain.
* Package.json -
    npm ek package.json file use karta hai jahan aapke project ke dependencies, scripts, aur metadata define hoti hai.
    Node.js is file ko read karke required packages ko manage karta hai.
* Module System -
    npm packages Node.js ke module system ke saath integrate hote hain.
    Aap require() ya import statements se npm packages ko apne code me include kar sakte hain.
* Version Management -
    npm ke through aap specific versions of packages install kar sakte hain jo Node.js ke project ke liye compatible hain, ensuring consistency across different environments.

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
* name
    Description - Project ya package ka naam.
	Usage - Unique name jo npm registry pe package ko identify karta hai.
* version
    Description - Project ya package ki version number.
	Usage - Semantic Versioning ke rules follow karta hai (MAJOR.MINOR.PATCH).
* scripts
    Description - Custom commands jo npm ke through run kiye ja sakte hain.
	Usage - Common tasks like build, test, start define kar sakte hain.
    Example -
        "scripts": {
            "start": "node index.js",
            "test": "jest"
        }
* dependencies
    Description - Production dependencies jo project ke run-time pe required hain.
	Usage - Libraries ya packages jo aapke application ko run karne ke liye zaroori hain.
    Example -
        "dependencies": {
            "express": "^4.17.1"
        }
* devDependencies
    Description - Development dependencies jo project ke development aur testing phase ke liye zaroori hain.
	Usage - Tools aur libraries jo production build ke liye nahi chahiye, but development ke liye use hoti hain.
    Example -
        "devDependencies": {
            "jest": "^26.6.3"
        }

3. What does ^ and ~ and * means in "^4.17.1" or "~4.17.1" ?
Explanation :-
* ^ (Caret Operator) -
    Iska matlab hai ki npm minor aur patch versions ko update kar sakta hai, lekin major version ko nahi.
    Yani, agar aap "^4.17.1" specify karte hain, to npm versions ko 4.x.x tak update kar sakta hai, lekin major version 5 nahi ho sakta.
* ~ (Tilde Operator) -
    Iska matlab hai ki npm sirf patch versions ko update kar sakta hai, lekin minor aur major versions ko nahi.
    Yani, agar aap "~4.17.1" specify karte hain, to npm versions ko 4.17.x tak update kar sakta hai, lekin minor version 18 nahi ho sakta.
* * (Asterisk) -
    Allows all versions.

4. What is Versioning in package.json File ?
Explanation :-
* Defines the versions of dependencies required for the project.

5. How to use npm Scripts ?
Explanation :-
* Define custom scripts in scripts section of package.json.
* Run with npm run script-name.
* npm Scripts ka use aapke project mein commonly used commands ko define aur automate karne ke liye hota hai.
* Ye commands package.json file mein scripts section ke andar define kiye jate hain.
* Steps to Use npm Scripts :
    Define Scripts -
        package.json file mein scripts field ke andar commands define karte hain.
        Example :
            "scripts": {
                "start": "node index.js",
                "test": "jest",
                "build": "webpack",
                "lint": "eslint ."
            }
    Run Scripts -
        Terminal me npm run <script-name> command use karke script ko execute karte hain.
        Example :
            npm run start - Runs the start script.
	        npm run test - Runs the test script.
    Special Commands -
        npm start : Agar start script define hai, to npm start command directly use kiya ja sakta hai without run. Ye common practice hai for starting applications.
        npm test : Agar test script define hai, to npm test command use kar sakte hain without run.
    Script Variables -
        Scripts ke andar environment variables ya arguments pass kar sakte hain.
        Example :
            "scripts": {
                "build": "webpack --mode production",
                "start:dev": "NODE_ENV=development node index.js"
            }
    Chaining Commands -
        Multiple commands ko ek hi script me chain kar sakte hain.
        Example :
            "scripts": {
                "prestart": "npm run lint",
                "start": "node index.js"
            }
        prestart script automatically start script run hone se pehle execute hoga

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
* Local Dependencies -
    Ye wo packages hain jo aapke application ke runtime ke liye required hain.
    Inka use production environment me hota hai.
    npm install <package-name> command se install karte hain without --save-dev flag.
    Purpose - Application ko run karne ke liye necessary libraries aur frameworks.
* Dev Dependencies -
    Ye wo packages hain jo sirf development aur testing ke liye required hain.
    Ye packages production build me include nahi hote.
    npm install <package-name> --save-dev command se install karte hain.
    Purpose - Development tools, testing libraries, build tools, aur other utilities jo development process ke dauran use hote hain.

4. Why is npm ls used ?
Explanation :-
* Lists installed packages and their versions, showing the dependency tree.
* Basic Usage - npm ls
* With Specific Package - npm ls <package-name>
* Show All Versions - npm ls --all

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
* Global Dependencies wo npm packages hote hain jo aap system-wide install karte hain, taaki wo kisi bhi project ke liye available ho.
* Ye packages generally command-line tools aur utilities hote hain jo development ke process ko simplify karte hain.

-----Using npm CLI-----

1. What are some npm CLI Commands ?
Explanation :-
* npm init
    New Node.js project ke liye package.json file create karta hai.
    Usage :
        npm init ya npm init -y (default values ke saath).
* npm install
    Dependencies install karta hai.
    Usage :
        •	npm install <package-name> -  Specific package install karta hai.
	    •	npm install - package.json me listed dependencies ko install karta hai.
	    •	npm install -g <package-name> - Global package install karta hai.
* npm update
    Installed packages ko update karta hai to their latest versions.
    Usage :
        •	npm update - All dependencies ko update karta hai.
	    •	npm update <package-name> - Specific package ko update karta hai.
* npm uninstall
    Packages ko remove karta hai.
    Usage :
        •	npm uninstall <package-name> - Package ko remove karta hai.
	    •	npm uninstall <package-name> --save-dev - Development dependencies se remove karta hai.
* npm list
    Installed packages aur unke versions ko list karta hai.
    Usage :
        •	npm list - Current project ke dependencies ko show karta hai.
	    •	npm list -g - Global installed packages ko show karta hai.

2. How to use npm init , npm install , npm uninstall ?
Explanation :-
* npm init - Create a package.json file
* npm install - Install dependencies
* npm uninstall - Remove dependencies

3. What is .npmrc ?
Explanation :-
* .npmrc ek configuration file hoti hai jo npm ke settings aur preferences define karti hai.
* Ye file global ya project-specific level pe ho sakti hai.
* Location :
    •	Global - Usually user home directory me (~/.npmrc).
	•	Project-Specific - Project ke root directory me (./.npmrc).

4. How to customize npm's CLI through .npmrc ?
Explanation :-
* Create or edit .npmrc file in your project or user home directory to set configuration options

5. How to use npm outdated and npm update ?
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
* Lifecycle Scripts npm ke predefined hooks hain jo specific events ke dauran execute hote hain.
* Ye scripts aapke project ke build aur deployment process ko automate karne me help karte hain.
* Lifecycle scripts npm ke predefined stages ke during run karte hain, jese ki package installation, build, aur test.
* Common Lifecycle Scripts :
    •	prepublish - npm publish se pehle run hota hai.
	•	preinstall - Package install hone se pehle run hota hai.
	•	install - Package install hota hai.
	•	postinstall - Package install hone ke baad run hota hai.
	•	pretest - Tests run karne se pehle run hota hai.
	•	test - Tests ko run karta hai.
	•	posttest - Tests run hone ke baad run hota hai.
	•	prestart - Application start karne se pehle run hota hai.
	•	start - Application ko start karta hai.
	•	poststart - Application start hone ke baad run hota hai.
* Usage - package.json file me scripts section me define karte hain.
* Example : preinstall, postinstall.

-----Understanding and Working with npm Registry-----

1. What is Basics of npm Registry ?
Explanation :-
* Central repository where npm packages are published and fetched from.
* npm Registry ek centralized database hai jo Node.js packages aur modules ko store aur distribute karta hai.
* Ye npm (Node Package Manager) ka core component hai.

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
* npm ke dependencies ke exact versions aur unke relationships ko lock karne ke liye use hota hai.
* Is file ka main purpose package installation ke consistency ko ensure karna hai.
* Purpose -
    package-lock.json file ensure karti hai ki project me installed dependencies ke exact versions same rahen, har environment me, chahe woh development, staging, ya production ho.
    Yeh file ensure karti hai ki agar multiple developers ek hi project pe kaam kar rahe hain, to unki dependencies ki versions same hongi.
* Contents -
    Project ke direct aur indirect (nested) dependencies ke versions.
    Dependencies ke exact versions jo install kiye gaye hain.
    Package integrity aur checksum information to verify the package’s integrity.
* Automatic Generation -
    npm install command run karne ke baad automatically generate hota hai.
    Jab aap dependencies ko add, remove, ya update karte hain, package-lock.json file bhi update hoti hai.
* Benefits -
    Project ko kisi bhi environment me reproduce karna asaan hota hai, kyunki dependencies ke exact versions specified hain.
    Dependency resolution fast hota hai, kyunki package versions aur their relationships already resolved hain.
* Usage -
    package-lock.json ko version control system (e.g., Git) me commit karna chahiye taaki team ke sabhi members ke paas same dependency versions ho.
    Ensures that all team members, CI/CD pipelines, and deployment environments use the same versions of dependencies.

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
