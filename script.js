// script.js - SIMPLIFIED WORKING VERSION
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully');
    
    // Only run if GSAP loads
    if (typeof gsap !== 'undefined') {
        try {
            // Simple fade-in for sections
            const sections = document.querySelectorAll('.chapter');
            sections.forEach((section, index) => {
                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    },
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    delay: index * 0.2
                });
            });
            
            // Simple hover effects
            const interactiveElements = document.querySelectorAll('.skill-category, .achievement-card, .contact-item');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    gsap.to(el, {
                        scale: 1.02,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });
                
                el.addEventListener('mouseleave', () => {
                    gsap.to(el, {
                        scale: 1,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                });
            });
            
            // Name glow effect (simple)
            const name = document.querySelector('.cinematic-name');
            if (name) {
                setInterval(() => {
                    gsap.to(name, {
                        textShadow: '0 0 30px #00a8ff',
                        duration: 2,
                        yoyo: true,
                        repeat: 1
                    });
                }, 4000);
            }
            
        } catch (error) {
            console.log('Simple animations only');
        }
    }
    
    // Smooth scroll for navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Make sure everything is visible
    setTimeout(() => {
        document.querySelectorAll('*').forEach(el => {
            el.style.opacity = '1';
        });
    }, 100);
});
