const header = document.querySelector('.header')
const firstItem = document.getElementById('first-item')
const secondItem = document.getElementById('second-item')
const firstList = document.getElementById('first-list')
const secondList = document.getElementById('second-list')

window.addEventListener('scroll', function() {
    if (window.scrollY > 0){
        header.classList.add('color')
    } else {
        header.classList.remove('color')
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

