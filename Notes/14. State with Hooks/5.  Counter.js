/* 5. Import useState *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
This is a basic challenge. You only have to import the useState function.
*/

/********************************/
/*  STATE W HOOKS : INDEX.JS*/
/********************************/
import {useState} from "react";
import {createRoot} from "react-dom/client";

function App() {
    return <div>Hello World</div>;
}

createRoot(document.querySelector("#react-root")).render(<App />);

/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";
import {useState} from "react"
function App() {
    return <div>Hello World</div>;
}

createRoot(document.querySelector("#react-root")).render(<App />);
/***************************************************************************************/
/********************************/
/*  STATE W HOOKS : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
