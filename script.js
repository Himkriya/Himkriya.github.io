// ULTRA-CINEMATIC TECH PORTFOLIO SCRIPT
// IMAX-LEVEL ANIMATIONS AND INTERACTIVITY

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 INITIALIZING CINEMATIC TECH PORTFOLIO...');
    
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.error('❌ GSAP not loaded! Loading fallback...');
        loadFallbackAnimations();
        return;
    }
    
    // Initialize all cinematic modules
    initializeLoader();
    initializeStarfield();
    initializeMatrixRain();
    initializeParticleSystem();
    initializeCyberCity();
    initializeNeuralNetwork();
    initializeQuantumParticles();
    initializeTechnoBeat();
    initializeSonarPulse();
    initializeMissionControl();
    initializeHackerTerminal();
    initializeChapterTransitions();
    initializeInteractive3D();
    initializeParallaxEffects();
    initializeMouseTracking();
    initializeScrollAnimations();
    initializeTypewriterEffects();
    initializeRealTimeStats();
    initializeCanvasEffects();
    initializeAudioReactive();
    initializeGestureControls();
    initializePerformanceMonitor();
    
    // Main cinematic sequence
    launchCinematicExperience();
});

// ====================
// MODULE 1: CINEMATIC LOADER
// ====================
function initializeLoader() {
    const loader = document.getElementById('cinematicLoader');
    if (!loader) return;
    
    // Create loading sequence
    gsap.to('.progress-bar', {
        width: '100%',
        duration: 3,
        ease: 'power2.out',
        onComplete: () => {
            // Loading complete sequence
            gsap.to('.loader-text', {
                text: 'SYSTEMS: ONLINE • READY FOR DEPLOYMENT',
                duration: 1,
                ease: 'none'
            });
            
            gsap.to('.loader-bar', {
                background: 'linear-gradient(90deg, #00ff00, #00ff88, #00ff00)',
                duration: 0.5
            });
            
            // Hide loader and start main experience
            setTimeout(() => {
                gsap.to(loader, {
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.in',
                    onComplete: () => {
                        loader.style.display = 'none';
                        startMainExperience();
                    }
                });
            }, 1000);
        }
    });
    
    // Animate loading text
    const loadingTexts = [
        'INITIALIZING NEURAL NETWORK...',
        'LOADING TECH ARSENAL...',
        'CALIBRATING SYSTEMS...',
        'PREPARING CINEMATIC EXPERIENCE...'
    ];
    
    let textIndex = 0;
    const textElement = document.querySelector('.loader-text');
    
    setInterval(() => {
        if (textElement) {
            gsap.to(textElement, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    textIndex = (textIndex + 1) % loadingTexts.length;
                    textElement.textContent = loadingTexts[textIndex];
                    gsap.to(textElement, { opacity: 1, duration: 0.3 });
                }
            });
        }
    }, 800);
}

// ====================
// MODULE 2: STARFIELD
// ====================
function initializeStarfield() {
    const starfield = document.getElementById('starfield');
    if (!starfield) return;
    
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 5 + 3;
        const delay = Math.random() * 5;
        
        // Set styles
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.animationDelay = `${delay}s`;
        
        // Add twinkle effect
        if (Math.random() > 0.7) {
            star.style.animationName = 'twinkle';
        }
        
        starfield.appendChild(star);
    }
    
    // Animate starfield
    gsap.to(starfield, {
        backgroundPosition: '500px 500px',
        duration: 100,
        repeat: -1,
        ease: 'none'
    });
}

// ====================
// MODULE 3: MATRIX RAIN
// ====================
function initializeMatrixRain() {
    const matrixContainer = document.querySelector('.matrix-rain');
    if (!matrixContainer) return;
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    const drops = new Array(columns).fill(0);
    
    function createMatrix() {
        for (let i = 0; i < drops.length; i++) {
            const char = document.createElement('span');
            char.className = 'matrix-char';
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            
            // Position
            char.style.left = `${i * 20}px`;
            char.style.top = `${drops[i] * 20}px`;
            char.style.opacity = Math.random() * 0.5 + 0.5;
            char.style.color = `hsl(${Math.random() * 60 + 160}, 100%, ${Math.random() * 30 + 50}%)`;
            
            matrixContainer.appendChild(char);
            
            // Animate falling
            gsap.to(char, {
                y: '+=100vh',
                opacity: 0,
                duration: Math.random() * 3 + 2,
                ease: 'none',
                onComplete: () => char.remove()
            });
            
            drops[i]++;
            if (drops[i] * 20 > window.innerHeight && Math.random() > 0.975) {
                drops[i] = 0;
            }
        }
    }
    
    // Start matrix rain
    setInterval(createMatrix, 50);
}

