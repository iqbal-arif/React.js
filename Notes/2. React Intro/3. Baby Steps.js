/* 3. Baby Steps *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the getReactVersion method such that it returns the current installed version of React.
*/

/********************************/
/*iNTRO : INDEX.JS*/
/********************************/
/**
 * @param {number[]} numbers
 */
import React from "react";

function getReactVersion() {
    return React.version;
}

// sample usage (do not modify)
console.log(getReactVersion());


/************************SUBMITTED************************/
import React from "react";

function getReactVersion() {
    return(React.version)
}

// sample usage (do not modify)
console.log(getReactVersion());
/***************************************************************************************/