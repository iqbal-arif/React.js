/* 5. React Elements II *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Complete the createTitle function such that it creates a React Element that represents an h1 with the text Welcome to our supermarket and the class hero-title.

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