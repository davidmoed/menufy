//create a menu based on the page ids
function menufy() {

    //find all divs on the page
    const allDivs = document.getElementsByTagName('div');

    //get top of menu
    const menuLoc = document.querySelector('#mainNav');

    //go through each of the divs and check for ids
    for (let i = 1; i < allDivs.length; i++) {
        if ( allDivs[i].id !== "") {

            //get the id name
            let curId = allDivs[i].id;
            let formattedId = curId.split('-').join(' ');

            //create a new list element and add its content
            const newMenuObj = document.createElement('li');
            newMenuObj.innerHTML = '<a href="#' + curId + '">' + formattedId +'</a>';

            //add the menu items to the menu
            menuLoc.appendChild(newMenuObj);
        }
    }
}

//ensure the page loads before running the menufy script
document.addEventListener('DOMContentLoaded', menufy);
