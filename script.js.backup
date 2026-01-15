// ===== MOBILE NAVIGATION MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ===== ACTIVE NAVIGATION LINK HIGHLIGHTING =====
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
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

// ===== EDUCATION ITEMS HOVER EFFECTS =====
const educationItems = document.querySelectorAll('.org-item, .course-item');
educationItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px) scale(1.03)';
        item.style.boxShadow = '0 4px 12px rgba(30, 58, 138, 0.2)';
        item.style.borderLeftColor = '#2563eb';
        item.style.backgroundColor = '#f0f4ff';
        item.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0) scale(1)';
        item.style.boxShadow = 'none';
        item.style.borderLeftColor = '#1e3a8a';
        item.style.backgroundColor = 'white';
    });
});

// ===== SKILLS CATEGORIES ENHANCED HOVER =====
const skillsCategories = document.querySelectorAll('.skills-category');
skillsCategories.forEach(category => {
    const header = category.querySelector('.category-header');
    const icon = category.querySelector('.category-icon');
    const skillsList = category.querySelector('.skills-list');
    
    category.addEventListener('mouseenter', () => {
        category.style.transform = 'scale(1.05)';
        category.style.transition = 'transform 0.3s ease';
        icon.style.transform = 'scale(1.3)';
        icon.style.transition = 'transform 0.3s ease';
        header.style.backgroundColor = '#e0e7ff';
        header.style.boxShadow = '0 6px 16px rgba(30, 58, 138, 0.25)';
        skillsList.style.color = '#1e3a8a';
        skillsList.style.fontWeight = '500';
    });
    
    category.addEventListener('mouseleave', () => {
        category.style.transform = 'scale(1)';
        icon.style.transform = 'scale(1)';
        header.style.backgroundColor = 'white';
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        skillsList.style.color = '#4b5563';
        skillsList.style.fontWeight = 'normal';
    });
});

// ===== EXPERIENCE ITEMS ENHANCED HOVER =====
const experienceItems = document.querySelectorAll('.experience-item');
experienceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-8px) scale(1.02)';
        item.style.boxShadow = '0 12px 24px rgba(30, 58, 138, 0.2)';
        item.style.borderLeftWidth = '6px';
        item.style.backgroundColor = '#f9fafb';
        item.style.transition = 'all 0.3s ease';
        
        const title = item.querySelector('.experience-title');
        if (title) {
            title.style.color = '#2563eb';
            title.style.transform = 'translateX(5px)';
            title.style.transition = 'all 0.3s ease';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
        item.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
        item.style.borderLeftWidth = '4px';
        item.style.backgroundColor = 'white';
        
        const title = item.querySelector('.experience-title');
        if (title) {
            title.style.color = '#1e3a8a';
            title.style.transform = 'translateX(0)';
        }
    });
});

// ===== PROJECT ITEMS ENHANCED HOVER =====
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-8px) scale(1.02)';
        item.style.boxShadow = '0 12px 24px rgba(30, 58, 138, 0.2)';
        item.style.borderLeftWidth = '6px';
        item.style.backgroundColor = '#f9fafb';
        item.style.transition = 'all 0.3s ease';
        
        const header = item.querySelector('.project-header h3');
        if (header) {
            header.style.color = '#2563eb';
            header.style.transform = 'translateX(5px)';
            header.style.transition = 'all 0.3s ease';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
        item.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
        item.style.borderLeftWidth = '4px';
        item.style.backgroundColor = 'white';
        
        const header = item.querySelector('.project-header h3');
        if (header) {
            header.style.color = '#1f2937';
            header.style.transform = 'translateX(0)';
        }
    });
});

// ===== SOCIAL ICONS ENHANCED ANIMATION =====
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.boxShadow = '0 8px 20px rgba(30, 58, 138, 0.3)';
        icon.style.transition = 'all 0.3s ease';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
        icon.style.boxShadow = 'none';
    });
});

