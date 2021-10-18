const area = document.querySelector('.area');

let itemArr = [];

localStorage.items ? itemArr = JSON.parse(localStorage.getItem('items')) : itemArr = [];

renderItems()

function createItem(e) {
    let item = document.createElement('div');
    area.appendChild(item);
    item.value = window.prompt('Введите значение');
    let text = item.value;
    item.classList.add('wrap');
    item.setAttribute('draggable', 'true');
    let target = area.getBoundingClientRect();
    let cordX = Math.round(e.clientX - target.left - item.offsetWidth / 2) + 'px';
    let cordY = Math.round(e.clientY - target.top - item.offsetHeight / 2) + 'px';
    item.style.left = cordX;
    item.style.top = cordY;

    itemArr = [...itemArr, {
        'id': '',
        'text': `${text}`,
        'cordX': `${cordX}`,
        'cordY': `${cordY}`,
        'isDragging' : false
    }];

    itemArr.map((item, index) => {
        item.id = index;
    })

    return itemArr;
}

function addItem(e) {
    createItem(e);
    addToLocalStorage();
    renderItems();
}

function addToLocalStorage() {
    localStorage.setItem('items', JSON.stringify(itemArr))
}

function renderItems() {
    area.innerHTML = '';
    if (itemArr.length > 0) {
        itemArr.map((item, index) => {
            area.innerHTML += `<div class="wrap" onmousedown=dragAndDrop(${index}) draggable="true"  style="left: ${item.cordX}; top: ${item.cordY};">
                                <div class="remove" onclick="remove(${index})" data-id="${index}"></div>
                                <input class="item" oninput=editText(${index}) id="${index}" value="${item.text}" />
                                </div>`
        })
    }
}

function editText(index) {
    let arr = [...document.querySelectorAll('.item')];
    itemArr[index].text = arr[index].value;
    addToLocalStorage()
}

function remove(index) {
    itemArr.splice(index, 1);
    addToLocalStorage();
    renderItems();
}

function dragFalse () {
    itemArr.map(item => item.isDragging = false)
}

function dragAndDrop(index) {

    if (itemArr < 1) {
        return;
    }
    
    itemArr[index].isDragging = !itemArr[index].isDragging;

    area.addEventListener('dragstart', e => {
        e.target.classList.add('active');
    });

    area.addEventListener('dragend', e => {
        e.target.classList.remove('active');
        dragFalse();
        addToLocalStorage();
        renderItems();
    });

    area.addEventListener('dragover', e => {
        e.preventDefault();
        let elem = document.querySelector('.active');
        let cordX = e.clientX - area.getBoundingClientRect().left + 10;
        let cordY = e.clientY - area.getBoundingClientRect().top - 10;
        cordX - 10 < area.clientLeft ? cordX = 20 : cordX;
        cordY < area.clientTop ? cordY = 0 : cordY;
        cordX - 10 > area.clientWidth - elem.clientWidth ? cordX = area.clientWidth - elem.clientWidth - 20 : cordX;
        cordY > area.clientHeight - elem.clientHeight ? cordY = area.clientHeight - elem.clientHeight : cordY;
        console.log(area);
        elem.style.left = `${cordX}px`;
        elem.style.top = `${cordY}px`;
        if(itemArr[index].isDragging) {
            itemArr[index].cordX = `${cordX}px`;
            itemArr[index].cordY = `${cordY}px`;
        }
        addToLocalStorage();
    })
}

area.addEventListener('input', dragFalse)

area.addEventListener('dblclick', addItem);