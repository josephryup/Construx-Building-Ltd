const feedbackItems = document.querySelectorAll('.client-feedback .testimonial-card');
let currentIndex = 0;

function showRandomFeedback() {
    // Hide all feedback items
    feedbackItems.forEach(item => {
        item.classList.remove('active');
    });

    // Show a random feedback item
    const randomIndex = Math.floor(Math.random() * feedbackItems.length);
    feedbackItems[randomIndex].classList.add('active');
}

// Initially show one feedback item
showRandomFeedback();

// Change feedback every 3 seconds
setInterval(showRandomFeedback, 3000);

// -----------------------------------
//  Intersection Observer for Animations
// -----------------------------------
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Animate only once
        }
    });
}, {
    threshold: 0.15 // Trigger when 15% of the element is visible
});

// Observe elements for animation
const elementsToObserve = document.querySelectorAll(
    '.hero-overlay, .process-card, .project-management, .benefits, .transform-spaces, .feature-card, .transform-space-cta, .insights, .insights-header > *, .blog-card, .blog-section, .blog-post-card'
);
elementsToObserve.forEach(element => {
    observer.observe(element);
});

// Special handling for hero overlay children to animate individually
const heroOverlay = document.querySelector('.hero-overlay');
if (heroOverlay) {
    observer.observe(heroOverlay);
}