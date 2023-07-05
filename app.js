const wrapper = document.getElementById("wrapper");
let loading_screen = document.querySelector('.loading-screen');
let loading_screen_text = document.querySelector('.loading-screen p');
let line1 = document.getElementById('line-one');
let line2 = document.getElementById('line-two');
let line3 = document.getElementById('line-three');
let img1 = document.getElementById('first');
let img2 = document.getElementById('second');
let img3 = document.getElementById('third');
let contact_img1 = document.getElementById('first-contact');
let contact_img2 = document.getElementById('second-contact');
let contact_img3 = document.getElementById('third-contact');
let downloads_img = document.querySelector('.downloads img');

const left = document.getElementById("left-side");

const handleMove = e => {
  left.animate({
    width: `${e.clientX / window.innerWidth * 100}%`
  }, duration=3000, fill="forwards");
}

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
  let next = prev;
  
  while(prev === next) next = rand(min, max);
  
  return next;
}

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 }
];


function loadingAnimation() {
    let prev = 0;

    let morph_animation = setInterval(() => {
        const index = uniqueRand(0, combinations.length - 1, prev),
                combination = combinations[index];
        
        wrapper.dataset.configuration = combination.configuration;
        wrapper.dataset.roundness = combination.roundness;
        
        prev = index;
        }, 2000);

    setTimeout(() => {
        clearInterval(morph_animation);
    }, 6000);

    setTimeout(() => {
        wrapper.style.opacity = 0;
        loading_screen_text.style.opacity = 0;
        loading_screen.style.transform = 'scaleY(0)';
    }, 7500);
}

document.onmousemove = e => handleMove(e);

document.ontouchmove = e => handleMove(e.touches[0]);

window.addEventListener('scroll', function() {
  console.log(window.scrollY);
    let pos1 = (-1*(window.scrollY -1700))/3;
    let pos2 = (window.scrollY - 1700)/3;
    let pos3 = (-1*(window.scrollY - 1700))/5;
    line1.style.transform = "translateX(" + pos1 + "px)";
    line2.style.transform = "translateX(" + pos2 + "px)";
    line3.style.transform = "translateX(" + pos3 + "px)";
});

window.addEventListener('scroll', function() {
  let parallax1 = 20-((this.window.scrollY-745)/50);
  let parallax2 = 40-((this.window.scrollY-745)/30);
  let parallax3 = 60-((this.window.scrollY-745)/40);
  let rotate1 = 10+((this.window.scrollY-745)/30);
  let rotate2 = ((this.window.scrollY-745)/15)-5;
  let rotate3 = -15-((this.window.scrollY-745)/20);

  img1.style.top = parallax1 + '%';
  img1.style.transform = 'rotate(' + rotate1 + 'deg)';
  img2.style.top = parallax2 + '%';
  img2.style.transform = 'rotate(' + rotate2 + 'deg)';
  img3.style.top = parallax3 + '%';
  img3.style.transform = 'rotate(' + rotate3 + 'deg)';
});

window.addEventListener('scroll', function() {
  let scale_img = 1 - ((window.scrollY-4300)/600);
  if (scale_img < 1) {
    scale_img = 1;
  }
  downloads_img.style.transform = 'scaleY(' + scale_img + ')';
  downloads_img.style.transformOrigin = 'top';
});

window.addEventListener('scroll', function() {
  let parallax1_contacts = 5+((this.window.scrollY-5000)/100);
  let parallax2_contacts = 30+((this.window.scrollY-5000)/60);
  let parallax3_contacts = 50+((this.window.scrollY-5000)/80);

  contact_img1.style.top = parallax1_contacts + '%';
  contact_img2.style.top = parallax2_contacts + '%';
  contact_img3.style.top = parallax3_contacts + '%';
});

function toggleText(id_of_popup) {
  popup = document.getElementById(id_of_popup);
  popup.classList.toggle('showPopup');
}