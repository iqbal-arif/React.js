/* 5. Countdown *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Complete the Countdown Component such that it returns <h2>X times remaining</h2> where X is the number of times remaining.
The Countdown should start from 10 and decrease by 1 every time the <button> is clicked.
Don't worry about the number going below zero for now, we will fix it later.
*/

/********************************/
/*  CHANING STATE : INDEX.JS*/
/********************************/
import {useState} from "react";
import {createRoot} from "react-dom/client";

function Countdown() {
    const [count, setCount] = useState(10);
    
    return (<>
        <h2>{count} times remaining</h2>
        <button onClick={() => setCount(count - 1)}>Count down</button>
    </>);
}

createRoot(document.querySelector("#react-root")).render(<Countdown />);
/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";
import {useState} from "react"
function Countdown() {
    const [countdown, setCountdown] = useState(10)
    return (<>
        <h2>{countdown} times remaining</h2>
        <button onClick={() => setCountdown(countdown-1)}>Count down</button>
    </>);
}

createRoot(document.querySelector("#react-root")).render(<Countdown />);
/***************************************************************************************/
/********************************/
/*  CHANING STATE : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
