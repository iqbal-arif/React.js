/* 3. Dark theme II *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Update the Navbar Component such that it renders:

    in dark mode when the theme is "dark"
    in light mode when the theme is "light"

In both cases, the navbar needs to have the class navbar in addition of the dark or light.
We've already given you the styles in the index.css file.

*/

/********************************/
/*  JSX ADVANCED : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";

function Navbar(props) {
    return <h1 className={props.theme}>Online supermarket</h1>
}

const root = document.querySelector("#react-root");

createRoot(root).render(<>
        <Navbar theme="light" />
        <Navbar theme="dark" />
    </>);



/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";
import clsx from "clsx";

function Navbar(props) {
    let theme=props.theme;
   console.log(theme)
    const className = clsx({
    "navbar": true,
    "light": theme==="light"?true:false,
    "dark": theme==="dark"?true:false,

});

  return <h1 className={className}>Online supermarket</h1>
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


