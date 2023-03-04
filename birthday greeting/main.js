// Select the elements
const title = document.querySelector('h1');
const quote = document.querySelector('#quote');
const button = document.querySelector('#button');

// Define the title animation
const titleAnimation = anime({
  targets: title,
  translateX: [-100, 0],
  opacity: [0, 1],
  duration: 2000,
  easing: 'easeOutExpo',
  delay: 1000,
  autoplay: true
});

// Define the quote and button animations
const quoteAnimation = anime({
  targets: quote,
  translateY: [50, 0],
  opacity: [0, 1],
  duration: 1500,
  easing: 'easeOutExpo',
  delay: 2000,
  autoplay: false
});

const buttonAnimation = anime({
  targets: button,
  translateY: [50, 0],
  opacity: [0, 1],
  duration: 1500,
  easing: 'easeOutExpo',
  delay: 2500,
  autoplay: false
});

// Add event listener to the button
button.addEventListener('click', function() {
  if (!quoteAnimation.finished) {
    return;
  }
  quoteAnimation.restart();
  buttonAnimation.restart();
});