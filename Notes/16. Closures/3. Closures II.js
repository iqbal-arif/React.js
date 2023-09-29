/* 2. Closures I *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Complete the getFullName function such that returns the full name which is the first and last name with a space character in between.
Do not change anything else in the code.
*/

/********************************/
/*  CLOSURES : INDEX.JS*/
/********************************/
function getUser(age) {
    function getCanVote() {
        return age >= 18;
    }
    return {
        can_vote: getCanVote()
    }
}

// sample usage (do not modify)
console.log(getUser(20));
/************************SUBMITTED************************/
function getUser(age) {
function getCanVote() {
    return age >= 18;

}
    return {
        can_vote: getCanVote()
    }
}

// sample usage (do not modify)
console.log(getUser(20));
/***************************************************************************************/
/********************************/
/*  CLOSURES : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
