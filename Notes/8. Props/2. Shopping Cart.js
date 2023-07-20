/* 2. Shopping Cart *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Fix the ShoppingCart component such that it displays: X items in your cart where X is the count that the component receives.
*/

/********************************/
/* COMPONENT : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";

function ShoppingCart(props) {
    return <div>{props.count} items in your cart</div>;
}

const root = document.querySelector("#react-root");
createRoot(root).render(<ShoppingCart count="5" />);


/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";

function ShoppingCart(props) {
    return <div>{props.count} items in your cart</div>;
}

const root = document.querySelector("#react-root");
createRoot(root).render(<ShoppingCart count="5" />);

/***************************************************************************************/

/********************************/
/* COMPONENT : INDEX.HTML*/
/********************************/
{ <div id="react-root"></div>}
/***************************************************************************************/
