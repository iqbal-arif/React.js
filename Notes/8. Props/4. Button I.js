/* 4. Button I *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Fix the Button component such that it renders the button with class:

    class="btn-small" for <Button size="small" />
    class="btn-large" for <Button size="large" />
    class="btn-medium" for <Button />
*/

/********************************/
/* PROPS : INDEX.JS*/
/********************************/
import {createRoot} from "react-dom/client";

function Button(props) {
    const size = props.size;
    let className = "btn-medium";

    if (size === "small"){
        className = "btn-small";
    } else if (size === "large"){
        className = "btn-large";
    }

    return <button className={className}>Text here</button>;
}

const root = document.querySelector("#react-root");
createRoot(root).render(<Button size="small" />);
/***********************************************************/
import {createRoot} from "react-dom/client";

function Button(props) {
    const size = props.size ?? "medium";

    return <button className={`btn-${size}`}>Text here</button>;
}

const root = document.querySelector("#react-root");
createRoot(root).render(<Button size="small" />);



/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";

function Button(props) { 
    let size = props.size;      
            // if(size==="small"){
            //     return <button className="btn-small"></button>;
            // } else if (size ==="large"){
            //     return <button className="btn-large"></button>;
            // } else {
            //     return <button className="btn-medium"></button>;
            // }
        // Nullish Coalescing Assignment (??=) Operator in JavaScript
        // if size = nullish or undefined 
        size ??= "medium"
        return <button className={`btn-${size}`}></button>;
 
}

const root = document.querySelector("#react-root");
createRoot(root).render(<Button size="small" />);


/***************************************************************************************/

/********************************/
/* PROPS : INDEX.HTML*/
/********************************/
{ <div id="react-root"></div>}
/***************************************************************************************/
