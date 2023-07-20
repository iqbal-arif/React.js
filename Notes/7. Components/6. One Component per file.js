/* 4. One Component per file *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Create the Hero Component in Hero.js that returns the following HTML:

<h1 class="title">Supermarket</h1>
<p>Start shopping</p>

and then render it in the DOM from the index.js.
*/

/********************************/
/* COMPONENT : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";

import Hero from "./Hero";

const root = document.querySelector("#react-root");
createRoot(root).render(<Hero />);

/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";

import Hero from "./Hero.js";

const root = document.querySelector("#react-root");
createRoot(root).render(<Hero/>);

// TODO:

/********************************/
/* COMPONENT : HERO.JS*/
/********************************/
// Define the Hero Component
export default function Hero(){
    return (
        <>
            <h1 className="title">Supermarket</h1>
            <p>Start shopping</p>
        </>
    )
}

/************************SUBMITTED************************/
// Define the Hero Component
export default function Hero(){
    return(
        <>
        <h1 className="title">Supermarket</h1>
        <p>Start shopping</p>
        </>
    );
}
/***************************************************************************************/

/********************************/
/* COMPONENT : INDEX.HTML*/
/********************************/
{ <div id="react-root"></div>}
/***************************************************************************************/