// ====================
// MODULE 4: PARTICLE SYSTEM
// ====================
function initializeParticleSystem() {
    const particleContainer = document.querySelector('.bg-particles');
    if (!particleContainer) return;
    
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particleContainer);
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const color = Math.random() > 0.5 ? '#00a8ff' : '#9d00ff';
        
        // Set styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.background = color;
        particle.style.borderRadius = '50%';
        particle.style.position = 'absolute';
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        particle.style.filter = 'blur(1px)';
        
        container.appendChild(particle);
        
        // Animate particle
        const timeline = gsap.timeline({ repeat: -1, yoyo: true });
        
        timeline
            .to(particle, {
                x: `+=${Math.random() * 100 - 50}`,
                y: `+=${Math.random() * 100 - 50}`,
                duration: duration / 2,
                ease: 'sine.inOut'
            })
            .to(particle, {
                x: `-=${Math.random() * 100 - 50}`,
                y: `-=${Math.random() * 100 - 50}`,
                duration: duration / 2,
                ease: 'sine.inOut'
            });
        
        // Pulsing opacity
        gsap.to(particle, {
            opacity: Math.random() * 0.5 + 0.3,
            duration: Math.random() * 5 + 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
}

// ====================
// MODULE 5: CYBER CITY
// ====================
function initializeCyberCity() {
    const cityContainer = document.getElementById('cyberCity');
    if (!cityContainer) return;
    
    const buildingCount = 20;
    const windowColors = ['#00a8ff', '#9d00ff', '#00ffcc', '#ff0055'];
    
    for (let i = 0; i < buildingCount; i++) {
        createBuilding(cityContainer, i);
    }
    
    function createBuilding(container, index) {
        const building = document.createElement('div');
        building.className = 'building';
        
        // Random building properties
        const width = Math.random() * 60 + 40;
        const height = Math.random() * 150 + 100;
        const x = (index / buildingCount) * 100;
        const color = `hsl(${Math.random() * 60 + 200}, 70%, 30%)`;
        
        // Set styles
        building.style.left = `${x}%`;
        building.style.width = `${width}px`;
        building.style.height = `${height}px`;
        building.style.background = `linear-gradient(transparent, ${color})`;
        building.style.boxShadow = `inset 0 0 20px ${color}`;
        
        // Add windows
        const windowCount = Math.floor(height / 30);
        for (let w = 0; w < windowCount; w++) {
            const window = document.createElement('div');
            window.className = 'building-window';
            
            window.style.position = 'absolute';
            window.style.left = `${Math.random() * 80 + 10}%`;
            window.style.top = `${(w / windowCount) * 100}%`;
            window.style.width = '10px';
            window.style.height = '15px';
            window.style.background = windowColors[Math.floor(Math.random() * windowColors.length)];
            window.style.opacity = Math.random() * 0.8 + 0.2;
            window.style.animation = `windowGlow ${Math.random() * 3 + 2}s ease-in-out infinite`;
            
            building.appendChild(window);
        }
        
        container.appendChild(building);
        
        // Animate building glow
        gsap.to(building, {
            boxShadow: `inset 0 0 40px ${color}, 0 0 30px ${color}`,
            duration: Math.random() * 3 + 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
    
    // Add CSS for window animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes windowGlow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// ====================
// MODULE 6: NEURAL NETWORK
// ====================
function initializeNeuralNetwork() {
    const networkContainer = document.getElementById('neuralNetwork');
    if (!networkContainer) return;
    
    const neuronCount = 20;
    const neurons = [];
    
    // Create neurons
    for (let i = 0; i < neuronCount; i++) {
        const neuron = document.createElement('div');
        neuron.className = 'neuron';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        neuron.style.left = `${x}%`;
        neuron.style.top = `${y}%`;
        
        networkContainer.appendChild(neuron);
        neurons.push({ element: neuron, x, y });
    }
    
    // Create synapses (connections between neurons)
    function createSynapse(fromNeuron, toNeuron) {
        const synapse = document.createElement('div');
        synapse.className = 'synapse';
        
        // Calculate distance and angle
        const dx = toNeuron.x - fromNeuron.x;
        const dy = toNeuron.y - fromNeuron.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        
        // Set styles
        synapse.style.left = `${fromNeuron.x}%`;
        synapse.style.top = `${fromNeuron.y}%`;
        synapse.style.width = '0px';
        synapse.style.setProperty('--length', `${distance}%`);
        synapse.style.transform = `rotate(${angle}deg)`;
        synapse.style.transformOrigin = '0 0';
        
        networkContainer.appendChild(synapse);
        
        // Animate synapse
        gsap.to(synapse, {
            width: `${distance}%`,
            duration: 2,
            ease: 'power2.out',
            onComplete: () => {
                gsap.to(synapse, {
                    opacity: 0,
                    duration: 1,
                    onComplete: () => synapse.remove()
                });
            }
        });
    }
    
    // Create random synapses periodically
    setInterval(() => {
        if (neurons.length >= 2) {
            const fromIndex = Math.floor(Math.random() * neurons.length);
            let toIndex;
            do {
                toIndex = Math.floor(Math.random() * neurons.length);
            } while (toIndex === fromIndex);
            
            createSynapse(neurons[fromIndex], neurons[toIndex]);
        }
    }, 500);
    
    // Animate neurons
    neurons.forEach((neuron, index) => {
        gsap.to(neuron.element, {
            scale: 1.5,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.1
        });
    });
}

// ====================
// MODULE 7: QUANTUM PARTICLES
// ====================
function initializeQuantumParticles() {
    const quantumContainer = document.getElementById('quantumParticles');
    if (!quantumContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createQuantumParticle(quantumContainer);
    }
    
    function createQuantumParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'quantum-particle';
        
        // Random starting position
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        // Random movement
        const tx = (Math.random() - 0.5) * 100;
        const ty = (Math.random() - 0.5) * 100;
        
        particle.style.setProperty('--tx', `${tx}%`);
        particle.style.setProperty('--ty', `${ty}%`);
        particle.style.left = `${startX}%`;
        particle.style.top = `${startY}%`;
        
        // Random color
        const hue = Math.random() * 60 + 200;
        particle.style.background = `hsl(${hue}, 100%, 60%)`;
        
        container.appendChild(particle);
        
        // Remove after animation
        setTimeout(() => {
            particle.remove();
            createQuantumParticle(container);
        }, 3000);
    }
}

// ====================
// MODULE 8: TECHNO BEAT
// ====================
function initializeTechnoBeat() {
    const beatContainer = document.getElementById('technoBeat');
    if (!beatContainer) return;
    
    const barCount = 50;
    
    for (let i = 0; i < barCount; i++) {
        createBeatBar(beatContainer, i, barCount);
    }
    
    function createBeatBar(container, index, total) {
        const bar = document.createElement('div');
        bar.className = 'beat-bar';
        
        // Position
        const left = (index / total) * 100;
        const height = Math.random() * 100 + 50;
        
        bar.style.left = `${left}%`;
        bar.style.height = `${height}px`;
        
        // Random color
        const hue = Math.random() > 0.5 ? 200 : 280;
        bar.style.background = `linear-gradient(transparent, hsl(${hue}, 100%, 50%))`;
        
        // Random animation
        const duration = Math.random() * 0.5 + 0.3;
        const delay = Math.random() * 0.5;
        
        bar.style.animationDuration = `${duration}s`;
        bar.style.animationDelay = `${delay}s`;
        
        container.appendChild(bar);
    }
}

// ====================
// MODULE 9: SONAR PULSE
// ====================
function initializeSonarPulse() {
    const sonarContainer = document.getElementById('sonarPulse');
    if (!sonarContainer) return;
    
    function createSonarPulse(x, y) {
        const circle = document.createElement('div');
        circle.className = 'sonar-circle';
        
        circle.style.left = `${x}%`;
        circle.style.top = `${y}%`;
        circle.style.borderColor = `hsl(${Math.random() * 60 + 200}, 100%, 50%)`;
        
        sonarContainer.appendChild(circle);
        
        // Remove after animation
        setTimeout(() => {
            circle.remove();
        }, 4000);
    }
    
    // Create random sonar pulses
    setInterval(() => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        createSonarPulse(x, y);
    }, 1000);
    
    // Create sonar pulse on mouse movement
    let lastPulse = 0;
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastPulse > 500) {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            createSonarPulse(x, y);
            lastPulse = now;
        }
    });
}

