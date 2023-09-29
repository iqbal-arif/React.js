/* 4. Counter *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Complete the Counter Component such that renders <h2>X times clicked</h2> where X is the number of times the <button> has been clicked.
Make sure to check it out in the Browser preview tab and see how React re-renders the DOM automatically when you click on the button.
*/

/********************************/
/*  STATE W HOOKS : INDEX.JS*/
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
/*  STATE W HOOKS : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
