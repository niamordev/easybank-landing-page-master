let openMenu = document.querySelector('.open-menu')
let closeMenu = document.querySelector('.close-menu')
let containerNavMobile = document.querySelector('.container-nav-mobile')
let body = document.querySelector('body')

containerIsDisplay = false

openMenu.addEventListener('click', function(){
        containerNavMobile.style.display="block"
        openMenu.style.display="none"
        closeMenu.style.display="block"
        body.style.overflow="hidden"
    
})

closeMenu.addEventListener('click', function(){
        containerNavMobile.style.display="none"
        openMenu.style.display="block"
        closeMenu.style.display="none"
        body.style.overflow="visible"

    }
)