// ====================
// MODULE 10: MISSION CONTROL
// ====================
function initializeMissionControl() {
    const missionControl = document.getElementById('missionControl');
    if (!missionControl) return;
    
    // Show mission control on scroll
    let shown = false;
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        if (scrollY > windowHeight * 0.5 && !shown) {
            gsap.to(missionControl, {
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            });
            shown = true;
        } else if (scrollY < windowHeight * 0.3 && shown) {
            gsap.to(missionControl, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.in'
            });
            shown = false;
        }
    });
    
    // Update mission status
    const statusItems = missionControl.querySelectorAll('.mission-item');
    const statusMessages = [
        'SYSTEMS: OPTIMAL',
        'NETWORK: SECURE',
        'DATASTREAM: ACTIVE',
        'PORTFOLIO: ENGAGED',
        'PERFORMANCE: MAXIMUM',
        'SECURITY: ENHANCED'
    ];
    
    setInterval(() => {
        statusItems.forEach((item, index) => {
            const span = item.querySelector('span');
            if (span) {
                const newStatus = statusMessages[Math.floor(Math.random() * statusMessages.length)];
                
                gsap.to(span, {
                    opacity: 0,
                    duration: 0.3,
                    onComplete: () => {
                        span.textContent = newStatus;
                        gsap.to(span, { opacity: 1, duration: 0.3 });
                    }
                });
            }
        });
    }, 5000);
}

// ====================
// MODULE 11: HACKER TERMINAL
// ====================
function initializeHackerTerminal() {
    const terminal = document.getElementById('hackerTerminal');
    if (!terminal) return;
    
    // Show terminal after load
    setTimeout(() => {
        gsap.to(terminal, {
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        });
        
        // Add new terminal lines periodically
        const terminalLines = [
            '> SCANNING FOR VULNERABILITIES...',
            '> ENCRYPTION: 256-BIT ACTIVE',
            '> FIREWALL STATUS: GREEN',
            '> CONNECTING TO DATABASE...',
            '> UPLOADING PORTFOLIO DATA...',
            '> SYSTEM INTEGRITY: 100%',
            '> READY FOR INQUIRIES'
        ];
        
        const terminalContent = terminal.querySelector('.terminal-line:last-child');
        let lineIndex = 0;
        
        setInterval(() => {
            if (lineIndex < terminalLines.length) {
                const newLine = document.createElement('div');
                newLine.className = 'terminal-line';
                newLine.textContent = terminalLines[lineIndex];
                newLine.style.width = '0';
                
                terminal.appendChild(newLine);
                
                // Typewriter effect
                gsap.to(newLine, {
                    width: '100%',
                    duration: 2,
                    ease: 'none'
                });
                
                lineIndex++;
                
                // Scroll to bottom
                terminal.scrollTop = terminal.scrollHeight;
            }
        }, 3000);
    }, 3000);
    
    // Make terminal draggable
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    
    terminal.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
    
    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        
        if (e.target === terminal) {
            isDragging = true;
        }
    }
    
    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            
            xOffset = currentX;
            yOffset = currentY;
            
            setTranslate(currentX, currentY, terminal);
        }
    }
    
    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }
    
    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }
}

