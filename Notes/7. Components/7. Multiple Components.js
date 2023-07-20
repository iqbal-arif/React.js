 
/* 7. Multiple Components *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

    Create a Button Component in Button.js that returns an button element with the text: Button text
    Create a Link Component in Link.js that returns an a element with the text: Link text
    From the index.js using the 2 components above, render 2 consecutive buttons followed by 1 link inside the App Component.

Note: Notice how the App is the main Component being rendered and this Component renders other ones. This is typical in most React apps where there's only 1 render call. You should not call render more than once.
*/

/********************************/
/* COMPONENT : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";
import Button from "./Button.js";
import Link from "./Link.js";

function App() {
    return (
        <>
            <Button />
            <Button />
            <Link />
        </>
    );
}

// Sample usage (do not modify)
createRoot(document.querySelector("#react-root")).render(<App />);


/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";
import Button from "./Button.js";
import Link from "./Link.js";


function App() {
    return (<>
         <Button />
         <Button />
         <Link />

    </>);
}

// const root = document.querySelector("#react-root");

// createRoot(root).render(<App />);

// Sample usage (do not modify)
createRoot(document.querySelector("#react-root")).render(<App />);

/********************************/
/* COMPONENT : BUTTON.JS*/
/********************************/
export default function Button(){
    return <button>Button text</button>
}

/************************SUBMITTED************************/
export default function Button(){
    return (
        <>
            <button>Button text</button>
        </>
    )
}
/********************************/
/* COMPONENT : LINK.JS*/
/********************************/
export default function Link(){
    return <a>Link text</a>
}

/************************SUBMITTED************************/
export default function Link(){
    return (
        <>
        <a scr="link text">Link text</a>
        </>
    )
}
/***************************************************************************************/

/********************************/
/* COMPONENT : INDEX.HTML*/
/********************************/
{ <div id="react-root"></div>}
/***************************************************************************************/
