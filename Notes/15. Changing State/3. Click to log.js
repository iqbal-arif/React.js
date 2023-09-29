/* 6. Click to log *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Add a click event listener on the <button> so that it console logs: Hello World! when the button is clicked.
Give it a try in the Browser tab. Click on the button and see if the console shows up :)
*/

/********************************/
/*  CHANING STATE : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";

function App() {
    return <button onClick={() => console.log("Hello World!")}>click me</button>;
}

createRoot(document.querySelector("#react-root")).render(<App />);
/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";

function App() {
    return <button onClick= {()=> console.log("Hello World!")} >click me</button>;
}

createRoot(document.querySelector("#react-root")).render(<App />);
/***************************************************************************************/
/********************************/
/*  CHANING STATE : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
