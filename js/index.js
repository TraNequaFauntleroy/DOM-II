
//  QUERY SELECTORS
const headLine = document.querySelector('.logo-heading');
console.log('headline:', headLine);
const navHeader = document.querySelector('.main-navigation');
console.log('nav header:', navHeader);
const navItems = document.querySelectorAll('.nav-link');
console.log('nav items:', navItems);
const yellowBus = document.querySelector('.intro img');
console.log('yellow bus:', yellowBus);
const wordDiv = document.querySelectorAll('.content-section');
console.log('word div:', wordDiv);
const boatPic = document.querySelector('.content-destination img');
console.log('boat pic:',boatPic);
const buttons = document.querySelectorAll('.destination btn');
console.log('buttons:', buttons);
const copyRight = document.querySelector('.footer p');
console.log('copyright:', copyRight);

// MOUSEOVER EVENT
function mouseOver(event){
        event.target.style.backgroundColor = "red";
    };
headLine.addEventListener('mouseover', mouseOver);

// MOUSEOUT EVENT
function mouseOut(event){
    event.target.style.backgroundColor = "white";
};
headLine.addEventListener('mouseout', mouseOut);

// KEYDOWN EVENT
function escapeKey(event){
    if (event.key === 'Escape'){
        alert(document.style.borderColor = "pink", event.target.style.boarderSize = "5px");
        }
    };
yellowBus.addEventListener('keydown', escapeKey);

// // ONCLICK EVENT
function clickIt(event){
    window.location = 'https://www.buses.com/'
};
buttons.addEventListener('click', clickIt);


// SCROLL EVENT
function scrollIt(event) {
    event.target.style.border = '1px solid black';
    event.target.style.width = '200px';
    event.target.style.height = '300px';
    event.target.style.overflow = 'scroll';
}
wordDiv.addEventListener('scroll', scrollIt);

// SELECT EVENT
function selectIt(event){
    event.target.style.backgroundColor = 'green';
    event.target.style.textColor = 'white';
};
copyRight.addEventListener('select', selectIt);
