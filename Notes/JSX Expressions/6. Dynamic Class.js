/* 6. Dynamic class-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the getPaymentButton function such that it returns a button with the text Pay. When the user is logged out, it should have the class disabled, and otherwise the class clickable.

*/

/********************************/
/* JSX EXPRESSIONS : INDEX.JS*/
/********************************/
function getPaymentButton(user) {
    let name = "disabled";
    if (user.is_loggedin) {
        name = "clickable";
    }

    return <button className={name}>Pay</button>;
}

// sample usage (do not modify)
const user2 = {
    id: 1,
    is_loggedin: true
}
console.log(getPaymentButton(user));

/************************SUBMITTED************************/
function getPaymentButton(user) {
    let name = "disabled";
    if (user.is_loggedin) {
        name = "clickable";
        return <button className={name}>Pay</button>
    }else{

    return <button className={name}>Pay</button>;
    }
}

// sample usage (do not modify)
const user = {
    id: 1,
    is_loggedin: true
}
console.log(getPaymentButton(user));
/***************************************************************************************/

/********************************/
/* INTRO JSX : INDEX.HTML*/
/********************************/
{/* <div id="react-root"></div> */}
/***************************************************************************************/*/