// ===== CONTACT FORM FIELD ENHANCED ANIMATIONS =====
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
formInputs.forEach(input => {
    // Hover effect
    input.addEventListener('mouseenter', () => {
        input.style.borderColor = '#2563eb';
        input.style.boxShadow = '0 2px 8px rgba(37, 99, 235, 0.1)';
        input.style.transition = 'all 0.3s ease';
    });
    
    input.addEventListener('mouseleave', () => {
        if (document.activeElement !== input) {
            input.style.borderColor = '#e5e7eb';
            input.style.boxShadow = 'none';
        }
    });
    
    // Focus effect
    input.addEventListener('focus', () => {
        input.style.borderColor = '#1e3a8a';
        input.style.transform = 'scale(1.02)';
        input.style.transition = 'all 0.3s ease';
        input.style.boxShadow = '0 4px 12px rgba(30, 58, 138, 0.2)';
        input.style.backgroundColor = '#f0f4ff';
    });
    
    input.addEventListener('blur', () => {
        input.style.borderColor = '#e5e7eb';
        input.style.transform = 'scale(1)';
        input.style.boxShadow = 'none';
        input.style.backgroundColor = 'white';
    });
});

// ===== INFO ITEMS ENHANCED HOVER EFFECT =====
const infoItems = document.querySelectorAll('.info-item');
infoItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px) scale(1.05)';
        item.style.transition = 'all 0.3s ease';
        item.style.backgroundColor = '#e0e7ff';
        item.style.boxShadow = '0 4px 12px rgba(30, 58, 138, 0.2)';
        item.style.borderRadius = '0.75rem';
        
        const heading = item.querySelector('h3');
        const text = item.querySelector('p');
        if (heading) {
            heading.style.transform = 'scale(1.1)';
            heading.style.transition = 'transform 0.3s ease';
        }
        if (text) {
            text.style.color = '#1e3a8a';
            text.style.transition = 'color 0.3s ease';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0) scale(1)';
        item.style.backgroundColor = '#f9fafb';
        item.style.boxShadow = 'none';
        item.style.borderRadius = '0.5rem';
        
        const heading = item.querySelector('h3');
        const text = item.querySelector('p');
        if (heading) heading.style.transform = 'scale(1)';
        if (text) text.style.color = '#4b5563';
    });
});

// ===== SECTION TITLES WITH HOVER EFFECT =====
const sectionTitles = document.querySelectorAll('.section-title');
sectionTitles.forEach(title => {
    title.addEventListener('mouseenter', () => {
        title.style.color = '#2563eb';
        title.style.transform = 'scale(1.05)';
        title.style.letterSpacing = '1px';
        title.style.transition = 'all 0.3s ease';
    });
    
    title.addEventListener('mouseleave', () => {
        title.style.color = '#1f2937';
        title.style.transform = 'scale(1)';
        title.style.letterSpacing = 'normal';
    });
});

// ===== CONTACT FORM SUBMISSION =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    
    if (name && email && message) {
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        submitBtn.style.backgroundColor = '#6b7280';
        
        try {
            // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
            // Sign up at https://formspree.io/ to get your form ID
            const response = await fetch('https://formspree.io/f/xovpnvyd', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            });
            
            if (response.ok) {
                alert(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you at ${email} soon!`);
                contactForm.reset();
            } else {
                alert('Oops! There was a problem sending your message. Please try again or email me directly at dal215755@utdallas.edu');
            }
        } catch (error) {
            alert('Oops! There was a problem sending your message. Please try again or email me directly at dal215755@utdallas.edu');
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            submitBtn.style.backgroundColor = '#1e3a8a';
        }
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.setAttribute('id', 'scrollTopBtn');
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #1e3a8a;
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.backgroundColor = '#2563eb';
    scrollTopBtn.style.transform = 'scale(1.15)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.backgroundColor = '#1e3a8a';
    scrollTopBtn.style.transform = 'scale(1)';
});

// ===== SCROLL INDICATOR FADE =====
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.visibility = 'hidden';
            scrollIndicator.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.visibility = 'visible';
        }
    });
}

// ===== TYPING EFFECT FOR HERO SUBTITLE =====
const subtitleElement = document.querySelector('.hero-subtitle');
if (subtitleElement) {
    const subtitleText = subtitleElement.textContent;
    subtitleElement.textContent = '';
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < subtitleText.length) {
            subtitleElement.textContent += subtitleText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        }
    }
    
    setTimeout(typeWriter, 500);
}