
    const btnBurgerMenu = document.querySelector('.mobile__nav__close__icon')
    const burgerMenu = document.querySelector('.mobile__nav')

    btnBurgerMenu.addEventListener('click', (e) => {

        burgerMenu.style.display = (btnBurgerMenu.style.display == 'none') ? 'block' : 'none'

})

