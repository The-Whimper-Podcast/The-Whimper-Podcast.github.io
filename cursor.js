let cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a');
navbar_button = document.querySelector('.navbar > a');
navbar_menu = document.querySelector('.navbar .menu');
navbar_top = document.querySelector('.navbar');
let featured_img = document.querySelectorAll('.featured-grid a');
let play_icon = document.querySelector('.play');

window.addEventListener('mousemove', function(e) {
    cursor.animate({
        top:e.pageY + 'px',
        left:e.pageX + 'px'
    }, duration=2000, fill="forwards");
});

links.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        cursor.style.opacity = 0;
      })
      
    link.addEventListener('mouseleave', (e) => {
        cursor.style.opacity = 1;
      })
});

featured_img.forEach(f_img => {
    f_img.addEventListener('mouseenter', (e) => {
        play_icon.style.opacity = 1;
      })
      
    f_img.addEventListener('mouseleave', (e) => {
        play_icon.style.opacity = 0;
      })
    
    f_img.addEventListener('mousemove', (e) => {
        play_icon.animate({
            top:e.pageY + 'px',
            left:e.pageX + 'px'
        }, duration=2000, fill="forwards");
      })
});

function navbarOpen() {;
    navbar_menu.classList.toggle('menu-activated');
    navbar_button.classList.toggle('circled');
    navbar_top.classList.add('filled');
    cursor.classList.toggle('purple-cursor');
  }
  
function goToSection(id_of_section) {
    document.getElementById(id_of_section).scrollIntoView(true);
    setTimeout(navbarOpen, 400);
}

window.addEventListener('scroll', function() {
    if (this.window.scrollY > 0) {
        navbar_top.classList.add('filled');
    }
    else {
        navbar_top.classList.remove('filled');
    }
});