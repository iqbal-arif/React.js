/* 5. Broken counter *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
The Counter Component is supposed to increase by 1 every click, but for some reason it's not working. It keeps saying 0 times clicked
Fix the implementation so that it works as expected.
*/

/********************************/
/*  CHANING STATE : INDEX.JS*/
/********************************/
import {useState} from "react";
import {createRoot} from "react-dom/client";

function Counter() {
    let [count, setCount] = useState(0);

    return (<>
        <div>{count} times clicked</div>
        <button onClick={() => setCount(count + 1)}>Add 1</button>
    </>);
}

createRoot(document.querySelector("#react-root")).render(<Counter />);
/************************SUBMITTED************************/
import {useState} from "react";
import {createRoot} from "react-dom/client";

function Counter() {
    let [count, setCount] = useState(0);

    return (<>
        <div>{count} times clicked</div>
        <button onClick={() => setCount(count = count + 1)}>Add 1</button>
    </>);
}

createRoot(document.querySelector("#react-root")).render(<Counter />);
/***************************************************************************************/
/********************************/
/*  CHANING STATE : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
