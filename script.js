const slides = document.querySelectorAll('.hero-slide');
const slider = document.querySelector('.hero-slider');
const nextBtn = document.querySelector('.arrow.right');
const prevBtn = document.querySelector('.arrow.left');

let currentIndex = 0;
const slideIntervalTime = 4000;
let slideInterval;

// Function to update active slide
function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
    });
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Next and previous slide functions
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

// Event listeners for arrows
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Start auto-sliding
function startAutoSlide() {
    slideInterval = setInterval(nextSlide, slideIntervalTime);
}

// Stop auto-sliding
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Pause on hover
const heroSection = document.querySelector('.hero');
heroSection.addEventListener('mouseenter', stopAutoSlide);
heroSection.addEventListener('mouseleave', startAutoSlide);

// Initialize
updateSlider();
startAutoSlide();
