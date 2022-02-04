const coord = document.querySelector('.coord');
function updateCoord(e) {
    coord.innerHTML = `
    Coords : ${e.clientX}, ${e.clientY}
    `
    coord.style.top = e.clientX + 'px';
    coord.style.left = e.clientY + 'px';
}

window.addEventListener('mousemove', (e) => {
    updateCoord(e);
});