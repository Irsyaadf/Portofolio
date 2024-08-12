var typed = new Typed(".auto-type", {
  strings: ["Muhammad Irsyaad Fadhillah", "Web Developer"],
  typeSpeed: 50,
  backType: 100,
  loop: true
});

// Carousel Sertifikat
let currentIndex = 0;
const carouselImages = document.getElementById('carousel-images');
const totalImages = carouselImages.children.length;

let imagesPerSlide = 1;

const updateCarousel = () => {
  const offset = -currentIndex * (100 / imagesPerSlide);
  carouselImages.style.transform = `translateX(${offset}%)`;
};

const startCarousel = () => {
  carouselInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }, 2000);
};

const stopCarousel = () => {
  clearInterval(carouselInterval);
};

const updateImagesPerSlide = () => {
  const width = window.innerWidth;
  if (width >= 1200) {
    imagesPerSlide = 4;
  } else if (width >= 900) {
    imagesPerSlide = 3;
  } else if (width >= 600) {
    imagesPerSlide = 2;
  } else {
    imagesPerSlide = 1;
  }
  totalSlides = Math.ceil(totalImages / imagesPerSlide);
};

const carousel = document.getElementById('carousel');
carousel.addEventListener('mouseenter', stopCarousel);
carousel.addEventListener('mouseleave', startCarousel);

window.addEventListener('resize', () => {
  updateImagesPerSlide();
  updateCarousel();
});

updateImagesPerSlide();
startCarousel();