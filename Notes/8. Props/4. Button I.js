/* 4. Button I *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Fix the Button component such that it renders the button with class:

    class="btn-small" for <Button size="small" />
    class="btn-large" for <Button size="large" />
    class="btn-medium" for <Button />
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

function Button() {
    return <button>Text here</button>;
}

const root = document.querySelector("#react-root");
createRoot(root).render(<Button size="small" />);

/***************************************************************************************/

/********************************/
/* PROPS : INDEX.HTML*/
/********************************/
{ <div id="react-root"></div>}
/***************************************************************************************/
