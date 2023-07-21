/* 8. Destructuring props *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the Button component such that it uses its props to render the text & the className.
Try to use destructuring props in your answer.

*/

/********************************/
/* PROPS : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";

function Button(props){
    const {className, children} = props;
    return <button className={className}>{children}</button>;
}

const root = document.querySelector("#react-root");

createRoot(root).render(<Button className="primary">Login</Button>);


/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";

function Button(props){
    const {className,children} = props;
    return <button className={className}>{children}</button>;
}

const root = document.querySelector("#react-root");

createRoot(root).render(<Button className="primary">Login</Button>);
/***************************************************************************************/

/********************************/
/* PROPS : INDEX.HTML*/
/********************************/
{ <div id="react-root"></div>}
/***************************************************************************************/
