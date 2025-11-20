// ===== PORTFOLIO JAVASCRIPT ===== //

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initSkillBars();
    initSmoothScrolling();
    initTypingEffect();
    initParallaxEffects();
    initContactForm();
    initProjectLinks();
    initHorizontalScroll();
    
    console.log('Portfolio loaded successfully! 🚀');
    console.log('📧 Email service: Resend API ready');
});

// ===== NAVIGATION ===== //
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===== SMOOTH SCROLLING ===== //
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SCROLL ANIMATIONS ===== //
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Special handling for skill bars
                if (entry.target.classList.contains('skill-category')) {
                    animateSkillBars(entry.target);
                }
                
                // Special handling for stats counter
                if (entry.target.classList.contains('hero-stats')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(`
        .section-header,
        .about-card,
        .highlight-item,
        .project-card,
        .skill-category,
        .service-card,
        .availability-card,
        .contact-card,
        .hero-stats
    `);
    
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// ===== SKILL BARS ANIMATION ===== //
function initSkillBars() {
    // This will be triggered by the scroll observer
}

function animateSkillBars(skillCategory) {
    const skillBars = skillCategory.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
            bar.classList.add('animate');
        }, index * 200);
    });
}

// ===== TYPING EFFECT ===== //
function initTypingEffect() {
    const titleElement = document.querySelector('.hero-title .highlight');
    if (!titleElement) return;
    
    const texts = ['Data Solutions', 'ETL Pipelines', 'Analytics Systems', 'Cloud Architecture'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            titleElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            titleElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before starting new text
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    // Start typing effect after a delay
    setTimeout(typeText, 1000);
}

// ===== COUNTER ANIMATION ===== //
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const numericValue = parseInt(target.replace(/\D/g, ''));
        const suffix = target.replace(/[\d.]/g, '');
        
        if (isNaN(numericValue)) return;
        
        let current = 0;
        const increment = numericValue / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }
            
            if (suffix.includes('%')) {
                counter.textContent = Math.floor(current) + '%';
            } else if (suffix.includes('M')) {
                counter.textContent = (current / 1000000).toFixed(1) + 'M+';
            } else if (suffix.includes('K')) {
                counter.textContent = Math.floor(current / 1000) + 'K';
            } else {
                counter.textContent = Math.floor(current) + suffix;
            }
        }, 20);
    });
}

// ===== PARALLAX EFFECTS ===== //
function initParallaxEffects() {
    // Disable parallax on mobile devices to prevent scrolling issues
    const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (!isMobile) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.data-flow-animation');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// ===== PROJECT FILTERING ===== //
function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===== CONTACT FORM ===== //
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    // Add real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate all fields
        if (!validateForm(contactForm)) {
            showNotification('Please fix the errors in the form.', 'error');
            return;
        }
        
        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('.submit-btn');
        const btnText = submitButton.querySelector('.btn-text');
        const btnLoading = submitButton.querySelector('.btn-loading');
        
        // Show loading state
        btnText.style.display = 'none';
        btnLoading.style.display = 'flex';
        submitButton.disabled = true;
        
        try {
            // Create email content
            const emailData = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Send email using Deno + Resend
            const result = await sendEmail(emailData);
            
            // Show appropriate success message based on method used
            if (result.method === 'mailto') {
                showNotification('Email client opened with your message. Please send it to complete the process.', 'success');
            } else if (result.method === 'deno-resend') {
                showNotification('Message sent successfully via Resend! I\'ll get back to you soon.', 'success');
            } else {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            }
            contactForm.reset();
            
        } catch (error) {
            console.error('Email sending failed:', error);
            
            // Show error message
            const errorMessage = error.message || 'Failed to send message. Please try again.';
            showNotification(`Unable to send message: ${errorMessage}`, 'error');
            
            // Copy email to clipboard as backup
            try {
                const emailText = `Subject: Portfolio Contact: ${emailData.subject}\n\n` +
                    `Name: ${emailData.name}\n` +
                    `Email: ${emailData.email}\n\n` +
                    `Message:\n${emailData.message}`;
                
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(emailText).then(() => {
                        setTimeout(() => {
                            showNotification('Message copied to clipboard! You can email me directly at: omarabdullatiff000@gmail.com', 'info');
                        }, 2000);
                    });
                }
            } catch (clipboardError) {
                console.error('Clipboard copy failed:', clipboardError);
            }
        } finally {
            // Reset button state
            btnText.style.display = 'flex';
            btnLoading.style.display = 'none';
            submitButton.disabled = false;
        }
    });
}

