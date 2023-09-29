/* 6. Countdown *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Complete the Countdown Component such that it creates a state called count and returns a message: <h2>X times remaining</h2> where X is the number of times remaining.
The Countdown should start from 10.
*/

/********************************/
/*  STATE W HOOKS : INDEX.JS*/
/********************************/
import {useState} from "react";
import {createRoot} from "react-dom/client";

function Countdown() {
    const [count, setCount] = useState(10);

    return <h2>{count} times remaining</h2>;
}

createRoot(document.querySelector("#react-root")).render(<Countdown />);
/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";
import {useState} from "react";

function Countdown() {
    const [count, setCount] = useState(10)
    return <h2>{count} times remaining</h2>;
}

createRoot(document.querySelector("#react-root")).render(<Countdown />);
/***************************************************************************************/
/********************************/
/*  STATE W HOOKS : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
