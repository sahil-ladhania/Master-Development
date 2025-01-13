import React from "react";
import ReactDOM from "react-dom/client";

/*
<div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child2">
        <h1></h1>
        <h2></h2>
    </div>
</div>
*/
// const heading2 = React.createElement("h2" , {} , "This is a H2 Tag.");
// const heading1 = React.createElement("h1" , {} , "This is a H1 Tag.");
// const child = React.createElement("div" , {id : "child"} , [heading1 , heading2]);
// const child2 = React.createElement("div" , {id : "child2"} , [heading1 , heading2]);
// const parent = React.createElement("div" , {id : "parent"} , [child , child2]);
// console.log(parent);
// console.log(child);
// console.log(heading1);
// console.log(heading2);
// const heading = React.createElement("h1" , {id : "heading"} , "Hello World From React!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);
// root.render(parent);

// React.createElement => Gives us ReactElement --> Which is a JS Object ----> When we render it to DOM => Becomes HTML Element
// const heading = React.createElement(
//     "h1",
//     {id : 'heading'},
//     "Namaste React Course"
// )
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(heading);

// JSX - HTML-Like or XML-Like Syntax ---> (Transpiled before it reaches to the JS) ---> Parcel --> Babel
// JSX => Babel Transpiles it to React.createElement ---> Gives use ReactElement --> Which is a JS Object ---> When we render it to DOM => Becomes HTML Element
// const jsxHeading = (
//     <h1 id="heading">Namaste React Course Using JSX</h1>
// );
// console.log(jsxHeading);
// root.render(jsxHeading);

// React Functional Component
const TitleComponent = () => {
    return (
        <h1 id="heading">Namaste React Course Using JSX</h1>
    )
}
const number = 1;
const HeadingComponent = () => {
    return (
        <div id="container">
            {/* All Three are Same */}
            {TitleComponent()}
            <TitleComponent/>
            <TitleComponent></TitleComponent>
            <h2 id="heading">React Functional Component {number}</h2>
        </div>
    )
}
root.render(<HeadingComponent/>);



















