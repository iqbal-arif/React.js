/* 1. Get email -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Uppercase a string

Complete the function sayLouder such that it makes the text in uppercase.
*/


/********************************/
/*iNTRO : INDEX.JS*/
/********************************/
/**
 * @param {string} email
 */
export const getEmail = email => {
    return email.trim();
}

/************************SUBMITTED************************/
/**
 * @param {string} text
 */
function sayLouder(text) {
    return text.toUpperCase()
}

// sample usage (do not modify)
console.log(sayLouder("It works"));
console.log(sayLouder("how are you?"));
******************************
/*STRINGS II : INDEX.JS*/
******************************