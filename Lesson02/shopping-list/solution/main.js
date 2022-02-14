const items = document.querySelector('.items');
const footer = document.querySelector('footer');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const form = document.querySelector('.new-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    onAdd();
})

function onAdd() {
    // 1. get input text
    const text = input.value;
    if(text === '') {
        input.focus();
        return;
    }
    console.log(text);
    // 2. create new item(text+deletebtn)
    const item = createItem(text);
    // 3. add new item to items container
    items.appendChild(item);
    // 4. scroll to new item
    item.scrollIntoView({block: 'center'});
    // 5. initialize input box
    input.value = '';
    input.focus();
}

let id = 0; //UUID

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete" >
                <i class="far fa-trash-alt" data-id=${id}></i>
            </button>
        </div>
    `;
    id++;

    // const item = document.createElement('div');
    // item.setAttribute('class', 'item');

    // const name = document.createElement('span');
    // name.setAttribute('class', 'item__name');
    // name.innerText = text;

    // const deleteBtn = document.createElement('button');
    // deleteBtn.setAttribute('class', 'item__delete');
    // deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
    // deleteBtn.addEventListener('click', () => {
    //     items.removeChild(itemRow);
    // })

    // const itemDivider = document.createElement('div');
    // itemDivider.setAttribute('class', 'item__divider');

    // item.appendChild(name);
    // item.appendChild(deleteBtn);
    // itemRow.appendChild(item);
    // itemRow.appendChild(itemDivider);
    return itemRow;
}

// addBtn.addEventListener('click', () => {
//     onAdd();
// })

// input.addEventListener('keydown', (event) => {
//     if(event.key === 'Enter')
//         onAdd();
// })

items.addEventListener('click', event => {
    const id= event.target.dataset.id;
    if(id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
})

