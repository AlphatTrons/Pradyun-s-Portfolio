// ParticleJS Initialization (Using particles.js library)
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 4
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        }
    }
});

// Scroll Reveal Effect
const revealOnScroll = () => {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Contact Form Submission Alert
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message Sent!');
});

// Parallax Scrolling Effect
const parallaxElements = document.querySelectorAll('.parallax');

const parallaxScroll = () => {
    parallaxElements.forEach((element) => {
        let scrollPosition = window.scrollY;
        element.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
};

window.addEventListener('scroll', parallaxScroll);

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.scroll-reveal');
window.addEventListener('scroll', () => {
    revealElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 150) {
            element.classList.add('scroll-reveal-visible');
        }
    });
});

// Particles.js Initialization
particlesJS('particles-js', {
    particles: {
        number: {
            value: 50,
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#ffffff" }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0 }
        },
        size: {
            value: 5,
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.3 }
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
    },
    retina_detect: true
});

// Scroll to Section with Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive Form (Simple Validation)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields!');
    } else {
        alert('Message sent successfully!');
        contactForm.reset();
    }
});
// Floating Action Button (FAB) Scroll Animation
const fab = document.querySelector('.fab');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        fab.style.transform = 'scale(1)';
        fab.style.transition = 'all 0.4s ease-in-out';
    } else {
        fab.style.transform = 'scale(0)';
    }
});

// Scroll Animations for Skills Section
const skillElements = document.querySelectorAll('.skill');
window.addEventListener('scroll', () => {
    skillElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.classList.add('scroll-reveal-visible');
        }
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skill Bar Progress Animation (triggered when they enter viewport)
const skillBars = document.querySelectorAll('.skill-bar');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector('.fill').style.width = entry.target.getAttribute('data-skill-level') + '%';
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => observer.observe(bar));

// Contact Form Floating Labels (Interactive Input Fields)
const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.add('focused');
    });
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.classList.remove('focused');
        }
    });
});

// Shimmering Text Animation Activation
const shimmerText = document.querySelectorAll('.shimmer-text');
shimmerText.forEach(text => {
    setInterval(() => {
        text.classList.add('active');
        setTimeout(() => {
            text.classList.remove('active');
        }, 2000);
    }, 5000);
});

// Advanced Scroll Animations (Visibility and Smooth Entry)
const fadeInElements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// Toggle Dark Mode on Button Click
const darkModeButton = document.querySelector('.toggle-dark-mode');
darkModeButton.addEventListener('click', () => {
    document.body.toggleAttribute('data-theme', 'dark');
});

// Particle Effect Generator for Footer
const footerParticles = document.querySelector('.footer');
function createFooterParticle() {
    const particle = document.createElement('div');
    particle.classList.add('footer-particle');
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 2 + 2}s`;
    footerParticles.appendChild(particle);
    setTimeout(() => {
        particle.remove();
    }, 3000);
}
setInterval(createFooterParticle, 100);

// Adding Smooth Scroll on Anchor Links
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

// Add Scroll Animation for Project Cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover-effect');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover-effect');
    });
});

// Particle Generator for Floating Particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particlesContainer.appendChild(particle);
    setTimeout(() => {
        particle.remove();
    }, 5000);
}

setInterval(createParticles, 200);

// Scroll Animation for Fade-In Effect
const sections = document.querySelectorAll('.section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

// Activate Text Hover Effects
const textHoverElements = document.querySelectorAll('.text-hover');
textHoverElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('hover-active');
    });
    element.addEventListener('mouseout', () => {
        element.classList.remove('hover-active');
    });
});

// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
/* JavaScript for Scroll Progress Bar */
window.onscroll = function () {
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollProgress = (document.documentElement.scrollTop / scrollHeight) * 100;
    document.getElementById("progressBar").style.width = scrollProgress + "%";
};
