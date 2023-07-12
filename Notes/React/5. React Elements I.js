/* 4. React Elements I *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the createDivElement function such that it creates a React Element that represents a div with the text Hello World!
*/

/********************************/
/*iNTRO : INDEX.JS*/
/********************************/
import React from "react";

function createDivElement() {
    return React.createElement("div", {}, "Hello World!")
}

// sample usage (do not modify)
console.log(createDivElement());

/************************SUBMITTED************************/
import React from "react";
function createDivElement() {
   return React.createElement("div", {}, "Hello World");
}

// sample usage (do not modify)
console.log(createDivElement());
/***************************************************************************************/