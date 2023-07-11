/* 4. Document.createElement *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Complete the function createCard such that it returns a <div class="card"></div> element (not an HTML string)

*/

/********************************/
/*iNTRO : INDEX.JS*/
/********************************/
function createCard() {
    const card = document.createElement("div");
    card.className = "card";
    return card;
}

// sample usage (do not modify)
console.log(createCard());


/************************SUBMITTED************************/
function createCard(e) {
    const divElement = document.createElement("div");
    divElement.className = "card";
    return document.body.appendChild(divElement);
    
}

// sample usage (do not modify)
console.log(createCard())
/***************************************************************************************/