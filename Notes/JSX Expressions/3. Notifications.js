/* 2. Notifications -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the getNotifications function such that it returns a p with the message: You have X new notifications
Where X is the number of notifications.

*/

/********************************/
/* JSX EXPRESSIONS : INDEX.JS*/
/********************************/
function getNotifications(notifications) {
    return <p>You have {notifications.length} new notifications</p>
}

// sample usage (do not modify)
const notifications = [{
    id: 1,
    text: "Your order has been delivered"
}, {
    id: 2,
    text: "Your coupon code has expired"
}];
const element = getNotifications(notifications);
console.log(element);


/************************SUBMITTED************************/
function getNotifications(notifications) {
    return <p>You have {notifications.length} new notifications</p>
   }
   
   // sample usage (do not modify)
   const notifications = [{
       id: 1,
       text: "Your order has been delivered"
   }, {
       id: 2,
       text: "Your coupon code has expired"
   }];
   const element = getNotifications(notifications);
   console.log(element);
/***************************************************************************************/

/********************************/
/* INTRO JSX : INDEX.HTML*/
/********************************/
{/* <div id="react-root"></div> */}
/***************************************************************************************/*/
