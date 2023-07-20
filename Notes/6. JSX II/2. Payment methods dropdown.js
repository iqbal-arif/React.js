/* 2. Payment methods dropdown-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the getPaymentMethods function such that it returns a <select> with a class payment-methods (plural) containing 3 <option> elements, representing the following payment methods:

    Card
    Paypal
    Cash on delivery

Every option should have a class payment-method (singular).

*/

/********************************/
/* JSX II : INDEX.JS*/
/********************************/
function getPaymentMethods() {
    return (
        <select className="payment-methods">
            <option className="payment-method">Card</option>
            <option className="payment-method">Paypal</option>
            <option className="payment-method">Cash on delivery</option>
        </select>
    );
}

// sample usage (do not modify)
console.log(getPaymentMethods());



/************************SUBMITTED************************/
function getPaymentMethods() {
    return (
   <select className="payment-methods">
     <option className="payment-method" value="Card">Card</option>
     <option className="payment-method" value="Paypal">Paypal</option>
     <option className="payment-method" value="Cash on delivery">Cash on delivery</option>
   </select>
    );
   }
   
   // sample usage (do not modify)
   console.log(getPaymentMethods());
/***************************************************************************************/

/********************************/
/* JSX II : INDEX.HTML*/
/********************************/
{/* <div id="react-root"></div> */}
/***************************************************************************************/*/
