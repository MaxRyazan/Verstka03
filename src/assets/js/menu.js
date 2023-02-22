const cg = document.querySelector('.map__list').children



if(document.querySelector('.container').clientWidth <= 480){
    for(let i = 0; i < cg.length; i++){
        toggleVisible(cg[i])
        cg[i].style.width = 'calc(30% - 30px)'
    }
    for (let i = 0; i < cg.length; i++) {
        cg[i].children[0].addEventListener('click', () => {
            closeAllMenu()
            toggleVisible(cg[i])
        })
    }
}

function toggleVisible(arg){
    for(let j = 0; j < arg.children.length; j++){
        arg.children[j].classList.toggle('hide')
    }
}

function closeAllMenu(){
    for (let i = 0; i < cg.length; i++) {
        for(let j = 0; j < cg[i].children.length; j++){
            cg[i].children[j].classList.add('hide')
        }
    }
}


