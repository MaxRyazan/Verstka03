const menuButtonsList = document.querySelector('.map__list').children

window.addEventListener('resize', () => {
    watchClientWidth()
    unMarkAll()
})
watchClientWidth()


function watchClientWidth(){
    if(window.innerWidth <= 480){
        for(let i = 0; i < menuButtonsList.length; i++){
            hideMenu(menuButtonsList[i])
            menuButtonsList[i].style.width = 'calc(30% - 15px)'
        }
        for (let i = 0; i < menuButtonsList.length; i++) {
            menuButtonsList[i].children[0].addEventListener('click', () => {
                closeAllMenu()
                toggleVisible(menuButtonsList[i])
                markMenuBuRedColor(menuButtonsList[i])
            })
        }
    }
    else {
        for(let i = 0; i < menuButtonsList.length; i++){
            showMenu(menuButtonsList[i])
        }
    }
}

function toggleVisible(arg){
    for(let j = 0; j < arg.children.length; j++){
        arg.children[j].classList.toggle('hide')
    }
}

function hideMenu(arg){
    for(let j = 0; j < arg.children.length; j++){
        arg.children[j].classList.add('hide')
    }
}

function showMenu(arg){
    for(let j = 0; j < arg.children.length; j++){
        arg.children[j].classList.remove('hide')
    }
}

function closeAllMenu(){
    for (let i = 0; i < menuButtonsList.length; i++) {
        for(let j = 0; j < menuButtonsList[i].children.length; j++){
            menuButtonsList[i].children[j].classList.add('hide')
        }
    }
}

function markMenuBuRedColor(arg){
    unMarkAll()
    const list = arg.children
    list[0].style.color = '#B01736';
    list[0].classList.add('active')
}

function unMarkAll(){
    for(let i = 0; i < menuButtonsList.length; i++){
        menuButtonsList[i].children[0].style.color = '#444444'
        menuButtonsList[i].children[0].classList.remove('active')
    }
}
