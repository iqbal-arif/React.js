/* 2. Conditional rendering *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Fix the WelcomeUser Component such that it returns nothing when the user prop is not provided.
We've already rendered 2 examples for you, one where the user is provided and the other where the user is not provided. However, one of these is failing for some reason.
*/

/********************************/
/*  JSX ADVANCED : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";

function WelcomeUser(props) {
    if (!props.user) {
        return null;
    }
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

function WelcomeUser(props) {
    if(!props.user){
    return null
    }
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
/***************************************************************************************/

/********************************/
/* JSX ADVANCED : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
/***************************************************************************************/*/
