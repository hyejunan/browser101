let today = new Date();
const date = document.querySelector(".header__date");
window.addEventListener('load', () => {
   date.innerHTML = today.getFullYear() + '/' + ('0' + (today.getMonth() + 1)).slice(-2) + '/' + ('0' + today.getDate()).slice(-2);
})


// 1. text input
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__add');
const ul = document.querySelector('.list__lists');

function onAdd() {
    const text = input.value;

    if(text === '') {
        input.focus();
        return;
    }
    else {
        const list = createList(text);
        console.log('list:');
        console.log(list);
        ul.appendChild(list);
        input.value = '';
        input.focus();
    }
}

function createList(text) {
    const listRow = document.createElement('div');
    listRow.setAttribute('class', 'lists__row');
    const listLeft = document.createElement('div');
    listLeft.setAttribute('class', 'lists__left');
    const listRight = document.createElement('div');
    listRight.setAttribute('class', 'lists__right');
    const check = document.createElement('input');
    check.type = "checkbox";
    check.id = "lists__check";
    if(check.checked === true) {
        check.classList.add("checked");
    }
    const span = document.createElement('span');
    span.innerText = text;
    span.setAttribute('class', 'lists__name');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="far fa-trash-alt"></i>`

    deleteBtn.addEventListener('click', () => {
        ul.removeChild(listRow);
    })

    listLeft.appendChild(check);
    listLeft.appendChild(span);
    listRight.appendChild(deleteBtn);
    listRow.appendChild(listLeft);
    listRow.appendChild(listRight);
    return listRow;
}


// 2. click add btn or push enter key

addBtn.addEventListener('click', () => {
    onAdd();
})

input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        onAdd();
    }
})

// 3. create list element

// 4. click delete btn

