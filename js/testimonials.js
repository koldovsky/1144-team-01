const slides = [
    '<div class="testimonials-carousel__slide"><div><h3 class="testimonials-carousel__slide-name">Linda Peterson</h3><p class="testimonials-carousel__slide-job">Procurement Manager at American Tobacco</p><p class="testimonials-carousel__slide-text">We have been working with this company for 30 years. Havana supplies us with high-quality pressed tobacco, which we then use to make our cigarettes. We are fully satisfied with the cooperation.</p><p class="testimonials-carousel__slide-job">October 28, 2017</p></div></div>',
    '<div class="testimonials-carousel__slide"><div><h3 class="testimonials-carousel__slide-name">David Johnson</h3><p class="testimonials-carousel__slide-job">Director at Cigars Shop</p><p class="testimonials-carousel__slide-text">5 years ago we ordered several packages of Havana cigars. They were sold out in our store in just a few hours. Since then, we sell more than 1,000 Havana cigars each week in our small Oregon store.</p><p class="testimonials-carousel__slide-job">June 12, 2018</p></div></div>',
    '<div class="testimonials-carousel__slide"><div><h3 class="testimonials-carousel__slide-name">Kyle Remden</h3><p class="testimonials-carousel__slide-job">Director at Remden Cigar Shop</p><p class="testimonials-carousel__slide-text">I have been selling cigars and cigarillos for 10 years now. The Havana products are highly appreciated by my customers and make up about 80% of the assortment in my store. I am satisfied with the cooperation.</p><p class="testimonials-carousel__slide-job">January 04, 2019</p></div></div>',
    '<div class="testimonials-carousel__slide"><div><h3 class="testimonials-carousel__slide-name">Lucas Forrester</h3><p class="testimonials-carousel__slide-job">Procurement Manager at Trader Joe’s</p><p class="testimonials-carousel__slide-text">We have been cooperating for 20 years, and are fully satisfied with the cooperation. Our customers often choose Havana products. In the future, we will expand the range of Havana cigars presented in our stores.</p><p class="testimonials-carousel__slide-job">March 21, 2020</p></div></div>',
];

let currentIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.testimonials-carousel__track-container');
    slideContainer.innerHTML = slides[currentIdx];
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlideIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 980px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
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
    currentIdx = currentIdx - 1 <  0 ? slides.length - 1 : currentIdx - 1;
    renderSlide();
}

// setInterval(nextSlide, 3000);

const btnNext = document.querySelector('.testimonials-carousel-button__right');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.testimonials-carousel-button__left');
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);