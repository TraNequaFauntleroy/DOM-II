
//  QUERY SELECTORS
const headLine = document.querySelector('.logo-heading'); 
console.log('headline:', headLine);
const yellowBus = document.querySelector('.intro img');
console.log('yellow bus:', yellowBus);
const boatPic = document.querySelector('.content-destination img');
console.log('boat pic:',boatPic);
const buttons = document.querySelectorAll('.btn');
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

// ONCLICK EVENT
function clickIt(event){
    window.location = 'https://www.buses.com/'
};
buttons.forEach(function(item){
    item.addEventListener('click', clickIt);
});

//DOUBLE CLICK EVENT 
function dblClick(event){
    event.target.style.backgroundColor = 'green';
}
copyRight.addEventListener('dblclick', dblClick);

// KEYDOWN EVENT
function tKey(event){
    event.target.textContent += `${event.code}`;
};
document.addEventListener('keydown', tKey);

// WHEEL 
function zoom(event) {
    let scale = 1;
    event.preventDefault();
if (event.deltaY < 0) {
  // Zoom in
  scale *= event.deltaY * -2;
}
else {
  // Zoom out
  scale /= event.deltaY * 2;
}
// Apply scale transform
event.target.style.transform = `scale(${scale})`;
};
yellowBus.addEventListener('wheel', zoom);

// MOUSEENTER EVENT
function mouseEnter(event) {
    event.target.style.border = '10px hotpink dotted';
}
boatPic.addEventListener('mouseenter', mouseEnter);

// MOUSELEAVE EVENT
function mouseLeave(event){
    event.target.style.border = '0px white dotted';
}
boatPic.addEventListener('mouseleave', mouseLeave);





