/* 3. Array of objects filter *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the function getPassingTests such that it returns all the test results that have a passing grade (10 and above).

*/

/********************************/
/*iNTRO : INDEX.JS*/
/********************************/
/**
 * @param {object[]} results
 */
function getPassingTests(results) {
    return results.filter(result => result.grade >= 10);
}

// sample usage (do not modify)
const data1 = [{
    id: 1,
    grade: 10
}, {
    id: 2,
    grade: 4
}, {
    id: 3,
    grade: 18
}]
console.log(getPassingTests(data1))

/************************SUBMITTED************************/
/**
 * @param {object[]} results
 */
function getPassingTests(results) {
    return(results.filter(result => result.grade >= 10));

}

// sample usage (do not modify)
const data = [{
    id: 1,
    grade: 10
}, {
    id: 2,
    grade: 4
}, {
    id: 3,
    grade: 18
}]
console.log(getPassingTests(data))

/***************************************************************************************/
