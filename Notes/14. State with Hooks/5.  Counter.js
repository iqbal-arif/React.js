/* 5. Counter *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Complete the Counter Component such that it creates a state for the seconds elapsed.
It should also return <h2>X seconds elapsed</h2> where X is the number of seconds elapsed.
Note that you will have to destructure both state variables to pass the tests. This is to help you practice the syntax.
*/

/********************************/
/*  STATE W HOOKS : INDEX.JS*/
/********************************/


/************************SUBMITTED************************/
import {useState} from "react";
import {createRoot} from "react-dom/client";

const [counter, setCounter] =useState(0);

function Counter() {
    return <h2></h2>;
}

createRoot(document.querySelector("#react-root")).render(<Counter />);
/***************************************************************************************/
/********************************/
/*  STATE W HOOKS : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
