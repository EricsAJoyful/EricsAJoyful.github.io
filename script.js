"use strict";
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// Select all slides
const slides_1 = document.querySelectorAll(".slide-1");

// loop through slides and set each slides translateX
slides_1.forEach((slide_1, indx_1) => {
  slide_1.style.transform = `translateX(${indx_1 * 100}%)`;
});

// select next slide button
const nextSlide_1 = document.querySelector(".btn-next");

// current slide counter
let curSlide_1 = 0;
// maximum number of slides
let maxSlide_1 = slides_1.length - 1;

// add event listener and navigation functionality
nextSlide_1.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide_1 === maxSlide_1) {
    curSlide_1 = 0;
  } else {
    curSlide_1++;
  }

  //   move slide by -100%
  slides_1.forEach((slide_1, indx_1) => {
    slide_1.style.transform = `translateX(${100 * (indx_1 - curSlide_1)}%)`;
  });
});

// select next slide button
const prevSlide_1 = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide_1.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide_1 === 0) {
    curSlide_1 = maxSlide_1;
  } else {
    curSlide_1--;
  }

  //   move slide by 100%
  slides_1.forEach((slide_1, indx_1) => {
    slide_1.style.transform = `translateX(${100 * (indx_1 - curSlide_1)}%)`;
  });
});
