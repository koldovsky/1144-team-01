const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel-image");
const totalImages = images.length;
const imageWidth = 520;
const transitionDuration = 0.8; 

const clonedImages = Array.from(images).map(image => image.cloneNode(true));

clonedImages.forEach(clonedImage => {
  carousel.appendChild(clonedImage);
});

let isDragging = false;
let startX;
let dragOffset = 0;
let currentIndex = 0;

carousel.addEventListener("mousedown", (event) => {
  isDragging = true;
  startX = event.clientX;
  dragOffset = 0;
});

carousel.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const endX = event.clientX;
    dragOffset = startX - endX;
    const transformValue = -currentIndex * imageWidth - dragOffset;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(${transformValue}px)`;
  }
});

carousel.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    carousel.style.transition = "transform " + transitionDuration + "s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    
    if (Math.abs(dragOffset) > imageWidth / 2) {
      currentIndex += dragOffset > 0 ? 1 : -1;
    }

    const transformValue = -currentIndex * imageWidth;
    carousel.style.transform = `translateX(${transformValue}px)`;

    setTimeout(() => {
      carousel.style.transition = "";
      checkBuffer();
    }, transitionDuration * 1000);
  }
});

function checkBuffer() {
  if (currentIndex === totalImages) {
    currentIndex = 0;
    carousel.style.transform = "translateX(0)";
  }
  else if (currentIndex === -1) {
    currentIndex = totalImages - 1;
    carousel.style.transform = `translateX(${-totalImages * imageWidth}px)`;
  }
}

leftArrow.addEventListener("click", () => {
  currentIndex--;
  updateCarousel();
});

rightArrow.addEventListener("click", () => {
  currentIndex++;
  updateCarousel();
});

function updateCarousel() {
  const transformValue = -currentIndex * imageWidth;
  carousel.style.transition = "transform " + transitionDuration + "s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  carousel.style.transform = `translateX(${transformValue}px)`;

  setTimeout(() => {
    carousel.style.transition = "";
    checkBuffer();
  }, transitionDuration * 1000);
}

// Можна також додати обробники для сенсорних подій для тач-пристроїв
carousel.addEventListener("touchstart", (event) => {
  isDragging = true;
  startX = event.touches[0].clientX;
  dragOffset = 0;
});

carousel.addEventListener("touchmove", (event) => {
  if (isDragging) {
    const endX = event.touches[0].clientX;
    dragOffset = startX - endX;
    const transformValue = -currentIndex * imageWidth - dragOffset;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(${transformValue}px)`;
  }
});

carousel.addEventListener("touchend", () => {
  if (isDragging) {
    isDragging = false;
    carousel.style.transition = "transform " + transitionDuration + "s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    
    if (Math.abs(dragOffset) > imageWidth / 2) {
      currentIndex += dragOffset > 0 ? 1 : -1;
    }

    const transformValue = -currentIndex * imageWidth;
    carousel.style.transform = `translateX(${transformValue}px)`;

    setTimeout(() => {
      carousel.style.transition = "";
      checkBuffer();
    }, transitionDuration * 1000);
  }
});