// ===== FORM VALIDATION ===== //
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    const errorElement = document.getElementById(`${fieldName}-error`);
    
    // Clear previous error
    clearFieldError(field);
    
    // Required field validation
    if (!value) {
        showFieldError(field, errorElement, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`);
        return false;
    }
    
    // Email validation
    if (fieldName === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, errorElement, 'Please enter a valid email address');
            return false;
        }
    }
    
    // Name validation
    if (fieldName === 'name') {
        if (value.length < 2) {
            showFieldError(field, errorElement, 'Name must be at least 2 characters long');
            return false;
        }
    }
    
    // Subject validation
    if (fieldName === 'subject') {
        if (value.length < 5) {
            showFieldError(field, errorElement, 'Subject must be at least 5 characters long');
            return false;
        }
    }
    
    // Message validation
    if (fieldName === 'message') {
        if (value.length < 10) {
            showFieldError(field, errorElement, 'Message must be at least 10 characters long');
            return false;
        }
    }
    
    return true;
}

function showFieldError(field, errorElement, message) {
    field.classList.add('error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearFieldError(field) {
    field.classList.remove('error');
    const fieldName = field.name;
    const errorElement = document.getElementById(`${fieldName}-error`);
    if (errorElement) {
        errorElement.classList.remove('show');
        errorElement.textContent = '';
    }
}

// ===== EMAIL SENDING WITH DENO + RESEND ===== //
async function sendEmail(emailData) {
    console.log('🚀 Starting email send process with Deno + Resend...');
    console.log('📧 Email data:', emailData);
    
    // Your Deno function endpoint - update this URL when deployed
    const DENO_FUNCTION_URL = 'http://localhost:8000/send-contact-email'; // Local development
    // const DENO_FUNCTION_URL = 'https://your-deno-deploy-url.deno.dev/send-contact-email'; // Production
    
    try {
        console.log('📤 Sending email via Deno function...');
        
        const payload = {
            name: emailData.name,
            email: emailData.email,
            message: `Subject: ${emailData.subject}\n\n${emailData.message}`
        };
        
        console.log('📋 Sending payload to Deno function:', payload);
        
        const response = await fetch(DENO_FUNCTION_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        
        console.log('📡 Response status:', response.status);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌ Deno function error response:', errorText);
            throw new Error(`Deno function error: ${response.status} - ${errorText}`);
        }
        
        const result = await response.json();
        console.log('📨 Deno function response:', result);
        
        if (result.success) {
            console.log('✅ Email sent successfully via Deno + Resend');
            return { 
                status: 'success', 
                method: 'deno-resend', 
                response: result 
            };
        } else {
            throw new Error(result.error || 'Email sending failed');
        }
        
    } catch (error) {
        console.error('❌ Deno function failed:', error);
        
        // Try alternative method as fallback
        try {
            console.log('🔄 Trying fallback service...');
            return await sendEmailAlternative(emailData);
        } catch (fallbackError) {
            console.error('❌ All services failed:', fallbackError);
            throw new Error('Unable to send email. Please contact me directly at omarabdullatiff000@gmail.com');
        }
    }
}

// ===== ALTERNATIVE EMAIL SERVICE ===== //
async function sendEmailAlternative(emailData) {
    console.log('📧 Trying alternative email service...');
    
    // Using a simple mailto as ultimate fallback
    const subject = encodeURIComponent(`Portfolio Contact: ${emailData.subject}`);
    const body = encodeURIComponent(
        `Name: ${emailData.name}\n` +
        `Email: ${emailData.email}\n` +
        `Subject: ${emailData.subject}\n\n` +
        `Message:\n${emailData.message}`
    );
    
    const mailtoLink = `mailto:omarabdullatiff000@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    const link = document.createElement('a');
    link.href = mailtoLink;
    link.target = '_blank';
    link.click();
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 
                status: 'success', 
                method: 'mailto',
                message: 'Email client opened with pre-filled message'
            });
        }, 500);
    });
}

// ===== NOTIFICATION SYSTEM ===== //
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// ===== THEME TOGGLE ===== //
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// ===== LAZY LOADING ===== //
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== PERFORMANCE MONITORING ===== //
function initPerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
        
        // Track Core Web Vitals if available
        if ('web-vital' in window) {
            // Implementation would go here
        }
    });
}

