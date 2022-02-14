let image = document.querySelectorAll('img');
let btn = document.querySelector('button');
console.log(image);

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomOrder (img) {
  img.forEach(e => {
    let eRect = e.getBoundingClientRect();
    // Viewport Dimensions
    var vpHeight = window.screen.width;
    var vpWidth = window.screen.height;
    
    // Image Position
    var xPos = getRandomInt(0, vpWidth - eRect.width);
    var yPos = getRandomInt(0, vpHeight - eRect.height);
    
    e.style.transform = `translate(${xPos}px, ${yPos}px)`;

  })   
};

//Setup
btn.addEventListener('click', () => {
    randomOrder(image);
})

window.addEventListener('load', () => {
    randomOrder(image);
})
