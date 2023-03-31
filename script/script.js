const burgerEl = document.getElementById('burger')
const menuEl = document.getElementById('menu')

burgerEl.addEventListener('click', () => {
    menuEl.classList.toggle('hide')
})