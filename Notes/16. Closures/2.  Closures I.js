/* 2. Closures I *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Complete the getFullName function such that returns the full name which is the first and last name with a space character in between.
Do not change anything else in the code.
*/

/********************************/
/*  STATE W HOOKS : INDEX.JS*/
/********************************/
/**
* @param {string} first_name
* @param {string} last_name
*/
function getUser(first_name, last_name) {

    function getFullName() {
        return `${first_name} ${last_name}`;
    }

    return {
        first_name: first_name,
        last_name: last_name,
        full_name: getFullName()
    }
}

// sample usage (do not modify)
console.log(getUser("Sam", "Doe"));
/************************SUBMITTED************************/
/**
* @param {string} first_name
* @param {string} last_name
*/
function getUser(first_name, last_name) {

    function getFullName() {
        //TODO: return full name (with a space between first and last name)
        return `${first_name} ${last_name}`;
    }

    return {
        first_name: first_name,
        last_name: last_name,
        full_name: getFullName()
    }
}

// sample usage (do not modify)
console.log(getUser("Sam", "Doe"));
/***************************************************************************************/
/********************************/
/*  STATE W HOOKS : INDEX.HTML*/
/********************************/
<div id="react-root"></div>
