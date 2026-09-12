document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentYearSpan = document.getElementById('current-year');

    // --- Theme Persistence ---
    const currentTheme = localStorage.getItem('theme');

    // Apply saved theme on initial load
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // --- Theme Toggle Button Click ---
    themeToggle.addEventListener('click', () => {
        // Toggle the .dark-mode class on the body
        document.body.classList.toggle('dark-mode');

        // Determine the new theme and save to localStorage
        let newTheme = 'light'; // Assume light unless dark-mode class is present
        if (document.body.classList.contains('dark-mode')) {
            newTheme = 'dark';
        }
        localStorage.setItem('theme', newTheme);
    });

    // --- Update Copyright Year ---
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Optional: Smooth Scrolling for Nav Links ---
    const navLinks = document.querySelectorAll('header nav ul li a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor jump
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Align to the top of the section
                });
            }
        });
    });
});