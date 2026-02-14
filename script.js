document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded successfully');

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    const ctaButtons = document.querySelector('.cta-buttons');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            ctaButtons.classList.toggle('active');
            
            const icon = mobileMenuToggle.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close menu on mobile click
                nav.classList.remove('active');
                ctaButtons.classList.remove('active');
                 const icon = mobileMenuToggle.querySelector('i');
                 icon.classList.remove('fa-times');
                 icon.classList.add('fa-bars');
            }
        });
    });
});
