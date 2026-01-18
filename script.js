// script.js - ENHANCED VERSION
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully');
    
    // Only run if GSAP loads
    if (typeof gsap !== 'undefined') {
        try {
            // Force countdown animation start
            gsap.from('.countdown-number', {
                opacity: 0,
                scale: 2,
                duration: 1,
                stagger: 1,
                ease: "power2.out"
            });
            
            // Opening message animation
            gsap.from('.fade-in-text', {
                opacity: 0,
                y: 20,
                duration: 0.8,
                stagger: 0.5,
                delay: 3,
                ease: "power2.out"
            });
            
            // Hero content reveal
            gsap.to('.hero-content', {
                opacity: 1,
                duration: 1,
                delay: 4,
                ease: "power2.out"
            });
            
            // Title words reveal
            gsap.from('.title-word', {
                opacity: 0,
                y: 20,
                duration: 0.8,
                stagger: 0.2,
                delay: 4.8,
                ease: "power2.out"
            });
            
            // Underline and tagline
            gsap.to(['.title-underline', '.hero-tagline'], {
                opacity: 1,
                duration: 1,
                delay: 5.8,
                ease: "power2.out"
            });
            
            // Scroll indicator
            gsap.to('.scroll-indicator', {
                opacity: 1,
                duration: 1,
                delay: 6.5,
                ease: "power2.out"
            });
            
            // Name glow effect
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
            
            // Chapter animations
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
            
            // Interactive elements hover
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
            
        } catch (error) {
            console.log('Animation error:', error);
        }
    } else {
        // Fallback if GSAP doesn't load
        setTimeout(() => {
            document.querySelectorAll('.hero-content, .title-underline, .hero-tagline, .scroll-indicator').forEach(el => {
                el.style.opacity = '1';
            });
        }, 1000);
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
});
