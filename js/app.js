const menuBox = document.querySelector('.menu-box'), menu = document.querySelector('.menu'), closeBtn = document.querySelector('.closeBtn')
let menuOpen=false

menuBox.addEventListener('click', ()=>{
    menu.classList.add('open')
    menuOpen=true
})
closeBtn.addEventListener('click', ()=>{
    menu.classList.remove('open')
    menuOpen=false
})

const nav = document.querySelector('nav'), navLinks = document.querySelectorAll('.nav-links a'), menuPart = document.querySelectorAll('.menu-box div')

window.onscroll = function() {
    scrollFunction()
}
  
  
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    nav.classList.add('scroll')
    for(let i=0; i<navLinks.length; i++){
      navLinks[i].classList.add('scroll2')
    }  
    for(let i=0; i<menuPart.length; i++){
      menuPart[i].classList.add('scroll2')
    }
  } else {
    nav.classList.remove('scroll')
    for(let i=0; i<navLinks.length; i++){
      navLinks[i].classList.remove('scroll2')
    }  
    for(let i=0; i<menuPart.length; i++){
      menuPart[i].classList.remove('scroll2')
    }
  }
}