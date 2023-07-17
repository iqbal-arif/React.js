/* 3. Dropdown menu *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the getDropdownMenu function such that it returns a representation of following HTML:

  <ul id="dropdown-menu" class="dropdown">
      <li>Profile</li>
      <li>Orders</li>
      <li class="separator"></li>
      <li>Logout</li>
  </ul>

*/

/********************************/
/* JSX II : INDEX.JS*/
/********************************/
function getDropdownMenu() {
    return (
        <ul id="dropdown-menu" className="dropdown">
            <li>Profile</li>
            <li>Orders</li>
            <li className="separator"></li>
            <li>Logout</li>
        </ul>
    );
}

// sample usage (do not modify)
console.log(getDropdownMenu());


/************************SUBMITTED************************/
function getDropdownMenu() {
    return(
          <ul id="dropdown-menu" className="dropdown">
            <li>Profile</li>
            <li>Orders</li>
            <li className="separator"></li>
            <li>Logout</li>
        </ul>
        )
}

// sample usage (do not modify)
console.log(getDropdownMenu());
/***************************************************************************************/

/********************************/
/* JSX II : INDEX.HTML*/
/********************************/
{/* <div id="react-root"></div> */}
/***************************************************************************************/*/
