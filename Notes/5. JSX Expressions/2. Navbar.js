/* 2. Navbar -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the getNavbar function such that it returns a div with the message: Logged in as USER. Log out
Where USER is the name of the user received as an argument.

*/

/********************************/
/* JSX EXPRESSIONS : INDEX.JS*/
/********************************/
function getNavbar(user) {
    return <div>Logged in as {user.name}. Log out</div>;
}

// sample usage (do not modify)
const element2 = getNavbar({
    name: "Sam",
    age: 34
});
console.log(element2);

/************************SUBMITTED************************/
function getNavbar(user) {
    if (user){
        return <div>Logged in as {user.name}. log out</div>
    } 
}

// sample usage (do not modify)
const element = getNavbar({
    name: "Sam",
    age: 34
});
console.log(element);
/***************************************************************************************/

/********************************/
/* INTRO JSX : INDEX.HTML*/
/********************************/
{/* <div id="react-root"></div> */}
/***************************************************************************************/*/

