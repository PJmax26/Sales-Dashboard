const sideMenu = document.querySelector('aside')
const closeBtn = document.querySelector('.close')
const menuBtn = document.querySelector('.menu-btn')
const themeBtn = document.querySelector('.theme-toggler')

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
})

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeBtn.querySelector('span:nth-child(1)').classList.toggle('active')
    themeBtn.querySelector('span:nth-child(2)').classList.toggle('active')
})