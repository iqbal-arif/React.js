/* 2. Navbar II-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the getNavbar function such that it returns a div with the message: Logged in as USER. Log out
Where USER is the first name and last name of the user received as an argument.


*/

/********************************/
/* JSX EXPRESSIONS : INDEX.JS*/
/********************************/
function getNavbar(user) {
    return <div>Logged in as {user.firstName} {user.lastName}. Log out</div>;
}

// sample usage (do not modify)
const element2 = getNavbar({
    firstName: "Sam",
    lastName: "Dung",
    age: 27
});
console.log(element);


/************************SUBMITTED************************/
function getNavbar(user) {
    if (user.firstName && user.lastName){
        return <div>Logged in as {user.firstName+ " " +user.lastName}. Log out</div>
    }
    }
    
    // sample usage (do not modify)
    const element = getNavbar({
        firstName: "Sam",
        lastName: "Dung",
        age: 27
    });
    console.log(element);
/***************************************************************************************/

/********************************/
/* INTRO JSX : INDEX.HTML*/
/********************************/
{/* <div id="react-root"></div> */}
/***************************************************************************************/*/
