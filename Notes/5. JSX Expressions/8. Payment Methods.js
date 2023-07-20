/* 6. Payment methods-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the getPaymentMethod function such that it returns the payment method.
Every payment method should be a list item (li) with the 2 classes,

    the first one should be payment-method.
    the second one should be based on the payment method. So if the payment method is Paypal, the class should be: option-paypal.
    So for example getPaymentMethod("Paypal") would return an <li className="payment-method option-paypal">Paypal</li>.

*/

/********************************/
/* JSX EXPRESSIONS : INDEX.JS*/
/********************************/
function getPaymentMethod(name) {
    return <li className={"payment-method option-" + name.toLowerCase()}>{name}</li>
}

// sample usage (do not modify)
console.log(getPaymentMethod("Card"));
console.log(getPaymentMethod("Paypal"));


/************************SUBMITTED************************/
function getPaymentMethod(name) {
    if (name==="Card"){
        const paymentOption = name.toLowerCase();
        return <li className={`payment-method option-${paymentOption}`}>{name}</li>
    }else if(name === "Paypal"){
        const paymentOption = name.toLowerCase();
        return <li className={`payment-method option-${paymentOption}`}>{name}</li>
    }
}

// sample usage (do not modify)
console.log(getPaymentMethod("Card"));
console.log(getPaymentMethod("Paypal"))
/***************************************************************************************/

/********************************/
/* INTRO JSX : INDEX.HTML*/
/********************************/
{/* <div id="react-root"></div> */}
/***************************************************************************************/*/
