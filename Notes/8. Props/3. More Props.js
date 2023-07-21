

/* 3. More props *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Fix the Navbar component such that it renders:

    1. a <div> with the message: Welcome X where X is the user's full name.
    2. a <p> with the message: You've got Y notifications where Y is the number of notifications.

    As you can see, the props can be a string or even an array or an object!
*/

/********************************/
/* PROPS : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";

function Navbar(props) {
    return (<>
        <div>Welcome {props.user.first_name} {props.user.last_name}</div>
        <p>You've got {props.notifications.length} notifications</p>
    </>);
}

let notifications=[{
    id: 1,
    text: "Order delivered"
}, {
    id: 2,
    text: "Order received"
}];

const user = {
    first_name: "Sam",
    last_name: "Wolf"
};

const root = document.querySelector("#react-root");
createRoot(root).render(<Navbar notifications={notifications} user={user} />);


/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";

function Navbar(props) {
    return (
        <>
        <div>Welcome {props.user.first_name + " " + props.user.last_name}</div>
        <p>You've got {props.notifications.length} notifications</p>
        </>
    )
}

let notifications = [{
    id: 1,
    text: "Order delivered"
}, {
    id: 2,
    text: "Order received"
}];

const user = {
    first_name: "Sam",
    last_name: "Wolf"
};

const root = document.querySelector("#react-root");
createRoot(root).render(<Navbar notifications={notifications} user={user} />);

/***************************************************************************************/

/********************************/
/* PROPS : INDEX.HTML*/
/********************************/
{ <div id="react-root"></div>}
/***************************************************************************************/
