

const inputEdit = document.querySelector(".edit");
const btnsave = document.querySelector(".save")


let index = JSON.parse(localStorage.getItem("indexStorage"));
inputEdit.addEventListener('change', () => {

    const textWhichEdited = JSON.parse(localStorage.getItem("items"))
    textWhichEdited[index].text = inputEdit.value;
    localStorage.setItem("items", JSON.stringify(textWhichEdited));
})

btnsave.addEventListener("click", () => {
    inputEdit.value = "";
    window.location.href = "index.html";
})