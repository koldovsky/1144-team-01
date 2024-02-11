const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const carousel = document.querySelector(".carousel");

let isDragging = false;
let startX;
const threshold = 100;
let currentIndex = 0;
let prevIndex;
const images = document.querySelectorAll(".carousel-image");
const totalImages = images.length;
const imageWidth = 520;

images.forEach(image => {
  image.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
});

carousel.addEventListener("mousedown", (event) => {
  isDragging = true;
  startX = event.clientX;
});

carousel.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const endX = event.clientX;
    const deltaX = startX - endX;
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        rightArrow.click(); 
      } else {
        leftArrow.click(); 
      }
      startX = endX;
    }
  }
});

carousel.addEventListener("mouseup", () => {
  isDragging = false;
});

leftArrow.addEventListener("click", () => {
  prevIndex = currentIndex;
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  carousel.style.transform = `translateX(-${imageWidth}px)`;
  carousel.insertBefore(images[currentIndex], carousel.firstChild);

  setTimeout(() => {
    carousel.style.transition = "";
    carousel.style.transform = "";
    carousel.classList.add("sliding-transition");
  }, 10);

  setTimeout(() => {
    carousel.classList.remove("sliding-transition");
  }, 490);
});

rightArrow.addEventListener("click", () => {
  carousel.classList.add("sliding-transition");

  prevIndex = currentIndex;
  currentIndex = (currentIndex + 1) % totalImages;

  carousel.style.transform = `translateX(-${imageWidth}px)`;
  setTimeout(() => {
    carousel.appendChild(images[prevIndex]);
    carousel.classList.remove("sliding-transition");
    carousel.style.transition = "";
    carousel.style.transform = "";
  }, 500);
});