// ====================
// MODULE 12: CHAPTER TRANSITIONS
// ====================
function initializeChapterTransitions() {
    const transition = document.getElementById('chapterTransition');
    const transitionText = document.getElementById('transitionText');
    
    if (!transition || !transitionText) return;
    
    // Chapter titles
    const chapterTitles = {
        'origin': 'CHAPTER 01: THE ORIGIN',
        'arsenal': 'CHAPTER 02: THE ARSENAL',
        'journey': 'CHAPTER 03: THE JOURNEY',
        'proof': 'CHAPTER 04: THE PROOF',
        'contact': 'CHAPTER 05: THE NEXT MOVE'
    };
    
    // Create Intersection Observer for chapters
    const chapters = document.querySelectorAll('.cinematic-chapter');
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const chapterId = entry.target.id;
                const title = chapterTitles[chapterId];
                
                if (title) {
                    // Show transition
                    transitionText.textContent = title;
                    
                    gsap.to(transition, {
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.out',
                        onComplete: () => {
                            // Hide transition after delay
                            setTimeout(() => {
                                gsap.to(transition, {
                                    opacity: 0,
                                    duration: 0.5,
                                    ease: 'power2.in'
                                });
                            }, 1000);
                        }
                    });
                }
                
                // Trigger chapter-specific animations
                triggerChapterAnimations(chapterId);
            }
        });
    }, observerOptions);
    
    // Observe all chapters
    chapters.forEach(chapter => {
        observer.observe(chapter);
    });
    
    function triggerChapterAnimations(chapterId) {
        switch(chapterId) {
            case 'origin':
                animateOriginChapter();
                break;
            case 'arsenal':
                animateArsenalChapter();
                break;
            case 'journey':
                animateJourneyChapter();
                break;
            case 'proof':
                animateProofChapter();
                break;
            case 'contact':
                animateContactChapter();
                break;
        }
    }
}

// ====================
// MODULE 13: INTERACTIVE 3D
// ====================
function initializeInteractive3D() {
    // 3D Skill Cubes Interaction
    const skillCubes = document.querySelectorAll('.skill-cube');
    
    skillCubes.forEach(cube => {
        cube.addEventListener('mouseenter', () => {
            gsap.to(cube, {
                rotationY: 180,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
        
        cube.addEventListener('mouseleave', () => {
            gsap.to(cube, {
                rotationY: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
    
    // 3D Logo Cube
    const logoCube = document.querySelector('.logo-cube');
    if (logoCube) {
        let rotationX = 0;
        let rotationY = 0;
        
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            
            rotationY = x * 20;
            rotationX = -y * 20;
            
            gsap.to(logoCube, {
                rotationX: rotationX,
                rotationY: rotationY,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    }
    
    // Parallax layers
    const depthLayers = document.querySelectorAll('.depth-layers');
    
    depthLayers.forEach(layer => {
        layer.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            
            const children = layer.children;
            
            Array.from(children).forEach((child, index) => {
                const depth = (index + 1) * 10;
                const moveX = x * depth;
                const moveY = y * depth;
                
                gsap.to(child, {
                    x: moveX,
                    y: moveY,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
        });
    });
}

// ====================
// MODULE 14: PARALLAX EFFECTS
// ====================
function initializeParallaxEffects() {
    // Mouse parallax
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Update CSS variables for dynamic effects
        document.documentElement.style.setProperty('--mouse-x', `${mouseX * 100}%`);
        document.documentElement.style.setProperty('--mouse-y', `${mouseY * 100}%`);
        
        // Parallax elements
        const parallaxElements = document.querySelectorAll('.parallax-layer');
        
        parallaxElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 100;
            const y = (mouseY - 0.5) * speed * 100;
            
            gsap.to(element, {
                x: x,
                y: y,
                duration: 1,
                ease: 'power2.out'
            });
        });
    });
    
    // Scroll parallax
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const parallaxSpeed = 0.5;
        
        const parallaxScrollElements = document.querySelectorAll('.parallax-scroll');
        
        parallaxScrollElements.forEach(element => {
            const offset = scrollY * parallaxSpeed;
            gsap.set(element, { y: offset });
        });
    });
}

// ====================
// MODULE 15: MOUSE TRACKING
// ====================
function initializeMouseTracking() {
    // Create mouse trail
    const trail = document.createElement('div');
    trail.id = 'mouseTrail';
    trail.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, #00a8ff, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 999999;
        mix-blend-mode: screen;
        filter: blur(5px);
        opacity: 0;
    `;
    document.body.appendChild(trail);
    
    // Create trail particles
    const particles = [];
    const particleCount = 10;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'trail-particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #00a8ff;
            border-radius: 50%;
            pointer-events: none;
            z-index: 999998;
            opacity: 0;
        `;
        document.body.appendChild(particle);
        particles.push(particle);
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update trail
        gsap.to(trail, {
            x: mouseX - 10,
            y: mouseY - 10,
            opacity: 0.5,
            duration: 0.1,
            ease: 'power2.out'
        });
        
        // Update trail particles
        particles.forEach((particle, index) => {
            const delay = index * 0.05;
            
            setTimeout(() => {
                gsap.to(particle, {
                    x: mouseX - 2,
                    y: mouseY - 2,
                    opacity: 0.3,
                    duration: 0.2,
                    ease: 'power2.out',
                    onComplete: () => {
                        gsap.to(particle, {
                            opacity: 0,
                            duration: 0.5
                        });
                    }
                });
            }, delay * 1000);
        });
    });
    
    // Hide trail when mouse leaves window
    document.addEventListener('mouseleave', () => {
        gsap.to(trail, { opacity: 0, duration: 0.3 });
    });
    
    document.addEventListener('mouseenter', () => {
        gsap.to(trail, { opacity: 0.5, duration: 0.3 });
    });
}

// ====================
// MODULE 16: SCROLL ANIMATIONS
// ====================
function initializeScrollAnimations() {
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add animation class
                element.classList.add('animated');
                
                // Remove observer after animation
                scrollObserver.unobserve(element);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe all animated elements
    animatedElements.forEach(element => {
        scrollObserver.observe(element);
    });
    
    // Scroll progress indicator
    const scrollProgress = document.createElement('div');
    scrollProgress.id = 'scrollProgress';
    scrollProgress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00a8ff, #9d00ff);
        z-index: 999999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(scrollProgress);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        
        gsap.to(scrollProgress, {
            width: `${scrolled}%`,
            duration: 0.1,
            ease: 'none'
        });
    });
    
    // Smooth scroll for navigation
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Add cinematic scroll effect
                gsap.to(window, {
                    scrollTo: {
                        y: targetElement,
                        offsetY: 80
                    },
                    duration: 1.5,
                    ease: 'power3.inOut'
                });
                
                // Add visual feedback
                gsap.to(link, {
                    scale: 1.2,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1
                });
            }
        });
    });
}

