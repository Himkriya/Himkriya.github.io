// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // Create floating particles
    createParticles();
    
    // Animate hero elements
    animateHero();
    
    // Setup scroll animations for chapters
    setupChapterAnimations();
    
    // Setup hover effects
    setupHoverEffects();
    
    // Setup continuous animations
    setupContinuousAnimations();
    
    // Setup navigation scroll
    setupNavigation();
});

function createParticles() {
    const container = document.querySelector('.bg-particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        // Apply styles
        Object.assign(particle.style, {
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: 'rgba(0, 168, 255, 0.3)',
            borderRadius: '50%',
            left: `${posX}%`,
            top: `${posY}%`,
            filter: 'blur(1px)',
            pointerEvents: 'none'
        });
        
        container.appendChild(particle);
        
        // Animate particle
        gsap.to(particle, {
            x: 'random(-100, 100)',
            y: 'random(-100, 100)',
            duration: duration,
            delay: delay,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
}

function animateHero() {
    // Name glow animation
    gsap.to('.name-glow', {
        scale: 1.2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    // Name flicker effect
    gsap.to('.cinematic-name', {
        opacity: 0.95,
        duration: 0.1,
        repeat: -1,
        repeatDelay: 3,
        yoyo: true,
        ease: 'none'
    });
    
    // Title words sequential reveal
    gsap.to('.title-word', {
        opacity: 0.7,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
        ease: 'sine.inOut'
    });
}

function setupChapterAnimations() {
    // Animate each chapter on scroll
    const chapters = document.querySelectorAll('.chapter');
    
    chapters.forEach((chapter, index) => {
        gsap.from(chapter, {
            scrollTrigger: {
                trigger: chapter,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            delay: index * 0.2
        });
        
        // Animate chapter number
        const chapterNumber = chapter.querySelector('.chapter-number');
        if (chapterNumber) {
            gsap.from(chapterNumber, {
                scrollTrigger: {
                    trigger: chapter,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                },
                x: -100,
                opacity: 0,
                duration: 1
            });
        }
        
        // Animate chapter title
        const chapterTitle = chapter.querySelector('.chapter-title');
        if (chapterTitle) {
            gsap.from(chapterTitle, {
                scrollTrigger: {
                    trigger: chapter,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                },
                x: 100,
                opacity: 0,
                duration: 1
            });
        }
    });
    
    // Animate cards in proof section
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1
        });
    });
    
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            delay: index * 0.2
        });
    });
}

function setupHoverEffects() {
    // Skill cards hover
    const skillCards = document.querySelectorAll('.skill-category');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // Contact items hover
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                backgroundColor: 'rgba(0, 168, 255, 0.1)',
                duration: 0.3
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                backgroundColor: 'rgba(10, 10, 10, 0.7)',
                duration: 0.3
            });
        });
    });
}

function setupContinuousAnimations() {
    // Continuous floating grid animation
    gsap.to('.floating-grid', {
        x: 50,
        y: 50,
        duration: 40,
        repeat: -1,
        yoyo: true,
        ease: 'none'
    });
    
    // Continuous light streaks animation
    gsap.to('.light-streaks', {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: 'none'
    });
    
    // Continuous background pulse
    gsap.to('body', {
        backgroundPosition: '0px 0px, 0px 0px',
        duration: 20,
        repeat: -1,
        ease: 'none'
    });
}

function setupNavigation() {
    // Update active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add random glitch effect to name
function addGlitchEffect() {
    const name = document.querySelector('.cinematic-name');
    const originalText = name.textContent;
    
    setInterval(() => {
        if (Math.random() > 0.95) {
            const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
            let glitched = originalText.split('').map(char => 
                Math.random() > 0.8 ? chars[Math.floor(Math.random() * chars.length)] : char
            ).join('');
            
            name.textContent = glitched;
            
            setTimeout(() => {
                name.textContent = originalText;
            }, 100);
        }
    }, 1000);
}

// Initialize glitch effect
setTimeout(addGlitchEffect, 5000);