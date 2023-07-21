/* 8. Destructuring props *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the Button component such that it uses its props to render the text & the className.
Try to use destructuring props in your answer.

*/

/********************************/
/* PROPS : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";

function Button(props) {
    return <button>{props.children}</button>;
}

const root = document.querySelector("#react-root");

createRoot(root).render(<Button>Login</Button>);

/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";

function Button(){
    return null;
}

const root = document.querySelector("#react-root");

createRoot(root).render(<Button className="primary">Login</Button>);
/***************************************************************************************/

/********************************/
/* PROPS : INDEX.HTML*/
/********************************/
{ <div id="react-root"></div>}
/***************************************************************************************/