// ====================
// MODULE 17: TYPEWRITER EFFECTS
// ====================
function initializeTypewriterEffects() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    
    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        let charIndex = 0;
        
        function typeNextChar() {
            if (charIndex < text.length) {
                element.textContent += text.charAt(charIndex);
                charIndex++;
                
                // Random typing speed
                const speed = Math.random() * 100 + 50;
                setTimeout(typeNextChar, speed);
            } else {
                // Blinking cursor effect
                setInterval(() => {
                    element.classList.toggle('cursor-blink');
                }, 500);
            }
        }
        
        // Start typing after delay
        setTimeout(typeNextChar, 1000);
    });
    
    // Add CSS for cursor blink
    const style = document.createElement('style');
    style.textContent = `
        .cursor-blink::after {
            content: '|';
            animation: blink 1s infinite;
        }
        
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// ====================
// MODULE 18: REAL-TIME STATS
// ====================
function initializeRealTimeStats() {
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 frames per second
        const stepValue = target / (duration / (1000 / steps));
        
        let current = 0;
        const increment = () => {
            current += stepValue;
            if (current >= target) {
                current = target;
                stat.textContent = target + (stat.textContent.includes('%') ? '%' : '+');
            } else {
                stat.textContent = Math.floor(current);
                setTimeout(increment, 1000 / steps);
            }
        };
        
        // Start counting when in viewport
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                increment();
                observer.unobserve(stat);
            }
        });
        
        observer.observe(stat);
    });
    
    // Real-time clock
    const clockElement = document.createElement('div');
    clockElement.id = 'cinematicClock';
    clockElement.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        font-family: 'Orbitron', monospace;
        color: #00a8ff;
        font-size: 0.8rem;
        letter-spacing: 2px;
        z-index: 9999;
        opacity: 0.7;
    `;
    document.body.appendChild(clockElement);
    
    function updateClock() {
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        clockElement.textContent = `SYSTEM TIME: ${time}`;
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}

