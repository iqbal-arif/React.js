/* 4. Attributes I *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Using JSX, render a paragraph element with the text My first JSX
*/

/********************************/
/* ATTRIBUTES I : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";

const root = document.querySelector("#react-root");

createRoot(root).render(<p className="selected" id="promo">Hello World</p>);


/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";

const root = document.querySelector("#react-root");
createRoot(root).render(<p className="selected" id="promo">"Hello World"</p>); 
/***************************************************************************************/

/********************************/
/* ATTRIBUTES I : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
/***************************************************************************************/*/
