const arrSecCodes = [];
const secretCode = "IEEE";
const regex = new RegExp(secretCode, "ig");
const h1=document.querySelector("h1")
window.addEventListener("keyup", (event) => {
    arrSecCodes.push(event.key);

    arrSecCodes.splice(0, arrSecCodes.length - secretCode.length);
    if (regex.test(arrSecCodes.join(""))) {

       h1.classList.add("show")
        h1.textContent = 'HI IEEE 👋'
        changeColor(h1)
        changePosition(h1)

    }
});


function changeColor(element) {
    let H = Math.floor(Math.random() * 360);
    let S = Math.floor(Math.random() * 100 + 1);
    let L = Math.floor(Math.random() * 100 + 1);
    element.style.setProperty('--clr', `hsl(${H}, ${S}%, ${L}%)`);
}
function changePosition(element) {
    let top = Math.random() * (window.innerHeight - element.offsetHeight);
    let left = Math.random() * (window.innerWidth - element.offsetWidth);
    element.style.setProperty('--top', `${top}px`)
    element.style.setProperty('--left', `${left}px`)
}