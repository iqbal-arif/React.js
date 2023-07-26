/* 2. Impure to Pure *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Fix the Navbar Component such that it becomes pure.
It should not modify its props and it should produce the same output when given the same input.
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
