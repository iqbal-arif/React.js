/* 1. Basic JSX *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Using JSX, render a paragraph element with the text My first JSX
*/

/********************************/
/*JSX INTRO : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";

const root = document.querySelector("#react-root");
createRoot(root).render(<p>My first JSX</p>);

/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";
const root = document.querySelector("#react-root");
createRoot(root).render(<p>"My first JSX"</p>);
/***************************************************************************************/
/***************************************************************************************/
/********************************/
/*JSX INTRO : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
/***************************************************************************************/