/* 5. React Elements II *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Complete the createTitle function such that it creates a React Element that represents an h1 with the text Welcome to our supermarket and the class hero-title.

*/

/********************************/
/*iNTRO : INDEX.JS*/
/********************************/
import React from "react";

function createTitle() {
    return React.createElement("h1", {
        className: "hero-title"
    }, "Welcome to our supermarket");
}

// sample usage (do not modify)
console.log(createTitle());


/************************SUBMITTED************************/
import React from "react";
function createTitle() {
   return React.createElement("h1",{className: "hero-title"}, "Welcome to our supermarket");
}

// sample usage (do not modify)
console.log(createTitle());
/***************************************************************************************/