/* 3. Baby Steps *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the getReactVersion method such that it returns the current installed version of React.
*/

/********************************/
/*iNTRO : INDEX.JS*/
/********************************/
/**
 * @param {number[]} numbers
 */
function getPositiveNumbers(numbers) {
    return numbers.filter(number => number > 0);
}

// sample usage (do not modify)
console.log(getPositiveNumbers([10, -5, 2, -4]));



/************************SUBMITTED************************/
import React from "react";

function getReactVersion() {
    return(React.version)
}

// sample usage (do not modify)
console.log(getReactVersion());
/***************************************************************************************/