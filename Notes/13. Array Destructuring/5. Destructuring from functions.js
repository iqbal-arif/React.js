/* 4. Destructuring from functions *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Complete the destructureTest function such that it calls the getAge function and destructures it into 2 variables: age and describeAge.
Note: make sure you use the provided names for the variable and function to pass the tests.
Optional: play around with the age variable and describeAge by logging them to the console.

*/

/********************************/
/*  ARRAY DESTRUCTURE : INDEX.JS*/
/********************************/
//index.js
import getAge from "./helpers.js";

function destructureTest() {
    const [age, describeAge] = getAge();
    console.log(age);
    console.log(describeAge());
}

/************************SUBMITTED************************/
import getAge from "./helpers.js";

function destructureTest() {
    // TODO: destructure the result of getAge into age and describeAge
    const [age, describeAge] = getAge()
console.log(age)
console.log(describeAge())
}
/***************************************************************************************/

/********************************/
/* ARRAY DESTRUCTURE : HELPER.JS*/
/********************************/
export default function getAge() {
    const age = 18;

    function describeAge() {
        return `The age is ${age} years old`;
    }

    //return age and a function that describes the age
    return [age, describeAge];
}
/***************************************************************************************/*/
