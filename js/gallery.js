const slides = [
  '<img class="carousel-image" src="img/carousel_first-gallery.webp" alt="Image 1">',
  '<img class="carousel-image" src="img/carousel__second-gallery.webp" alt="Image 2" >',
  '<img class="carousel-image" src="img/carousel__third-gallery.webp" alt="Image 3">',
  '<img class="carousel-image" src="img/carousel__four-gallery.webp" alt="Image 4">',
];

let currentIdx = 0;

function renderSlide() {
  const slideContainer = document.querySelector(
    ".gallery__carousel__block-container .gallery__carousel"
  );
  slideContainer.innerHTML = slides[currentIdx];
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
    slideContainer.innerHTML += slides[secondSlideIdx];
    if (window.matchMedia("(min-width: 980px)").matches) {
      const thirdSlideIdx =
        secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
      slideContainer.innerHTML += slides[thirdSlideIdx];
    }
  }
}

renderSlide();

function nextSlide() {
  currentIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
  renderSlide();
}

function prevSlide() {
  currentIdx = currentIdx - 1 < 0 ? slides.length - 1 : currentIdx - 1;
  renderSlide();
}


const btnNext = document.querySelector('.gallery .arrow-button.left-arrow');
  btnNext.addEventListener('click', nextSlide);


  const btnPrev = document.querySelector('.gallery .arrow-button.right-arrow');
btnPrev.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlide);
