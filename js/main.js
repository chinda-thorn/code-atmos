// Sticky menu shadow
window.addEventListener('scroll', function() {
  if(window.scrollY > 70) {
    // document.querySelector('#navbar').style.boxShadow = "3px 0 6px"
    // document.querySelector('#navbar').style.backgroundColor = "#41B883"
  } else {
    document.querySelector('#navbar').style.backgroundColor = "#ffffff"
    // document.querySelector('#navbar').style.boxShadow = "0px 0 0px"
  }
})

// Smooth Scrolling
$('#navbar a').on('click', function(event) {
  if(this.hash !== '') {
    const hash = this.hash;
    
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 70
      },
      700
    )
  }
})

const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-mobile')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav-link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-mobile')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));