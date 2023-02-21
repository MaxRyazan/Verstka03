const maxCount = document.querySelector('.life__slider_inner').children.length
const blockToMove = document.querySelector('.life__slider_inner')
let sliderWidth = document.querySelector('.life__slider').clientWidth
const buttonPrev = document.querySelector('.btn_prev')
const buttonNext = document.querySelector('.btn_next')
let count = 0;

window.addEventListener('resize', () => {
    sliderWidth = document.querySelector('.life__slider').clientWidth
})


buttonNext.addEventListener('click', () => {
    if (count >= maxCount - 1) {
        count = -1
    }
    count++
    blockToMove.style.transform = 'translate(-' + count * sliderWidth + 'px, 0)';
    blockToMove.style.transition = '.7s';
    if (count >= maxCount - 1) {
        count = -1
    }
})

buttonPrev.addEventListener('click', () => {
    if (count === -1) {
        count = maxCount - 1
    }
    count--
    if (count < 0) {
        count = maxCount - 1
    }
    blockToMove.style.transform = 'translate(-' + count * sliderWidth + 'px, 0)';
    blockToMove.style.transition = '.7s';
})


