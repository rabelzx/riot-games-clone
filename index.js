const header = document.querySelector('.header')

const firstItem = document.getElementById('first-item')
const secondItem = document.getElementById('second-item')
const thirdItem = document.getElementById('third-item')
const firstList = document.getElementById('first-list')
const secondList = document.getElementById('second-list')
const thirdList = document.querySelector('.underline')

const search = document.querySelector('.search-container')

window.addEventListener('scroll', function() {
    if (window.scrollY > 0){
        header.classList.add('color')
        search.classList.add('active')
    } else {
        header.classList.remove('color')
        search.classList.remove('active')
    }
})

firstItem.addEventListener('mouseover', () => {
    firstList.classList.add('active')
})

firstItem.addEventListener('mouseleave', () => {
    firstList.classList.remove('active')
})

secondItem.addEventListener('mouseover', () => {
    secondList.classList.add('active')
})

secondItem.addEventListener('mouseleave', () => {
    secondList.classList.remove('active')
})

thirdItem.addEventListener('mouseover', () => {
    thirdList.classList.add('active')
})

thirdItem.addEventListener('mouseleave', () => {
    thirdList.classList.remove('active')
})


//carrosel
const carrossel = document.querySelector(".carrossel");
const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")

leftArrow.addEventListener("click", () => {
    console.log("esquerda"); 
    carrossel.scrollLeft -= carrossel.offsetWidth;
})

rightArrow.addEventListener("click", () => {
    console.log("direita"); 
    carrossel.scrollLeft += carrossel.offsetWidth;
})