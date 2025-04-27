document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navList = document.querySelector('.nav-list');

    if (navToggle && mainNav && navList) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open');

            // Toggle ARIA attributes for accessibility
            const isExpanded = mainNav.classList.contains('nav-open');
            navToggle.setAttribute('aria-expanded', isExpanded);

        });

        // Close menu if clicking outside of it 
        document.addEventListener('click', (event) => {
            if (mainNav.classList.contains('nav-open') && !mainNav.contains(event.target) && event.target !== navToggle) {
                mainNav.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Update Copyright Year
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

  

});