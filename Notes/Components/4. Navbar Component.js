/* 4. Navbar Component *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Using React DOM and React.createElement render the Navbar component into the DOM.

*/

/********************************/
/* COMPONENT : INDEX.JS*/
/********************************/
import React from "react";
import {createRoot} from "react-dom/client";

// do not modify this function
function Navbar() {
    return (
        <>
            <h3>Supermarket</h3>
            <p>Start shopping</p>
        </>
    );
}

const root = document.querySelector("#react-root");

createRoot(root).render(React.createElement(Navbar, {}));


/************************SUBMITTED************************/
import React from "react";
import {createRoot} from "react-dom/client";

// do not modify this function
function Navbar() {
    return (
        <>
            <h3>Supermarket</h3>
            <p>Start shopping</p>
        </>
    );
}

const root = document.querySelector("#react-root");
const navbar = React.createElement(Navbar, {});
createRoot(root).render(navbar);

// TODO:
/***************************************************************************************/

/********************************/
/* COMPONENT : INDEX.HTML*/
/********************************/
{/* <div id="react-root"></div> */}
/***************************************************************************************/*/
