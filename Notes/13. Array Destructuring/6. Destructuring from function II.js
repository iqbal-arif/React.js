/* 6. Destructuring from functions IIs *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
Complete the getPrice function in helpers.js such that it returns the price number and the describePrice function.
*/

/********************************/
/*  ARRAY DESTRUCTURE : HELPERS.JS*/
/********************************/
//helpers.js
export default function getPrice() {
    const price = 10;

    function describePrice() {
        return `The price is ${price} euros`;
    }

    return [price, describePrice];
}
/************************SUBMITTED************************/
export default function getPrice() {
    const price = 10;

    function describePrice() {
        return `The price is ${price} euros`;
    }

    // TODO: return both the price and describePrice
    return [price, describePrice] 
}

/***************************************************************************************/

/********************************/
/* ARRAY DESTRUCTURE : INDEX.JS*/
/********************************/
import getPrice from "./helpers.js";

function destructureTest() {
    const [price, describePrice] = getPrice();
    console.log(price);
    console.log(describePrice());
}

destructureTest();
*************************************************************************************/*/
