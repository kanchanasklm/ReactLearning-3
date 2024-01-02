import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";  //we write react-dom/client becasue of some reactd evelopers upgrade or optimize it which extract react-dom from client.


const heading1=React.createElement("h1",{
    id:"title"
},
"Namste React1");

const heading2=React.createElement("h2",{
    id:"title"
},
"Namste React2");

const container=React.createElement("div",{
    id:"container"
},
[heading1,heading2]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);