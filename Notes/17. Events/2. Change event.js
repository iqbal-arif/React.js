/* 2. Change event *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Attach a change event to the select element such that it console logs: "Country changed" (case sensitive) when the change event triggers.
When testing this in the browser window, keep in mind that the change event only triggers when the value has changed. So going from no selection to Netherlands will trigger the event. Then going from Netherlands to Belgium will trigger the event again.
*/

/********************************/
/*  CHANGE EVENT : INDEX.JS*/
/********************************/
function getUser(age) {
    function getCanVote() {
        return age >= 18;
    }
    return {
        can_vote: getCanVote()
    }
}

// sample usage (do not modify)
console.log(getUser(20));

function getUser(age) {
    function getCanVote() {
        return age >= 18;
    }
    return {
        can_vote: getCanVote()
    }
}

// sample usage (do not modify)
console.log(getUser(20));
/************************SUBMITTED************************/
import {createRoot} from "react-dom/client";
import {useState} from "react"
function Navbar() {
    function option() {
    const countryList = ["Netherlands","Belgium", "France"]
    const [a,b,c]= countryList;
        // console.log(b)
        if ("Netherlands"){
        // console.log(a)
        console.log(`${a} changed`);
        } else if ("Belgium"){
        console.log(`${b} changed`);
        } else{
        console.log(`${c} changed`);
        }

}
     function optionSelection(){
         const ["Netherlands","Belgium", "France"] = options;
         let country;
         if (a = "Netherlands"){
             return country;
         }
     }
    return (
    <select className="countries" onChange={option}>
        <option>Netherlands</option>
        <option>Belgium</option>
        <option>France</option>
    </select>
    );
}

function optionSelection(){
         const ["Netherlands","Belgium", "France"] = options;
         let country;
         if (a = "Netherlands"){
             return country;
         }
     }
    return (
    <select className="countries" onChange={option}>
        <option>Netherlands</option>
        <option>Belgium</option>
        <option>France</option>
    </select>
    );
}


createRoot(document.querySelector("#react-root")).render(<Navbar />);

/***************************************************************************************/
/********************************/
/*  CHANGE EVENT : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
