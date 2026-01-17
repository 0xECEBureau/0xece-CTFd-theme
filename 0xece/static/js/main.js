/**
 * 0xECE CTFd Theme - Main JavaScript
 * Neo-Brutalist interactions and animations
 */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all components
    initNavigation();
    initAnimations();
    initKeyboardShortcuts();
    initBackgrounds();
});

/**
 * Initialize Backgrounds based on Page
 */
function initBackgrounds() {
    const path = window.location.pathname;
    const isIndex = path === '/' || path === '/index';
    const isScoreboard = path.includes('scoreboard');

    // Default to 'bg-special' (Static Stripes) for most pages (challenges, account, etc)
    // Use 'bg-animated' (Dot Grid) for Index and Scoreboard only
    if (isIndex || isScoreboard) {
        document.body.classList.add('bg-dot-grid');
    }
}

/**
 * Navigation enhancements
 */
function initNavigation() {
    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navbarNav = document.querySelector('.navbar-nav');

    if (mobileMenuBtn && navbarNav) {
        mobileMenuBtn.addEventListener('click', function () {
            navbarNav.classList.toggle('active');
        });
    }
}

/**
 * Entrance animations for elements
 */
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Keyboard shortcuts
 */
function initKeyboardShortcuts() {
    document.addEventListener('keydown', function (e) {
        // Escape to close modals
        if (e.key === 'Escape') {
            const modal = document.querySelector('.modal-backdrop.active');
            if (modal) {
                modal.classList.remove('active');
            }
        }

        // Ctrl/Cmd + K for search (if exists)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            const searchInput = document.querySelector('#challenge-search, #user-search, #team-search');
            if (searchInput) {
                e.preventDefault();
                searchInput.focus();
            }
        }
    });
}

/**
 * Utility: Copy text to clipboard
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copié !', 'success');
    }).catch(err => {
        console.error('Failed to copy:', err);
        showToast('Erreur lors de la copie', 'error');
    });
}

/**
 * Toast notifications
 */
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `alert alert-${type} animate-slide-up`;
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 9999;
        min-width: 200px;
        box-shadow: 4px 4px 0 var(--text-black);
    `;
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * Format numbers with K/M suffix
 */
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

/**
 * Debounce utility
 */
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

/**
 * Add ripple effect to buttons
 */
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('🔥 0xECE Theme loaded');
