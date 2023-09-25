// JavaScript for the horizontal slider
const sliderWrapper = document.querySelector(".slider-wrapper");
const sliderItems = document.querySelectorAll(".slider-item");
const paginationButtons = document.querySelectorAll(".pagination-button");
let currentSlide = 0;

// Function to go to a specific slide
function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateSlider();
}

// Function to go to the previous slide
function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = sliderItems.length - 1;
  } else {
    currentSlide--;
  }
  updateSlider();
}

// Function to go to the next slide
function nextSlide() {
  if (currentSlide === sliderItems.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  updateSlider();
}

// Function to update the slider position and active pagination button
function updateSlider() {
  const translateX = currentSlide * sliderItems[0].offsetWidth * -1;
  sliderWrapper.style.transform = `translateX(${translateX}px)`;

  // Remove the "active" class from all pagination buttons
  paginationButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // Add the "active" class to the current pagination button
  paginationButtons[currentSlide].classList.add("active");
}

// Automatic slider scroll every 2 seconds
setInterval(nextSlide, 2000); // Adjust the interval time as needed

// Initial update to set the active pagination button
updateSlider();

// Testimonial Section
// JavaScript for the testimonial horizontal slider
const testSliderWrapper = document.querySelector(".testimonial-slider-wrapper");
const testSliderItems = document.querySelectorAll(".testimonial-slider-item");
const testPaginationButtons = document.querySelectorAll(
  ".testimonial-pagination-button"
);
let testCurrentSlide = 0;
//function to go to a specific slide
function testGoToSlide(testSlideIndex) {
  testCurrentSlide = testSlideIndex;
  updateTestSlider();
}
// Function to go to the previous slide
function testPrevSlide() {
  if (testCurrentSlide === 0) {
    testCurrentSlide = testSliderItems.length - 1;
  } else {
    testCurrentSlide--;
  }
  updateTestSlider();
}
// Function to go to the next slide
function testNextSlide() {
  if (testCurrentSlide === testSliderItems.length - 1) {
    testCurrentSlide = 0;
  } else {
    testCurrentSlide++;
  }
  updateTestSlider();
}
// Function to update the slider position and active pagination button
function updateTestSlider() {
  const testTranslateX = testCurrentSlide * testSliderItems[0].offsetWidth * -1;
  testSliderWrapper.style.transform = `translateX(${testTranslateX}px)`;

  // Remove the "active" class from all pagination buttons
  testPaginationButtons.forEach((button) => {
    button.classList.remove("active");
  });
  // Add the "active" class to the current pagination button
  testPaginationButtons[testCurrentSlide].classList.add("active");
}
// Automatic slider scroll every 2 seconds
setInterval(testNextSlide, 3000); // Adjust the interval time as needed

// Initial update to set the active pagination button
updateTestSlider();
