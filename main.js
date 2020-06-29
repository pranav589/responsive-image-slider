//grabbing the slide class
let sliderImages = document.querySelectorAll('.slide');

//grabbing the arrow-left
let arrowLeft = document.getElementById('arrow-left');

//grabbing the arrow-right
let arrowRight = document.getElementById('arrow-right')

//setting the initial value
let current = 0;

//function to reset every thing
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none'
  }
}

//function to display the current slide
function startSlide() {
  reset();

  sliderImages[0].style.display = 'block'
}

//function when left arrow is clicked
function moveLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block'

  current--;
}

//function when right arrow is clicked
function moveRight() {
  reset();

  sliderImages[current + 1].style.display = 'block';

  current++;

}

//event for left arrow
arrowLeft.addEventListener('click', function() { //if its the first image
  if (current === 0) {
    current = sliderImages.length;
  }
  moveLeft();
})

arrowRight.addEventListener('click', function() { //if its last image
  if (current === sliderImages.length - 1) {
    current = -1

  }
  moveRight();
})
startSlide()