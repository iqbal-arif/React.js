/* 7. UI Kit > Button *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Let's improve the Button from our UI Kit to make it customizable from the outside.

So for example, <Button tabIndex="2" disabled={true}>Login</Button> would render a <button tabIndex="2" disabled>Login</button>

Keep in mind that we may pass other attributes other than tabIndex and disabled and they should still work.

*/

/********************************/
/*  JSX ADVANCED : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";
import Button from "./Button.js";
console.log(Button)
function App() {
    return (<>
        <Button tabIndex="2" disabled={true}>Login</Button>
        <Button className="ui-button" disabled={false}>Register</Button>
    </>);
}

createRoot(document.querySelector("#react-root")).render(<App />);



/***************************************************************************************/
/********************************/
/*  JSX ADVANCED : BUTTON.JS*/
/********************************/
export default function Button(props) {
    const {children, ...rest} = props;
    return <button {...rest}>{children}</button>
}

/************************SUBMITTED************************/
export default function Button(props) {
    const {children, ...rest} = props;
    console.log(children)
    console.log(rest)
    return <button {...rest}>{children}</button>
}
/***************************************************************************************/
/********************************/
/* JSX ADVANCED : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
/***************************************************************************************/



