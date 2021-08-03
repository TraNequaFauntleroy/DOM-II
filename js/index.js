const headLine = document.querySelector('.logo-heading');
console.log('headline:', headLine);
const navHeader = document.querySelector('.main-navigation');
console.log('nav header:', navHeader);
const navItems = document.querySelectorAll('.nav-link');
console.log('nav items:', navItems);
const yellowBus = document.querySelector('.intro img');
console.log('yellow bus:', yellowBus);
const travelPics = document.querySelectorAll('.img-content');
console.log('travel pics:', travelPics);
const boatPic = document.querySelector('.content-destination img');
console.log('boat pic:',boatPic);
// const buttons = document.querySelectorAll('.destination btn');
// console.log('buttons:', buttons);
const copyRight = document.querySelector('.footer');
console.log('copyright:', copyRight);

function mouseOver(event){
    if (event.type === 'mouseover') {
        event.target.style.backgroundColor = "red";
    } else if (event.type === 'mouseup') {
        event.target.style.backgroundColor = "white";
    }
};

headLine.addEventListener('mouseover', mouseOver);


