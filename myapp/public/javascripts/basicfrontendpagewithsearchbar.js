// open side menu when icon is clicked
const iconButton = document.getElementsByClassName('icon')[0];
const navbarSide = document.getElementsByClassName('navbar-side')[0];

iconButton.addEventListener('click', openSideMenu);
function openSideMenu() {    
    navbarSide.style.display = 'block';
    iconButton.style.display = 'none';
}

//close menu bar when related button is clicked

function closeMenuBar() {  
    const iconButton = document.getElementsByClassName('icon')[0];
    const navbarSide = document.getElementsByClassName('navbar-side')[0];  
    navbarSide.style.display = 'none';
    iconButton.style.display = 'block';


}