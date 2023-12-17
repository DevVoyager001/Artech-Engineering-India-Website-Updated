

gsap.registerPlugin(ScrollTrigger);

// Function to create fade-in animations
function createFadeInAnimation(element) {
    gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
        },
    });
}

// Apply animations to specific sections
createFadeInAnimation('.page1-bottom h1') ;
createFadeInAnimation('.page1-bottom p') ;
createFadeInAnimation('.aboutus-content h2');
createFadeInAnimation('.aboutus-content p');
createFadeInAnimation('#service-headline');
createFadeInAnimation('.machine h2');


const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  gsap.from(box, {
    opacity: 0,
    scale: 0.5,
    duration: 0.1,
    scrollTrigger: {
      trigger: box,
      start: 'top 100%', // Adjust the start position as needed
      end: 'top 95%',   // Adjust the end position as needed
      toggleActions: 'play none none none',
      scrub: 1.5
    },
  });
});

const machineBoxes = document.querySelectorAll('.machine-box');

machineBoxes.forEach((machineBox) => {
  gsap.from(machineBox, {
    opacity: 0,
    scale: 0.5,
    duration: 0.3,
    scrollTrigger: {
      trigger: machineBox,
      start: 'top 100%',
      end: 'top 95%',
      toggleActions: 'play none none none',
      scrub: 2
    },
  });
});



// LOADER

loaderscreen = document.querySelector(".loader")

function openloader(){
    gsap.to(".loader",{
        opacity:0,
        duration:1,
        onComplete:()=>{
            loaderscreen.style.display = "none"
        }
    })
    
}


window.addEventListener("load", openloader)


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);


      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop - 69,
              behavior: 'smooth'
          });
      }
  });
});



const navbar = document.querySelector('.page1-top');
const scrollThreshold = 200; // Adjust this value as needed.

window.addEventListener('scroll', () => {
  if (window.scrollY >= scrollThreshold) {
    navbar.classList.add('opaque');
  } else {
    navbar.classList.remove('opaque');
  }
});



// mobile NAV bar
const openMenu = document.querySelector(".menu")
const closeMenu = document.querySelector(".closemenu")
const navItems = document.querySelector(".nav-items")
const navanchor = document.querySelectorAll(".nav-items a")

function openandclosethemenu(){
  navItems.classList.toggle("active")
  closeMenu.classList.toggle("active")
  openMenu.classList.toggle("active")
}



openMenu.addEventListener("click", openandclosethemenu)
closeMenu.addEventListener("click", openandclosethemenu)
navanchor.forEach((item)=>{
  item.addEventListener("click", openandclosethemenu)
})