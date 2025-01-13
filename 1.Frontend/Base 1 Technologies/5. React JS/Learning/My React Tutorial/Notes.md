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

---

### 2. Why are we using these Links ? 
**Explanation**:

---

### 3. Why is the First Link used For ? 
**Explanation**:

---

### 4. Why is the Second Link used For ? 
**Explanation**:

---

### 5. What does this crossorigin used For ? 
**Explanation**:

---

## Doubt 2 : React.createElement() Method

### 1. What is ```React.createElement()``` Method ?
**Explanation**:

---

### 2. Where are we getting ```createElement()``` Method From ?
**Explanation**:

---

### 3. What does ```createElement()``` take ?
**Explanation**:

---

### 4. What does ```createElement()``` create ?
**Explanation**:

---

## Doubt 3 : ReactDOM.createRoot() Method

### 1. What is ```ReactDOM.createRoot()``` Method ?
**Explanation**:

---

### 2. Where are we getting ```createRoot()```   Method From ?
**Explanation**:

---

### 3. What does ```createRoot()``` take ?
**Explanation**:

---

## Doubt 4 : .render() Method

### 1. What is this ```.render()``` Method ?
**Explanation**:

---

### 2. Where are we getting ```.render()``` Method From ?
**Explanation**:

---

### 3. What does ```.render()``` take ?
**Explanation**:

---

## Igniting Our App

### 1. What should we do to make our app production ready ?
**Explanation**:

---

### 2. What are Bundlers ?
**Explanation**:

---

### 3. What is Package Manager ?
**Explanation**:

---

### 4. How to Configure the Project ?
**Explanation**:

---

### 5. What is ```package.json``` File ?
**Explanation**:

---

### 6. What is ```package-lock.json``` File ?
**Explanation**:

---

### 7. What is difference between ```package.json``` and ```package-lock.json``` ?
**Explanation**:

---

### 8. What are node_modules ?
**Explanation**:

---

### 9. How to to ignite our app ?
**Explanation**:

---

### 10. What is Hot Module Replacement (HMR) ?
**Explanation**:

---

### 11. What is parcel-cache ?
**Explanation**:

---

### 12. What is dist Folder ?
**Explanation**:

---

### 13. What are the features that Parcel Provides ?
**Explanation**:

---

### 14. What are Transitive Dependencies ?
**Explanation**:

---

### 15. What is Browserslist ?
**Explanation**:

---

### 16. What is Tree Shaking ?
**Explanation**:

---

## Doubt 5

### 1. What is Transitive Dependencies ?
**Explanation**:

---

### 2. What is ```^``` and ```~``` in ```"parcel": "^2.12.0"```?
**Explanation**:

---

### 3. When we only need Parcel, why are so many things in node_modules?
**Explanation**:

---

### 4. How many package-lock.json files are there in a React app?
**Explanation**:

---

### 5. How many package.json files are there in a React app?
**Explanation**:

---

### 6. Why did we get Uncaught ReferenceError: React is not defined when using npx parcel index.html?
**Explanation**:

---

### 7. Why did we get “Browser scripts cannot have imports or exports” after importing React and ReactDOM?
**Explanation**:

---

### 8. Why am I getting an error on this line ```<script src="./App.js"></script>?```
**Explanation**:

---

### 9. Why did my app start running after I used ```<script type="module" src="./App.js"></script>?```
**Explanation**:

---

### 10. Why and how does the page update without manual refresh after saving files? Is Parcel responsible?
**Explanation**:

---

### 11. Why are we putting these in ```.gitignore```?
**Explanation**:

---

### 12. What is BrowsersList?
**Explanation**:

---

## Laying The Foundation

### 1. What is another way of starting the build of the project ?
**Explanation**:

---

### 2. What is JSX ?
**Explanation**:

---

### 3. What is Babel ?
**Explanation**:

---

### 4. Is JSX a valid JavaScript ?
**Explanation**:

---

### 5. If the browser can’t understand JSX how is it still working ?
**Explanation**:

---

### 6. What is the difference between HTML and JSX ?
**Explanation**:

---

### 7. What is Single Line and Multi Line JSX Code ?
**Explanation**:

---

### 8. What are Components ?
**Explanation**:

---

### 9. How many types of Components are there ?
**Explanation**:

---

### 10. What is a React Functional Components ?
**Explanation**:

---

### 11. What is Components Composition ?
**Explanation**:

---

### 12. How to use JavaScript code inside JSX ?
**Explanation**:

---

### 13. How to call React Element in JSX ?
**Explanation**:

---

### 14. What will happen if we call 2 elements inside each other ?
**Explanation**:

---

### 15. What are the advantages of using JSX ?
**Explanation**:

---

## Talk is Cheap, Show me Some Code

### 1. How Can I Do Inline Styling in React ?
**Explanation**:

---

### 2. What Does Destructuring of Props Mean ?
**Explanation**:

---

### 3. What is Config Driven UI ?
**Explanation**:

---

### 4. Why is Config Driven UI Used ?
**Explanation**:

---

### 5. What is Optional Chaining ?
**Explanation**:

---

### 6. Why Do We Need Keys When Using map ?
**Explanation**:

---

### 7. Why Can’t We Use Index as a Key ?
**Explanation**:

---

## Lets Get Hooked

### 1. Why Do We Use React ? Why Not Just HTML, CSS, and JavaScript ?
**Explanation**:

---

### 2. What Exactly is Export and Import in React and What Are Its Types ?
**Explanation**:

---

### 3. How Do We Create Super-Powerful Variables ?
**Explanation**:

---

### 4. What is a Hook ?
**Explanation**:

---

### 5. What to Use : .js or .jsx ? Is There a Difference ?
**Explanation**:

---

### 6. Is It Necessary to Use the Extension When We Import?
**Explanation**:

---

### 7. Can We Export a Component as Named and Default?
**Explanation**:

---

### 8. What Exactly is the UI Layer in React?
**Explanation**:

---

### 9. What Exactly is the Data Layer in React?
**Explanation**:

---

### 10. Why Use useState When You Can Simply Define a Variable?
**Explanation**:

---

### 11. What Does This Mean: “Whenever a State Variable Updates, React Will Re-Render My Component”?
**Explanation**:

---

### 12. Why is React Often Praised for Its Speed? What’s the Reason or Funda Behind It?
**Explanation**:


---

### 13. How Does It All Work Behind the Scenes?
**Explanation**:

---

## Exploring The World

## Finding The Path

## Jo Dikhta hai Vo Bikta hai

## Data is The New Oil

## CLI Tools

## React Foundation

## React Internals

## Functional Components

## Rendering

## Hooks
