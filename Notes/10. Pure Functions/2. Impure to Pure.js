/* 2. Impure to Pure *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Fix the Navbar Component such that it becomes pure.
It should not modify its props and it should produce the same output when given the same input.
*/

/********************************/
/*  PURE FUNCTIONS : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";

function Navbar(props) {
    const full_name = `${props.user.first_name} ${props.user.last_name}`;
    return (<div>
        Hello {full_name}.<br />
        You are now {props.user.age + 1} years old.
    </div>);
}

const user = {
    first_name: "Sam",
    last_name: "Doe",
    age: 26
}

const root = document.querySelector("#react-root");
// does the Component render the same thing
// when given the same props?
createRoot(root).render(<>
    <Navbar user={user} />
    <Navbar user={user} />
</>);


/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";

function Navbar(props) {
    const full_name = `${props.user.first_name} ${props.user.last_name}`;
    const age = props.user.age;
    return (<div>
        Hello {full_name}.<br />
        You are now {age+1} years old.
    </div>);
}

const user = {
    first_name: "Sam",
    last_name: "Doe",
    age: 26
}

const root = document.querySelector("#react-root");
// does the Component render the same thing
// when given the same props?
createRoot(root).render(<>
    <Navbar user={user} />
    <Navbar user={user} />
</>);
/***************************************************************************************/

/********************************/
/* PURE FUNCTIONS : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
/***************************************************************************************/*/
