
// Do the intro animation
var typed = new Typed(".multiple-text", {
          strings: ["Software Developer", "Java Developer", "OO Developer"], typeSpeed: 100, backSpeed: 100, backDelay: 1000, loop: true
})

// Do the projects scroll
const projectsCases = document.querySelector('.projects-cases');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const scrollAmount = 350+30;

// Define how divs move with each click on arrows
arrowLeft.addEventListener('click', function() {
  projectsCases.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

arrowRight.addEventListener('click', function() {
  projectsCases.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});