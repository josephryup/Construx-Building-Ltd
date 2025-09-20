    const carousel = document.querySelector('.project-carousel');
    const slides = document.querySelectorAll('.project-carousel img, .project-carousel video');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;

    // Move the carousel
    function updateCarousel() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Next Slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    // Previous Slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    // Event Listeners for Buttons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Automatic Slide
    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Handle resizing
    window.addEventListener('resize', updateCarousel);
