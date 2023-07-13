/* 5. React DOM I *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Render the element variable on the page inside the given root in the index.html page.
When an index.html file is available, you can see the output of your code by clicking on the Browser tab. You can try it already in this challenge!
Also make sure to check the code inside the index.html file so that you can get the id of the root element. 
*/

/********************************/
/*REACT DOM I : INDEX.JS*/
/********************************/
import React from "react";
import {createRoot} from "react-dom/client";

const element = React.createElement("p", {}, "Hello World");
const root = document.querySelector("#react-root");

createRoot(root).render(element);


/************************SUBMITTED************************/
import React from "react";
import {createRoot} from "react-dom/client";
const root2 = document.querySelector("#react-root");
const element2 = React.createElement("p", {}, "Hello World");
createRoot(root2).render(element2);
/***************************************************************************************/
/***************************************************************************************/
/********************************/
/*REACT DOM I : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
/***************************************************************************************/