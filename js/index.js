let bar = document.querySelector('.bar');
let menu = document.querySelector('.navbar');
let close = document.querySelector('.close');


if (bar) {
    bar.addEventListener('click', () => {
        menu.classList.add("open");
    })
}
if (close) {
    close.addEventListener('click', () => {
        menu.classList.remove("open");
    })
}