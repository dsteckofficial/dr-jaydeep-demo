document.addEventListener('DOMContentLoaded', () => {
    
    // Set Image Sources
    document.getElementById('team-img').src = 'assets/images/team.png';
    document.getElementById('consult-img').src = 'assets/images/consultation.png';

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuIcon.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuIcon.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Intersection Observer for Animations
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-up');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });

    // Animated Counters - Removed for Satva Clinic since stats are non-numeric text

    // Form Submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for booking a consultation! Satva Clinic will contact you shortly to confirm.');
            bookingForm.reset();
        });
    }
});
