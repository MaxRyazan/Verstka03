const maxCount = document.querySelector('.life__slider_inner').children.length
const blockToMove = document.querySelector('.life__slider_inner')
const sliderWidth = document.querySelector('.life__slider').clientWidth

const buttonPrev = document.querySelector('.btn_prev')
const buttonNext = document.querySelector('.btn_next')
let count = 0


    buttonNext.addEventListener('click', () => {
        if(count >= maxCount - 1){
            count = -1
        }
        count++
        blockToMove.style.transform = 'translate(-'+count*sliderWidth+'px, 0)';
        console.log('next ', count)
        if(count >= maxCount - 1){
            count = -1
            console.log('next in if ', count)
        }
    })
    buttonPrev.addEventListener('click', () => {
        count--
        if(count < 0) {
            count = maxCount - 1
        }
        blockToMove.style.transform = 'translate(-'+count*sliderWidth+'px, 0)';
        console.log('prev ', count)
    })