// ===== ACCESSIBILITY ENHANCEMENTS ===== //
function initAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Keyboard navigation for custom elements
    const interactiveElements = document.querySelectorAll('.project-card, .skill-category');
    
    interactiveElements.forEach(element => {
        element.setAttribute('tabindex', '0');
        
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
    });
    
    // Focus management for mobile menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            const firstLink = navMenu.querySelector('a');
            if (firstLink) firstLink.focus();
        }
    });
}

// ===== ERROR HANDLING ===== //
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// ===== UTILITY FUNCTIONS ===== //
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== PROJECT LINKS INITIALIZATION ===== //
function initProjectLinks() {
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Project link clicked:', link.href);
            
            // Add visual feedback
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = '';
            }, 150);
        });
        
        // Ensure links are properly accessible
        link.setAttribute('tabindex', '0');
        
        // Add keyboard support
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                link.click();
            }
        });
    });
    
    console.log(`✅ Initialized ${projectLinks.length} project links`);
}

// ===== ANALYTICS TRACKING ===== //
function trackEvent(eventName, properties = {}) {
    // Google Analytics 4 tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, properties);
    }
    
    // Console log for development
    console.log('Event tracked:', eventName, properties);
}

// Track important interactions
document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button');
    if (!target) return;
    
    const eventData = {
        element_type: target.tagName.toLowerCase(),
        element_text: target.textContent.trim(),
        element_href: target.href || null
    };
    
    if (target.classList.contains('project-link')) {
        trackEvent('project_view', { project_name: target.closest('.project-card').querySelector('.project-title').textContent });
    } else if (target.classList.contains('btn-primary')) {
        trackEvent('cta_click', eventData);
    } else if (target.classList.contains('contact-link')) {
        trackEvent('contact_click', eventData);
    }
});

// ===== HORIZONTAL SCROLL SERVICES ===== //
function initHorizontalScroll() {
    const servicesGrid = document.querySelector('.services-grid');
    const servicesSection = document.querySelector('.services');
    const scrollHint = document.querySelector('.scroll-hint');
    
    if (!servicesGrid || !servicesSection) return;
    
    // Handle scroll gradients
    function updateScrollGradients() {
        const scrollLeft = servicesGrid.scrollLeft;
        const maxScroll = servicesGrid.scrollWidth - servicesGrid.clientWidth;
        
        if (maxScroll > 0) {
            if (scrollLeft > 10 || scrollLeft < maxScroll - 10) {
                servicesSection.classList.add('show-gradients');
            } else {
                servicesSection.classList.remove('show-gradients');
            }
        }
    }
    
    // Hide scroll hint after first interaction
    function hideScrollHint() {
        if (scrollHint) {
            scrollHint.style.opacity = '0';
            setTimeout(() => {
                scrollHint.style.display = 'none';
            }, 300);
        }
    }
    
    // Add scroll event listener
    servicesGrid.addEventListener('scroll', updateScrollGradients);
    
    // Hide hint on first scroll
    servicesGrid.addEventListener('scroll', hideScrollHint, { once: true });
    
    // Add keyboard navigation
    servicesGrid.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            servicesGrid.scrollBy({ left: -300, behavior: 'smooth' });
            hideScrollHint();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            servicesGrid.scrollBy({ left: 300, behavior: 'smooth' });
            hideScrollHint();
        }
    });
    
    // Add touch/mouse wheel horizontal scrolling
    servicesGrid.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // Already horizontal
        
        e.preventDefault();
        servicesGrid.scrollBy({
            left: e.deltaY > 0 ? 300 : -300,
            behavior: 'smooth'
        });
        hideScrollHint();
    });
    
    // Initial gradient check
    setTimeout(updateScrollGradients, 100);
    
    // Update on window resize
    window.addEventListener('resize', updateScrollGradients);
}

// ===== PROGRESSIVE ENHANCEMENT ===== //
// Enhance experience for users with JavaScript enabled
document.documentElement.classList.add('js-enabled');

// Add CSS custom properties support detection
if (CSS.supports('color', 'var(--primary-color)')) {
    document.documentElement.classList.add('css-custom-properties');
}

// Add intersection observer support detection
if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('intersection-observer');
}

// ===== SERVICE WORKER REGISTRATION ===== //
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