// ====================
// MODULE 19: CANVAS EFFECTS
// ====================
function initializeCanvasEffects() {
    // Journey Visualization Canvas
    const journeyCanvas = document.getElementById('journeyCanvas');
    if (!journeyCanvas) return;
    
    const ctx = journeyCanvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        journeyCanvas.width = journeyCanvas.offsetWidth;
        journeyCanvas.height = journeyCanvas.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Nodes for journey visualization
    const nodes = [
        { x: 100, y: 100, size: 10, label: '2018' },
        { x: 300, y: 200, size: 15, label: '2020' },
        { x: 500, y: 150, size: 20, label: '2022' },
        { x: 700, y: 300, size: 25, label: '2024' }
    ];
    
    const connections = [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 2, to: 3 }
    ];
    
    // Animation variables
    let time = 0;
    let pulses = [];
    
    // Create pulse animation
    function createPulse(x, y) {
        pulses.push({
            x, y,
            radius: 0,
            maxRadius: 50,
            speed: 2,
            alpha: 1
        });
    }
    
    // Draw function
    function draw() {
        // Clear canvas
        ctx.clearRect(0, 0, journeyCanvas.width, journeyCanvas.height);
        
        // Draw connections
        connections.forEach(conn => {
            const from = nodes[conn.from];
            const to = nodes[conn.to];
            
            // Animated line
            const progress = (Math.sin(time * 0.001) + 1) / 2;
            const currentX = from.x + (to.x - from.x) * progress;
            const currentY = from.y + (to.y - from.y) * progress;
            
            // Gradient line
            const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
            gradient.addColorStop(0, '#00a8ff');
            gradient.addColorStop(1, '#9d00ff');
            
            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Moving point on line
            ctx.beginPath();
            ctx.arc(currentX, currentY, 5, 0, Math.PI * 2);
            ctx.fillStyle = '#00ffcc';
            ctx.fill();
        });
        
        // Draw nodes
        nodes.forEach(node => {
            // Glow effect
            const gradient = ctx.createRadialGradient(
                node.x, node.y, 0,
                node.x, node.y, node.size * 3
            );
            gradient.addColorStop(0, 'rgba(0, 168, 255, 0.8)');
            gradient.addColorStop(1, 'rgba(0, 168, 255, 0)');
            
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
            
            // Node
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
            ctx.fillStyle = '#00a8ff';
            ctx.fill();
            
            // Node label
            ctx.fillStyle = '#ffffff';
            ctx.font = '12px Orbitron';
            ctx.textAlign = 'center';
            ctx.fillText(node.label, node.x, node.y + node.size + 20);
            
            // Pulsing animation
            const pulseSize = node.size + Math.sin(time * 0.005 + node.x) * 3;
            ctx.beginPath();
            ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(0, 168, 255, 0.5)';
            ctx.lineWidth = 2;
            ctx.stroke();
        });
        
        // Draw and update pulses
        pulses.forEach((pulse, index) => {
            pulse.radius += pulse.speed;
            pulse.alpha -= 0.02;
            
            if (pulse.alpha <= 0) {
                pulses.splice(index, 1);
            } else {
                ctx.beginPath();
                ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(0, 168, 255, ${pulse.alpha})`;
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        });
        
        // Create new pulses randomly
        if (Math.random() < 0.05) {
            const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
            createPulse(randomNode.x, randomNode.y);
        }
        
        time++;
        requestAnimationFrame(draw);
    }
    
    // Start animation
    draw();
    
    // Interactive clicks
    journeyCanvas.addEventListener('click', (e) => {
        const rect = journeyCanvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        createPulse(x, y);
    });
}

// ====================
// MODULE 20: AUDIO REACTIVE
// ====================
function initializeAudioReactive() {
    // Check if AudioContext is available
    if (!window.AudioContext && !window.webkitAudioContext) {
        console.log('AudioContext not supported');
        return;
    }
    
    // Create audio context
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();
    
    // Create analyzer node
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    
    // Get microphone permission
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            const source = audioContext.createMediaStreamSource(stream);
            source.connect(analyser);
            
            // Start visualization
            visualizeAudio(analyser);
        })
        .catch(err => {
            console.log('Microphone access denied, using simulated audio');
            simulateAudio(analyser);
        });
    
    function visualizeAudio(analyser) {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        
        function draw() {
            analyser.getByteFrequencyData(dataArray);
            
            // Update visual elements based on audio data
            const average = dataArray.reduce((a, b) => a + b) / bufferLength;
            
            // Update tech stats animation speed
            gsap.to('.tech-stat', {
                scale: 1 + (average / 255) * 0.2,
                duration: 0.1,
                ease: 'power2.out'
            });
            
            // Update particle opacity
            const particles = document.querySelectorAll('.particle');
            particles.forEach(particle => {
                gsap.to(particle, {
                    opacity: 0.1 + (average / 255) * 0.4,
                    duration: 0.1
                });
            });
            
            requestAnimationFrame(draw);
        }
        
        draw();
    }
    
    function simulateAudio(analyser) {
        // Simulate audio data for visualization
        let simulatedData = new Uint8Array(analyser.frequencyBinCount);
        let time = 0;
        
        function updateSimulatedData() {
            for (let i = 0; i < simulatedData.length; i++) {
                // Create wave patterns
                const value = Math.sin(time * 0.01 + i * 0.1) * 128 + 128;
                simulatedData[i] = Math.min(255, Math.max(0, value));
            }
            time++;
            
            // Use simulated data for visualization
            analyser.getByteFrequencyData = function() {
                return simulatedData;
            };
            
            visualizeAudio(analyser);
        }
        
        updateSimulatedData();
    }
}

// ====================
// MODULE 21: GESTURE CONTROLS
// ====================
function initializeGestureControls() {
    // Touch and gesture support for mobile
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // Swipe detection
        if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                // Horizontal swipe
                if (deltaX > 0) {
                    // Swipe right - go to previous chapter
                    navigateChapters(-1);
                } else {
                    // Swipe left - go to next chapter
                    navigateChapters(1);
                }
            } else {
                // Vertical swipe
                if (deltaY > 0) {
                    // Swipe down
                    createRippleEffect(touchEndX, touchEndY);
                } else {
                    // Swipe up
                    createExplosionEffect(touchEndX, touchEndY);
                }
            }
        }
    });
    
    function navigateChapters(direction) {
        const chapters = document.querySelectorAll('.cinematic-chapter');
        const currentScroll = window.scrollY;
        let targetChapter = null;
        
        // Find current chapter
        for (let i = 0; i < chapters.length; i++) {
            const rect = chapters[i].getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                const targetIndex = i + direction;
                if (targetIndex >= 0 && targetIndex < chapters.length) {
                    targetChapter = chapters[targetIndex];
                    break;
                }
            }
        }
        
        if (targetChapter) {
            // Smooth scroll to chapter
            gsap.to(window, {
                scrollTo: {
                    y: targetChapter,
                    offsetY: 80
                },
                duration: 0.8,
                ease: 'power2.inOut'
            });
            
            // Visual feedback
            createSwipeEffect(direction);
        }
    }
    
    function createRippleEffect(x, y) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            left: ${x - 25}px;
            top: ${y - 25}px;
            width: 50px;
            height: 50px;
            border: 2px solid #00a8ff;
            border-radius: 50%;
            pointer-events: none;
            z-index: 999999;
        `;
        
        document.body.appendChild(ripple);
        
        gsap.to(ripple, {
            width: 200,
            height: 200,
            left: x - 100,
            top: y - 100,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => ripple.remove()
        });
    }
    
    function createExplosionEffect(x, y) {
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: 5px;
                height: 5px;
                background: #00a8ff;
                border-radius: 50%;
                pointer-events: none;
                z-index: 999999;
            `;
            
            document.body.appendChild(particle);
            
            const angle = (i / particleCount) * Math.PI * 2;
            const distance = 100;
            
            gsap.to(particle, {
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                onComplete: () => particle.remove()
            });
        }
    }
    
    function createSwipeEffect(direction) {
        const swipe = document.createElement('div');
        swipe.style.cssText = `
            position: fixed;
            top: 0;
            ${direction > 0 ? 'left: 100%' : 'right: 100%'};
            width: 100%;
            height: 100%;
            background: linear-gradient(${direction > 0 ? 90 : 270}deg, 
                transparent, 
                rgba(0, 168, 255, 0.2),
                transparent);
            pointer-events: none;
            z-index: 99999;
        `;
        
        document.body.appendChild(swipe);
        
        gsap.to(swipe, {
            x: direction > 0 ? '-100%' : '100%',
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => swipe.remove()
        });
    }
}

// ====================
// MODULE 22: PERFORMANCE MONITOR
// ====================
function initializePerformanceMonitor() {
    // FPS counter
    const fpsCounter = document.createElement('div');
    fpsCounter.id = 'fpsCounter';
    fpsCounter.style.cssText = `
        position: fixed;
        top: 10px;
        left: 10px;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        color: #00ff00;
        background: rgba(0,0,0,0.5);
        padding: 5px 10px;
        border-radius: 3px;
        z-index: 99999;
        opacity: 0.7;
        display: none;
    `;
    document.body.appendChild(fpsCounter);
    
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 0;
    
    function updateFPS() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
            fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            frameCount = 0;
            lastTime = currentTime;
            
            fpsCounter.textContent = `FPS: ${fps}`;
            
            // Color code based on FPS
            if (fps < 30) {
                fpsCounter.style.color = '#ff0000';
            } else if (fps < 50) {
                fpsCounter.style.color = '#ffaa00';
            } else {
                fpsCounter.style.color = '#00ff00';
            }
        }
        
        requestAnimationFrame(updateFPS);
    }
    
    updateFPS();
    
    // Performance warning system
    let lowFPSWarning = false;
    
    setInterval(() => {
        if (fps < 25 && !lowFPSWarning) {
            lowFPSWarning = true;
            showPerformanceWarning();
        } else if (fps >= 30 && lowFPSWarning) {
            lowFPSWarning = false;
            hidePerformanceWarning();
        }
    }, 1000);
    
    function showPerformanceWarning() {
        const warning = document.createElement('div');
        warning.id = 'performanceWarning';
        warning.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 0, 0, 0.8);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.9rem;
            z-index: 999999;
            animation: warningPulse 1s infinite;
        `;
        warning.textContent = '⚠️ PERFORMANCE OPTIMIZATION RECOMMENDED';
        document.body.appendChild(warning);
    }
    
    function hidePerformanceWarning() {
        const warning = document.getElementById('performanceWarning');
        if (warning) {
            warning.remove();
        }
    }
    
    // Add warning animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes warningPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
    `;
    document.head.appendChild(style);
    
    // Toggle FPS counter with Ctrl+Shift+F
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'F') {
            fpsCounter.style.display = fpsCounter.style.display === 'none' ? 'block' : 'none';
        }
    });
}

// ====================
// CHAPTER SPECIFIC ANIMATIONS
// ====================
function animateOriginChapter() {
    // Timeline animation for origin
    const timelineNodes = document.querySelectorAll('.timeline-node');
    
    timelineNodes.forEach((node, index) => {
        gsap.from(node, {
            scale: 0,
            duration: 1,
            delay: index * 0.3,
            ease: 'back.out(1.7)'
        });
    });
}

function animateArsenalChapter() {
    // Skill sphere animation
    const skillNodes = document.querySelectorAll('.skill-node');
    
    skillNodes.forEach((node, index) => {
        gsap.from(node, {
            scale: 0,
            rotation: 360,
            duration: 1.5,
            delay: index * 0.2,
            ease: 'elastic.out(1, 0.5)'
        });
    });
}

function animateJourneyChapter() {
    // Journey path animation
    const timelineEvents = document.querySelectorAll('.timeline-event');
    
    timelineEvents.forEach((event, index) => {
        gsap.from(event, {
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            duration: 1,
            delay: index * 0.2,
            ease: 'power3.out'
        });
    });
}

function animateProofChapter() {
    // Achievement holograms animation
    const holograms = document.querySelectorAll('.achievement-hologram');
    
    holograms.forEach((hologram, index) => {
        gsap.from(hologram, {
            y: 100,
            rotationX: -90,
            opacity: 0,
            duration: 1,
            delay: index * 0.3,
            ease: 'back.out(1.7)'
        });
    });
}

function animateContactChapter() {
    // Contact form animation
    const contactNodes = document.querySelectorAll('.contact-node');
    
    contactNodes.forEach((node, index) => {
        gsap.from(node, {
            x: -50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });
}

// ====================
// MAIN EXPERIENCE LAUNCH
// ====================
function startMainExperience() {
    console.log('🎬 LAUNCHING CINEMATIC EXPERIENCE...');
    
    // Start IMAX intro
    const imaxIntro = document.querySelector('.imax-intro');
    if (imaxIntro) {
        gsap.to(imaxIntro, {
            opacity: 0,
            duration: 2,
            delay: 1,
            onComplete: () => imaxIntro.remove()
        });
    }
    
    // Start countdown
    startCinematicCountdown();
    
    // Animate hero section
    animateHeroSection();
    
    // Start ambient animations
    startAmbientAnimations();
    
    // Initialize interactive elements
    initializeInteractiveElements();
}

function startCinematicCountdown() {
    const countdownNumbers = document.querySelectorAll('.countdown-number');
    
    countdownNumbers.forEach((number, index) => {
        gsap.set(number, { opacity: 0, scale: 2 });
        
        gsap.to(number, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: index * 1,
            ease: 'power2.out',
            onComplete: () => {
                if (index === countdownNumbers.length - 1) {
                    // Countdown complete
                    gsap.to(number, {
                        opacity: 0,
                        scale: 0.5,
                        duration: 0.5,
                        onComplete: () => {
                            // Show "CINEMATIC EXPERIENCE INITIATED"
                            const label = document.querySelector('.countdown-label');
                            if (label) {
                                gsap.fromTo(label,
                                    { opacity: 0, y: 20 },
                                    { opacity: 1, y: 0, duration: 1 }
                                );
                            }
                        }
                    });
                } else {
                    // Hide number after display
                    gsap.to(number, {
                        opacity: 0,
                        scale: 0.5,
                        duration: 0.5
                    });
                }
            }
        });
    });
}

function animateHeroSection() {
    // Animate 3D name
    gsap.from('.name-layer-1', {
        y: -100,
        opacity: 0,
        duration: 1.5,
        delay: 4,
        ease: 'power3.out'
    });
    
    gsap.from('.name-layer-2', {
        y: -100,
        opacity: 0,
        duration: 1.5,
        delay: 4.2,
        ease: 'power3.out'
    });
    
    gsap.from('.name-layer-3', {
        y: -100,
        opacity: 0,
        duration: 1.5,
        delay: 4.4,
        ease: 'power3.out'
    });
    
    // Animate title characters
    const titleChars = document.querySelectorAll('.title-char');
    titleChars.forEach((char, index) => {
        char.style.setProperty('--index', index);
        
        gsap.from(char, {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 5 + index * 0.1,
            ease: 'back.out(1.7)'
        });
    });
    
    // Animate tech stats
    const techStats = document.querySelectorAll('.tech-stat');
    techStats.forEach((stat, index) => {
        gsap.from(stat, {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 6 + index * 0.2,
            ease: 'power3.out'
        });
    });
    
    // Animate scroll indicator
    gsap.from('.cyber-scroll-indicator', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 7,
        ease: 'power3.out'
    });
}

function startAmbientAnimations() {
    // Ambient light animations
    const lightStreaks = document.querySelector('.light-streaks');
    if (lightStreaks) {
        gsap.to(lightStreaks, {
            backgroundPositionX: '100%',
            duration: 20,
            repeat: -1,
            ease: 'none'
        });
    }
    
    // Floating grid animation
    const floatingGrid = document.querySelector('.floating-grid');
    if (floatingGrid) {
        gsap.to(floatingGrid, {
            y: 50,
            duration: 40,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
    
    // Hologram grid animation
    const hologramGrid = document.querySelector('.hologram-grid');
    if (hologramGrid) {
        gsap.to(hologramGrid, {
            rotation: 360,
            duration: 100,
            repeat: -1,
            ease: 'none'
        });
    }
}

function initializeInteractiveElements() {
    // Interactive hover effects
    const interactiveElements = document.querySelectorAll('.tech-stat, .skill-category, .achievement-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            gsap.to(element, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out',
                overwrite: true
            });
            
            // Create ripple effect
            createHoverRipple(element);
        });
        
        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    function createHoverRipple(element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        
        ripple.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            border: 2px solid #00a8ff;
            border-radius: inherit;
            pointer-events: none;
            z-index: 1;
        `;
        
        element.appendChild(ripple);
        
        gsap.fromTo(ripple,
            { scale: 0.5, opacity: 0.8 },
            {
                scale: 1.2,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
                onComplete: () => ripple.remove()
            }
        );
    }
}

// ====================
// FALLBACK ANIMATIONS
// ====================
function loadFallbackAnimations() {
    console.log('⚠️ Loading fallback animations');
    
    // Simple CSS animations as fallback
    const style = document.createElement('style');
    style.textContent = `
        .fallback-animate {
            animation: fadeIn 1s ease-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .fallback-pulse {
            animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Add fallback classes
    document.querySelectorAll('.hero-content, .chapter').forEach((element, index) => {
        element.classList.add('fallback-animate');
        element.style.animationDelay = `${index * 0.2}s`;
    });
    
    document.querySelectorAll('.tech-stat, .skill-category').forEach(element => {
        element.classList.add('fallback-pulse');
    });
}

// ====================
// ERROR HANDLING
// ====================
window.addEventListener('error', function(e) {
    console.error('🚨 Error in cinematic portfolio:', e.error);
    
    // Graceful degradation
    const errorOverlay = document.createElement('div');
    errorOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        color: #ff0000;
        font-family: 'Courier New', monospace;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 9999999;
        text-align: center;
        padding: 20px;
    `;
    
    errorOverlay.innerHTML = `
        <h2>SYSTEM ERROR DETECTED</h2>
        <p>Loading simplified experience...</p>
        <button onclick="this.parentElement.remove()" 
                style="margin-top: 20px; padding: 10px 20px; background: #00a8ff; border: none; color: white; cursor: pointer;">
            CONTINUE
        </button>
    `;
    
    document.body.appendChild(errorOverlay);
    
    // Load fallback
    loadFallbackAnimations();
});

// ====================
// EXPORT FUNCTIONS
// ====================
// Make some functions available globally for debugging
window.cinematicPortfolio = {
    reloadExperience: () => location.reload(),
    showFPS: () => {
        const fps = document.getElementById('fpsCounter');
        if (fps) fps.style.display = 'block';
    },
    hideFPS: () => {
        const fps = document.getElementById('fpsCounter');
        if (fps) fps.style.display = 'none';
    },
    resetAnimations: () => {
        gsap.globalTimeline.clear();
        location.reload();
    }
};

console.log('✅ CINEMATIC TECH PORTFOLIO LOADED SUCCESSFULLY');
console.log('🎮 Available commands: cinematicPortfolio.showFPS(), cinematicPortfolio.resetAnimations()');
