/* 4. Button II *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the Button component such that it's able to render a custom text, for example: <Button>Login</Button> should render a <button>Login</button> element.

*/

/********************************/
/* PROPS : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";

function Button(props) {
    const size = props.size;
    let className = "btn-medium";

    if (size === "small"){
        className = "btn-small";
    } else if (size === "large"){
        className = "btn-large";
    }

    return <button className={className}>Text here</button>;
}

const root = document.querySelector("#react-root");
createRoot(root).render(<Button size="small" />);
/***********************************************************/
import {createRoot} from "react-dom/client";

function Button(props) {
    const size = props.size ?? "medium";

    return <button className={`btn-${size}`}>Text here</button>;
}

const root = document.querySelector("#react-root");
createRoot(root).render(<Button size="small" />);



/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";

function Button(){
    return null;
}

const root = document.querySelector("#react-root");

createRoot(root).render(<Button>Login</Button>);
/***************************************************************************************/

/********************************/
/* PROPS : INDEX.HTML*/
/********************************/
{ <div id="react-root"></div>}
/***************************************************************************************/
