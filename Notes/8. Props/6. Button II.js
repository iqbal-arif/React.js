/* 4. Button II *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the Button component such that it's able to render a custom text, for example: <Button>Login</Button> should render a <button>Login</button> element.

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

function Button(props){
    return <button>{props.children}</button>;
}

const root = document.querySelector("#react-root");

createRoot(root).render(<Button>Login</Button>);
/***************************************************************************************/

/********************************/
/* PROPS : INDEX.HTML*/
/********************************/
{ <div id="react-root"></div>}
/***************************************************************************************/
