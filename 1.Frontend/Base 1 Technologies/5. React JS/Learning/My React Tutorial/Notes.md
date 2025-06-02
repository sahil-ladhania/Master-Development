# React JS Notes

## Reference Links

1. [Creating a React App From Scratch](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)
2. [Parcel Documentation](https://parceljs.org/getting-started/webapp/)
3. [Parcel Production Documentation](https://parceljs.org/features/production/)
4. [BrowserList Documentation](https://browserslist.dev/)
5. [Babel Documentation](https://babeljs.io/)
6. [Script Attribute Type Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type)
7. [JS Modules Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
8. [Babel Playground](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.25.6&externalPlugins=&assumptions=%7B%7D)
9. [React Without JSX](https://react.dev/reference/react/createElement#creating-an-element-without-jsx)
10. [Virtual DOM and Internals](https://legacy.reactjs.org/docs/faq-internals.html)
11. [Reconciliation](https://legacy.reactjs.org/docs/reconciliation.html)
12. [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)
13. [React Without ES6](https://legacy.reactjs.org/docs/react-without-es6.html)
14. [Index Keys as Anti-Pattern](https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/)
15. [Client Side Routing](https://reactrouter.com/en/main/start/overview)
16. [React Life Cycle Method](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
17. [Lifting State Up](https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example)
18. [Context](https://react.dev/learn/scaling-up-with-reducer-and-context)

## React Inception

### 1. What is React? Why is React known as 'React'?
**Explanation**:
- React is a **"JavaScript Library"**.
- The name ‘React’ was chosen because the library was designed to allow developers to react to changes in state and data within an application and to update the user interface in a declarative and efficient manner.

---

### 2. What is a Library?
**Explanation**:
- Library ek collection hota hai pre-written code ka, jo kisi specific task ko perform karne ke liye use hota hai. 
- Jab aapko kisi functionality ki zarurat hoti hai, aap library ka use karte ho. 
- Aap khud decide karte ho ki kab aur kaise library ko call karna hai.
- **Examples**: React, jQuery.

---

### 3. What is a Framework?
**Explanation**:
- Framework ek structure provide karta hai jisme aapko apna code likhna hota hai. 
- Yeh aapko ek predefined flow aur rules follow karne ko kehta hai. 
- Framework aapko guide karta hai ki aap kaise kaam karenge, aur aapko uske guidelines ke andar rehna padta hai.
- **Examples**: Angular.

---

### 4. Similarities between Library and Framework
**Explanation**:
- Frameworks and libraries are code written by third parties to solve regular/common problems or to optimize performance.
- **Code Reusability**: Dono hi aapko code reuse karne ka option dete hain.
- **Pre-written Functions**: Dono mein aapko pre-written code milta hai jo aapko apni app mein use karna hota hai.
- **Task Simplification**: Dono aapke tasks ko simplify karte hain.

---

### 5. Difference between Library and Framework
**Explanation**:
- A key difference between the two is **"Inversion of Control"**.
    - When using a **library**, the control remains with the developer who tells the application when to call library functions.
    - When using a **framework**, the control is reversed, which means that the framework tells the developer where code needs to be provided and calls it as it requires.
- **Control**: Library mein aap control rakhte ho, jabki framework aapke code ka flow control karta hai.
- **Usage**: Library ko aap zarurat ke hisaab se use karte ho, lekin framework mein aapko structure follow karna padta hai.
- **Flexibility**: Library zyada flexible hoti hai, aap khud decide karte ho ki kab kis function ko call karna hai, par framework mein aapko ek predefined order mein kaam karna padta hai.

---

### 6. What is Emmet?
**Explanation**:
- Emmet is the essential toolkit for web developers. 
- It allows you to type shortcuts that are then expanded into full-fledged boilerplate code for writing HTML and CSS.
- Emmet ek tool hai jo HTML aur CSS code likhne ko fast aur efficient banata hai. 
- Yeh aapko shorthand syntax use karne ka option deta hai, jisse aap bohot kam time mein bohot zyada code likh sakte ho.

---

### 7. Create Hello World Program using only HTML  
**Explanation**:  
- Refer to Prerequisite Folder in Namaste React Code.

---

### 8. Create Hello World Program using only JavaScript  
**Explanation**:  
- Refer to Prerequisite Folder in Namaste React Code.

---

### 9. Create Hello World Program using only React  
**Explanation**:  
- Refer to Prerequisite Folder in Namaste React Code.

---

### 10. What is Cross-Origin?
**Explanation**:
- The `crossorigin` attribute in the `<script>` tag enables Cross-Origin Resource Sharing (CORS) for loading external JavaScript files from a different origin than the hosting web page.
- This allows the script to access resources from the server hosting the script, such as making HTTP requests or accessing data.
- **Cross-Origin** ka matlab hai jab ek website ya application apne resources (like images, scripts, etc.) ko doosri website ya domain se access karne ki koshish karti hai. 
- Yeh process **Cross-Origin Resource Sharing (CORS)** ke through control hota hai.

**Key Points**:
- **Same-Origin Policy**: By default, web browsers ek same-origin policy follow karte hain, jisme ek website apne origin (domain, protocol, aur port) ke bahar resources access nahi kar sakti.
- **CORS**: CORS ek security feature hai jo yeh allow karta hai ki ek domain doosre domain se resources securely share karein, jab server `Access-Control-Allow-Origin` header send karta hai.

**Example**:  
- Agar ek website `www.example1.com` apne backend API `www.example2.com` se data fetch karna chahti hai, toh agar `example2.com` CORS enable nahi karta, toh browser request block kar dega.

---

### 11. What if you have already written HTML inside the "root" div?
**Explanation**:
- React will overwrite everything inside `"root"` and replace it with whatever is given inside `render`.
- Agar aapne pehle se hi HTML likh liya hai `"root"` div ke andar, toh agar aap React app ko is div mein mount karte ho, toh React automatically us existing HTML ko replace kar dega.

**Key Points**:
- React ka kaam hota hai ki wo apne **virtual DOM** se **real DOM** ko update kare. Jab aap `ReactDOM.render()` ya `ReactDOM.createRoot()` call karte ho, toh wo root div ke andar jo bhi HTML hota hai, usko replace kar deta hai apne React component ke saath.
- Agar aapne static HTML likha hai, toh wo React component ke render hone par overwrite ho jayega, aur React usko apne state aur component ke structure ke according update karega.

**Example**:
```html
<!-- Existing HTML -->
<div id="root">
    <h1>Static HTML</h1>
</div>
```
```jsx
// React code
ReactDOM.render(<App />, document.getElementById('root'));
```
- Toh, React root div ke andar existing `<h1>` ko replace kar dega aur `<App />` ko render karega.

## Doubt 1 : External Script Links

### 1. What are these Links ?
**Explanation**:
* These are script tags that load external JavaScript files, specifically the React and ReactDOM libraries.
* Yeh script tags hote hain jo external JavaScript files ko load karte hain, specifically React aur ReactDOM libraries ko.

---

### 2. Why are we using these Links ? 
**Explanation**:
* These links are used to include React and ReactDOM in your HTML page so you can use them to build and render React components.
* Yeh links React aur ReactDOM ko aapke HTML page mein include karne ke liye use kiye jaate hain, taki aap unhe React components banane aur render karne ke liye use kar sakein.

---

### 3. Why is the First Link used For ? 
**Explanation**:
* The first link (react.development.js) is for loading the core React library, which provides the functionality to create components, manage state, and handle events.
* Pehla link (react.development.js) React ki core library ko load karne ke liye hota hai, jo components banane, state manage karne, aur events handle karne ki functionality provide karta hai.

---

### 4. Why is the Second Link used For ? 
**Explanation**:
* The second link (react-dom.development.js) is for loading ReactDOM, which provides methods to interact with the DOM, like rendering React components to the web page.
* Dusra link (react-dom.development.js) ReactDOM ko load karta hai, jo DOM ke saath interact karne ke liye methods provide karta hai, jaise ki React components ko web page par render karna.

---

### 5. What does this crossorigin used For ? 
**Explanation**:
* The crossorigin attribute is used to handle cross-origin requests.
* It allows the script to be fetched with CORS (Cross-Origin Resource Sharing) to support scenarios like accessing scripts from a different domain.
* crossorigin attribute cross-origin requests handle karne ke liye use hota hai. Yeh script ko CORS (Cross-Origin Resource Sharing) ke saath fetch karne ki permission deta hai, jisse aap different domain se scripts access kar sakte ho.

---

## Doubt 2 : React.createElement() Method

### 1. What is ```React.createElement()``` Method ?
**Explanation**:
* It’s a method provided by React to create a React element, which is an "object" representing a DOM node or a component.
* React.createElement() ek method hai jo ek React element create karta hai. 
* Yeh method ek object return karta hai, jo DOM node ya ek React component ko represent karta hai. 
* React elements actual DOM elements ko render karte hain.

---

### 2. Where are we getting ```createElement()``` Method From ?
**Explanation**:
* The createElement() method is provided by the React library.
* createElement() method React library se aata hai.
* Yeh built-in method hai jo React elements ko create karne ke liye use hota hai.

---

### 3. What does ```createElement()``` take ?
**Explanation**:
* Yeh method 3 arguments leta hai :
	* **Type** - Element ka type jaise ‘div’, ‘h1’, etc.
	* **Props** - Attributes ya properties ka object, jaise `{ id: 'child' }`.
	* **Children** - Content ya nested React elements (ya string). Agar multiple siblings hain toh yeh ek array ho sakta hai.

---

### 4. What does ```createElement()``` create ?
**Explanation**:
* It creates a React element "object", which describes what should be rendered to the DOM.
* `createElement()` method ek React element “object” create karta hai, jo yeh batata hai ki DOM mein kya render hoga. 
* Yeh ek virtual representation hota hai, jise React use karta hai to update the actual DOM.

---

## Doubt 3 : ReactDOM.createRoot() Method

### 1. What is ```ReactDOM.createRoot()``` Method ?
**Explanation**:
* It’s a method provided by ReactDOM to create a root container where your React application will be rendered.
* `ReactDOM.createRoot()` ek method hai jo ek root container create karta hai jahan React application render hoga. 
* Iska use React 18 se introduce kiya gaya tha, jisme root element ko manage karne ka naya way diya gaya hai.

---

### 2. Where are we getting ```createRoot()```   Method From ?
**Explanation**:
* The `createRoot()` method is provided by the ReactDOM library.
* `createRoot()` method ReactDOM library se milta hai. 
* ReactDOM library ko include karke aap is method ka use karte hain.

---

### 3. What does ```createRoot()``` take ?
**Explanation**:
* It takes a DOM element as an argument, typically the element where you want to render your React components (e.g., `document.getElementById('root')`).
* Yeh method ek DOM element leta hai, jo wo element hota hai jahan aap apne React components ko render karna chahte ho. 
* Typically, yeh document.getElementById('root') hota hai.

---

## Doubt 4 : .render() Method

### 1. What is this ```.render()``` Method ?
**Explanation**:
* The `.render()` method is used to render the React element (or components) to the DOM.
* `.render()` method ka use React element ya component ko DOM mein render karne ke liye hota hai. 
* Yeh method React elements ko virtual DOM se actual DOM mein convert karne ka kaam karta hai.

---

### 2. Where are we getting ```.render()``` Method From ?
**Explanation**:
* The `.render()` method is provided by the "root object" returned by `ReactDOM.createRoot()`.
* `.render()` method `ReactDOM.createRoot()` se milta hai. 
* Jab aap `createRoot()` call karte ho, toh yeh ek root container return karta hai, jisme `.render()` method available hota hai.

---

### 3. What does ```.render()``` take ?
**Explanation**:
* It takes a React element (e.g., parent in your code) as an argument and renders it into the specified root DOM node.
* `.render()` method ek React element ko argument ke roop mein leta hai. 
* Iske through React component ko DOM mein render kiya jata hai.
* Ex - 
    `root.render(<App />);`

---

## Igniting Our App

### 1. What should we do to make our app production ready ?
**Explanation**:
* `Minify —> Optimization —> Clean console —> Bundle`
* Minify our file (Remove console logs, bundle things up).
* Need a server to run things.

---

### 2. What are Bundlers ?
**Explanation**:
* A bundler is a tool that bundles our app, packages our app so that it can be shipped to production.
* **Examples of Bundlers** :
    * Webpack
    * Vite
    * Parcel
* In create-react-app, the bundler used is "webpack".

---

### 3. What is Package Manager ?
**Explanation**:
* Bundlers are packages. 
* If we want to use a package in our code, we have to use a package manager.
* We use a package manager known as npm or yarn.

---

### 4. How to Configure the Project ?
**Explanation**:
* `npm init`
    * It creates a package.json file.
    * Now to install parcel we will do :
* `npm install -D parcel`
    * Now we will get a package-lock.json file.

---

### 5. What is ```package.json``` File ?
**Explanation**:
* Package.json file is a configuration for NPM.
* Whatever packages our project needs, we install those packages using npm install <packageName>.
* Once package installation is complete, their versions and configuration related information is stored as dependencies inside package.json file.

---

### 6. What is ```package-lock.json``` File ?
**Explanation**:
* Package-lock.json locks the exact version of packages being used in the project.
---

### 7. What is difference between ```package.json``` and ```package-lock.json``` ?
**Explanation**:
* In package. json we have information about generic version of installed packages whereas in package.lock.json we have information about the specific or exact version of installed packages.
---

### 8. What are node_modules ?
**Explanation**:
* Which gets installed is like a database for the npm.
* Every dependency in node_module will have its package.json.
* Node modules are very heavy so we should always put this in gitignore.
* Never touch node_modules and package-lock.json.

---

### 9. How to to ignite our app ?
**Explanation**:
* `npx parcel index.html`
    * npx means ‘execute using npm’
    * index.html is the entry point

---

### 10. What is Hot Module Replacement (HMR) ?
**Explanation**:
* It means that parcel will keep a track of all the files which you are updating.
* There is File Watcher Algorithm (written in C++).
* It keeps track of all the files which are changing realtime and it tells the server to reload.
* These are all done by PARCEL.

---

### 11. What is parcel-cache ?
**Explanation**:
* Parcel caches code all the time.
* When we run the application, a build is created which takes some time in ms.
* If we make any code changes and save the application, another build will be triggered which might take even less time than the previous build.
* This reduction of time is due to parcel cache.
* Parcel immediately loads the code from the cache every time there is a subsequent build.
* On the very first build parcel creates a folder .parcel- cache where it stores the caches in binary codeformat.
* Parcel gives faster build, faster developer experience because of caching.

---

### 12. What is dist Folder ?
**Explanation**:
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

---

### 13. What are the features that Parcel Provides ?
**Explanation**:
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

---

### 14. What are Transitive Dependencies ?
**Explanation**:
* We have our package manager which takes care of our transitive dependencies of our code.
* If we’ve to build a production ready app which uses all optimisations (like minify, bundling, compression, etc), we need to do all these.
* But we can’t do this alone, we need some dependencies on it.
* Those dependencies are also dependent on other dependencies.

---

### 15. What is Browserslist ?
**Explanation**:
* Browserslist is a tool that specifies which browsers should be supported/compatible in your frontend app.
* It makes our code compatible for a lot of browsers.

---

### 16. What is Tree Shaking ?
**Explanation**:
* Tree shaking is a process of removing the unwanted code that we do not use while developing the application.
* In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.

---

## Doubt 5

### 1. What is Transitive Dependencies ?
**Explanation**:
* Transitive dependencies are dependencies that your direct dependencies rely on.
* For example, if package A depends on package B, and package B depends on package C, then package C is a transitive dependency for package A.

---

### 2. What is ```^``` and ```~``` in ```"parcel": "^2.12.0"```?
**Explanation**:
* `^ (Caret)` - 
    * Allows updates that do not change the leftmost non-zero digit. 
    * For example, ^2.12.0 allows updates to any version 2.x.x but not 3.x.x.
* `~ (Tilde)` - 
    * Allows updates to the most recent patch version within the minor version. 
    * For example, ~2.12.0 allows updates to any 2.12.x but not 2.13.0.

---

### 3. When we only need Parcel, why are so many things in node_modules?
**Explanation**:
* Parcel itself has dependencies, and those dependencies have their own dependencies.
* This results in a large number of packages being installed in node_modules, even if you only directly need Parcel.

---

### 4. How many package-lock.json files are there in a React app?
**Explanation**:
* Typically, there is only one package-lock.json file at the root of your project.
* It ensures the exact same versions of dependencies are installed across different environments.

---

### 5. How many package.json files are there in a React app?
**Explanation**:
* Usually, there is one package.json file in the root of your project.
* However, additional package.json files might exist inside certain directories if they are treated as separate npm packages (like in monorepos or some advanced setups).

---

### 6. Why did we get Uncaught ReferenceError: React is not defined when using npx parcel index.html?
**Explanation**:
* This error occurs because Parcel by default assumes you are using ES modules, and React needs to be explicitly imported.
* Without importing, React isn’t available globally.

---

### 7. Why did we get “Browser scripts cannot have imports or exports” after importing React and ReactDOM?
**Explanation**:
* Browser scripts, unless specified as modules, cannot have ES module imports/exports.
* If you’re importing React and ReactDOM, you need to specify type="module" in the `<script>` tag.

---

### 8. Why am I getting an error on this line ```<script src="./App.js"></script>?```
**Explanation**:
* If your `App.js` contains ES module imports/exports, using a normal script tag will cause an error.
* You need to use `<script type="module" src="./App.js"></script>` instead.

---

### 9. Why did my app start running after I used ```<script type="module" src="./App.js"></script>?```
**Explanation**:
* Specifying type="module" tells the browser that the script is an ES module, allowing you to use import and export statements in App.js.
* This resolves the error and lets your app run.

---

### 10. Why and how does the page update without manual refresh after saving files? Is Parcel responsible?
**Explanation**:
* Yes, Parcel is responsible for this.
* It’s called Hot Module Replacement (HMR).
* Parcel watches your files for changes and automatically updates the browser with the latest changes without needing a full page reload.

---

### 11. Why are we putting these in ```.gitignore```?
/node_modules
/dist
.parcel-cache
**Explanation**:
* `/node_modules` -
    * This directory contains all the installed dependencies, which are often too large and can be reinstalled using package.json.
* `/dist` -
    * This is the output directory for the built files, which can be regenerated.
* `.parcel-cache` -
    * This is a cache directory used by Parcel to speed up builds, which doesn’t need to be stored in version control.

---

### 12. What is BrowsersList?
**Explanation**:
* BrowsersList is a tool that allows you to specify the target browsers for your project.
* It’s used by tools like Babel, Autoprefixer, and Parcel to ensure your code is compatible with the specified browsers.
* It helps define what browser versions your code should support.

---

## Laying The Foundation

### 1. What is another way of starting the build of the project ?
**Explanation**:
* We will be creating scripts instead of using “npx parcel index.html”.
* We can create different scripts for starting our project in Development and Production.
* In package.json , in the script section write the following command.
*  To run these scripts, enter the following commands in the terminal :
    * **To Start** - `npm run start` or `npm start`
    * **For Production Build** - `npm run build`
* If you’re not sure how to start the project in a new company then find these scripts in and use them.

---

### 2. What is JSX ?
**Explanation**:
* Before we begin, we have to remove the existing React Code from App.js where we used `React.createElement()` for displaying content on the webpage but its syntax is very bad.
* It’s not developer- friendly, and very hard to read.
* To solve this problem Facebook developers built JSX.
* JSX makes developer life easy as we no longer have to write our code using `React.createElement()`.
* We write code for both Machines and Humans but first for Human understanding as it is read by a lot of developers.
* JSX is HTML-like or XML-like syntax.
* JSX stands for JavaScript XML.
* It's a syntax extension for JavaScript.
* It is not a part of React.
* React apps can be built even without JSX but the code will become very hard to read.
* It is not HTML inside JavaScript.
* JavaScript engine cannot understand JSX as it only understands ECMAScript.
* When we log heading and jsxHeading, it gives the same object.

---

### 3. What is Babel ?
**Explanation**:
* Babel is a popular JavaScript compiler that allows developers to write modern JavaScript code that can be transformed into a version compatible with older browsers or environments.
* Transpile modern JavaScript (ES6+) into backward-compatible versions for older environments.
* Babel is a package that is a compiler/transpiler of JavaScript that is already present inside ‘node-modules’.
* It takes JSX and converts it into the code that browsers understand, as soon as we write it and save the file.
* It is not created by Facebook.
* Learn more about Babel on babeljs.io.

---

### 4. Is JSX a valid JavaScript ?
**Explanation**:
* The answer is Yes and No.
* JSX is not a valid Javascript syntax as it’s not pure HTML or pure JavaScript for a browser to understand.
* JS does not have built-in JSX.
* The JS engine does not understand JSX because the JS engine understands ECMAScript or ES6+ code.

---

### 5. If the browser can’t understand JSX how is it still working ?
**Explanation**:
* This is because of Parcel because “Parcel is a Beast”.
* Before the code gets to JS Engine it is sent to Parcel and Transpiled there.
* Then after transpilation, the browser gets the code that it can understand.
* Transpilation is converting the code in such a format that the browsers can understand.
* Parcel is like a manager who gives the responsibility of transpilation to a package called Babel.
* JSX (transpiled by Babel) `React.createElement => ReactElement => JS Object => HTML Element(render)`

---

### 6. What is the difference between HTML and JSX ?
**Explanation**:
* JSX is not HTML.
* It’s HTML-like syntax.
* HTML uses `class` property whereas JSX uses `className` property.
* HTML can use hypens in property names whereas JSX uses camelCase syntax.

---

### 7. What is Single Line and Multi Line JSX Code ?
**Explanation**:
* **Single line code** -
    ```javascript
    const jsxHeading = <h1>Namaste React</h1>
    ```
* **Multi line code** -
    * If writing JSX in multiple lines then using ‘()’ parenthesis is mandatory.
    * To tell Babel from where JSX is starting and ending.
    ```javascript
    const jsxHeading = (
        <div>
            <h1>Namaste React</h1>
        </div>
    )
    ```

---

### 8. What are Components ?
**Explanation**:
* Components in React are the building blocks of a React application.
* They are reusable, self-contained pieces of code that represent parts of the user interface.

---

### 9. How many types of Components are there ?
**Explanation**:
* **Two Types** :
    * **Class Based Components (OLD Way)** - Old way of writing code, used rarely in industry.
    * **Functional Components (NEW Way)** - New way of writing code, most commonly used.

---

### 10. What is a React Functional Components ?
**Explanation**:
* It is just a JavaScript Function that returns some JSX or a react element.
* Always name React Functional Component with Capital Letters otherwise you will confuse it with normal function.
* To render a functional component we call them ‘<Heading1 />’.
* This is the syntax that Babel understands.
* You can also call them using these ways :
    `<Title></Title>`
    or
    `{Title()}`

---

### 11. What is Components Composition ?
**Explanation**:
* A component inside a component.
* Calling a component inside another component is Component Composition.

---

### 12. How to use JavaScript code inside JSX ?
**Explanation**:
* Inside a React Component when ‘{}’ parenthesis is present we can write any JavaScript expression inside it.
---

### 13. How to call React Element in JSX ?
**Explanation**:
* We can use ‘{}’ parenthesis.
---

### 14. What will happen if we call 2 elements inside each other ?
**Explanation**:
* If we put 2 components inside each other, then it will go into an infinite loop and the stack will overflow.
* It will freeze your browser, so it’s not recommended to do so.

---

### 15. What are the advantages of using JSX ?
**Explanation**:
* **Sanitizes the data** :
    * If someone gets access to your JS code and sends some malicious data which will then get displayed on the screen that attack is called cross-site scripting.
    * It can read cookies, local storage, session storage, get cookies, get info about your device, and read data. JSX takes care of your data.
    * If some API passes some malicious data JSX will escape it. It prevents cross-site scripting and sanitizes the data before rendering.
* **Makes code readable** :
    * JSX makes it easier to write code as we are no longer creating elements using React.createElement().
* Makes code simple and elegant
* Show more useful errors and warnings
* JSX prevents code injections (attacks)

---

## Talk is Cheap, Show me Some Code

### 1. How Can I Do Inline Styling in React ?
**Explanation**:
* In React, inline styles are specified as an object, where the keys are camelCase versions of the CSS property names, and the values are the style values.
* **Example** :
    ```javascript
    const divStyle = {
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '10px'
    };
    function MyComponent() {
        return <div style={divStyle}>This is styled with inline styles!</div>;
    }
    ```
* Alternatively, you can directly apply styles within the style attribute :
    ```javascript
    function MyComponent() {
        return <div style={{ color: 'blue', backgroundColor: 'lightgray' }}>This is styled inline!</div>;
    }
    ```

---

### 2. What Does Destructuring of Props Mean ?
**Explanation**:
* Destructuring props is a way to extract values from the props object directly within the function signature or inside the function body.
* This makes it easier to access the specific props you need.
* **Without Destructuring** :
    ```javascript
    function MyComponent(props) {
        return <h1>Hello, {props.name}!</h1>;
    }
    ```
* **With Destructuring** :
    ```javascript
    function MyComponent({ name }) {
        return <h1>Hello, {name}!</h1>;
    }
    ```
* This simplifies the code and makes it more readable, especially when dealing with multiple props.

---

### 3. What is Config Driven UI ?
**Explanation**:
* It is a user Interface that is built and configured using a declaration configuration file or data structure, rather than being hardcoded.
* Config is the data coming from the api which keeps on changing according to different factors like user, location, etc.
* The configuration defines what components should be rendered, their properties, layout, and sometimes even the business logic.
* The UI adapts dynamically based on the configuration provided.
* **Example** -
    * A form generator where the fields, types, labels, and validation rules are all defined in a JSON configuration, and the form is rendered based on this config.

---

### 4. Why is Config Driven UI Used ?
**Explanation**:
* **Config Driven UI is used for** :
    * **Flexibility** - Easily change the UI by updating the configuration without altering the code.
	* **Reusability** - The same UI code can be reused across different parts of an application with different configurations.
	* **Scalability** - Makes it easier to manage complex UIs that need to adapt based on different contexts, user roles, or data.

---

### 5. What is Optional Chaining ?
**Explanation**:
* Optional chaining `?.` is a JavaScript feature that allows you to safely access deeply nested properties without having to check each level.
* If a property does not exist, it returns undefined instead of throwing an error.
* **Example** :
    ```javascript
    const user = {
        name: 'Alice',
        address: {
            street: '123 Main St'
        }
    };
    const street = user.address?.street; // '123 Main St'
    const city = user.address?.city; // undefined, but no error
    ```
---

### 6. Why Do We Need Keys When Using map ?
**Explanation**:
* Each item in the list must be uniquely identified.
* When we have components at same level and if a new component comes on the first without ID, DOM is going to re-render all the components again.
* As DOM can’t identify where to place it.
* But if we give each of them a unique ID then react knows where to put that component according to the ID.
* It is a good optimization and performance thing.
* Keys help React identify which items have changed, been added, or removed.
* They are essential for maintaining the identity of elements in a list and ensuring efficient updates.
* Without keys, React would re-render all elements unnecessarily.
* **Example** :
    ```javascript
    const items = ['apple', 'banana', 'cherry'];
    const listItems = items.map((item, index) => (
        <li key={item}>{item}</li>
    ));
    ```
* The key prop ensures that React can track each list item separately.
* *Note* -
    * Never use index as keys in map.
    * It is not recommended.

---

### 7. Why Can’t We Use Index as a Key ?
**Explanation**:
* Using the index as a key can lead to issues with rendering and performance when items in the list change order, are added, or removed.
* React might not correctly identify which item has changed, leading to incorrect re-renders or state bugs.
* **Example of issues** -
    * When items are reordered, React might confuse items with the same index, causing bugs or unexpected UI behavior.
* It’s better to use a stable and unique identifier, such as an ID from your data.

---

## Lets Get Hooked

### 1. Why Do We Use React ? Why Not Just HTML, CSS, and JavaScript ?
**Explanation**:
* Of course! It's absolutely possible to accomplish everything using regular HTML, CSS and JAVASCRIPT without using REACT. 
* However, we chose React because it enhances our developer experience, making it more seamless and efficient because of the below reasons :-
    * **Component-Based Architecture** -
        * React allows you to build reusable components, making it easier to manage and organize complex UIs.
    * **State Management** -
        * React efficiently handles the state of your application, automatically updating the UI when the state changes.
    * **Virtual DOM** -
        * React uses a virtual DOM to optimize rendering, making updates faster compared to direct DOM manipulation.
    * **Declarative UI** -
        * With React, you describe how the UI should look, and React takes care of the underlying logic to update the UI when necessary.
    * **Ecosystem and Tools** -
        * React comes with a rich ecosystem of tools, libraries, and community support that enhances productivity.
    * **Scalability** -
        * React makes it easier to scale large applications with complex UIs and dynamic interactions.

---

### 2. What Exactly is Export and Import in React and What Are Its Types ?
**Explanation**:
* **Export** - Exporting makes a module (variable, function, class, etc.) available to be imported in other files.
* **Two types of Exports** -
    * **Default** -
        * Export a single default export from a module.
        * **Example** :
            ```javascript
            const myComponent = () => {};
            export default myComponent;
            ```
    * **Named** -
        * Export multiple named variables or functions.
        * **Example** :
            ```javascript
            export const myVar = 42;
            export function myFunction() {}
            ```
* **Import** - Importing brings in modules from other files.
* **Three types of Imports** -
    * **Default** -
        * Import the default export.
        * **Example** :
            ```javascript
            import myComponent from './myModule';
            ```
    * **Named** -
        * Import specific named exports.
        * **Example** :
            ```javascript
            import { myVar, myFunction } from './myModule';
            ```
    * **Combined** -
        * Import both default and named exports.
        * **Example** :
            ```javascript
            import myComponent, { myVar } from './myModule';
            ```

---

### 3. How Do We Create Super-Powerful Variables ?
**Explanation**:
* React mein, jab hum UI ke saath data ko sync rakhte hain, toh hum state variables ka use karte hain. 
* Ye variables React ke useState hook se bante hain. 
* Inka kaam sirf data store karna nahi hota, balki jab bhi ye update hote hain, React automatically pura component re-render kar deta hai.
* Hum useState hook ke zariye ek state variable aur usko update karne ke liye ek function create karte hain.
    ```javascript
        const [stateVariable, updateFunction] = useState(initialValue);
    ```
* Jab bhi state change hoti hai (updateFunction call hota hai), React apna Reconciliation Algorithm (React Fiber) ka use karke puri UI ko re-render karta hai. 
* Bas wahi cheez re-render hoti hai jo change hui ho.
* Jab bhi state update hoti hai, React ka diffing algorithm ensure karta hai ki UI layer hamesha latest data layer ko represent kare.
* Jab state update hoti hai, React ka reconciliation algorithm purane aur naye Virtual DOM ko compare karta hai.
* Sirf badli hui cheezein actual DOM mein update hoti hain (ye fast aur efficient hota hai).
* Yehi mechanism React ko “blazing fast” banata hai.

---

### 4. What is a Hook ?
**Explanation**:
* Hooks are special functions in React that allow you to use state and other React features in functional components.
* **The most common hooks are** :
    * `useState` - Manages state in a functional component.
	* `useEffect` - Runs side effects in functional components.
	* `useContext`, `useReducer`, `useCallback`, `useMemo`, etc., are other examples.
* Hooks simplify state management and side effects in functional components, replacing the need for class components.

---

### 5. What to Use : .js or .jsx ? Is There a Difference ?
**Explanation**:
* `.js` - Can be used for any JavaScript code, including React components.
* `.jsx` - Specifically indicates that the file contains JSX (JavaScript XML), which is the syntax extension for writing HTML-like code in JavaScript.
* **Difference** -
    * The `.jsx` extension is purely for convention and readability.
    * Modern build tools like Babel can handle JSX in .js files as well.
* **Recommendation** -
    * Use `.jsx` for files that primarily contain React components with JSX for clarity.

---

### 6. Is It Necessary to Use the Extension When We Import?
**Explanation**:
* **Default Behavior** - When importing, if you omit the file extension, the default behavior depends on your build setup.
* **JavaScript/React** -
    If you don’t specify an extension, tools like Webpack and Parcel will try to resolve .js, .jsx, .ts, or .tsx automatically.
* **Recommendation** -
    For clarity and to avoid issues, it’s often best to include the extension unless you’re certain of your build setup.

---

### 7. Can We Export a Component as Named and Default?
**Explanation**:
* Yes, You Can.
* You can export a component as both a named and a default export in the same file.
* **Example** :
    ```javascript
    export const MyComponent = () => {};
    export default MyComponent;
    ```

---

### 8. What Exactly is the UI Layer in React?
**Explanation**:
* The UI Layer in React refers to the components that define the structure, layout, and appearance of the user interface.
* It’s where you define how the app looks and how it interacts with the user.
* React’s component-based architecture allows you to build the UI layer in a modular and reusable way.

---

### 9. What Exactly is the Data Layer in React?
**Explanation**:
* The Data Layer refers to the part of your application that manages and handles data, including state management, data fetching, and data flow.
* React mein, Data Layer ek wo part hota hai jo application ke data ko manage aur handle karta hai. 
* Iska kaam data ko store karna aur ensure karna hota hai ki UI hamesha latest aur accurate information dikhaye.
* It’s the logic and data management that drives what the UI displays.
* In React, this is often managed using state (via hooks like useState and useReducer), context (via useContext), or external state management libraries (like Redux).

---

### 10. Why Use useState When You Can Simply Define a Variable?
**Explanation**:
* React mein simple variable aur useState ka kaam alag hai. 
* useState ek superpowerful tool hai jo tumhare UI aur data ko sync rakhne mein madad karta hai.
* **Reactivity (Reactive State Variables)** :
	* **Regular Variable** -
        * Agar tum ek normal variable define karte ho aur uski value badalte ho, toh React ko pata hi nahi chalega ki kuch change hua hai. 
        * Isliye UI update nahi hoga.
	* **useState** -
        * Jab tum useState ka use karte ho aur state update karte ho (setState), toh React ko pata chal jata hai ki component ko re-render karna hai. 
        * Is reactivity ki wajah se tumhara UI aur data hamesha sync mein rehta hai.
* **UI aur Data Layer Connection** :
	* **React ka ek basic principle hai** - UI reflects the state.
        * Agar state change hoti hai, React automatically UI ko update karta hai.
	* **Example** -
        * Agar tumhara count variable update hota hai, toh React ka re-render mechanism ensure karega ki screen par updated value dikhaye. 
        * Ye connection useState ke bina nahi ho sakta.
* **Preservation Across Re-renders** :
	* **Regular Variables** -
        * Normal variables har render ke baad reset ho jaate hain, kyunki React ka rendering mechanism ek nayi copy banata hai.
    * **State Variables** -
        * useState ke state variables persist karte hain, yaani wo render cycle ke baad bhi apni value ko yaad rakhte hain.
* **Superpowers of useState** :
    * **Trigger Re-renders** - 
        * Jab tum setState function call karte ho, React automatically -
	        * Data ko update karta hai.
	        * UI ko naye data ke saath re-render karta hai.
    * **Side Effects Integration (useEffect)** - 
        * useState ke saath tum side effects handle kar sakte ho.

---

### 11. What Does This Mean: “Whenever a State Variable Updates, React Will Re-Render My Component”?
**Explanation**:
* When a state variable is updated, React re-renders the component to reflect the updated state in the UI.
* This ensures that the UI always displays the most current data.
* **Behind the Scenes** -
    * React uses the Virtual DOM to efficiently update only the parts of the DOM that need to change, making this process fast and smooth.

---

### 12. Why is React Often Praised for Its Speed? What’s the Reason or Funda Behind It?
**Explanation**:
* **At the core lies React-Fiber** -
    * A powerhouse reimplementation of React's algorithm.
    * The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures.
    * Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.
    * These days, we can use JavaScript and React alongside popular libraries like GSAP (GreenSock Animation Platform) and Three.js.
    * These tools allow us to create animations and 3D designs using the capabilities of JavaScript and React.
* **Virtual DOM** -
    * React maintains a lightweight representation of the DOM in memory, called the Virtual DOM.
    * When state changes, React computes the minimum set of changes needed and updates the real DOM in one efficient operation.
* **Reconciliation** -
    * React’s diffing algorithm (reconciliation) optimizes rendering by comparing the new virtual DOM with the previous one and updating only the parts that have changed.
* **Component-Based** -
    * React’s component-based architecture promotes the reuse of components and reduces unnecessary re-renders.
* **Optimizations** -
    * Tools like shouldComponentUpdate, React.memo, and hooks like useCallback and useMemo help optimize performance by preventing unnecessary re-renders.

---

### 13. How Does It All Work Behind the Scenes?
**Explanation**:
* When you create elements in React, you're actually creating virtual DOM objects.
* These virtual replicas are synced with the real DOM, a process known as "Reconciliation" or the React "diffing" algorithm.
* Essentially, every rendering cycle compares the new UI blueprint (updated VDOM) with the old one (previous VDOM) and makes precise changes to the actual DOM accordingly.
* **Rendering** -
    * When you call ReactDOM.render, React builds a Virtual DOM tree and renders it to the real DOM.
* **State and Props** -
    * React manages state and props to control what gets rendered. State changes trigger re-renders.
* **Reconciliation** -
    * React compares the previous Virtual DOM with the new one (after a state or prop change) and efficiently updates only the parts of the real DOM that have changed.
* **Event Handling** -
    * React uses a synthetic event system, which is cross-browser and optimized for performance.
* **Component Lifecycle** -
    * React components go through a lifecycle with phases like mounting, updating, and unmounting, allowing developers to hook into these phases using lifecycle methods or hooks like useEffect.
* **For In-Depth Understanding Go to this Link** : `https://github.com/acdlite/react-fiber-architecture`

---

## Exploring The World

### 1. What are the two approaches to fetch and render the data ?
**Explanation**:
* **The two common approaches to fetching and rendering data in React are** :
    * **Fetch First Render Later (Load and Render)** - 
        * We can make the API call as soon as the app loads, fetch the data, and render it.
        * The data is fetched first, then once the data is available, the component is rendered.
        * This may lead to a delay before anything appears on the screen but avoids a flickering/loading state.
    * **Render First Fetch Later** -
        * Alternatively, we can quickly render the UI when the page loads we could show the structure of the web page, and then make the API call.
        * Once we get the data, we re-render the application to display the updated information.
        * The component renders first, displaying some default UI (e.g., loading spinner).
        * After rendering, the data is fetched asynchronously, and the UI is updated with the data when it arrives.
* In React, we're opting for the second approach.
* This approach enhances user experience by rendering the UI swiftly and then seamlessly updating it once we receive the data from the API call.

### 2. What is Load and Render ?
**Explanation**:
* This approach means that data is fetched before rendering the component.
* The component waits until all necessary data is loaded and then renders the UI.
	* **Advantage** - Avoids showing a loading spinner or placeholder.
	* **Disadvantage** - Increases the initial page load time because the component won’t render until all data is ready.

### 3. What is Render First Fetch Later ?
**Explanation**:
* In this approach, the component renders first without data (or with placeholder data) and fetches the data asynchronously after rendering.
* Once the data is fetched, the component is re-rendered with the actual data.
	* **Advantage** - The page loads faster, giving immediate visual feedback (like a loading spinner).
	* **Disadvantage** - Requires handling a loading state, and there’s a possibility of flickering as the UI changes after the data arrives.

### 4. Where we fetch the data ?
**Explanation**:
* In React functional components, the most common place to fetch data is inside the useEffect hook.
* This ensures the data fetching happens after the initial render.
* **Example** -
    ```javascript
    useEffect(() => {
        fetchData();
    }, []); // The empty array ensures this runs only once, after the first render.
    ```
* In Class Components, You would typically fetch data inside the componentDidMount lifecycle method.

### 5. Why fetch data inside useEffect ?
**Explanation**:
* The main reason we use useEffect for fetching data is Because - 
    * It ensures that the data fetching happens after the initial render.

### 6. Why after initial render ?
**Explanation**:
* Because of Render First Fetch Later Approach.
* Hum useEffect ko specifically use karte hain taaki hum data fetch kar sakein initial render ke baad. 
* Matlab, hum first render ke time pe UI ko load karne dete hain (user ko jaldi se dikhane ke liye), aur uske baad data ko fetch karte hain.

### 7. Why only after the initial render ?
**Explanation**:
* **Performance** - 
    * Agar hum data ko initial render ke pehle fetch karenge, toh UI ko render hone mein time lagega (kyunki network request wait karne ki zarurat hogi). 
    * Ye experience ko slow bana sakta hai. 
    * Hum chaahte hain ki user ko UI jaldi dikhe aur data fetch hona background mein ho.
* **Consistency** - 
    * Agar hum fetch ko render ke andar rakhenge, toh humare render flow unpredictable ho sakte hain. 
    * Hum chahte hain ki component render ho, aur fir side effects (like fetching data) execute ho.
* **useEffect ka kaam** :
	* **Side Effects** - 
        * React ke component render hone ke baad jo bhi “side effects” (like data fetching) hain, unko handle karne ke liye useEffect use hota hai.
	* **Cleanup** - 
        * Agar aapne network request start kiya hai aur component unmount hota hai, toh aap useEffect ke cleanup function ka use karke us request ko cancel kar sakte ho.

### 8. Why can’t we fetch data anywhere else ?
**Explanation**:
* Agar hum data fetch karte hain directly component ke body mein, toh woh render ke saath baar baar execute ho sakta hai. 
* Har baar jab component render hoga, wo fetch function call ho jayega. 
* Ye unwanted behavior hai, kyunki hum sirf initial render ke baad hi data chahte hain, na ki har render ke baad.
* **Example** - 
    ```javascript
    function MyComponent() {
        const data = fetchData(); // This runs on every render!
        return <div>{data}</div>;
    }
    ```
    * Yahan `fetchData()` har render par call hoga, jo ki inefficient hai aur unnecessary network requests ko trigger karega.

### 9. When will the callback function get called inside the useEffect() ?
**Explanation**:
* The callback function inside useEffect() is executed after the component renders.
* The timing depends on the dependencies array :
	* If the "dependencies array is empty" ----> The callback runs once, after the initial render.
	* If there "are dependencies" ----> The callback runs after every render where any of the dependencies change.
	* If there’s "no dependencies" array ----> The callback runs after every render.

### 6. What exactly the CORS policy is ?
**Explanation**:
* **CORS (Cross-Origin Resource Sharing) Policy** -
    * CORS is a security feature in browsers that restricts web pages from making requests to a different domain than the one that served the web page.
    * It prevents malicious websites from making unauthorized requests to APIs.
* **How it works** -
    * When a frontend JavaScript application (from one domain) tries to fetch data from a different domain (API), the server must include specific headers (e.g., Access-Control-Allow-Origin) to allow the request.
* **If CORS fails** -
    * You’ll get a CORS error, and the browser will block the request.

### 7. Which one is better :
    `Page Loads -> Make API Call -> Render Components`
    `Page Loads -> Render Whatever we have -> Make API Call -> Render Components`
**Explanation**:
* `Page Loads -> Make API Call -> Render Components` : This is the Fetch-Then-Render approach.
	* **Pro** - Avoids the need for loading spinners or placeholders, the final UI is rendered only once the data is ready.
	* **Con** - Slower initial load time because the component waits for the data before rendering.
* `Page Loads` -> Render Whatever We Have -> Make API Call -> Render Components : This is the Render-First, Fetch-Later approach.
	* **Pro** - The page loads quickly, providing immediate feedback (e.g., a spinner or skeleton screen).
	* **Con** - Requires handling loading states and may lead to UI flickering as data arrives.
* **Which is Better** :
    * The Render-First, Fetch-Later approach is generally better for user experience because it provides faster initial feedback, even if the data takes time to load.

### 8. When we click on the any Button which is inside a Parent Component , so only that Button Component Re-Render or the whole Parent Component Re-Render ?
**Explanation**:
* **Re-Render Behavior** -
    * In React, the entire parent component re-renders when a state or prop change occurs in the parent.
    * If a button is inside the parent component, and the parent’s state is updated (e.g., via useState), the parent and all of its children, including the button, will re-render.
* **Optimizing re-renders** -
    * To prevent unnecessary re-renders of child components, you can use React.memo to memoize child components and ensure they only re-render if their props change.

### 9. How in useState the state Variable get updated with new values when we are using const ? Isn’t it wrong in JS ?
**Explanation**:
* When you use useState in React, you’re not directly modifying the state variable but instead using the function provided by useState (e.g., setState) to update the state.
* The const variable holds a reference to the value that useState manages, but setState is the function that changes the value internally.
* **Example** -
    ```javascript
    const [count, setCount] = useState(0);
    setCount(count + 1); // Updates the value of count
    ```
* **Why it’s okay** -
    * The const in this case refers to the reference of the state variable, and React ensures that calling setCount triggers an update of the state, but the reference itself is constant.

* React mein jab hum useState ka use karte hain, toh hum state variable ko const ke saath declare karte hain. 
* Ye JavaScript ke general rule ke against lagta hai, kyunki const variables re-assign nahi ho sakte. 
* Par React ke context mein ye perfectly sahi hai. 
* **Example** - `const [count, setCount] = useState(0);`
    * **count (State Variable)** -
        * Ye ek reference hai jo React ke andar ki state ko point karta hai.
        * Tum directly count ki value change nahi kar sakte ho (count = count + 1 galat hoga).
	* **setCount (State Updater Function)** -
        * Jab tum setCount(newValue) call karte ho, React andar ki state ko update karta hai aur naye state ke saath component ko re-render karta hai.
* **Why It’s Okay with const** :
    * **Constant Reference** -
        * const ka matlab hai ki variable ka reference change nahi hoga.
        * count ki value React ke internal state se linked hai. 
        * Jab setCount call hota hai, React reference ko same rakhta hai, bas value ko internally update karta hai.
        * **Example** - 
            * `const [count, setCount] = useState(0);`
            * `setCount(count + 1); ---> Internally updates the value`
            * Yahan count ka reference same hai. 
            * React apne internal memory mein naye value ko save karta hai aur naye render ke dauraan count ko update karta hai.
* **Analogy for Better Understanding** - 
    * Samjho tumhare paas ek box hai jisme number likha hai.
	    * `const count = useStateBox;`
    * Ye box ka address hai (reference) jo count ko represent karta hai. Address kabhi change nahi karega.
	* Jab tum setCount(newValue) call karte ho, box ke andar ka number change ho jata hai, par box ka address wahi ka wahi rehta hai. Is wajah se const perfectly valid hai.
* If the const variable holds a reference to an object or value managed elsewhere, the content of that reference can change.
    * **Example** - 
        ```javascript
        const obj = { value: 0 };
        obj.value = 1; // Valid because reference (obj) is constant
        ```
        * useState works exactly like this.
        * Similarly, count in React is just a reference to the internal state. 
        * React’s setCount updates the state behind the scenes while keeping the reference constant.

### 10. What Does This Mean and Why is it So : “Whenever a State Variable Updates, React Will Re-Render My Component” ?
**Explanation**:
* This statement means that when you use useState to manage a piece of state in React, any update to that state will trigger a re-render of the component where the state is used.
* This is how React keeps the UI in sync with the data.
* **Why This Happens** -
    * React’s rendering engine works by re-rendering components when their state or props change.
    * This ensures that the UI reflects the most up-to-date state.
* **Virtual DOMc** -
    * React compares the updated Virtual DOM to the previous one and updates only the parts of the actual DOM that have changed, making the process efficient.

### 11. Can you call the useState Hook outside the Component ? If not Why ?
**Explanation**:
* No, you cannot call the useState hook outside of a component.
* React mein useState aur doosre hooks kaam karte hain ek functional component ke andar ya ek custom hook ke through. 
* Agar tum useState ko component ke bahar call karoge, toh ye kaam nahi karega.
* Hooks jaise useState React ke internal mechanisms pe dependent hote hain.
* Ye internal mechanisms component ke render cycle ke saath state ko track karte hain.
* **Jab tum useState call karte ho, React** :
    * Ek specific component ke saath ek state variable ko associate karta hai.
    * State ko track karta hai, jab component re-render hota hai.
    * State ki updated value provide karta hai.
* **Component ke Bahar Hooks Kyu Kaam Nahi Karte** :
    * **No Context for Lifecycle** -  
        * Hooks kaam karte hain component ke lifecycle ke context mein. 
        * Agar tum useState component ke bahar call karoge, React ko ye samajh hi nahi aayega ki state kiske saath associate karni hai.
    * **State Tracking Issue** -
        * Hooks jaise useState ko ek particular component ke saath state ko track karne ke liye design kiya gaya hai. 
        * Component ke bahar React ke paas state ko track karne ka mechanism nahi hota. 
* React hooks like useState can only be called inside functional components or custom hooks.
* This is because hooks rely on React’s internal mechanisms to track state and lifecycle behavior, which is only available within the component rendering process.
* React hooks like useState work by associating state with the lifecycle of a specific component.
* If you try to call it outside of a component, React won’t know how to handle it since it’s not within the context of a component’s render cycle.

### 12. What are the two Rules of React Hooks ?
**Explanation**:
* **Hooks Sirf Functional Components ya Custom Hooks ke andar Call Karne Chahiye** -
	* Agar tum hooks ko kisi normal function ya component ke bahar use karte ho, React ka lifecycle context nahi hota.
* **Hooks Sirf Top-Level Pe Call Karne Chahiye** -
	* Hooks ko loops, conditions, ya nested functions ke andar call nahi karna chahiye. Ye React ke state tracking ko confuse kar deta hai.


## Finding The Path

### 1. What are various ways to add images to our App ?
#### 1.1. Importing images using ES6 Modules
#### 1.2. Using public folder
#### 1.3. Loading images from a remote source
#### 1.4. Using image assets within CSS
**Explanation**:
* **Importing Images Using ES6 Modules** -
    * In React, you can import images just like any other module using import. 
    * This is useful when you’re working with a build tool like Webpack.
    * **Example** -
        ```javascript
            import React from 'react';
            import logo from './logo.png';  // Import image
            function App() {
                return <img src={logo} alt="Logo" />;
            }
            export default App;
        ```
* **Using Public Folder** -
    * You can place images in the public folder and reference them with a relative URL. Files in the public folder can be directly accessed at runtime.
    * You don’t need to import the image when using the public folder.
    * **Example** -
        ```javascript
            function App() {
                return <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />;
            }
            export default App;
        ```
* **Loading Images from a Remote Source** -
    * You can use the src attribute with an external URL to load an image hosted on a remote server.
    * **Example** -
        ```javascript
        function App() {
            return <img src="https://example.com/logo.png" alt="Remote Logo" />;
        }
        export default App;
        ```
* **Using Image Assets Within CSS** -
    * You can include images in CSS files for background images or other styling purposes.
    * **Example** -
        ```javascript
        .logo {
            background-image: url('./logo.png');
        }
        function App() {
            return <div className="logo"></div>;
        }
        export default App;
        ```

### 2. What would happen if we do console.log(useState()) ?
**Explanation**:
* When you call useState() without passing any arguments, it returns an array with two elements :
    * **State Variable** - The current state value, which will be undefined if no initial value is provided.
    * **Updater Function** - A function that allows you to update the state.
* useState Returns an Array.
* Yes, we are doing array destructuring when we write :
    * `const [state, setState] = useState();`
    * In JavaScript, array destructuring allows you to assign variables directly from an array.
    * Similarly, `useState()` returns an array.
* **Why Return an Array** :
    * React developers chose an array because :
        * **Position-Based Assignment** -
            * Arrays allow destructuring by position. 
            * The first element is always the state, and the second is the updater function.
        * **Flexibility** -
            * Arrays don’t need named properties, which keeps the API simple and clean.

### 3. What is SPA ?
**Explanation**:
* A Single-Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app, without requiring a full page reload.
* **Example** - Gmail, Facebook, and Twitter.

### 4. What are Key characteristics of SPA ?
#### 4.1. Dynamic Updates
#### 4.2.Smooth User Experience
#### 4.3.Faster Initial Load
#### 4.4.Client Side Routing
#### 4.5.API Centric
#### 4.6.State Management
**Explanation**:
* **Dynamic Updates** -
	* SPAs dynamically update content by fetching data and rendering views in response to user interactions without a full page reload.
* **Smooth User Experience** -
	* SPAs offer a more fluid user experience since only part of the content is updated, resulting in less waiting time and no page refreshes.
* **Faster Initial Load** -
	* SPAs often load a single bundle of assets (HTML, CSS, JS) at the beginning, and after that, only the necessary data is fetched, reducing the time for subsequent interactions.
* **Client-Side Routing** -
	* SPAs use JavaScript to manage routing within the application, making it possible to change the URL and update the view without contacting the server.
* **API-Centric** -
	* SPAs heavily rely on APIs (like REST or GraphQL) to fetch and send data to the backend, separating the frontend from the backend.
* **State Management** -
	* Managing state is crucial in SPAs, as the app needs to track user interactions and dynamically render views. 
    * Libraries like Redux or useState/useReducer in React are often used.

### 5. What is the difference between Client Side Routing and Server Side Routing ?
**Explanation**:
* **Client-Side Routing** :
	* **Handling on the Client** -
	    * The routing is managed by JavaScript on the client-side. This allows for transitions between different views without refreshing the page.
	* **Faster Transitions** -
	    * Navigation between pages is faster since no full-page reload is needed; only the specific content gets updated.
	* **Single-Page Application (SPA)** -
	    * Client-side routing is commonly used in SPAs where the page remains the same, and only the data changes.
	* **SEO Challenges** -
	    * Since the content is dynamically loaded, SEO can be more challenging compared to server-side routing. Server-side rendering (SSR) or static generation can be used to mitigate this issue.
	* **Route Management** -
	    * JavaScript libraries like React Router handle route management on the client-side.

* **Server-Side Routing** :
	* **Handling on the Server** -
	    * The server processes each route and sends a new HTML file for every request. The browser completely reloads the page when a new route is visited.
	* **Slower Transitions** -
	    * Each page transition requires a server request, leading to slower transitions as the entire page is reloaded.
	* **Traditional Websites** -
	    * Server-side routing is common in traditional multi-page applications (MPAs), where each page is a new HTML file served from the server.
	* **SEO-Friendly** -
	    * Since the server sends fully rendered HTML pages, server-side routing is naturally SEO-friendly.
	* **Route Configuration** -
	    * Route configuration happens on the server, typically in backend frameworks (e.g., Express.js for Node.js or Flask for Python).

### 6. How React State Works ?
**Explanation**:
* Why I get the previous value in the console when I click the button , even though the UI is being updated -
    ```javascript
    const handleIncrement = () => {
    setIncrement(increment + 1);
    console.log(increment); // Why it prints the previous value?
    };
    ```
* Because In React, state updates using hooks like useState are asynchronous. 
* **This means** -
	* When you call setIncrement(increment + 1), React schedules the state update.
	* However, the actual state variable (increment) does not update immediately. 
    * React waits until it’s ready to re-render the component with the new state value.
* **Why Does the UI Show the Updated Value** -
    * React updates the UI after the state update is applied.
    * **During the re-render** :
	    * React retrieves the new state value (increment + 1) and updates the DOM (what you see on the screen).
	    * However, the console.log statement inside handleIncrement runs before the re-render, so it shows the old value.

## Jo Dikhta hai Vo Bikta hai

### 1. What Are All the Ways of Writing CSS in a React App ?
**Explanation**:
* **Inline CSS** -
    * You can apply styles directly to elements using the style attribute, where styles are passed as a JavaScript object with camelCase properties.
    * **Example** -
        ```javascript
        const style = { color: 'blue', backgroundColor: 'yellow' };
        return <div style={style}>Inline Styled Component</div>;
        ```
* **Internal (CSS in JS)** -
    * You can define styles within your JavaScript files, either using a library like Styled Components or Emotion, which allows you to create components with scoped styles.
    * **Example** -
        ```javascript
        import styled from 'styled-components';
        const StyledButton = styled.button`
            background-color: blue;
            color: white;
        `;
        return <StyledButton>Click Me</StyledButton>;
        ```
* **External (CSS Files)** -
    * The most common way is to create a separate CSS file (e.g., App.css) and import it into your component.
    * **Example** -
        ```javascript
        import './App.css';
        return <div className="container">External Styled Component</div>;
        .container {
            color: red;
        }
        ```

### 2. In tailwind.config.js, What Do All the Keys Mean (content, theme, extend, plugins) ?
**Explanation**:
* **content** -
    * Specifies the files that Tailwind should scan for class names.
    * Tailwind will purge unused styles based on the files listed here.
    * **Example** -
        ```javascript
        content: ['./src/.{js,jsx,ts,tsx}']
        ```
* **theme** -
    * This is where you customize Tailwind’s default theme, including colors, fonts, spacing, etc.
    * It defines the default design tokens available in your project.
    * **Example** -
        ```javascript
        theme: {
            colors: {
                primary: '#ff5733',
            },
        }
        ```
* **extend** -
    * Use this key to extend the default theme without overriding it completely.
    * It allows you to add additional custom styles while keeping the base theme intact.
    * **Example** -
        ```javascript
        extend: {
            colors: {
                customColor: '#123456',
            },
        }
        ```
* **plugins** -
    * This key is used to add additional functionality to Tailwind via plugins.
    * Plugins allow you to extend or modify Tailwind’s functionality.
    * **Example** -
        ```javascript
        plugins: [
            require('@tailwindcss/forms'),
        ]
        ```

### 3. Why Do We Have .postcssrc File ?
**Explanation**:
* The `.postcssrc` file is used to configure PostCSS, a tool for transforming CSS using JavaScript plugins.
* PostCSS can handle tasks like autoprefixing CSS for different browsers, minifying CSS, and enabling custom features like TailwindCSS.
* This file typically contains configuration options for the PostCSS tool and any plugins you might use.

### 4. What Are the Primary Reasons Why You Might Have a .postcssrc File ?
**Explanation**:
* **Plugin Configuration** -
    * `.postcssrc` allows you to configure PostCSS plugins such as autoprefixer, cssnano, and TailwindCSS.
    * These plugins can automate CSS transformations like adding vendor prefixes or minifying CSS.
    * **Example** -
        ```javascript
            {
                "plugins": {
                    "tailwindcss": {},
                    "autoprefixer": {}
                }
            }
        ```
* **Custom Configuration** -
    * You can customize PostCSS behavior with specific plugin settings, like enabling certain features or modifying default behaviors.
* Presets and Options -
    * It lets you set up PostCSS presets or custom options, making it easy to adjust PostCSS behavior according to your project needs.
* **Maintainability** -
    * Keeping PostCSS configurations in a .postcssrc file makes it easier to manage and maintain the setup, as all plugin configurations are centralized in one place.
* **Sharing Configurations** -
    * You can share your PostCSS configuration with other developers in your team, ensuring that everyone’s build process remains consistent.

## Data is The New Oil

### 1. What is Prop Drilling ?
**Explanation**:
* Prop Drilling refers to the process of passing data from a parent component to deeply nested child components through props.
* If a component deep down the tree needs access to a piece of data, each intermediary component between the parent and the child must pass that data through props, even if those intermediate components don’t need it.
* **Issue** - It can make the code harder to maintain, as every intermediary component needs to pass the props, even if they don’t use them.
* **Solution** - React’s Context API or state management libraries (like Redux / Recoil) help avoid prop drilling by allowing components to share data without passing props manually at every level.

### 2. What is Lifting the State Up ?
**Explanation**:
* Lifting the state up in React refers to the practice of moving the state from a lower-level (child) component to a higher-level (parent or common ancestor)  component in the component tree.
* This is done to share and manage state across multiple components.
* Lifting the State Up means moving state from a child component to its closest common ancestor, so that the state can be shared across multiple child components.
* When a child component needs access to certain data or needs to modify the data, instead of keeping that data and the corresponding state management solely within the child component, we move the state to a shared ancestor component.
* By doing so, the parent component becomes the source of truth for the state, and it can pass down the necessary data and functions as props to its child components.
* By lifting the state up to a common ancestor, you centralize the state management, making it easier to control and share state among components.
* This pattern is especially useful in larger React applications where multiple components need access to the same data or where the state needs to be synchronized across different parts of the application.
* Instead of each component managing its own state, the parent component manages the state and passes it down as props to the relevant children.
* **Why ?** - It’s useful when multiple components need to share the same state or interact with the same data.

### 3. If We Don’t Pass a Value to the Provider, Does It Take the Default Value ?
**Explanation**:
* Yes, if you don’t pass a value to the Provider, the context will use the default value defined when the context is created.
* **Note** - If you pass a value to the Provider, it will override the default value.

### 4. What Are Context Provider and Context Consumer ?
**Explanation**:
* **Context Provider** -
    * The Provider component in React is used to supply data (like state or functions) to all components within its tree that consume the context.
    * It allows us to avoid prop drilling by making data available to any component in the tree.
    * You wrap the part of your component tree that needs access to the context with a Provider and pass the value that you want to make available.
* **Context Consumer** -
    * The Consumer component or useContext hook is used to access the value provided by the Provider.
    * Consumers can be used anywhere in the tree that is within the provider’s scope.
    * The Consumer will consume the nearest value provided by the Provider.

## CLI Tools

### 1. What are CLI Tools ?
**Explanation**:
* CLI (Command Line Interface) Tools are programs or utilities that allow users to interact with software by typing commands into a terminal or command prompt.
* They are often used to automate tasks, manage software, and interact with applications in a more controlled and scriptable way.

### 2. Why are CLI Tools used ?
**Explanation**:
* **Efficiency** - CLI tools can perform tasks faster than GUIs because they require fewer resources and can be automated with scripts.
* **Automation** - They can be easily scripted to perform repetitive tasks automatically.
* **Control** - CLI tools provide more granular control over software and systems, allowing users to execute complex commands with precision.
* **Remote Access** - They can be used to manage systems remotely, especially on servers without a graphical interface.

### 3. Give me some examples of CLI Tools ?
**Explanation**:
* **Node Package Manager (npm)** - Used for managing JavaScript packages.
* **Git** - A version control tool to track code changes.
* **Webpack** - A module bundler for JavaScript applications.
* **Vite** - A build tool designed to enhance development speed and efficiency (we’ll discuss this in more detail next).

### 4. What is Vite ?
**Explanation**:
* Vite is a modern build tool that significantly improves the development experience for front-end projects.
* Unlike traditional bundlers like Webpack, Vite provides fast server start, instant updates (HMR - Hot Module Replacement), and optimized production builds.
* It’s particularly designed for modern JavaScript frameworks like React.

### 5. Why is Vite + React better than npm + React ?
**Explanation**:
* **Faster Development** - Vite offers instant server start and quicker Hot Module Replacement (HMR).
* **Modern Bundling** - Vite uses ES modules, avoiding the need for bundling during development.
* **Optimized Builds** - Vite creates more efficient and smaller production builds compared to traditional bundlers like Webpack with npm.

## React Foundation

### 1. What is React Project Directory ?
**Explanation**:
* public/ Folder :
	Contains static files like index.html which serves as the entry point for your React app.
* src/ Folder :
	Contains your JavaScript files, including components, styles, and other assets. It’s where most of your React code lives.

### 2. What is Module Bundler ?
**Explanation**:
* A module bundler is a tool that combines multiple JavaScript modules and their dependencies into a single or a few output files (bundles).
* Key Functions :
	Dependency Management - Resolves and bundles dependencies among JavaScript files and other assets like CSS or images.
	Code Splitting - Breaks down the code into smaller chunks that can be loaded on demand to improve performance.
	Transpiling - Converts modern JavaScript (or other languages like TypeScript) into browser-compatible JavaScript.
	Minification - Reduces the size of the output files by removing unnecessary code and whitespace.
* Benefit of a Module Bundler :
	Optimized Performance - Reduces the number of HTTP requests and improves load times by bundling and minifying code.
	Simplified Development - Manages dependencies and assets automatically, making it easier to develop and maintain complex applications.

### 3. What is Webpack ?
**Explanation**:
* Webpack is a module bundler that takes JavaScript files and their dependencies, and bundles them into a single file or a few files. It handles various tasks like transpiling, bundling, and code splitting.

### 4. What is Babel ?
**Explanation**:
* Babel is a JavaScript compiler that converts modern JavaScript (ES6+) into backward-compatible JavaScript that can run in older browsers.
* It allows you to use the latest language features without worrying about browser support.

### 5. What is difference between package.json & package-lock.json ?
**Explanation**:
* package.json :
	Manages project metadata, dependencies, scripts, and configurations.
* package-lock.json :
	Locks the versions of dependencies to ensure consistent installations across different environments.

### 6. What is DOM, ReactDOM, & Virtual DOM ?
**Explanation**:
* DOM (Document Object Model) :
	The standard representation of HTML elements as objects in the browser.
    Manipulating the DOM directly can be slow.
* ReactDOM :
	The package that provides methods for interacting with the DOM in React, such as rendering components to the DOM.
* Virtual DOM :
	A lightweight copy of the real DOM used by React to optimize updates.
    React compares the virtual DOM with the real DOM and updates only the changed parts

### 7. What is index.html, App.js, index.js, reportWebVitals.js & package.json in a Simple React Project ?
**Explanation**:
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

### 8. How JavaScript Runs Without Script Tags ?
**Explanation**:
* React scripts (via tools like Webpack or Vite) automatically handle the inclusion of JavaScript files and their dependencies, so you don’t need to manually add script tags in index.html.

### 9. What is index.html, App.js, index.js, & package.json in a React + Vite Project ?
**Explanation**:
* index.html (in public/) :
	Similar to the simple React project but often includes a script tag pointing to the Vite-generated bundle.
* App.js (in src/) :
	Contains the main React component, same as in the simple project.
* index.js (in src/) :
	Entry point for rendering components, but Vite handles bundling and development server.
* package.json :
	Includes Vite and other dependencies. Scripts are set up to start the Vite development server.

### 10. What is the difference Between React and React + Vite ?
**Explanation**:
* React is the library for building UI components.
* React + Vite combines React with Vite for a faster development experience and optimized build process. Vite provides instant server start, fast HMR, and efficient bundling

### 11. What is createRoot method ?
**Explanation**:
* ReactDOM.createRoot(document.getElementById('root')).render(<App />);
	Initializes the React application and renders the App component into the DOM element with id root.
    This is the entry point for React 18’s new root API for better performance and concurrency features.

### 12. What is React Fiber ?
**Explanation**:
* React Fiber is a complete rewrite of the React reconciliation algorithm, designed to improve the rendering performance.
* It allows React to split rendering work into chunks, making updates more efficient and responsive.

### 13. What is Reconciliators & Reconciliation ?
**Explanation**:
* Reconciliators are the components of the algorithm that manage this process, ensuring minimal updates and improving performance.
* Reconciliation is the process of updating the DOM to match the React component tree. React uses an algorithm to efficiently determine what has changed and update only those parts of the DOM.

### 14. What does this block of Code means ?
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
**Explanation**:
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

## React Internals

## Functional Components

## Rendering

## Hooks