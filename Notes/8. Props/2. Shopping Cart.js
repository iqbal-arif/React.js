
 
/* 2. Shopping Cart *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Fix the ShoppingCart component such that it displays: X items in your cart where X is the count that the component receives.
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

function ShoppingCart() {
    return <div></div>;
}

const root = document.querySelector("#react-root");
createRoot(root).render(<ShoppingCart count="5" />);

/***************************************************************************************/

/********************************/
/* COMPONENT : INDEX.HTML*/
/********************************/
{ <div id="react-root"></div>}
/***************************************************************************************/
