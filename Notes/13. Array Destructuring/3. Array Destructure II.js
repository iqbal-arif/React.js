
/* 3. Array destructuring II *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Do not modify any of the code in this challenge, but simply add 1 line under the // TODO where you destructure the user array into name and age variables.

We will test that you have used the destructuring syntax for this challenge.

*/

/********************************/
/*  ARRAY DESTRUCTURE : INDEX.JS*/
/********************************/
/**
 * @param {array} user
 */
function printUserDetails(user) {
    console.log(user);
    const [name, age] = user;
    return `${name} is ${age} years old.`;
}


// Sample usage (do not modify)
console.log(printUserDetails(["Sam Doe", 31]));
console.log(printUserDetails(["John Malaga", 23]));


/************************SUBMITTED************************/
/**
 * @param {array} user
 */
function printUserDetails(user) {
    console.log(user);
    // TODO: write your code below this line
    const [name,age] = user;
    return `${name} is ${age} years old.`;
}


// Sample usage (do not modify)
console.log(printUserDetails(["Sam Doe", 31]));
console.log(printUserDetails(["John Malaga", 23]));
/***************************************************************************************/

/********************************/
/* ARRAY DESTRUCTURE : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
/***************************************************************************************/*/
