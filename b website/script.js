// Fallback for browsers that don't support CSS smooth scroll
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         const target = document.querySelector(this.getAttribute('href'));
//         target.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// });
// Fallback for browsers that don't support CSS smooth scroll and enhance functionality
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const rect = target.getBoundingClientRect();
            const topPosition = target.getBoundingClientRect().top + window.scrollY;

            // Prevent unnecessary scrolling if the section is already in view
            if (rect.top !== 0 || rect.left !== 0) {
                // Smooth scroll fallback for browsers that support it
                if ('scrollBehavior' in document.documentElement.style) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    window.scrollTo({
                        top: topPosition,
                        behavior: 'smooth'
                    });
                }
            }
        }
    });
});

// Highlight active section in the navbar while scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70; // Adjust for navbar height
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
