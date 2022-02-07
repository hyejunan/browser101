let today = new Date();
const date = document.querySelector(".date");
console.log(today);
console.log(date);
window.addEventListener('load', () => {
   date.innerHTML = today.getFullYear() + '/' + ('0' + (today.getMonth() + 1)).slice(-2) + '/' + ('0' + today.getDate()).slice(-2);
})
