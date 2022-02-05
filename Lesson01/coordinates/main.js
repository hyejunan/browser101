const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width /2;
    const targetHalfHeight = targetRect.height / 2;
    // optimize coordinate code 
    // operation : layout -> paint -> composition
    // It's better to use translate than left/top 
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        //vertical.style.left = `${x}px`;
        vertical.style.transform = `translateX(${x}px)`;
        //horizontal.style.top = `${y}px`;
        horizontal.style.transform = `translateY(${y}px)`;
        //target.style.left = `${x}px`;
        //target.style.top = `${y}px`;
        target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeight}px)`;
        //tag.style.left = `${x}px`;
        //tag.style.top = `${y}px`;
        tag.style.transform = `translate(${x+20}px, ${y+20}px)`;
        tag.innerHTML = `${x}px, ${y}px`;
    })
})