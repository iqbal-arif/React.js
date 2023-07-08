/* 1. Array filter *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the function getPositiveNumbers such that it returns all numbers greater than 0.

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
/**
 * @param {number[]} numbers
 */
function getPositiveNumbers(numbers) {
    return(numbers.filter(number => number > 0));

}

// sample usage (do not modify)
console.log(getPositiveNumbers([10, -5, 2, -4]));
/***************************************************************************************/
