// Trigger hero animations after first paint so LCP is visible to crawlers
requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        document.documentElement.classList.add('animated');
    });
});

// Scroll-triggered fade-in animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.feature-card, .showcase-text, .showcase-mockup, .privacy-container');

    elements.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => observer.observe(el));
});
