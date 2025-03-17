/*

-----References Links-----
1. For Creating a React App From Scratch From your own.
https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658

2. For Parcel Documentation.
https://parceljs.org/getting-started/webapp/

3. For Parcel on Production Documentation.
https://parceljs.org/features/production/

4. For BrowserList Documentation.
https://browserslist.dev/

5. For Babel Documentation.
https://babeljs.io/

6. For Attribute Type.
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type

7. For JS Modules.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

8. For Babel Plpayground.
https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.25.6&externalPlugins=&assumptions=%7B%7D

9. For React without JSX.
https://react.dev/reference/react/createElement#creating-an-element-without-jsx

10. For Virtual DOM and Internals.
https://legacy.reactjs.org/docs/faq-internals.html

11. For Reconciliation.
https://legacy.reactjs.org/docs/reconciliation.html

12. For React Fiber Architecture.
https://github.com/acdlite/react-fiber-architecture

13. For React Without ES6.
https://legacy.reactjs.org/docs/react-without-es6.html

14. For Index Keys as Anti-Pattern.
https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/

15. For Client Side Routing.
https://reactrouter.com/en/main/start/overview

16. For React Life Cycle Method.
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

17. For Lifting State Up.
https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example

18. For Context.
https://react.dev/learn/scaling-up-with-reducer-and-context

-----React Inception-----

1. What is React ? Why React is known as ‘React’ ?
Explanation :-
* React is a "JavaScript Library".
* The name ‘React’ was chosen because the library was designed to allow developers to react to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.

2. What is Library?
Explanation :-
* Library ek collection hota hai pre-written code ka, jo kisi specific task ko perform karne ke liye use hota hai. 
* Jab aapko kisi functionality ki zarurat hoti hai, aap library ka use karte ho. 
* Aap khud decide karte ho ki kab aur kaise library ko call karna hai.
* Examples - React, jQuery.

3. What is Framework?
Explanation :-
* Framework ek structure provide karta hai jisme aapko apna code likhna hota hai. 
* Yeh aapko ek predefined flow aur rules follow karne ko kehta hai. 
* Framework aapko guide karta hai ki aap kaise kaam karenge, aur aapko uske guidelines ke andar rehna padta hai.
* Examples - Angular.

4. Similarities between Library and Framework?
Explanation :-
* Frameworks and libraries are code written by third parties to solve regular/common problems or to optimise performance.
* Code Reusability - Dono hi aapko code reuse karne ka option dete hain.
* Pre-written Functions - Dono mein aapko pre-written code milta hai jo aapko apni app mein use karna hota hai.
* Task Simplification - Dono aapke tasks ko simplify karte hain.

5. Difference between Library and Framework?
Explanation :-
* A key difference between the two is "Inversion of control".
* When using a library, the control remains with the developer who tells the application when to call library functions.
* When using a framework, the control is reversed, which means that the framework tells the developer where code needs to be provided and calls it as it requires.
* Control - Library mein aap control rakhte ho, jabki framework aapke code ka flow control karta hai.
* Usage - Library ko aap zarurat ke hisaab se use karte ho, lekin framework mein aapko structure follow karna padta hai.
* Flexibility - Library zyada flexible hoti hai, aap khud decide karte ho ki kab kis function ko call karna hai, par framework mein aapko ek predefined order mein kaam karna padta hai.

6. What is Emmet ?
Explanation :-
* Emmet is the essential toolkit for web-developers. 
* It allows you to type shortcuts that are then expanded into full-fledged boiler plate code for writing HTML and CSS.
* Emmet ek tool hai jo HTML aur CSS code likhne ko fast aur efficient banaata hai. 
* Yeh aapko shorthand syntax use karne ka option deta hai, jisse aap bohot kam time mein bohot zyada code likh sakte ho.

7. Create Hello World Program using only HTML? -------------> Explore
Explanation :-
* Refer to Prerequisite Folder in Namaste React Code.

8. Create Hello World Program using only JavaScript? -------------> Explore
Explanation :-
* Refer to Prerequisite Folder in Namaste React Code.

9. Create Hello World Program using only React? -------------> Explore
Explanation :-
* Refer to Prerequisite Folder in Namaste React Code.

10. What is Cross Origin ?
Explanation :-
* The crossorigin attribute in the script tag enables Cross-Origin Resource Sharing (CORS) for loading external JavaScript files from different origin than the hosting web page.
* This allows the script to access resources from the server hosting the script, such as making HTTP requests or accessing data.
* Cross-Origin ka matlab hai jab ek website ya application apne resources (like images, scripts, etc.) ko doosri website ya domain se access karne ki koshish karti hai. 
* Yeh process “Cross-Origin Resource Sharing” (CORS) ke through control hota hai.
* Key Points :
	•	Same-Origin Policy - By default, web browsers ek same-origin policy follow karte hain, jisme ek website apne origin (domain, protocol, aur port) ke bahar resources access nahi kar sakti.
	•	CORS - CORS ek security feature hai jo yeh allow karta hai ki ek domain doosre domain se resources securely share karein, jab server Access-Control-Allow-Origin header send karta hai.
* Ex - 
    Agar ek website www.example1.com apne backend API www.example2.com se data fetch karna chahti hai, toh agar example2.com CORS enable nahi karta, toh browser request block kar dega.

11. What if you have already written HTML inside the "root" div ?
Explanation :-
* React will overwrite everything inside "root" and replaces with whatever given inside render.
* Agar aapne pehle se hi HTML likh liya hai “root” div ke andar, toh agar aap React app ko is div mein mount karte ho, toh React automatically us existing HTML ko replace kar dega.
* Key Points :
    •	React ka kaam hota hai ki wo apne virtual DOM se real DOM ko update kare. Jab aap ReactDOM.render() ya ReactDOM.createRoot() call karte ho, toh wo root div ke andar jo bhi HTML hota hai, usko replace kar deta hai apne React component ke saath.
	•	Agar aapne static HTML likha hai, toh wo React component ke render hone par overwrite ho jayega, aur React usko apne state aur component ke structure ke according update karega.
* Ex - 
    •	Agar aapka HTML kuch aise ho.
        <div id="root">
            <h1>Static HTML</h1>
        </div>
    •	Aur React mein likha ho.
        ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    Toh, React root div ke andar existing <h1> ko replace kar dega aur <App /> ko render karega.

-----Doubt 1 : External Script Links----- -----------------------------> Which links are we talking about ??????

1.	What are these Links ?
Explanation :-
* These are script tags that load external JavaScript files, specifically the React and ReactDOM libraries.
* Yeh script tags hote hain jo external JavaScript files ko load karte hain, specifically React aur ReactDOM libraries ko.

2.	Why are we using these Links ? 
Explanation :-
* These links are used to include React and ReactDOM in your HTML page so you can use them to build and render React components.
* Yeh links React aur ReactDOM ko aapke HTML page mein include karne ke liye use kiye jaate hain, taki aap unhe React components banane aur render karne ke liye use kar sakein.

3.	Why is the First Link used For ? 
Explanation :-
* The first link (react.development.js) is for loading the core React library, which provides the functionality to create components, manage state, and handle events.
* Pehla link (react.development.js) React ki core library ko load karne ke liye hota hai, jo components banane, state manage karne, aur events handle karne ki functionality provide karta hai.

4.	Why is the Second Link used For ? 
Explanation :-
* The second link (react-dom.development.js) is for loading ReactDOM, which provides methods to interact with the DOM, like rendering React components to the web page.
* Dusra link (react-dom.development.js) ReactDOM ko load karta hai, jo DOM ke saath interact karne ke liye methods provide karta hai, jaise ki React components ko web page par render karna.

5.	What does this crossorigin used For ? 
Explanation :-
* The crossorigin attribute is used to handle cross-origin requests.
* It allows the script to be fetched with CORS (Cross-Origin Resource Sharing) to support scenarios like accessing scripts from a different domain.
* crossorigin attribute cross-origin requests handle karne ke liye use hota hai. Yeh script ko CORS (Cross-Origin Resource Sharing) ke saath fetch karne ki permission deta hai, jisse aap different domain se scripts access kar sakte ho.

-----Doubt 2 : React.createElement() Method----- -----------------------------> Which method are we talking about ??????

1.	What is React.createElement() Method ?
Explanation :-
* It’s a method provided by React to create a React element, which is an "object" representing a DOM node or a component.
* React.createElement() ek method hai jo ek React element create karta hai. 
* Yeh method ek object return karta hai, jo DOM node ya ek React component ko represent karta hai. 
* React elements actual DOM elements ko render karte hain.

2.	Where are we getting createElement() Method From ?
Explanation :-
* The createElement() method is provided by the React library.
* createElement() method React library se aata hai.
* Yeh built-in method hai jo React elements ko create karne ke liye use hota hai.

3.	What does createElement() take ?
Explanation :-
Yeh method 3 arguments leta hai :
	•	Type - Element ka type jaise ‘div’, ‘h1’, etc.
	•	Props - Attributes ya properties ka object, jaise { id: 'child' }.
	•	Children - Content ya nested React elements (ya string). Agar multiple siblings hain toh yeh ek array ho sakta hai.

4.	What does createElement() create ?
Explanation :-
* It creates a React element "object", which describes what should be rendered to the DOM.
* createElement() method ek React element “object” create karta hai, jo yeh batata hai ki DOM mein kya render hoga. 
* Yeh ek virtual representation hota hai, jise React use karta hai to update the actual DOM.

-----Doubt 3 : ReactDOM.createRoot() Method-----

1.	What is ReactDOM.createRoot() Method ?
Explanation :-
* It’s a method provided by ReactDOM to create a root container where your React application will be rendered.
* ReactDOM.createRoot() ek method hai jo ek root container create karta hai jahan React application render hoga. 
* Iska use React 18 se introduce kiya gaya tha, jisme root element ko manage karne ka naya way diya gaya hai.

2.	Where are we getting createRoot() Method From ?
Explanation :-
* The createRoot() method is provided by the ReactDOM library.
* createRoot() method ReactDOM library se milta hai. 
* ReactDOM library ko include karke aap is method ka use karte hain.

3.	What does createRoot() take ?
Explanation :-
* It takes a DOM element as an argument, typically the element where you want to render your React components (e.g., document.getElementById('root')).
* Yeh method ek DOM element leta hai, jo wo element hota hai jahan aap apne React components ko render karna chahte ho. 
* Typically, yeh document.getElementById('root') hota hai.


-----Doubt 4 : .render() Method-----

1.	What is this .render() Method ?
Explanation :-
* The .render() method is used to render the React element (or components) to the DOM.
* .render() method ka use React element ya component ko DOM mein render karne ke liye hota hai. 
* Yeh method React elements ko virtual DOM se actual DOM mein convert karne ka kaam karta hai.

2.	Where are we getting .render() Method From ?
Explanation :-
* The .render() method is provided by the "root object" returned by ReactDOM.createRoot().
* .render() method ReactDOM.createRoot() se milta hai. 
* Jab aap createRoot() call karte ho, toh yeh ek root container return karta hai, jisme .render() method available hota hai.

3.	What does .render() take ?
Explanation :-
* It takes a React element (e.g., parent in your code) as an argument and renders it into the specified root DOM node.
* .render() method ek React element ko argument ke roop mein leta hai. 
* Iske through React component ko DOM mein render kiya jata hai.
* Ex - 
    root.render(<App />);

-----Igniting Our App----- ---------------------------------------------> Extremly important for understanding What React is and Why to use it ?

1. What should we do to make our app production ready ?
Explanation :-
* Minify —> Optimization —> Clean console —> Bundle
* Minify our file (Remove console logs, bundle things up).
* Need a server to run things.

2. What are Bundlers ?
Explanation :-
* A bundler is a tool that bundles our app, packages our app so that it can be shipped to production.
* Examples of Bundlers :
    Webpack
    Vite
    Parcel
* In create-react-app, the bundler used is "webpack".

3. What is Package Manager ?
Explanation :-
* Bundlers are packages. If we want to use a package in our code, we have to use a package manager.
* We use a package manager known as npm or yarn.

4. How to Configure the Project ?
Explanation :-
* npm init
It creates a package.json file.
Now to install parcel we will do :
* npm install -D parcel
Now we will get a package-lock.json file.

5. What is package.json File ?
Explanation :-
* Package.json file is a configuration for NPM.
* Whatever packages our project needs, we install those packages using npm install <packageName>.
* Once package installation is complete, their versions and configuration related information is stored as dependencies inside package.json file.

6. What is package-lock.json File ?
Explanation :-
* Package-lock.json locks the exact version of packages being used in the project.

7. What is difference between package.json and package.lock.json ?
Explanation :-
* In package. json we have information about generic version of installed packages whereas in package.lock.json we have information about the specific or exact version of installed packages.

8. What are node_modules ?
Explanation :-
* Which gets installed is like a database for the npm.
* Every dependency in node_module will have its package.json.
* Node modules are very heavy so we should always put this in gitignore.
* Never touch node_modules and package-lock.json.

9. How to to ignite our app ?
Explanation :-
* npx parcel index.html
    npx means ‘execute using npm’
    index.html is the entry point

10. What is Hot Module Replacement (HMR) ?
Explanation :-
* It means that parcel will keep a track of all the files which you are updating.
* There is File Watcher Algorithm (written in C++).
* It keeps track of all the files which are changing realtime and it tells the server to reload.
* These are all done by PARCEL.

11. What is parcel-cache ?
Explanation :-
* Parcel caches code all the time.
* When we run the application, a build is created which takes some time in ms.
* If we make any code changes and save the application, another build will be triggered which might take even less time than the previous build.
* This reduction of time is due to parcel cache.
* Parcel immediately loads the code from the cache every time there is a subsequent build.
* On the very first build parcel creates a folder .parcel- cache where it stores the caches in binary codeformat.
* Parcel gives faster build, faster developer experience because of caching.

12. What is dist Folder ?
Explanation :-
* It keeps the files minified for us.
* When bundler builds the app, the build goes into a folder called dist.
* The `/dist` folder contains the minimized and optimised version the source code.
* Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.
* When we run command :
    npx parcel index.html
    This will create a faster development version of our project and serves it on the server.
* When I tell parcel to make a production build :
    npx parcel build index.html
    It creates a lot of things, minify your file.
    And the parcel will build all the production files to the dist folder.

13. What are the features that Parcel Provides ?
Explanation :-
* Hot Module Replacement (HMR)
* File Watcher Algorithm - C++
* Bundling
* Minify Code
* Cleaning our code
* Dev and production build
* Super fast build algorithm
* Image Optimization
* Caching while development
* Compression
* Compatible with older browser versions
* Https on dev
* Image Optimization
* Port No
* Consistency Hashing Algorithm
* Zero Config
* Tree Shaking

14. What are Transitive Dependencies ?
Explanation :-
* We have our package manager which takes care of our transitive dependencies of our code.
* If we’ve to build a production ready app which uses all optimisations (like minify, bundling, compression, etc), we need to do all these.
* But we can’t do this alone, we need some dependencies on it.
* Those dependencies are also dependent on other dependencies.

15. What is Browserslist ?
Explanation :-
* Browserslist is a tool that specifies which browsers should be supported/compatible in your frontend app.
* It makes our code compatible for a lot of browsers.

16. What is Tree Shaking ?
Explanation :-
* Tree shaking is a process of removing the unwanted code that we do not use while developing the application.
* In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.

-----Doubts----- ---------------------------------------------> Extremly important for understanding What React is and Why to use it ?

1. What is Transitive Dependencies ?
Explanation :-
* Transitive dependencies are dependencies that your direct dependencies rely on.
* For example, if package A depends on package B, and package B depends on package C, then package C is a transitive dependency for package A.

2. What is ^ and ~ in "parcel": "^2.12.0"?
Explanation :-
* ^ (Caret) - Allows updates that do not change the leftmost non-zero digit. For example, ^2.12.0 allows updates to any version 2.x.x but not 3.x.x.
* ~ (Tilde) - Allows updates to the most recent patch version within the minor version. For example, ~2.12.0 allows updates to any 2.12.x but not 2.13.0.

3. When we only need Parcel, why are so many things in node_modules?
Explanation :-
* Parcel itself has dependencies, and those dependencies have their own dependencies.
* This results in a large number of packages being installed in node_modules, even if you only directly need Parcel.

4. How many package-lock.json files are there in a React app?
Explanation :-
* Typically, there is only one package-lock.json file at the root of your project.
* It ensures the exact same versions of dependencies are installed across different environments.

5. How many package.json files are there in a React app?
Explanation :-
* Usually, there is one package.json file in the root of your project.
* However, additional package.json files might exist inside certain directories if they are treated as separate npm packages (like in monorepos or some advanced setups).

6. Why did we get Uncaught ReferenceError: React is not defined when using npx parcel index.html?
Explanation :-
* This error occurs because Parcel by default assumes you are using ES modules, and React needs to be explicitly imported.
* Without importing, React isn’t available globally.

7. Why did we get “Browser scripts cannot have imports or exports” after importing React and ReactDOM?
Explanation :-
* Browser scripts, unless specified as modules, cannot have ES module imports/exports.
* If you’re importing React and ReactDOM, you need to specify type="module" in the <script> tag.

8. Why am I getting an error on this line <script src="./App.js"></script>?
Explanation :-
* If your App.js contains ES module imports/exports, using a normal script tag will cause an error.
* You need to use <script type="module" src="./App.js"></script> instead.

9. Why did my app start running after I used <script type="module" src="./App.js"></script>?
Explanation :-
* Specifying type="module" tells the browser that the script is an ES module, allowing you to use import and export statements in App.js.
* This resolves the error and lets your app run.

10. Why and how does the page update without manual refresh after saving files? Is Parcel responsible?
Explanation :-
* Yes, Parcel is responsible for this.
* It’s called Hot Module Replacement (HMR).
* Parcel watches your files for changes and automatically updates the browser with the latest changes without needing a full page reload.

11. Why are we putting these in .gitignore?
/node_modules
/dist
.parcel-cache
Explanation :-
* /node_modules -
    This directory contains all the installed dependencies, which are often too large and can be reinstalled using package.json.
* /dist -
    This is the output directory for the built files, which can be regenerated.
* .parcel-cache -
    This is a cache directory used by Parcel to speed up builds, which doesn’t need to be stored in version control.

12. What is BrowsersList?
Explanation :-
* BrowsersList is a tool that allows you to specify the target browsers for your project.
* It’s used by tools like Babel, Autoprefixer, and Parcel to ensure your code is compatible with the specified browsers.
* It helps define what browser versions your code should support.

-----Laying The Foundation----- ---------------------------------------------> Extremly important for understanding What React is and Why to use it ?

1. What is another way of starting the build of the project ?
Explanation :-
* We will be creating scripts instead of using “npx parcel index.html”.
* We can create different scripts for starting our project in Development and Production.
* In package.json , in the script section write the following command.
*  To run these scripts, enter the following commands in the terminal :
    To Start - npm run start or npm start
    For Production Build - npm run build
* If you’re not sure how to start the project in a new company then find these scripts in and use them.

2. What is JSX ?
Explanation :-
* Before we begin, we have to remove the existing React Code from App.js where we used React.createElement() for displaying content on the webpage but its syntax is very bad.
* It’s not developer- friendly, and very hard to read.
* To solve this problem Facebook developers built JSX.
* JSX makes developer life easy as we no longer have to write our code using React.createElement().
* We write code for both Machines and Humans but first for Human understanding as it is read by a lot of developers.
* JSX is HTML-like or XML-like syntax.
* JSX stands for JavaScript XML.
* It's a syntax extension for JavaScript.
* It is not a part of React.
* React apps can be built even without JSX but the code will become very hard to read.
* It is not HTML inside JavaScript.
* JavaScript engine cannot understand JSX as it only understands ECMAScript.
* When we log heading and jsxHeading, it gives the same object.

3. What is Babel ?
Explanation :-
* Babel is a popular JavaScript compiler that allows developers to write modern JavaScript code that can be transformed into a version compatible with older browsers or environments.
* Transpile modern JavaScript (ES6+) into backward-compatible versions for older environments.
* Babel is a package that is a compiler/transpiler of JavaScript that is already present inside ‘node-modules’.
* It takes JSX and converts it into the code that browsers understand, as soon as we write it and save the file.
* It is not created by Facebook.
* Learn more about Babel on babeljs.io.

4. Is JSX a valid JavaScript ?
Explanation :-
* The answer is Yes and No.
* JSX is not a valid Javascript syntax as it’s not pure HTML or pure JavaScript for a browser to understand.
* JS does not have built-in JSX.
* The JS engine does not understand JSX because the JS engine understands ECMAScript or ES6+ code.

5. If the browser can’t understand JSX how is it still working ?
Explanation :-
* This is because of Parcel because “Parcel is a Beast”.
* Before the code gets to JS Engine it is sent to Parcel and Transpiled there.
* Then after transpilation, the browser gets the code that it can understand.
* Transpilation is converting the code in such a format that the browsers can understand.
* Parcel is like a manager who gives the responsibility of transpilation to a package called Babel.
* JSX (transpiled by Babel) React.createElement => ReactElement => JS Object => HTML Element(render)

6. What is the difference between HTML and JSX ?
Explanation :-
* JSX is not HTML.
* It’s HTML-like syntax.
* HTML uses ‘class’ property whereas JSX uses ‘className’ property.
* HTML can use hypens in property names whereas JSX uses camelCase syntax.

7. What is Single Line and Multi Line JSX Code ?
Explanation :-
* Single line code -
    const jsxHeading = <h1>Namaste React</h1>
* Multi line code -
    If writing JSX in multiple lines then using ‘()’ parenthesis is mandatory.
    To tell Babel from where JSX is starting and ending.
    const jsxHeading = (
        <div>
            <h1>Namaste React</h1>
        </div>
    )

8. What are Components ?
Explanation :-
* Components in React are the building blocks of a React application.
* They are reusable, self-contained pieces of code that represent parts of the user interface.

9. How many types of Components are there ?
Explanation :-
* Two Types :
    Class Based Components (OLD Way) - Old way of writing code, used rarely in industry.
    Functional Components (NEW Way) - New way of writing code, most commonly used.

10. What is a React Functional Components ?
Explanation :-
* It is just a JavaScript Function that returns some JSX or a react element.
* Always name React Functional Component with Capital Letters otherwise you will confuse it with normal function.
* To render a functional component we call them ‘<Heading1 />’.
* This is the syntax that Babel understands.
* You can also call them using these ways :
    ‘<Title></Title>’
    or
    ‘{Title()}’

11. What is Components Composition ?
Explanation :-
* A component inside a component.
* Calling a component inside another component is Component Composition.

12. How to use JavaScript code inside JSX ?
Explanation :-
* Inside a React Component when ‘{}’ parenthesis is present we can write any JavaScript expression inside it.

13. How to call React Element in JSX ?
Explanation :-
* We can use ‘{}’ parenthesis.

14. What will happen if we call 2 elements inside each other ?
Explanation :-
* If we put 2 components inside each other, then it will go into an infinite loop and the stack will overflow.
* It will freeze your browser, so it’s not recommended to do so.

15. What are the advantages of using JSX ?
Explanation :-
* Sanitizes the data :
    If someone gets access to your JS code and sends some malicious data which will then get displayed on the screen that attack is called cross-site scripting.
    It can read cookies, local storage, session storage, get cookies, get info about your device, and read data. JSX takes care of your data.
    If some API passes some malicious data JSX will escape it. It prevents cross-site scripting and sanitizes the data before rendering.
* Makes code readable :
    JSX makes it easier to write code as we are no longer creating elements using React.createElement().
* Makes code simple and elegant
* Show more useful errors and warnings
* JSX prevents code injections (attacks)

-----Talk is Cheap, Show me Some Code-----

1. How Can I Do Inline Styling in React ?
Explanation :-
* In React, inline styles are specified as an object, where the keys are camelCase versions of the CSS property names, and the values are the style values.
* Example :
    const divStyle = {
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '10px'
    };
    function MyComponent() {
        return <div style={divStyle}>This is styled with inline styles!</div>;
    }
* Alternatively, you can directly apply styles within the style attribute :
    function MyComponent() {
        return <div style={{ color: 'blue', backgroundColor: 'lightgray' }}>This is styled inline!</div>;
    }

2. What Does Destructuring of Props Mean ?
Explanation :-
* Destructuring props is a way to extract values from the props object directly within the function signature or inside the function body.
* This makes it easier to access the specific props you need.
* Without Destructuring :
    function MyComponent(props) {
        return <h1>Hello, {props.name}!</h1>;
    }
* With Destructuring :
    function MyComponent({ name }) {
        return <h1>Hello, {name}!</h1>;
    }
* This simplifies the code and makes it more readable, especially when dealing with multiple props.

3. What is Config Driven UI ?
Explanation :-
* It is a user Interface that is built and configured using a declaration configuration file or data structure, rather than being hardcoded.
* Config is the data coming from the api which keeps on changing according to different factors like user, location, etc.
* The configuration defines what components should be rendered, their properties, layout, and sometimes even the business logic.
* The UI adapts dynamically based on the configuration provided.
* Example -
    A form generator where the fields, types, labels, and validation rules are all defined in a JSON configuration, and the form is rendered based on this config.

4. Why is Config Driven UI Used ?
Explanation :-
* Config Driven UI is used for :
    Flexibility - Easily change the UI by updating the configuration without altering the code.
	Reusability - The same UI code can be reused across different parts of an application with different configurations.
	Scalability - Makes it easier to manage complex UIs that need to adapt based on different contexts, user roles, or data.

5. What is Optional Chaining ?
Explanation :-
* Optional chaining (?.) is a JavaScript feature that allows you to safely access deeply nested properties without having to check each level.
* If a property does not exist, it returns undefined instead of throwing an error.
* Example :
    const user = {
        name: 'Alice',
        address: {
            street: '123 Main St'
        }
    };
    const street = user.address?.street; // '123 Main St'
    const city = user.address?.city; // undefined, but no error

6. Why Do We Need Keys When Using map ?
Explanation :-
* Each item in the list must be uniquely identified.
* When we have components at same level and if a new component comes on the first without ID, DOM is going to re-render all the components again.
* As DOM can’t identify where to place it.
* But if we give each of them a unique ID then react knows where to put that component according to the ID.
* It is a good optimization and performance thing.
* Keys help React identify which items have changed, been added, or removed.
* They are essential for maintaining the identity of elements in a list and ensuring efficient updates.
* Without keys, React would re-render all elements unnecessarily.
* Example :
    const items = ['apple', 'banana', 'cherry'];
    const listItems = items.map((item, index) => (
        <li key={item}>{item}</li>
    ));
* The key prop ensures that React can track each list item separately.
* Note -
    Never use index as keys in map.
    It is not recommended.

7. Why Can’t We Use Index as a Key ?
Explanation :-
* Using the index as a key can lead to issues with rendering and performance when items in the list change order, are added, or removed.
* React might not correctly identify which item has changed, leading to incorrect re-renders or state bugs.
* Example of issues -
    When items are reordered, React might confuse items with the same index, causing bugs or unexpected UI behavior.
* It’s better to use a stable and unique identifier, such as an ID from your data.

-----Lets Get Hooked-----

1. Why Do We Use React ? Why Not Just HTML, CSS, and JavaScript ?
Explanation :-
* Of course! It's absolutely possible to accomplish everything using regular HTML, CSS and JAVASCRIPT without using REACT. However, we chose React because it enhances our developer experience, making it more seamless and efficient because of the below reasons :-
    Component-Based Architecture -
        React allows you to build reusable components, making it easier to manage and organize complex UIs.
    State Management -
        React efficiently handles the state of your application, automatically updating the UI when the state changes.
    Virtual DOM -
        React uses a virtual DOM to optimize rendering, making updates faster compared to direct DOM manipulation.
    Declarative UI -
        With React, you describe how the UI should look, and React takes care of the underlying logic to update the UI when necessary.
    Ecosystem and Tools -
        React comes with a rich ecosystem of tools, libraries, and community support that enhances productivity.
    Scalability -
        React makes it easier to scale large applications with complex UIs and dynamic interactions.

2. What Exactly is Export and Import in React and What Are Its Types ?
Explanation :-
* Export - Exporting makes a module (variable, function, class, etc.) available to be imported in other files.
* Two types of Exports -
    Default -
        Export a single default export from a module.
        Ex :
            const myComponent = () => {};
            export default myComponent;
    Named -
        Export multiple named variables or functions.
        Ex :
            export const myVar = 42;
            export function myFunction() {}
* Import - Importing brings in modules from other files.
* Three types of Imports -
    Default -
        Import the default export.
        Ex :
            import myComponent from './myModule';
    Named -
        Import specific named exports.
        Ex :
            import { myVar, myFunction } from './myModule';
    Combined -
        Import both default and named exports.
        Ex :
            import myComponent, { myVar } from './myModule';

3. How Do We Create Super-Powerful Variables ?
Explanation :-
* React mein, jab hum UI ke saath data ko sync rakhte hain, toh hum state variables ka use karte hain. 
* Ye variables React ke useState hook se bante hain. 
* Inka kaam sirf data store karna nahi hota, balki jab bhi ye update hote hain, React automatically pura component re-render kar deta hai.
* Hum useState hook ke zariye ek state variable aur usko update karne ke liye ek function create karte hain.
    const [stateVariable, updateFunction] = useState(initialValue);
* Jab bhi state change hoti hai (updateFunction call hota hai), React apna Reconciliation Algorithm (React Fiber) ka use karke puri UI ko re-render karta hai. 
* Bas wahi cheez re-render hoti hai jo change hui ho.
* Jab bhi state update hoti hai, React ka diffing algorithm ensure karta hai ki UI layer hamesha latest data layer ko represent kare.
* Jab state update hoti hai, React ka reconciliation algorithm purane aur naye Virtual DOM ko compare karta hai.
* Sirf badli hui cheezein actual DOM mein update hoti hain (ye fast aur efficient hota hai).
* Yehi mechanism React ko “blazing fast” banata hai.

4. What is a Hook ?
Explanation :-
* Hooks are special functions in React that allow you to use state and other React features in functional components.
* The most common hooks are :
    •	useState - Manages state in a functional component.
	•	useEffect - Runs side effects in functional components.
	•	useContext, useReducer, useCallback, useMemo, etc., are other examples.
* Hooks simplify state management and side effects in functional components, replacing the need for class components.

5. What to Use : .js or .jsx ? Is There a Difference ?
Explanation :-
* .js - Can be used for any JavaScript code, including React components.
* .jsx - Specifically indicates that the file contains JSX (JavaScript XML), which is the syntax extension for writing HTML-like code in JavaScript.
* Difference -
    The .jsx extension is purely for convention and readability.
    Modern build tools like Babel can handle JSX in .js files as well.
* Recommendation -
    Use .jsx for files that primarily contain React components with JSX for clarity.

6. Is It Necessary to Use the Extension When We Import?
Explanation :-
* Default Behavior - When importing, if you omit the file extension, the default behavior depends on your build setup.
* JavaScript/React -
    If you don’t specify an extension, tools like Webpack and Parcel will try to resolve .js, .jsx, .ts, or .tsx automatically.
* Recommendation -
    For clarity and to avoid issues, it’s often best to include the extension unless you’re certain of your build setup.

7. Can We Export a Component as Named and Default?
Explanation :-
* Yes, You Can.
* You can export a component as both a named and a default export in the same file.
* Ex :
    export const MyComponent = () => {};
    export default MyComponent;

8. What Exactly is the UI Layer in React?
Explanation :-
* The UI Layer in React refers to the components that define the structure, layout, and appearance of the user interface.
* It’s where you define how the app looks and how it interacts with the user.
* React’s component-based architecture allows you to build the UI layer in a modular and reusable way.

9. What Exactly is the Data Layer in React?
Explanation :-
* The Data Layer refers to the part of your application that manages and handles data, including state management, data fetching, and data flow.
* React mein, Data Layer ek wo part hota hai jo application ke data ko manage aur handle karta hai. 
* Iska kaam data ko store karna aur ensure karna hota hai ki UI hamesha latest aur accurate information dikhaye.
* It’s the logic and data management that drives what the UI displays.
* In React, this is often managed using state (via hooks like useState and useReducer), context (via useContext), or external state management libraries (like Redux).

10. Why Use useState When You Can Simply Define a Variable?
Explanation :-
* React mein simple variable aur useState ka kaam alag hai. 
* useState ek superpowerful tool hai jo tumhare UI aur data ko sync rakhne mein madad karta hai.
* Reactivity (Reactive State Variables) :
	Regular Variable -
        Agar tum ek normal variable define karte ho aur uski value badalte ho, toh React ko pata hi nahi chalega ki kuch change hua hai. 
        Isliye UI update nahi hoga.
	useState -
        Jab tum useState ka use karte ho aur state update karte ho (setState), toh React ko pata chal jata hai ki component ko re-render karna hai. 
        Is reactivity ki wajah se tumhara UI aur data hamesha sync mein rehta hai.
* UI aur Data Layer Connection :
	React ka ek basic principle hai - UI reflects the state.
        Agar state change hoti hai, React automatically UI ko update karta hai.
	Example -
        Agar tumhara count variable update hota hai, toh React ka re-render mechanism ensure karega ki screen par updated value dikhaye. 
        Ye connection useState ke bina nahi ho sakta.
* Preservation Across Re-renders :
	Regular Variables -
        Normal variables har render ke baad reset ho jaate hain, kyunki React ka rendering mechanism ek nayi copy banata hai.
    State Variables -
        useState ke state variables persist karte hain, yaani wo render cycle ke baad bhi apni value ko yaad rakhte hain.
* Superpowers of useState :
    Trigger Re-renders - 
        Jab tum setState function call karte ho, React automatically -
	        Data ko update karta hai.
	        UI ko naye data ke saath re-render karta hai.
    Side Effects Integration (useEffect) - 
        useState ke saath tum side effects handle kar sakte ho.

11. What Does This Mean: “Whenever a State Variable Updates, React Will Re-Render My Component”?
Explanation :-
* When a state variable is updated, React re-renders the component to reflect the updated state in the UI.
* This ensures that the UI always displays the most current data.
* Behind the Scenes -
    React uses the Virtual DOM to efficiently update only the parts of the DOM that need to change, making this process fast and smooth.

12. Why is React Often Praised for Its Speed? What’s the Reason or Funda Behind It?
Explanation :-
* At the core lies React-Fiber -
    A powerhouse reimplementation of React's algorithm.
    The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures.
    Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.
    These days, we can use JavaScript and React alongside popular libraries like GSAP (GreenSock Animation Platform) and Three.js.
    These tools allow us to create animations and 3D designs using the capabilities of JavaScript and React.
* Virtual DOM -
    React maintains a lightweight representation of the DOM in memory, called the Virtual DOM.
    When state changes, React computes the minimum set of changes needed and updates the real DOM in one efficient operation.
* Reconciliation -
    React’s diffing algorithm (reconciliation) optimizes rendering by comparing the new virtual DOM with the previous one and updating only the parts that have changed.
* Component-Based -
    React’s component-based architecture promotes the reuse of components and reduces unnecessary re-renders.
* Optimizations -
    Tools like shouldComponentUpdate, React.memo, and hooks like useCallback and useMemo help optimize performance by preventing unnecessary re-renders.

13. How Does It All Work Behind the Scenes?
Explanation :-
* When you create elements in React, you're actually creating virtual DOM objects.
* These virtual replicas are synced with the real DOM, a process known as "Reconciliation" or the React "diffing" algorithm.
* Essentially, every rendering cycle compares the new UI blueprint (updated VDOM) with the old one (previous VDOM) and makes precise changes to the actual DOM accordingly.
* Rendering -
    When you call ReactDOM.render, React builds a Virtual DOM tree and renders it to the real DOM.
* State and Props -
    React manages state and props to control what gets rendered. State changes trigger re-renders.
* Reconciliation -
    React compares the previous Virtual DOM with the new one (after a state or prop change) and efficiently updates only the parts of the real DOM that have changed.
* Event Handling -
    React uses a synthetic event system, which is cross-browser and optimized for performance.
* Component Lifecycle -
    React components go through a lifecycle with phases like mounting, updating, and unmounting, allowing developers to hook into these phases using lifecycle methods or hooks like useEffect.
* For In-Depth Understanding Go to this Link : https://github.com/acdlite/react-fiber-architecture

-----Exploring The World-----

1. What are the two approaches to fetch and render the data ?
Explanation :-
* The two common approaches to fetching and rendering data in React are :
    Fetch First Render Later (Load and Render) - 
        We can make the API call as soon as the app loads, fetch the data, and render it.
        The data is fetched first, then once the data is available, the component is rendered.
        This may lead to a delay before anything appears on the screen but avoids a flickering/loading state.
    Render First Fetch Later -
        Alternatively, we can quickly render the UI when the page loads we could show the structure of the web page, and then make the API call.
        Once we get the data, we re-render the application to display the updated information.
        The component renders first, displaying some default UI (e.g., loading spinner).
        After rendering, the data is fetched asynchronously, and the UI is updated with the data when it arrives.
* In React, we're opting for the second approach.
* This approach enhances user experience by rendering the UI swiftly and then seamlessly updating it once we receive the data from the API call.

2. What is Load and Render ?
Explanation :-
* This approach means that data is fetched before rendering the component.
* The component waits until all necessary data is loaded and then renders the UI.
	•	Advantage - Avoids showing a loading spinner or placeholder.
	•	Disadvantage - Increases the initial page load time because the component won’t render until all data is ready.

3. What is Render First Fetch Later ?
Explanation :-
* In this approach, the component renders first without data (or with placeholder data) and fetches the data asynchronously after rendering.
* Once the data is fetched, the component is re-rendered with the actual data.
	•	Advantage - The page loads faster, giving immediate visual feedback (like a loading spinner).
	•	Disadvantage - Requires handling a loading state, and there’s a possibility of flickering as the UI changes after the data arrives.

4. Where we fetch the data ?
Explanation :-
* In React functional components, the most common place to fetch data is inside the useEffect hook.
* This ensures the data fetching happens after the initial render.
* Ex -
    useEffect(() => {
        fetchData();
    }, []); // The empty array ensures this runs only once, after the first render.
* In Class Components, You would typically fetch data inside the componentDidMount lifecycle method.

5. Why fetch data inside useEffect ?
Explanation :-
* The main reason we use useEffect for fetching data is Because - 
    It ensures that the data fetching happens after the initial render.

6. Why after initial render ?
Explanation :-
* Because of Render First Fetch Later Approach.
* Hum useEffect ko specifically use karte hain taaki hum data fetch kar sakein initial render ke baad. 
* Matlab, hum first render ke time pe UI ko load karne dete hain (user ko jaldi se dikhane ke liye), aur uske baad data ko fetch karte hain.

7. Why only after the initial render ?
Explanation :-
* Performance - 
    Agar hum data ko initial render ke pehle fetch karenge, toh UI ko render hone mein time lagega (kyunki network request wait karne ki zarurat hogi). 
    Ye experience ko slow bana sakta hai. 
    Hum chaahte hain ki user ko UI jaldi dikhe aur data fetch hona background mein ho.
* Consistency - 
    Agar hum fetch ko render ke andar rakhenge, toh humare render flow unpredictable ho sakte hain. 
    Hum chahte hain ki component render ho, aur fir side effects (like fetching data) execute ho.
* useEffect ka kaam :
	Side Effects - 
        React ke component render hone ke baad jo bhi “side effects” (like data fetching) hain, unko handle karne ke liye useEffect use hota hai.
	Cleanup - 
        Agar aapne network request start kiya hai aur component unmount hota hai, toh aap useEffect ke cleanup function ka use karke us request ko cancel kar sakte ho.

8. Why can’t we fetch data anywhere else ?
Explanation :-
* Agar hum data fetch karte hain directly component ke body mein, toh woh render ke saath baar baar execute ho sakta hai. 
* Har baar jab component render hoga, wo fetch function call ho jayega. 
* Ye unwanted behavior hai, kyunki hum sirf initial render ke baad hi data chahte hain, na ki har render ke baad.
* Ex - 
    function MyComponent() {
        const data = fetchData(); ---> This runs on every render!
        return <div>{data}</div>;
    }
    Yahan fetchData() har render par call hoga, jo ki inefficient hai aur unnecessary network requests ko trigger karega.

9. When will the callback function get called inside the useEffect() ?
Explanation :-
* The callback function inside useEffect() is executed after the component renders.
* The timing depends on the dependencies array :
	•	If the "dependencies array is empty" ----> The callback runs once, after the initial render.
	•	If there "are dependencies" ----> The callback runs after every render where any of the dependencies change.
	•	If there’s "no dependencies" array ----> The callback runs after every render.

6. What exactly the CORS policy is ?
Explanation :-
* CORS (Cross-Origin Resource Sharing) Policy -
    CORS is a security feature in browsers that restricts web pages from making requests to a different domain than the one that served the web page.
    It prevents malicious websites from making unauthorized requests to APIs.
* How it works -
    When a frontend JavaScript application (from one domain) tries to fetch data from a different domain (API), the server must include specific headers (e.g., Access-Control-Allow-Origin) to allow the request.
* If CORS fails -
    You’ll get a CORS error, and the browser will block the request.

7. Which one is better :
    Page Loads -> Make API Call -> Render Components
    Page Loads -> Render Whatever we have -> Make API Call -> Render Components
Explanation :-
* Page Loads -> Make API Call -> Render Components : This is the Fetch-Then-Render approach.
	Pro - Avoids the need for loading spinners or placeholders, the final UI is rendered only once the data is ready.
	Con - Slower initial load time because the component waits for the data before rendering.
* Page Loads -> Render Whatever We Have -> Make API Call -> Render Components : This is the Render-First, Fetch-Later approach.
	Pro: The page loads quickly, providing immediate feedback (e.g., a spinner or skeleton screen).
	Con: Requires handling loading states and may lead to UI flickering as data arrives.
* Which is Better :
    The Render-First, Fetch-Later approach is generally better for user experience because it provides faster initial feedback, even if the data takes time to load.

8. When we click on the any Button which is inside a Parent Component , so only that Button Component Re-Render or the whole Parent Component Re-Render ?
Explanation :-
* Re-Render Behavior -
    In React, the entire parent component re-renders when a state or prop change occurs in the parent.
    If a button is inside the parent component, and the parent’s state is updated (e.g., via useState), the parent and all of its children, including the button, will re-render.
* Optimizing re-renders -
    To prevent unnecessary re-renders of child components, you can use React.memo to memoize child components and ensure they only re-render if their props change.

9. How in useState the state Variable get updated with new values when we are using const ? Isn’t it wrong in JS ?
Explanation :-
* When you use useState in React, you’re not directly modifying the state variable but instead using the function provided by useState (e.g., setState) to update the state.
* The const variable holds a reference to the value that useState manages, but setState is the function that changes the value internally.
* Ex -
    const [count, setCount] = useState(0);
    setCount(count + 1); // Updates the value of count
* Why it’s okay -
    The const in this case refers to the reference of the state variable, and React ensures that calling setCount triggers an update of the state, but the reference itself is constant.

* React mein jab hum useState ka use karte hain, toh hum state variable ko const ke saath declare karte hain. 
* Ye JavaScript ke general rule ke against lagta hai, kyunki const variables re-assign nahi ho sakte. 
* Par React ke context mein ye perfectly sahi hai. 
* Ex - const [count, setCount] = useState(0);
    count (State Variable) -
        Ye ek reference hai jo React ke andar ki state ko point karta hai.
        Tum directly count ki value change nahi kar sakte ho (count = count + 1 galat hoga).
	setCount (State Updater Function) -
        Jab tum setCount(newValue) call karte ho, React andar ki state ko update karta hai aur naye state ke saath component ko re-render karta hai.
* Why It’s Okay with const :
    Constant Reference -
        const ka matlab hai ki variable ka reference change nahi hoga.
        count ki value React ke internal state se linked hai. 
        Jab setCount call hota hai, React reference ko same rakhta hai, bas value ko internally update karta hai.
        Ex - 
            const [count, setCount] = useState(0);
            setCount(count + 1); ---> Internally updates the value
            Yahan count ka reference same hai. 
            React apne internal memory mein naye value ko save karta hai aur naye render ke dauraan count ko update karta hai.
* Analogy for Better Understanding - 
    Samjho tumhare paas ek box hai jisme number likha hai.
	    const count = useStateBox;
    Ye box ka address hai (reference) jo count ko represent karta hai. Address kabhi change nahi karega.
	Jab tum setCount(newValue) call karte ho, box ke andar ka number change ho jata hai, par box ka address wahi ka wahi rehta hai. Is wajah se const perfectly valid hai.
* If the const variable holds a reference to an object or value managed elsewhere, the content of that reference can change.
    Ex - 
        const obj = { value: 0 };
        obj.value = 1; ---> Valid because reference (obj) is constant
        useState works exactly like this.
        Similarly, count in React is just a reference to the internal state. 
        React’s setCount updates the state behind the scenes while keeping the reference constant.

10. What Does This Mean and Why is it So ?
“Whenever a State Variable Updates, React Will Re-Render My Component”
Explanation :-
* This statement means that when you use useState to manage a piece of state in React, any update to that state will trigger a re-render of the component where the state is used.
* This is how React keeps the UI in sync with the data.
* Why This Happens -
    React’s rendering engine works by re-rendering components when their state or props change.
    This ensures that the UI reflects the most up-to-date state.
* Virtual DOMc -
    React compares the updated Virtual DOM to the previous one and updates only the parts of the actual DOM that have changed, making the process efficient.

11. Can you call the useState Hook outside the Component ? If not Why ?
Explanation :-
* No, you cannot call the useState hook outside of a component.
* React mein useState aur doosre hooks kaam karte hain ek functional component ke andar ya ek custom hook ke through. 
* Agar tum useState ko component ke bahar call karoge, toh ye kaam nahi karega.
* Hooks jaise useState React ke internal mechanisms pe dependent hote hain.
* Ye internal mechanisms component ke render cycle ke saath state ko track karte hain.
* Jab tum useState call karte ho, React :
    Ek specific component ke saath ek state variable ko associate karta hai.
    State ko track karta hai, jab component re-render hota hai.
    State ki updated value provide karta hai.
* Component ke Bahar Hooks Kyu Kaam Nahi Karte :
    No Context for Lifecycle -  
        Hooks kaam karte hain component ke lifecycle ke context mein. 
        Agar tum useState component ke bahar call karoge, React ko ye samajh hi nahi aayega ki state kiske saath associate karni hai.
    State Tracking Issue -
        Hooks jaise useState ko ek particular component ke saath state ko track karne ke liye design kiya gaya hai. 
        Component ke bahar React ke paas state ko track karne ka mechanism nahi hota. 
* React hooks like useState can only be called inside functional components or custom hooks.
* This is because hooks rely on React’s internal mechanisms to track state and lifecycle behavior, which is only available within the component rendering process.
* React hooks like useState work by associating state with the lifecycle of a specific component.
* If you try to call it outside of a component, React won’t know how to handle it since it’s not within the context of a component’s render cycle.

12. What are the two Rules of React Hooks ?
Explanation :-
* Hooks Sirf Functional Components ya Custom Hooks ke andar Call Karne Chahiye -
	Agar tum hooks ko kisi normal function ya component ke bahar use karte ho, React ka lifecycle context nahi hota.
* Hooks Sirf Top-Level Pe Call Karne Chahiye -
	Hooks ko loops, conditions, ya nested functions ke andar call nahi karna chahiye. Ye React ke state tracking ko confuse kar deta hai.

-----Finding The Path-----

1. What are various ways to add images to our App ?
Importing images using ES6 Modules
Using public folder
Loading images from a remote source
Using image assets within CSS
Explanation :-
* Importing Images Using ES6 Modules -
    In React, you can import images just like any other module using import. This is useful when you’re working with a build tool like Webpack.
    Ex -
        import React from 'react';
        import logo from './logo.png';  // Import image
        function App() {
            return <img src={logo} alt="Logo" />;
        }
        export default App;
* Using Public Folder -
    You can place images in the public folder and reference them with a relative URL. Files in the public folder can be directly accessed at runtime.
    You don’t need to import the image when using the public folder.
    Ex -
        function App() {
            return <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />;
        }
        export default App;
* Loading Images from a Remote Source -
    You can use the src attribute with an external URL to load an image hosted on a remote server.
    Ex -
        function App() {
            return <img src="https://example.com/logo.png" alt="Remote Logo" />;
        }
        export default App;
* Using Image Assets Within CSS -
    You can include images in CSS files for background images or other styling purposes.
    Ex -
        .logo {
            background-image: url('./logo.png');
        }
        function App() {
            return <div className="logo"></div>;
        }
        export default App;

2. What would happen if we do console.log(useState()) ?
Explanation :-
* When you call useState() without passing any arguments, it returns an array with two elements :
    State Variable - The current state value, which will be undefined if no initial value is provided.
    Updater Function - A function that allows you to update the state.
* useState Returns an Array.
* Yes, we are doing array destructuring when we write :
    const [state, setState] = useState();
    In JavaScript, array destructuring allows you to assign variables directly from an array.
    Similarly, useState() returns an array.
* Why Return an Array :
    React developers chose an array because :
        Position-Based Assignment -
            Arrays allow destructuring by position. 
            The first element is always the state, and the second is the updater function.
        Flexibility -
            Arrays don’t need named properties, which keeps the API simple and clean.

3. What is SPA ?
Explanation :-
* A Single-Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app, without requiring a full page reload.
* Ex - Gmail, Facebook, and Twitter.

4. What are Key characteristics of SPA ?
Dynamic Updates
Smooth User Experience
Faster Initial Load
Client Side Routing
API Centric
State Management
Explanation :-
* Dynamic Updates -
	•	SPAs dynamically update content by fetching data and rendering views in response to user interactions without a full page reload.
* Smooth User Experience -
	•	SPAs offer a more fluid user experience since only part of the content is updated, resulting in less waiting time and no page refreshes.
* Faster Initial Load -
	•	SPAs often load a single bundle of assets (HTML, CSS, JS) at the beginning, and after that, only the necessary data is fetched, reducing the time for subsequent interactions.
* Client-Side Routing -
	•	SPAs use JavaScript to manage routing within the application, making it possible to change the URL and update the view without contacting the server.
* API-Centric -
	•	SPAs heavily rely on APIs (like REST or GraphQL) to fetch and send data to the backend, separating the frontend from the backend.
* State Management -
	•	Managing state is crucial in SPAs, as the app needs to track user interactions and dynamically render views. Libraries like Redux or useState/useReducer in React are often used.

5. What is the difference between Client Side Routing and Server Side Routing ?
Explanation :-
* Client-Side Routing :
	Handling on the Client -
	    •	The routing is managed by JavaScript on the client-side. This allows for transitions between different views without refreshing the page.
	Faster Transitions -
	    •	Navigation between pages is faster since no full-page reload is needed; only the specific content gets updated.
	Single-Page Application (SPA) -
	    •	Client-side routing is commonly used in SPAs where the page remains the same, and only the data changes.
	SEO Challenges -
	    •	Since the content is dynamically loaded, SEO can be more challenging compared to server-side routing. Server-side rendering (SSR) or static generation can be used to mitigate this issue.
	Route Management -
	    •	JavaScript libraries like React Router handle route management on the client-side.

* Server-Side Routing :
	Handling on the Server -
	    •	The server processes each route and sends a new HTML file for every request. The browser completely reloads the page when a new route is visited.
	Slower Transitions -
	    •	Each page transition requires a server request, leading to slower transitions as the entire page is reloaded.
	Traditional Websites -
	    •	Server-side routing is common in traditional multi-page applications (MPAs), where each page is a new HTML file served from the server.
	SEO-Friendly -
	    •	Since the server sends fully rendered HTML pages, server-side routing is naturally SEO-friendly.
	Route Configuration -
	    •	Route configuration happens on the server, typically in backend frameworks (e.g., Express.js for Node.js or Flask for Python).

6. How React State Works ?
Explanation :-
* Why I get the previous value in the console when I click the button , even though the UI is being updated -
    const handleIncrement = () => {
    setIncrement(increment + 1);
    console.log(increment); // Why it prints the previous value?
    };
* Because In React, state updates using hooks like useState are asynchronous. 
* This means -
	•	When you call setIncrement(increment + 1), React schedules the state update.
	•	However, the actual state variable (increment) does not update immediately. 
    •	React waits until it’s ready to re-render the component with the new state value.
* Why Does the UI Show the Updated Value -
    React updates the UI after the state update is applied.
    During the re-render :
	    •	React retrieves the new state value (increment + 1) and updates the DOM (what you see on the screen).
	    •	However, the console.log statement inside handleIncrement runs before the re-render, so it shows the old value.

-----Jo Dikhta hai Vo Bikta hai-----

1. What Are All the Ways of Writing CSS in a React App ?
Explanation :-
* Inline CSS -
    You can apply styles directly to elements using the style attribute, where styles are passed as a JavaScript object with camelCase properties.
    Ex -
        const style = { color: 'blue', backgroundColor: 'yellow' };
        return <div style={style}>Inline Styled Component</div>;
* Internal (CSS in JS) -
    You can define styles within your JavaScript files, either using a library like Styled Components or Emotion, which allows you to create components with scoped styles.
    Ex -
        import styled from 'styled-components';
        const StyledButton = styled.button`
            background-color: blue;
            color: white;
        `;
        return <StyledButton>Click Me</StyledButton>;
* External (CSS Files) -
    The most common way is to create a separate CSS file (e.g., App.css) and import it into your component.
    Ex -
        import './App.css';
        return <div className="container">External Styled Component</div>;
        .container {
            color: red;
        }

2. In tailwind.config.js, What Do All the Keys Mean (content, theme, extend, plugins) ?
Explanation :-
* content -
    Specifies the files that Tailwind should scan for class names.
    Tailwind will purge unused styles based on the files listed here.
    Ex -
        content: ['./src/.{js,jsx,ts,tsx}']
* theme -
    This is where you customize Tailwind’s default theme, including colors, fonts, spacing, etc.
    It defines the default design tokens available in your project.
    Ex -
        theme: {
            colors: {
                primary: '#ff5733',
            },
        }
* extend -
    Use this key to extend the default theme without overriding it completely.
    It allows you to add additional custom styles while keeping the base theme intact.
    Ex -
        extend: {
            colors: {
                customColor: '#123456',
            },
        }
* plugins -
    This key is used to add additional functionality to Tailwind via plugins.
    Plugins allow you to extend or modify Tailwind’s functionality.
    Ex -
        plugins: [
            require('@tailwindcss/forms'),
        ]

3. Why Do We Have .postcssrc File ?
Explanation :-
* The .postcssrc file is used to configure PostCSS, a tool for transforming CSS using JavaScript plugins.
* PostCSS can handle tasks like autoprefixing CSS for different browsers, minifying CSS, and enabling custom features like TailwindCSS.
* This file typically contains configuration options for the PostCSS tool and any plugins you might use.

4. What Are the Primary Reasons Why You Might Have a .postcssrc File ?
Explanation :-
* Plugin Configuration -
    .postcssrc allows you to configure PostCSS plugins such as autoprefixer, cssnano, and TailwindCSS.
    These plugins can automate CSS transformations like adding vendor prefixes or minifying CSS.
    Ex -
        {
            "plugins": {
                "tailwindcss": {},
                "autoprefixer": {}
            }
        }
* Custom Configuration -
    You can customize PostCSS behavior with specific plugin settings, like enabling certain features or modifying default behaviors.
* Presets and Options -
    It lets you set up PostCSS presets or custom options, making it easy to adjust PostCSS behavior according to your project needs.
* Maintainability -
    Keeping PostCSS configurations in a .postcssrc file makes it easier to manage and maintain the setup, as all plugin configurations are centralized in one place.
* Sharing Configurations -
    You can share your PostCSS configuration with other developers in your team, ensuring that everyone’s build process remains consistent.

-----Data is The New Oil-----

1. What is Prop Drilling ?
Explanation :-
* Prop Drilling refers to the process of passing data from a parent component to deeply nested child components through props.
* If a component deep down the tree needs access to a piece of data, each intermediary component between the parent and the child must pass that data through props, even if those intermediate components don’t need it.
* Issue - It can make the code harder to maintain, as every intermediary component needs to pass the props, even if they don’t use them.
* Solution - React’s Context API or state management libraries (like Redux / Recoil) help avoid prop drilling by allowing components to share data without passing props manually at every level.

2. What is Lifting the State Up ?
Explanation :-
* Lifting the state up in React refers to the practice of moving the state from a lower-level (child) component to a higher-level (parent or common ancestor)  component in the component tree.
* This is done to share and manage state across multiple components.
* Lifting the State Up means moving state from a child component to its closest common ancestor, so that the state can be shared across multiple child components.
* When a child component needs access to certain data or needs to modify the data, instead of keeping that data and the corresponding state management solely within the child component, we move the state to a shared ancestor component.
* By doing so, the parent component becomes the source of truth for the state, and it can pass down the necessary data and functions as props to its child components.
* By lifting the state up to a common ancestor, you centralize the state management, making it easier to control and share state among components.
* This pattern is especially useful in larger React applications where multiple components need access to the same data or where the state needs to be synchronized across different parts of the application.
* Instead of each component managing its own state, the parent component manages the state and passes it down as props to the relevant children.
* Why ? ---->  It’s useful when multiple components need to share the same state or interact with the same data.

3. If We Don’t Pass a Value to the Provider, Does It Take the Default Value ?
Explanation :-
* Yes, if you don’t pass a value to the Provider, the context will use the default value defined when the context is created.
* Note - If you pass a value to the Provider, it will override the default value.

4. What Are Context Provider and Context Consumer ?
Explanation :-
* Context Provider -
    The Provider component in React is used to supply data (like state or functions) to all components within its tree that consume the context.
    It allows us to avoid prop drilling by making data available to any component in the tree.
    You wrap the part of your component tree that needs access to the context with a Provider and pass the value that you want to make available.
* Context Consumer -
    The Consumer component or useContext hook is used to access the value provided by the Provider.
    Consumers can be used anywhere in the tree that is within the provider’s scope.
    The Consumer will consume the nearest value provided by the Provider.

-----CLI Tools-----

1. What are CLI Tools ?
Explanation :-
* CLI (Command Line Interface) Tools are programs or utilities that allow users to interact with software by typing commands into a terminal or command prompt.
* They are often used to automate tasks, manage software, and interact with applications in a more controlled and scriptable way.

2. Why are CLI Tools used ?
Explanation :-
* Efficiency - CLI tools can perform tasks faster than GUIs because they require fewer resources and can be automated with scripts.
* Automation - They can be easily scripted to perform repetitive tasks automatically.
* Control - CLI tools provide more granular control over software and systems, allowing users to execute complex commands with precision.
* Remote Access - They can be used to manage systems remotely, especially on servers without a graphical interface.

3. Give me some examples of CLI Tools ?
Explanation :-
* Node Package Manager (npm) - Used for managing JavaScript packages.
* Git - A version control tool to track code changes.
* Webpack - A module bundler for JavaScript applications.
* Vite - A build tool designed to enhance development speed and efficiency (we’ll discuss this in more detail next).

4. What is Vite ?
Explanation :-
* Vite is a modern build tool that significantly improves the development experience for front-end projects.
* Unlike traditional bundlers like Webpack, Vite provides fast server start, instant updates (HMR - Hot Module Replacement), and optimized production builds.
* It’s particularly designed for modern JavaScript frameworks like React.

5. Why is Vite + React better than npm + React ?
Explanation :-
* Faster Development - Vite offers instant server start and quicker Hot Module Replacement (HMR).
* Modern Bundling - Vite uses ES modules, avoiding the need for bundling during development.
* Optimized Builds - Vite creates more efficient and smaller production builds compared to traditional bundlers like Webpack with npm.

-----React Foundation-----

1. What is React Project Directory ?
Explanation :-
* public/ Folder :
	Contains static files like index.html which serves as the entry point for your React app.
* src/ Folder :
	Contains your JavaScript files, including components, styles, and other assets. It’s where most of your React code lives.

2. What is Module Bundler ?
Explanation :-
* A module bundler is a tool that combines multiple JavaScript modules and their dependencies into a single or a few output files (bundles).
* Key Functions :
	Dependency Management - Resolves and bundles dependencies among JavaScript files and other assets like CSS or images.
	Code Splitting - Breaks down the code into smaller chunks that can be loaded on demand to improve performance.
	Transpiling - Converts modern JavaScript (or other languages like TypeScript) into browser-compatible JavaScript.
	Minification - Reduces the size of the output files by removing unnecessary code and whitespace.
* Benefit of a Module Bundler :
	Optimized Performance - Reduces the number of HTTP requests and improves load times by bundling and minifying code.
	Simplified Development - Manages dependencies and assets automatically, making it easier to develop and maintain complex applications.

3. What is Webpack ?
Explanation :-
* Webpack is a module bundler that takes JavaScript files and their dependencies, and bundles them into a single file or a few files. It handles various tasks like transpiling, bundling, and code splitting.

4. What is Babel ?
Explanation :-
* Babel is a JavaScript compiler that converts modern JavaScript (ES6+) into backward-compatible JavaScript that can run in older browsers.
* It allows you to use the latest language features without worrying about browser support.

5. What is difference between package.json & package-lock.json ?
Explanation :-
* package.json :
	Manages project metadata, dependencies, scripts, and configurations.
* package-lock.json :
	Locks the versions of dependencies to ensure consistent installations across different environments.

6. What is DOM, ReactDOM, & Virtual DOM ?
Explanation :-
* DOM (Document Object Model) :
	The standard representation of HTML elements as objects in the browser.
    Manipulating the DOM directly can be slow.
* ReactDOM :
	The package that provides methods for interacting with the DOM in React, such as rendering components to the DOM.
* Virtual DOM :
	A lightweight copy of the real DOM used by React to optimize updates.
    React compares the virtual DOM with the real DOM and updates only the changed parts

7. What is index.html, App.js, index.js, reportWebVitals.js & package.json in a Simple React Project ?
Explanation :-
* index.html (in public/) :
	The HTML template that includes a <div id="root"></div> element where React components will be rendered.
* App.js (in src/) :
	Contains the main React component for your application.
* index.js (in src/) :
	The entry point for the React app where ReactDOM renders the App component into the root element.
* package.json :
	Defines project dependencies, scripts, and other configurations. React scripts are typically used to run the project.
* reportWebVitals.js :
    Purpose - This file is used to measure and report performance metrics of your React app.
    Code Explanation -
        const reportWebVitals = onPerfEntry => {
            if (onPerfEntry && onPerfEntry instanceof Function) {
                import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                    getCLS(onPerfEntry); -------> Cumulative Layout Shift
                    getFID(onPerfEntry); -------> First Input Delay
                    getFCP(onPerfEntry); -------> First Contentful Paint
                    getLCP(onPerfEntry); -------> Largest Contentful Paint
                    getTTFB(onPerfEntry); -------> Time to First Byte
                });
            }
        };
        export default reportWebVitals;
            •	reportWebVitals Function -
                                        This function takes a callback function (onPerfEntry) that gets called with the performance metrics.
            •	Parameters -
                            •	onPerfEntry -
                                            A function to handle the performance metrics.
            •	import('web-vitals') -
                                    Dynamically imports the web-vitals library to measure performance metrics.
            •	Methods from web-vitals -
                •	getCLS -
                            Measures Cumulative Layout Shift (visual stability).
                •	getFID -
                            Measures First Input Delay (interactivity).
                •	getFCP -
                            Measures First Contentful Paint (first render).
                •	getLCP -
                            Measures Largest Contentful Paint (largest render).
                •	getTTFB -
                            Measures Time to First Byte (server response time).
            Usage -
                You call reportWebVitals with a function to log or handle these metrics, often for performance monitoring and improvement.

8. How JavaScript Runs Without Script Tags ?
Explanation :-
* React scripts (via tools like Webpack or Vite) automatically handle the inclusion of JavaScript files and their dependencies, so you don’t need to manually add script tags in index.html.

9. What is index.html, App.js, index.js, & package.json in a React + Vite Project ?
Explanation :-
* index.html (in public/) :
	Similar to the simple React project but often includes a script tag pointing to the Vite-generated bundle.
* App.js (in src/) :
	Contains the main React component, same as in the simple project.
* index.js (in src/) :
	Entry point for rendering components, but Vite handles bundling and development server.
* package.json :
	Includes Vite and other dependencies. Scripts are set up to start the Vite development server.

10. What is the difference Between React and React + Vite ?
Explanation :-
* React is the library for building UI components.
* React + Vite combines React with Vite for a faster development experience and optimized build process. Vite provides instant server start, fast HMR, and efficient bundling

11. What is createRoot method ?
Explanation :-
* ReactDOM.createRoot(document.getElementById('root')).render(<App />);
	Initializes the React application and renders the App component into the DOM element with id root.
    This is the entry point for React 18’s new root API for better performance and concurrency features.

12. What is React Fiber ?
Explanation :-
* React Fiber is a complete rewrite of the React reconciliation algorithm, designed to improve the rendering performance.
* It allows React to split rendering work into chunks, making updates more efficient and responsive.

13. What is Reconciliators & Reconciliation ?
Explanation :-
* Reconciliators are the components of the algorithm that manage this process, ensuring minimal updates and improving performance.
* Reconciliation is the process of updating the DOM to match the React component tree. React uses an algorithm to efficiently determine what has changed and update only those parts of the DOM.

14. What does this block of Code means ?
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
Explanation :-
* import React from 'react';
	Imports the React library necessary for writing React components.
* import ReactDOM from 'react-dom/client';
	Imports the ReactDOM package for rendering React components to the DOM.
* import App from './App';
	Imports the main App component from the App.js file.
* ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
	createRoot - Initializes the React root.
	document.getElementById('root') - Finds the DOM element with id root.
	render(<React.StrictMode><App /></React.StrictMode>) - Renders the App component inside React.StrictMode, which helps with detecting potential problems in the application.

-----React Internals-----

1. What are SPA ?
Explanation :-
* SPA (Single Page Application) -
    Single Page Application (SPA) is a type of web application or website that interacts with the user by dynamically rewriting the current page, rather than loading entire new pages from the server.
* Key Characteristics :
    Loads a single HTML page initially.
    Subsequent interactions and navigation are handled by dynamically updating the content on the page through JavaScript.
    Utilizes AJAX or Fetch API to communicate with the server and fetch data without reloading the entire page.
    Provides a more fluid and seamless user experience by avoiding full-page reloads.

2. What are Client-Side Bundle ?
Explanation :-
* Client-Side Bundle -
    Client-Side Bundle refers to a collection of JavaScript files and other assets bundled together to be delivered to the client's web browser.
* Key Components :
    JavaScript Files -
        The application's logic and functionality are written in JavaScript files.
        Bundling involves combining these files into a single or multiple bundles.
    Stylesheets, Images, and Other Assets -
        Along with JavaScript, other assets like stylesheets, images, and fonts may be included in the bundle for efficient delivery to the client.
* Advantages :
    Reduces the number of HTTP requests, improving loading times.
    Enables code splitting and lazy loading for optimizing performance.
    Simplifies deployment and maintenance by organizing code into manageable bundles.

3. What is Client-side Routing ?
Explanation :-
* Client-side Routing -
    Client-side routing refers to the process of managing navigation within a Single Page Application (SPA) entirely on the client side, without making additional requests to the server for each new view.
* Key Features :
    Utilizes the browser's History API to manipulate the URL without triggering full page reloads.
    Enables dynamic content updates based on the route, improving user experience.
    Typically implemented using libraries like React Router for React applications or Vue Router for Vue.js applications.
* Advantages :
    Enhances the performance of SPAs by avoiding the need for server round-trips during navigation.
    Allows for a smoother and more responsive user interface as content is updated dynamically.
    Enables bookmarking, sharing, and direct linking to specific views within the SPA.

4. What does React Returns ?
Explanation :-
* In React, a component can only return a single root element, commonly wrapped in a parent container (like a div).

5. Why is it so that in App Component , we need to have a top level component call it a div(<div> </div>) or fragment(<> </>) ?
Explanation :-
* Reconciliation Process :
    React mein reconciliation process ka istemal hota hai virtual DOM ke changes ko real DOM mein update karne ke liye.
    Single-root element hone se, React ko previous aur current states of the virtual DOM ke beech ka comparison karne mein madad milti hai.
* Single-Root Structure :
    Ek single-root structure rakhne se, React ko updates ko real DOM mein efficiently apply karne ka clear entry point milta hai.
    Isse reconciliation process ko simplify kar diya jata hai.
* Maintaining Structure and Readability :
    Single-root element constraint React components mein ek straightforward aur predictable structure maintain karne mein madad karta hai.
    Isse code ko padhne aur samajhne mein asani hoti hai.
* Use of Fragments :
    React fragments (`<></>` ya `<React.Fragment></React.Fragment>`) provide flexibility without violating the single-root rule.
    Fragments ek additional parent node ko introduce kiye bina multiple elements ko group karne ki anumati dete hain.

-----Functional Components-----

1. What is JSX ?
Explanation :-
* JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code directly within your JavaScript files.
* JSX is used in React to describe what the UI should look like.
* Under the hood, JSX is transformed into regular JavaScript objects that React can render.

2. What is Props ?
Explanation :-
* Props (short for Properties) are arguments passed into React components, allowing you to pass data from a parent component to a child component.
* Props are read-only, meaning they cannot be modified by the component receiving them.
* They are similar to function arguments, and you can pass any type of data, including :
    strings
    numbers
    arrays
    objects
    functions
* defaultProps allows you to specify default values for props in case they are not passed by the parent component. This ensures your component has the necessary data to render properly, even if the parent forgets to provide certain props.
    ChildComponent.defaultProps = {
        message: "Default Message",
        number: 0,
    };
* propTypes is used to define the expected data types for each prop. This helps catch errors during development by warning you if the wrong type of data is passed to the component.
    ChildComponent.propTypes = {
        message: PropTypes.string,
        number: PropTypes.number,
    };
* Typically, defaultProps and propTypes are defined at the bottom of the same file where the component is defined.

3. What is State ?
Explanation :-
* State is an object in a React component that holds dynamic values that can change over time.
* Unlike props, state is managed within the component and can be updated using the setState method (or useState in functional components), which triggers a re-render.

4. What is the Difference between Props and State ?
Explanation :-
* Props :
	•	Passed from parent to child component.
	•	Read-only, cannot be modified by the receiving component.
* State :
	•	Managed within the component itself.
	•	Can be updated, which triggers re-rendering.

5. What is Conditional Rendering ?
Explanation :-
* Conditional Rendering in React allows you to render different UI elements based on a condition.
* It’s like using if-else in JavaScript but applied to the rendering of components or elements.
* We can do this using Ternary Operator or Short Circuit Evaluation.
* Using Ternary Operator :
    The Ternary Operator is a concise way to perform conditional rendering. 
    It works like an if-else statement but in a single line.
    Syntax -
        condition ? trueValue : falseValue
        	•	condition - This is the condition that you want to evaluate.
	        •	trueValue - This is the value or component that will be rendered if the condition is true.
	        •	falseValue - This is the value or component that will be rendered if the condition is false.
* Using Short Circuit Evaluation :
    Short Circuit Evaluation is another way to conditionally render elements. 
    It leverages the logical && and || operators to either render or skip rendering.
    Syntax of && -
        condition && trueValue
        If condition is true, trueValue will be rendered. 
        If condition is false, nothing will be rendered.
    Syntax of || -
        condition || falseValue
        If condition is false, falseValue will be rendered. 
        If condition is true, the condition itself is returned (which usually means rendering nothing, but it depends on the exact use case).

6. What is Composition ?
Explanation :-
* Composition is a design pattern in React where you can build complex UIs by combining smaller, reusable components.
* Instead of relying on inheritance, React encourages composition to reuse code and structure components logically.

7. What is the difference between div & Fragment(<>) ?
Explanation :-
* Main difference yeh hai ki fragments ka use karke hum multiple elements ko group kar sakte hain bina kisi additional parent node ko introduce kiye, jabki div ka use karne par ek additional div element create hota hai.

-----Rendering-----

1. What is Re-Rendering in React ?
Explanation :-
* Process of updating and rendering components to reflect changes in the application's state or props.
* When there's a change in the state or props of a component, React re-renders that component and any affected child components.
* It's important to note that a rerender doesn't necessarily mean a complete re-rendering of the entire DOM, instead, React efficiently updates only the necessary parts of the DOM.
* Basically, anytime a final DOM manipulation happens or when react actually updates the DOM it is called a re-render.

2. When Does Re-Rendering Happen ?
Explanation :-
* Re-Rendering happens in Two Cases :
    * State Variable Changes -
        Jab bhi koi state variable component ke andar utilize kiya jata hai aur uski value change hoti hai, tab component rerender hota hai.
        Yeh changes component ke UI ko update karne ke liye hoti hain, jisse naye data ya state ko reflect kiya ja sake.
    * Parent Component Re-render -
        Agar kisi parent component ka rerender hota hai, to saare uske child components bhi rerender hote hain.
        Yeh cascading effect ensure karta hai ki component tree ke saare components ek sath synchronized rahein.

3. Do we need more re-renders or less re-renders for optimal performance ?
Explanation :-
* For optimal performance, we aim to have less re-renders rather than more re-renders.

4. How to Minimize the number of re-renders in an App ?
Explanation :-
* There are broadly Two ways :
    Push the State down -
        State ko neeche ke components tak pass karte hain jahan us state ka istemal kiya jaata hai.
        State ko neeche push karke, agar kisi component ka state change hota hai to sirf us component ko hi rerender karna padega, aur uske upper ke components ko nahi.
    By Using Memoization -
        Memoization ka matlab hai ki kisi function ya computation ke result ko cache mein store karke future mein us result ko phir se use karna.
        Is technique ko use karke hum expensive computations ya functions ke results ko cache kar sakte hain, jisse unhe baar baar recalculate karne ki zarurat na ho aur rerenders ko minimize kiya ja sake.
        Memoization ka istemal karke, hum components ko sirf unke props mein koi change hota hai tab hi rerender karna sikh sakte hain, aur static elements ko rerendering se bacha sakte hain.
        We use useMemo Hook for this purpose.

5. What is Component Lifecycle ?
Explanation :-
* Component Lifecycle refers to the sequence of events (methods) in a React component’s life, from its creation (mounting) to updates (updating) and finally removal (unmounting).
* In class components, these are managed with lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

6. What are Lists ?
Explanation :-
* Lists in React are used to display a collection of items.

7. What are Keys ?
Explanation :-
* Unique Identification - 
    Har ek list item ko ek unique key prop assign karna zaroori hai. 
    Yeh item ko uniquely identify karta hai.
* Keys are unique identifiers assigned to each item in a list, helping React efficiently update and re-render only the necessary elements when the list changes.
* Keys should be unique among siblings.

8. Why are Keys needed ?
Explanation :-
* Efficient Updates -
    Key prop k hone se React ko pata chalta hai ki kaun se items mein changes huye hain, kya add kiya gaya hai, aur kya remove kiya gaya hai.
    Isse React updates ko efficient tareeke se track kar sakta hai aur sirf zaroori changes ko render karta hai.
* Preventing Unnecessary Rerenders -
    Key prop ke use se puri list ke un-necessary re-renders ko roka ja sakta hai.
    Agar key prop unique nahi hai ya fir use hi nahi kiya gaya hai, to React ko changes ko track karne mein dikkat hoti hai aur poora list ko dubara render karna pad sakta hai, jisse performance par asar padta hai.

9. What are Wrapper Component in React ?
Explanation :-
* Wrapper components ka use common styling ya thematic elements ko encapsulate karne ke liye kiya jata hai jo ki application ke alag-alag hisson mein consistent tareeke se apply hona chahiye.
* Wrapper components specific sections ya functionalities ke liye containers ke roop mein kaam karte hain.
* Isse hume ek saaf aur modular structure milta hai jismein har section ko alag-alag components mein encapsulate kiya ja sakta hai.

10. What is the difference between Class vs Functional Based Component ?
Explanation :-
* Class Based Components :
    ES6 Classes - Class-based components ES6 classes hote hain jo React.Component se extend karte hain.
    Access to Lifecycle Methods - Inko React dvara provide kiye gaye lifecycle methods jaise ki componentDidMount, componentDidUpdate, aur componentWillUnmount ka access hota hai.
    State Management - State aur lifecycle methods ko class-based components ke andar manage kiya jata hai.
    Pre-Hooks Era - Ye components React 16.8 mein hooks ke introduction se pehle ka primary type tha.
* Functional Based Components :
    Simplicity and Conciseness - Functional components simpler aur concise hote hain. Ye basically JavaScript functions hote hain jo props ko argument ke roop mein lete hain aur React elements ko return karte hain.
    Hooks Introduction - React 16.8 ke version mein hooks ke introduction ke saath, functional components ko state manage aur lifecycle methods ka use karne ki capability mili. useState aur useEffect jaise hooks ke istemal se state management aur side effects ko handle kiya ja sakta hai.
    Readability and Ease of Writing - Ye components aam taur par padhne aur likhne mein aasan hote hain.
* Notes :
    Functional components ab React mein components likhne ka preferred tareeka ban gaya hai hooks ki wajah se, jo ki unki saralata aur additional capabilities ke karan hota hai.
    useState aur useEffect jaise hooks functional components ko state manage aur side effects perform karne ki shakti dete hain, jisse wo class-based components ki tarah powerful ho jate hain.
    Class-based components ab bhi kuch codebases mein istemal hote hain, khaaskar un projects mein jo functional components par migrate nahi huye hain ya purane React versions ke saath kaam kar rahe hain.

11. What does Render Props means ?
Explanation :-
* Render Props is a pattern in React where a component shares code between different components by passing a function as a prop.
* This function is used to render dynamic content, making the component more flexible.

12. What is Refs ?
Explanation :-
* Refs (short for References) are a way to access DOM elements or React elements directly.
* They allow you to interact with the DOM in a more imperative way, like focusing an input field, triggering animations, or integrating with third-party libraries.
* Refs provide a way to access DOM nodes or React elements directly.
* They are created using React.createRef() and attached to React elements via the ref attribute.
* Refs and useRef serve similar purposes but are used in different contexts :
    Refs (React.createRef()) are commonly used in class components.
    useRef is a hook used in functional components.

13. What are Events ?
Explanation :-
* Events in React are actions that can trigger responses, like clicks, key presses, or form submissions.
* React handles events differently from native DOM elements, using a synthetic event system that ensures consistent behavior across different browsers.

14. What are Higher Order Components ?
Explanation :-
* Higher-Order Components (HOCs) are functions that take a component and return a new component with additional props or behavior.
* HOCs are used to reuse component logic, such as managing state or handling side effects, across multiple components.

-----Hooks-----

1. What are Hooks ?
Explanation :-
* Functions that allow functional components in React to have state and lifecycle features that were previously available only in class components.

2. What is use of Hooks ?
Explanation :-
* These are some of the use-cases of using Hooks :
    Managing State
    Handle Side Effects
    Optimize Performance
    etc...
* Each hook serves a specific purpose, contributing to a more modular and maintainable codebase.

3. What is useState ?
Explanation :-
* useState is a Hook that allows you to add state to functional components.
* It returns an array with two elements :
    Current State Value.
    Function to Update It.
* Syntax :
    const [state, setState] = useState(initialState);
        Meaning of Syntax :
            state - Variable that holds current state value.
            setState - Function to update the current state.
            initialState - Initial Value of the state variable.
* Use-Cases :
    Managing simple component-level state.
    Handling form input fields.
    Toggling UI elements between different states.
    Implementing counters, toggles, and checkboxes.
    Storing and updating dynamic data in the component.

4. What is the need of it ?
Explanation :-
* State Management -
    useState enables functional components to hold and manage state, making them more powerful and capable of handling dynamic data.
    State variables ko add karne ke liye hota hai.
    Functional Components ko stateful logic provide karta hai.

5. What are Side Effects ?
Explanation :-
* React mein "side effects" typically component rendering process ke bahar hote hain.
* Ye operations ya behaviors hote hain jo user interface ko render karne ke alawa aur kisi prakar ka asar dalte hain.
* Ismein data fetching, subscriptions, manual DOM manipulations, timers, aur other aise actions included hote hain jo UI rendering se beyond hote hain.

6. What is Component Mount and Component Un-Mount ?
Explanation :-
* Mount - Mounting ka matlab hai ki ek component pehli baar DOM mein render hota hai.
* Un-Mount - Unmounting ka matlab hai ki ek component DOM se hata diya jata hai yaani ki uska rendering khatam ho jata hai.

7. What is useEffect ?
Explanation :-
* useEffect is a Hook that lets you perform side effects in functional components.
* These side effects can include data fetching, subscriptions, or manually updating the DOM.
* Syntax :
    useEffect(() => {
        // Side effect code
        return () => { ----> Returing Cleanup Function
            // Cleanup code
        };
    }, [dependencies]);
        Meaning of Syntax :
            () => {} - Effect function jo side effects ko define karta hai.
            return () => {} - Cleanup function jo effect ke baad chalega.
            dependencies - Optional array jo specify karta hai ki effect ko kis changes ke liye run karna hai.
            Cleanup Function -
                Special function in React’s useEffect hook that is used to clean up side effects when a component unmounts or before the effect runs again.
                Return a function from the useEffect callback.
                This function will be executed when the component unmounts or before the effect re-runs.
                Its nothing but a normal function , here we have just used Arrow Functions , we can also return a named function like this :
                    return function cleanup() {
                        // Cleanup logic
                    };
* Use-Cases :
    Fetching data from APIs.
    Subscribing to external data sources or events.
    Updating the document title or other parts of the DOM.
    Managing timers and intervals.
    Cleaning up subscriptions, event listeners, or other resources.

8. What is the need of it ?
Explanation :-
* Side Effects Management -
    It allows you to run code at specific points in the component lifecycle (e.g., after rendering), replacing lifecycle methods like componentDidMount and componentDidUpdate.
    Side effects ko manage karne ke liye hota hai, jaise ki data fetching, subscriptions, aur DOM updates.
    Ye component lifecycle methods (componentDidMount, componentDidUpdate, aur componentWillUnmount) ke functionality ko functional components mein provide karta hai.

9. What is useRef ?
Explanation :-
* useRef is a Hook that returns a mutable ref object, which persists across renders.
* It can be used to access DOM elements or store any mutable value.
* useRef does not cause re-renders -
    Updating the .current property of a useRef object does not cause the component to re-render.
    This is useful for persisting data like DOM references or other values that don’t need to trigger a re-render.
* Persistent Values Across Renders -
    You can also use useRef to persist values across renders.
    For example, you might want to keep track of a previous value or store a mutable value that doesn’t affect rendering.
* Syntax :
    const refContainer = useRef(initialValue);
        Meaning of Syntax :
            refContainer - This is the variable that will store the reference object.
            initialValue - This initializes the ref with an initialValue. If you want to reference a DOM element, this is usually set to null. The returned object will have a property called current that you can use to store or access the value. Optional parameter jo useRef ke initial value ke roop mein set kiya jata hai.
* Use-Cases :
    Accessing and interacting with DOM elements imperatively.
    Persisting values across re-renders without causing re-renders.
    Storing mutable values that persist across component re-renders.
    Referencing child components or elements within a component.
    Managing focus, animations, or other imperative operations in functional components.

10. What is the need of it ?
Explanation :-
* Direct DOM Access -
    It allows you to interact with DOM elements or keep a value that doesn’t trigger re-renders when changed.
    Reference ko maintain karne ke liye use hota hai, jo component ke render lifecycle ke bahar rehta hai.
    Ye reference ko persist karta hai, jisse hum component ke alag-alag render cycles ke beech mein bhi usse access kar sakein.

11. What is useCallback ?
Explanation :-
* useCallback is a Hook that memoizes a callback function.
* It returns a memoized version of the callback that only changes if one of the dependencies changes.
* Syntax :
    const memoizedCallback = useCallback(() => {
        // Callback function code
    }, [dependencies]);
        Meaning of Syntax :
            memoizedCallback - Memoized version of the callback function.
            () => {} - Function jo memoized callback function ko define karta hai.
            [dependencies] - Array jo specify karta hai ki callback function ko kis changes par recompute karna hai.
* Use-Cases :
    Memoizing event handlers to prevent re-creation on every render.
    Optimizing performance by caching callback functions used as props.
    Preventing unnecessary re-renders in child components that depend on callback functions.
    Enhancing the performance of components with complex event handling logic.
    Memoizing functions passed down to deeply nested child components.

12. What is the need of it ?
Explanation :-
* When Passing Functions to Child Components -
    Jab tum ek function ko prop ke roop me kisi child component me pass karte ho, tab useCallback ka use hota hai taaki function ka reference har render me na badle.
    Isse unnecessary re-renders avoid hote hai, especially jab child component React.memo se wrapped ho.
* Optimization in Large Components -
    Agar tumhare paas ek bada component hai jo frequently re-renders hota hai, aur tumhe kuch functions hai jo baar baar create ho rahe hai (jo ki costly ho sakta hai), to useCallback ka use karke tum performance optimize kar sakte ho.
* Memoization with Expensive Computations -
    Jab tumhare functions me expensive computations ho rahi ho, aur tum unhe baar-baar run nahi karna chahte, to useCallback ka use kar sakte ho taaki wo function tabhi recreate ho jab zaroori ho.
* Stability of Function References in Dependencies -
    Agar tum kisi custom hook ya effect me function ko dependency ke roop me use kar rahe ho, to useCallback use karna helpful ho sakta hai taaki function ka reference stable rahe, aur wo effect ya custom hook unnecessary trigger na ho.
*  Avoiding Inline Functions -
    Jab tum inline functions use karte ho as event handlers (like onClick={() => {}}), ye baar-baar recreate hote hai on every render. useCallback ka use karke tum ye ensure kar sakte ho ki event handler ka reference stable rahe.
* Performance Optimization -
    It helps prevent unnecessary re-renders by ensuring that functions passed as props only change when necessary, reducing the computational load.
    Memoized callback functions ko create karne ke liye hota hai.
    Ye callback functions ko cache karke performance ko optimize karta hai, kyunki yeh functions har render cycle mein dobara se na banaye jaaye.

13. What is useMemo ?
Explanation :-
* useMemo is a Hook that memoizes the result of a function.
* It returns a memoized value that only recalculates when its dependencies change.
* Syntax :
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
        Meaning of Syntax :
            () => {} - Function jo memoized value ko compute karta hai.
            [a, b] - Array jo specify karta hai ki memoized value ko kis changes par recompute karna hai.
* Use-Cases :
    Computing derived data from props or state.
    Optimizing performance by caching expensive calculations.
    Preventing unnecessary re-renders in child components.
    Memoizing callback functions to prevent re-creation on every render.
    Enhancing the performance of complex computations in the component.

14. What is the need of it ?
Explanation :-
* Performance Optimization -
    It helps avoid expensive calculations on every render by caching results until dependencies change.
    Expensive computations ko memoize (cache) karne ke liye hota hai.
    Ye computations ko cache karke performance ko optimize karta hai, kyunki yeh computations har render cycle mein dobara se nhi chalaye jate hain.

15. What is the difference between memo & useMemo ?
Explanation :-
* What are they :
    memo
        Higher-order component (HOC) provided by React.
        Used to memoize functional components, preventing unnecessary re-renders when the component receives the same props.
    useMemo
        Hook provided by React.
        Used to memoize the result of expensive calculations within functional components.
* What they are used for :
    memo
        Used to optimize functional components by memoizing them based on their props.
        Prevents unnecessary re-renders of the component when its props haven't changed.
    useMemo
        Used to optimize performance by memoizing the result of expensive calculations within functional components.
        The memoized value is only recomputed when one of the dependencies (specified in the dependency array) has changed.
* How they are used :
    memo
        Wrap the functional component with memo to memoize it.
        React will automatically compare the previous and current props to determine whether the component needs to be re-rendered.
        Eg - const MemoizedComponent = memo(MyComponent);
    useMemo
        Use the useMemo hook within a functional component to memoize a value.
        Pass a function that computes the value and an array of dependencies to the useMemo hook.
        React will execute the function and memoize its result. The memoized value will only be recomputed when one of the dependencies changes.
        Eg - const memoizedValue = useMemo(() => computeExpensiveValue(dep1, dep2), [dep1, dep2]);
* Syntax of Using It :
    memo
        const MemoizedComponent = memo(MyComponent);
    useMemo
        const memoizedValue = useMemo(() => computeExpensiveValue(dep1, dep2), [dep1, dep2]);
* UseCases of Each :
    memo
        Memoize functional components to optimize rendering performance, especially for components that frequently re-render with the same props.
        Ideal for optimizing the performance of presentational components that are primarily driven by props.
    useMemo
        Memoize the result of expensive calculations within functional components to optimize performance.
        Useful when you have a computation that depends on some values and you want to avoid re-computing it unnecessarily on every render.
        Commonly used for memoizing derived data, complex transformations, or expensive computations.

16. What is the difference between useEffect , useMemo , useCallback ?
Explanation :-
* useEffect :
    Purpose - Manages side effects in functional components.
    Triggers - Runs after rendering and on subsequent re-renders.
    Use Cases - Fetching data, subscriptions, manually changing the DOM, etc.
    Syntax -
    useEffect(() => {
        // Side effect logic here
        return () => {
            // Cleanup logic (optional)
        };
    }, [dependencies]);
* useMemo :
    Purpose - Memoizes the result of a computation to avoid unnecessary recalculations.
    Triggers - Runs during rendering.
    Use Cases - Memoizing expensive calculations, preventing unnecessary re-renders.
    Syntax -
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
* useCallback :
    Purpose - Memoizes a callback function to prevent unnecessary re-renders of child components.
    Triggers - Runs during rendering.
    Use Cases - Preventing unnecessary re-renders when passing callbacks to child components.
    Syntax -
    const memoizedCallback = useCallback(() => {
        // Callback logic here
    }, [dependencies]);
* Summary -
    useEffect is for handling side effects, useMemo is for memoizing values, and useCallback is for memoizing callback functions.
    Each serves a different purpose in optimizing and managing the behavior of React components.

17. What is Prop Drilling in React ?
Explanation :-
* Prop drilling refers to the process of passing data from a top-level component down to deeper levels through intermediate components.
* It happens when a piece of state needs to be accessible by a component deep in the component tree, and it gets passed down as a prop through all the intermediate components.

18. Why do we need Prop-Drilling ?
Explanation :-
* State Management -
    Prop drilling is often used to manage state in a React application.
    By passing state down through the component tree, you can share data between components without resorting to more advanced state management solutions like context or state management libraries.
* Simplicity -
    Prop drilling keeps the application structure simple and makes it easier to understand the flow of data.
    It's a straightforward way of handling data without introducing more complex tools.

19. How to Pass Props & Access Props ?
Explanation :-
* Passing Props :
    -----ParentComponent.js-----
    import React from 'react';
    import ChildComponent from './ChildComponent';
    const ParentComponent = () => {
        // Define props
        const data = "Hello, child component!";
        return (
            <div>
                Pass props to child component....
                <ChildComponent message={data} />
            </div>
        );
    }
    export default ParentComponent;
* Accessing Props :
-----ChildComponent.js-----
    import React from 'react';
    const ChildComponent = (props) => {
        // Access props
        const receivedMessage = props.message;
        return (
            <div>
                Use props...
                <p>{receivedMessage}</p>
            </div>
        );
    }
    export default ChildComponent;

20. What are some Drawbacks of Prop Drilling ?
Explanation :-
* Readability -
    Prop drilling can make the code less readable, especially when you have many levels of components.
    It might be hard to trace where a particular prop is coming from.
* Maintenance -
    If the structure of the component tree changes, and the prop needs to be passed through additional components, it requires modifications in multiple places.
* Note -
    While prop drilling is a simple and effective way to manage state in some cases, for larger applications or more complex state management, consider using tools like React Context or state management libraries.
    These can help avoid the drawbacks of prop drilling while providing a cleaner solution for state sharing.

21. What is Context API in React ?
Explanation :-
* Context API is a feature in React that provides a way to share values like props between components without explicitly passing them through each level of the component tree.
* It helps solve the prop drilling problem by allowing data to be accessed by components at any level without the need to pass it through intermediate components.

22. What is useContext ?
Explanation :-
* useContext is a Hook that allows you to consume context values in functional components.
* It lets you pass data through the component tree without passing props manually at every level.

23. What is the need of it ?
Explanation :-
* Global State Management -
    It simplifies the process of sharing data across multiple components, avoiding prop drilling.

24. What are Key Components of Context API ?
Explanation :-
* createContext() :
    export const MyContext = createContext();
    	•	createContext(defaultValue) -
                                        Yeh React ka ek function hai jo ek context object create karta hai.
                                        createContext() ek default value bhi le sakta hai.
                                        Agar koi provider na ho, toh ye default value consumers ko milti hai.
	    •	Return -
                    Yeh ek context object return karta hai jo do main cheezon ke saath aata hai :
                        Provider
                        Consumer
	    •	Purpose -
                    Context object ko create karne ka purpose yeh hai ki aap ek global state ya data ko define kar sakein jo aapke component tree ke different levels mein accessible hoga bina props drill kiye.
* Provider Component :
    export const MyProvider = ({ children }) => { some code...}
    	•	MyProvider -
                        Yeh ek functional component hai jo context ki value ko provide karta hai.
                        Isme aap apni global state ko manage karte hain aur child components ko context value provide karte hain.
	    •	Return -
                    Yeh component ek Provider element ko return karta hai jo ki context ke value ko provide karta hai.
	    •	{children} -
                        { children } ek destructuring assignment hai jo props object se children ko extract karta hai.
                        React mein, children refer karta hai un elements ya components ko jo tum MyProvider ke andar wrap karoge.
                        Yeh ek special prop hota hai jo automatically pass hota hai jab tum components ko ek doosre ke andar nest karte ho.
                        Yeh Provider component ko wrap kiye gaye sabhi child components ko represent karta hai.
                        Yeh prop automatically provide hota hai jab Provider ko wrap kiya jata hai.
                        Ex :
                            <MyProvider>
                                <div>Some content</div>
                            </MyProvider>
                            Yahaan <div> jo tumne MyProvider ke andar diya hai, wo children ke roop mein pass hota hai.
                            { children } ka matlab hai us content ko receive karna aur use karna.
	    •	Inside {some code...} -
                                    MyProvider ke andar tum kuch important kaam karte ho jo context ke values ya states ko set up karta hai aur unhe child components tak pass karta hai.
                                    Generally, ye steps hote hain :
                                        1. Define state or value
                                        2. Use Provider to pass the value
                                    Yahan aap apne state ko define karte hain aur functions ko define karte hain jo context value ko manage karte hain.
* Context Provider :
    return (
        <MyContext.Provider value={{ value, updateValue }}>
            {children}
        </MyContext.Provider>
    );
    	•	return -
                    Yeh return statement ek Provider component ko return karta hai jo MyContext context ke liye provider hai.
	    •	{children} -
                        Yeh prop MyProvider component ke andar jitne bhi child components hain, unhe render karne ke liye use hota hai.
                        Yeh context ke value ko in child components tak pass karta hai.
	    •	value -
                    Yeh ek prop hai jo Provider component ko pass kiya jata hai.
                    Isme woh state aur functions hoti hain jo aap context ke through share karna chahte hain.
	    •	Inside value={{ value, updateValue }} -
                                                    Yahan aap context ke value ko define karte hain.
                                                    value aur updateValue wo properties hain jo aap context ke through share karte hain.
* Using useContext :
    const { value, updateValue } = useContext(MyContext);
	    •	useContext(MyContext) -
                                    Yeh ek React Hook hai jo context object ko use karte hue current context value ko return karta hai.
                                    Yeh hook MyContext context se data fetch karta hai jo Provider component ne provide kiya hai.
	    •	{ value, updateValue } -
                                    Yeh object destructuring hai.
                                    useContext(MyContext) se jo value milti hai, usme se value aur updateValue properties ko extract kiya jata hai.
                                    Inhe aap component ke andar directly use kar sakte hain.

25. What are advantages of Context API ?
Explanation :-
* Avoids Prop Drilling -
    Context API eliminates the need for passing props through intermediate components, making the code cleaner and more maintainable.
* Global State -
    It allows you to manage global state that can be accessed by components across the application.
* Note -
    While Context API is a powerful tool, it's essential to use it judiciously and consider factors like the size and complexity of the application.
    For complex state management needs, additional tools like Redux might be more suitable.

26. What are some Problems with Context API ?
Explanation :-
* Context API in React is a powerful tool for solving the prop drilling problem by allowing the passing of data through the component tree without the need for explicit props at every level. However, it does not inherently address the re-rendering issue.
* When using the Context API, updates to the context can trigger re-renders of all components that consume that context, even if the specific data they need hasn't changed. This can potentially lead to unnecessary re-renders and impact the performance of the application.
* To mitigate this, developers can use techniques such as memoization (with useMemo or React.memo) to prevent unnecessary re-renders of components that don't depend on the changes in context. Additionally, libraries like Redux, Recoil, or Zustand provide more fine-grained control over state updates and re-renders compared to the built-in Context API.

27. What are some Other Solutions ?
Explanation :-
* Recoil, Redux, and Context API are all solutions for managing state in React applications, each offering different features and trade-offs.
* Context API :
    Role - Context API is a feature provided by React that allows components to share state without prop drilling. It creates a context and a provider to wrap components that need access to that context.
    Advantages - Simplicity, built-in React feature.
* Recoil :
    Role - Recoil is a state management library developed by Facebook for React applications. It introduces the concept of atoms and selectors to manage state globally. It can be considered a more advanced and feature-rich alternative to Context API.
    Advantages - Advanced features like selectors, better performance optimizations.
* Redux :
    Role - Redux is a powerful state management library often used with React. It introduces a global store and follows a unidirectional data flow. While Redux provides more features than Context API, it comes with additional concepts and boilerplate.
    Advantages - Middleware support, time-travel debugging, broader ecosystem.

28. What to Consider Between above Three ?
Explanation :-
* This will depend on three factors :-
    Complexity -
        Context API is simple and built into React, making it a good choice for simpler state management. Recoil provides more features and optimizations, while Redux is powerful but comes with additional complexity.
    Scalability -
        Recoil and Redux are often preferred for larger applications due to their ability to manage complex state logic.
    Community Support -
        Redux has a large and established community with a wide range of middleware and tools. Recoil is newer but gaining popularity, while Context API is part of the React core.

29. What to Choose ?
Explanation :-
* Use Context API for Simplicity -
    For simpler state management needs, especially in smaller applications or when simplicity is a priority.
* Consider Recoil for Advanced Features -
    When advanced state management features, like selectors and performance optimizations, are needed.
* Opt for Redux for Scalability -
    In larger applications where scalability, middleware, and a broader ecosystem are important factors.

30. What is useReducer ?
Explanation :-
* useReducer is a Hook that manages complex state logic in React functional components.
* It takes a reducer function and an initial state.
* It returns the current state and a dispatch function to trigger state updates based on an action.
* Syntax :
    const [state, dispatch] = useReducer(reducer, initialState);
        Meaning of Syntax :
            state :
                What -
                    Yeh current state hai jo tumhare component mein store hoti hai.
                    Yeh value useReducer hook ke through manage hoti hai.
                What It Returns -
                                state mein wo value hoti hai jo reducer function se latest update ke baad milti hai.
                What Parameter It Takes -
                                        state khud koi argument nahi leta.
                                        Yeh directly reducer ke result ko store karta hai.
                Main Job -
                        Yeh tumhare component ke current state ko hold karta hai, jaise kisi counter ka value ya koi complex state object.
            dispatch :
                What -
                    Yeh ek function hai jo tumhare reducer function ko trigger karta hai.
                    Is function ke through tum action bhejte ho reducer ko, jisse state update hoti hai.
                What It Returns -
                                dispatch kuch return nahi karta, sirf reducer ko ek action pass karta hai.
                What Parameter It Takes -
                                        dispatch ek action leta hai as an argument.
                                        Yeh action ek object hota hai jo batata hai ki kya update karna hai state mein.
                Main Job -
                        Yeh responsible hota hai actions bhejne ka reducer function ko taaki state update ho.
            reducer :
                What -
                    Yeh ek pure function hai jo decide karta hai ki tumhare state ko kaise update kiya jayega.
                    Yeh action ke basis pe state modify karta hai.
                What It Returns -
                                reducer function new updated state return karta hai.
                What Parameters It Takes -
                                        Yeh do arguments leta hai :
                                                                    1.	Current state - Pehle wali state jo abhi use ho rahi hai.
                                                                    2.	Action - Ek object jo batata hai ki state mein kya change hona chahiye.
                Main Job -
                        Yeh function state ko update karta hai based on the action.
            initialState :
                What -
                    Yeh wo starting value hai jo tumhare state ki initial value set karta hai.
                What It Returns -
                                Yeh initial state ko useReducer ka pehla value set karta hai.
                What Parameters it Takes -
                                        initialState khud ek argument hai jo tum useReducer ko provide karte ho to initialize state.
                Main Job -
                        Yeh state ki shuruaat mein default value set karta hai.
Use-Cases :
	Managing complex state logic with multiple sub-values.
	Handling state transitions that depend on the previous state.
	Reducing the need for deeply nested state updates in components.
	When state management requires a more predictable update pattern.
	Managing state in large applications where useState becomes cumbersome.

31. What is the need of it ?
Explanation :-
* Complex State Logic -
    When state transitions involve complex conditions or multiple state variables.
* Predictable State Management -
    When you want a more predictable and controlled way of managing state, similar to how you would in Redux.
* Avoiding Prop Drilling -
    In larger components or when passing down state and dispatch functions across multiple levels of components.
* Complex State Management -
    It’s useful for managing state transitions in a more predictable and scalable way, especially when dealing with complex state logic or multiple actions.

32. What are Custom Hooks ?
Explanation :-
* Custom Hooks are functions that let you extract and reuse logic across multiple components.
* They allow you to encapsulate stateful logic in a reusable manner.
* Syntax :
    function useCustomHook() {
        // Custom logic and state
        return [state, setState];
    }
        Meaning of Syntax :
            useCustomHook: The custom hook function name, typically starting with “use”.
            state, setState: Example return values which could include any state or logic needed.
* Use-Cases :
    Extracting reusable logic from components to avoid code duplication.
	Encapsulating complex stateful logic or side effects that are used across multiple components.
	Simplifying components by offloading repetitive logic to custom hooks.
	Creating modular and maintainable code by isolating state management and side effects.

33. What is the need of it ?
Explanation :-
* Code Reusability - Custom Hooks help in extracting repetitive logic, making your components cleaner and more maintainable.
* Clean & Maintainable Components - Keep your components simpler by moving logic into a Hook.
* Testability & Isolation - You can test the logic inside a Hook independently, making your application more robust.

34. How to create Custom Hooks ?
Explanation :-
* To create a Custom Hook, write a function that uses built-in Hooks (like useState, useEffect, etc.) and prefix the function name with “use”.
* This function can then be used in any component.

35. What are the Core Principles of Custom Hooks ?
Explanation :-
* Naming Convention - Typically start with “use” (e.g. useFetchData, useFormHandler) to follow React’s rules and let other developers know it’s a Hook.
* No Conditional Invocations - Must be called at the top level of your custom Hook’s function (i.e., don’t call Hooks conditionally or inside loops).
* Returning Values - You can return any type of data or functions. Decide what makes the most sense for the feature or piece of logic (e.g., return a state value and a function to update it).

36. What are some Example Use Cases for Custom Hooks ?
Explanation :-
* Data Fetching - Encapsulate fetching logic (loading, error handling, data storage) in a custom Hook.
* Form Handling - Manage form states, validations, and input changes in a reusable Hook.
* Media Queries or Event Listeners - For instance, track window width changes or scroll positions.
* Authentication Logic - Share login/logout or user session logic across multiple components.

37. What is the Step-by-Step Guide to Creating a Custom Hook ?
Explanation :-
* Identify Repetitive Logic - Find a piece of code that’s used by at least two components.
* Extract into a Function - Create a new JavaScript function in a separate file (named something like useXYZ.js) starting with “use”.
* Use Built-in Hooks if Needed - Inside that function, you can use React’s built-in Hooks (useState, useEffect, etc.) to manage stateful logic.
* Return What’s Needed - Export only the relevant data and functions to the components that use it.
* Import & Use - In other components, call this custom Hook just like you’d call any built-in Hook.

38. What are some Hooks Best Practices ?
Explanation :-
* Hooks Best Practices :
    * Only call Hooks at the top level of a component.
	* Only call Hooks from React functions or Custom Hooks.
	* Keep dependencies up to date in useEffect, useMemo, and useCallback.
    * Avoid unnecessary re-renders by using useCallback and useMemo wisely.

*/
