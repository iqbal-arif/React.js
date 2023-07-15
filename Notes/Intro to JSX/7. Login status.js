/* 7. Login status -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the getLoginStatus method by returning a paragraph with the text: You are logged in when the user's logged in and a link to the login page otherwise with the text Login. The login page is located at /login.
In summary:

    when the user is logged in, you should only return a paragraph
    otherwise you should only return an anchor (a tag)

*/

/********************************/
/* INTRO JSX : INDEX.JS*/
/********************************/
/**
 * @param {boolean} is_loggedin
 */
function getLoginStatus(is_loggedin) {
    if (is_loggedin) {
        return <p>You are logged in</p>;
    }
    return <a href="/login">Login</a>;
}

// sample usage (do not modify)
console.log(getLoginStatus(true));
console.log(getLoginStatus(false));


/************************SUBMITTED************************/
/**
 * @param {boolean} is_loggedin
 */
function getLoginStatus(is_loggedin) {
    if(is_loggedin){
        return <p>You are logged in</p>
    } else{
        return  <a href="/login">Login</a> 
    }

}

// sample usage (do not modify)
console.log(getLoginStatus(true));
console.log(getLoginStatus(false));
/***************************************************************************************/

/********************************/
/* INTRO JSX : INDEX.HTML*/
/********************************/
{/* <div id="react-root"></div> */}
/***************************************************************************************/*/
