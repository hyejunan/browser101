let today = new Date();
const date = document.querySelector(".date");
console.log(today);
console.log(date);
window.addEventListener('load', () => {
   date.innerHTML = today.getFullYear() + '/' + ('0' + (today.getMonth() + 1)).slice(-2) + '/' + ('0' + today.getDate()).slice(-2);
})

let input = querySelector(".input-box");
let addBtn = querySelector(".add-btn");
let ul = querySelector("ul");

addBtn.addEventListener('click', () => {
    ul.innerHTML = `
        <li>
        <label class="container">
            <input type="checkbox" id="check">
            ${input}
        </label>
        <i class="far fa-trash-alt"></i>
        </li>
    `
});
