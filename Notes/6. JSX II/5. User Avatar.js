/* 3. User Avatar *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the getUserAvatar function such that it returns an img with an src pointing to the path received as an argument.

*/

/********************************/
/* JSX II : INDEX.JS*/
/********************************/
function getUserAvatar(path) {
    return <img src={path} />;
}

// sample usage (do not modify)
const url = "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1576923026/react-tutorial/misc/user.png";
console.log(getUserAvatar(url));

/************************SUBMITTED************************/
function getUserAvatar(path) {
    return <img src={path}/>
   }
   
   // sample usage (do not modify)
   const url = "https://res.cloudinary.com/dbfn5lnvx/image/upload/v1576923026/react-tutorial/misc/user.png";
   console.log(getUserAvatar(url));
/***************************************************************************************/

/********************************/
/* JSX II : INDEX.HTML*/
/********************************/
{/* <div id="react-root"></div> */}
/***************************************************************************************/*/
