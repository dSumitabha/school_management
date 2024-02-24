const menuBtn = document.querySelector('#menuBtn')
const navBar = document.querySelector('nav')
const mainContainer = document.getElementById('main-container')
menuBtn.addEventListener('click', toggleMenu)
let menuDisplay = 0;
function toggleMenu() {
    if (menuDisplay == 0) {
        navBar.style.display = 'block'
        mainContainer.style.justifyContent = 'space-between'
        menuDisplay = 1
    } 
    else {
        navBar.style.display = 'none'
        mainContainer.style.justifyContent = 'center'
        menuDisplay = 0
    }
}

const moreBtn = document.querySelector('#moreBtn')
const headRight = document.querySelector('.head-right')
let headDisplay = 0
moreBtn.addEventListener('click', toggleHeadRight)
function toggleHeadRight() {
    if (menuDisplay == 0) {
        headRight.style.display = 'flex'
        menuDisplay = 1
    } 
    else {
        headRight.style.display = 'none'
        menuDisplay = 0
    }
}

            /* AJAX CALL SCRIPT */
const refLinks = document.querySelectorAll('.ref_link')
refLinks.forEach(refLink => {
    refLink.addEventListener('click', requestController)
})
function requestController(){
    const controller = 'controller/'+this.getAttribute('controller')
    const xhr = new XMLHttpRequest()
    xhr.open('POST', controller, true)
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4){
            if(xhr.status == 200){
            //    console.log(xhr.responseText)
                mainContainer.innerHTML = xhr.responseText
            } else{
                mainContainer.innerHTML = xhr.status
            //    console.log('Request failed', xhr.status)
            }   
        }
    }
    xhr.send()
}