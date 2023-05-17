
// Do the intro animation
var typed = new Typed(".multiple-text", {
          strings: ["Software Developer", "Mainly Backend Dev", "OO Developer"], typeSpeed: 100, backSpeed: 100, backDelay: 1000, loop: true
})

// Do the projects scroll
const projectsCases = document.querySelector('.projects-cases');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const scrollAmount = 350+60;

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


//Do the launcher video
const overlayBox = document.querySelector('.overlay-box');
const videoPlayer = document.querySelector('.video-player');
const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach((container) => {
  const overlayBox = container.querySelector('.overlay-box');
  const videoPlayer = container.querySelector('.video-player');

  overlayBox.addEventListener('mouseenter', () => {
    videoPlayer.style.display = 'block';
    videoPlayer.play();
  });

  overlayBox.addEventListener('mouseleave', () => {
    videoPlayer.style.display = 'none';
    videoPlayer.pause();
  });
});
