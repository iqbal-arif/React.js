/* 4. Countdown *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Complete the Countdown Component such that it returns <h2>X times remaining</h2> where X is the number of times remaining.
The Countdown should start from 10 and decrease by 1 every time the <button> is clicked.
Don't worry about the number going below zero for now, we will fix it later.
*/

/********************************/
/*  CHANING STATE : INDEX.JS*/
/********************************/
import {useState} from "react";
import {createRoot} from "react-dom/client";

function Counter() {
    const [times, setTimes] = useState(0);

    return (<>
        <h2>{times} times clicked</h2>
        <button onClick={() => setTimes(times + 1)}>Add 1</button>
    </>);
}

createRoot(document.querySelector("#react-root")).render(<Counter />);
/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";
import {useState} from "react"
function Counter() {
    const [count, setCount] = useState(0)
    return (<>
        <h2>{count} times clicked</h2>
        <button onClick={()=> setCount(count+1)}>Add 1</button>
    </>);
}

createRoot(document.querySelector("#react-root")).render(<Counter />);
/***************************************************************************************/
/********************************/
/*  CHANING STATE : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
