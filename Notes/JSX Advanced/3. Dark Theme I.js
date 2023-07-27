/* 3. Dark theme I *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Update the Navbar Component such that it renders:

    in dark mode when the theme is "dark"
    in light mode when the theme is "light"

We've already given you the styles for dark theme and light theme which you need to apply.

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

function Navbar() {
    return <h1>Online supermarket</h1>
}

const root = document.querySelector("#react-root");

createRoot(root).render(<>
        <Navbar theme="light" />
        <Navbar theme="dark" />
    </>);
/***************************************************************************************/

/********************************/
/* JSX ADVANCED : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
/***************************************************************************************/

/********************************/
/* JSX ADVANCED : INDEX.CSS*/
/********************************/
body {
    background-color: #ececec;
}

.dark {
    background-color: #222;
    color: white;
}

.light {
    background-color: white;
    color: #222;
}
/***************************************************************************************/


