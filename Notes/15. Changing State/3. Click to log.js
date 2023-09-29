/* 3. Click to log *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Add a click event listener on the <button> so that it console logs: Hello World! when the button is clicked.
Give it a try in the Browser tab. Click on the button and see if the console shows up :)
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
