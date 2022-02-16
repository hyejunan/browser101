let image = document.querySelectorAll('img');
let bg = document.querySelector('section');
let btn = document.querySelector('button');
let carrot = document.querySelectorAll('.carrot');
let bug = document.querySelectorAll('.bug');


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
    var xPos = getRandomInt(0, 800);
    var yPos = getRandomInt(0, 500);
    
    e.style.transform = `translate(${xPos}px, ${yPos}px)`;

  })   
};

let cnt = 0;

carrot.forEach(e => e.addEventListener("click", () => {
    e.classList.add("clicked");
    cnt++;
    if(cnt == 10)
        alert("Done!");
}));

bug.forEach(e => e.addEventListener("click", () => {

    alert("Oops!");
}));

//Setup
btn.addEventListener('click', () => {
    randomOrder(image);
})

window.addEventListener('load', () => {
    randomOrder(image);
})
