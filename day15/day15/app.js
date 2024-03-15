const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];
let indexStorage;
document.addEventListener('DOMContentLoaded', () => returnFromStorage(itemsList))
addItems.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputText = document.querySelector('[name="item"]');
    const item = {
        text: inputText.value,
        state: false,
    };
    items.push(item);
    showList(items, itemsList);
    inputText.value = "";
    saveInLocalStorage();
});

function showList(plates = [], platesList) {
    platesList.innerHTML = plates
        .map((plate, i) => {
            return `
        <li>
        <input type="checkbox" data-index="${i}" id="item${i}" ${plate.state ? "checked" : ""
                } />
    <label for="item${i}">${plate.text}</label>
    <i class="fa-solid fa-pen-to-square"></i>
    </li>`;
        })
        .join("");

}

function saveInLocalStorage(index) {
    let arr = JSON.parse(localStorage.getItem("items")) || [];
    indexStorage = index || 0;
    arr = items


    localStorage.setItem("items", JSON.stringify(arr));
    localStorage.setItem("indexStorage", JSON.stringify(indexStorage));


}

itemsList.addEventListener('click', (e) => {
    let idx = e.target.parentElement.children[0].dataset.index;
    console.log('hello world');
    if (e.target.nodeName == 'I') {
        saveInLocalStorage(+(idx));
        window.location.href = "edit.html";
    }

    if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {

        e.target.checked ? items[idx].state = true : items[idx].state = false;
        saveInLocalStorage()
    }

})

function returnFromStorage(platesList) {
    const plates = JSON.parse(localStorage.getItem("items")) || [];

    platesList.innerHTML = plates
        .map((plate, i) => {
            return `
        <li>
        <input type="checkbox" data-index="${i}" id="item${i}" ${plate.state ? "checked" : ""
                } />
    <label for="item${i}">${plate.text}</label>
    <i class="fa-solid fa-pen-to-square"></i>
    </li>`;
        })
        .join("");


}

