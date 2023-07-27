

/* 2. Conditional rendering *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Fix the WelcomeUser Component such that it returns nothing when the user prop is not provided.
We've already rendered 2 examples for you, one where the user is provided and the other where the user is not provided. However, one of these is failing for some reason.
*/

/********************************/
/*  JSX ADVANCED : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";

function WelcomeUser(props) {
    return <h1>Welcome {props.user.name}</h1>
}

const user = {
    id: 1,
    name: "Sam Blue"
};
const root = document.querySelector("#react-root");

createRoot(root).render(<>
        <WelcomeUser user={user} />
        <WelcomeUser />
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
