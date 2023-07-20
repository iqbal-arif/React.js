/* 5. React DOM III *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Render an <h1 class="title">Online Supermarket</h1> on the page inside the given root.
*/

/********************************/
/*REACT DOM : INDEX.JS*/
/********************************/
import React from "react";
import {createRoot} from "react-dom/client";

const element2 = React.createElement("h1", {
    className: "title"
}, "Online Supermarket");
const root2 = document.querySelector("#react-root");

createRoot(root).render(element);




/************************SUBMITTED************************/
import React from "react";
import {createRoot} from "react-dom/client";
const element = React.createElement("h1", {className : "title"}, "Online Supermarket");

const root = document.querySelector("#react-root");

createRoot(root).render(element);
/***************************************************************************************/
/***************************************************************************************/
/********************************/
/*REACT DOM : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
/***************************************************************************************/