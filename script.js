const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

/* Credit and Tnanks: 
   Slider: Traversy Media
   CSS Design: Sara Mazal 
   Photos: Unsplash */
