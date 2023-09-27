/* 2. Array destructuring I *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Do not modify any of the code in this challenge, but simply add 1 line under the // TODO where you destructure the name array into first and last variables.

We will test that you have used the destructuring syntax for this challenge.

*/

/********************************/
/*  ARRAY DESTRUCTURE : INDEX.JS*/
/********************************/
/**
 * @param {string[]} name
 */
function printFullName(name) {
    console.log(name);
    const [first, last] = name;
    return `${first} ${last}`;
}


// Sample usage (do not modify)
console.log(printFullName(["Sam", "Doe"]));
console.log(printFullName(["John", "Malaga"]));

/************************SUBMITTED************************/
/**
 * @param {string[]} name
 */
function printFullName(name) {
    console.log(name);
    // TODO: write your code below this line
    const [first, last] = name;
    return `${first} ${last}`;
}


// Sample usage (do not modify)
console.log(printFullName(["Sam", "Doe"]));
console.log(printFullName(["John", "Malaga"]));
/***************************************************************************************/

/********************************/
/* ARRAY DESTRUCTURE : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
/***************************************************************************************/*/
