document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('#navbar a');
    const sections = document.querySelectorAll('section');

    const getNavbarHeight = () => {
        return navbar.offsetHeight;
    };

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - getNavbarHeight(),
                behavior: 'smooth'
            });

            // Update active class on navbar links
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Add sticky class to navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }

        // Highlight active section link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - getNavbarHeight();
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
