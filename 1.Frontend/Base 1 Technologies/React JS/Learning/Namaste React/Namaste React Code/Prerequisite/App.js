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
const heading2 = React.createElement("h2" , {});
const heading1 = React.createElement("h1" , {});
const child = React.createElement("div" , {id : "child"} , [heading1 , heading2]);
const child2 = React.createElement("div" , {id : "child2"} , [heading1 , heading2]);
const parent = React.createElement("div" , {id : "parent"} , [child , child2]);
console.log(parent);
console.log(child);
console.log(heading1);
console.log(heading2);
// const heading = React.createElement("h1" , {id : "heading"} , "Hello World From React!");
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(parent);
