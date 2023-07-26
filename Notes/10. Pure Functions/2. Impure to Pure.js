/* 2. Hero Component *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Create a Hero Component that represents an h1 with the text: Welcome to our supermarket followed by a paragraph with the text: Start shopping.

*/

/********************************/
/*  PURE FUNCTIONS : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";

function Hero(){
    return (
      <>
        <h1>Welcome to our supermarket</h1>
        <p>Start shopping</p>
      </>
    );
}

// do not modify
createRoot(document.querySelector("#react-root")).render(<Hero></Hero>);

/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";
 function Hero(){
     return (
         <div>
             <h1>Welcome to our supermarket</h1>
            <p>Start shopping</p>
         </div>
     );
 }

// do not modify
createRoot(document.querySelector("#react-root")).render(<Hero></Hero>);
/***************************************************************************************/

/********************************/
/* PURE FUNCTIONS : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
/***************************************************************************************/*/
