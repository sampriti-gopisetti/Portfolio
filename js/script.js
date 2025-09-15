/**
 * Global JS for Sampriti's Portfolio
 */

// Charts removed; portfolioData no longer needed

// Set active nav link based on current page
(function setActiveNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav .nav-link').forEach((a) => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
    else a.classList.remove('active');
  });
})();

// Intersection Observer for fade-in and slide-up animations
(function observeInView() {
  const els = document.querySelectorAll('.fade-in');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
})();

// Removed legacy Swiper-based carousel code in favor of custom 3D Carousel

// Charts removed; keep JS focused on carousel and UX

// Small UX: smooth scroll to top when clicking logo
document.querySelectorAll('.logo').forEach((logo) => {
  logo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});

/**
 * 3D Carousel Component
 */
class Carousel3D {
  constructor(container) {
    this.container = container;
    this.inner = container.querySelector('.carousel-3d-inner');
    this.slides = container.querySelectorAll('.carousel-3d-item');
    this.totalSlides = this.slides.length;
    this.currentIndex = 0;
    // Optional context-specific UI inside this container
    this.paperPopup = container.querySelector('.paper-popup');
    
    // Initialize carousel
    this.init();
  }
  
  init() {
    // Set initial positions
    this.updateCarousel();

    // If URL has a hash that matches a slide ID inside this container, set that slide active
    const hash = window.location.hash && window.location.hash.slice(1);
    if (hash) {
      const targetIndex = Array.from(this.slides).findIndex((s) => s.id === hash);
      if (targetIndex !== -1) {
        this.goTo(targetIndex);
        // Ensure the carousel is scrolled into view beneath fixed header
        setTimeout(() => {
          const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 64;
          const rect = this.container.getBoundingClientRect();
          const y = window.scrollY + rect.top - headerH - 8; // small offset
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 0);
      }
    }
    
    // Add event listeners for controls if they exist
    const prevBtn = this.container.querySelector('.carousel-prev');
    const nextBtn = this.container.querySelector('.carousel-next');
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => this.prev());
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.next());
    }
    
    // Add hover event listeners to slides
    const hoverDisabled = this.container.hasAttribute('data-no-hover');
    this.slides.forEach((slide, index) => {
      // Add hover event for immediate navigation
      if (!hoverDisabled) {
        slide.addEventListener('mouseenter', () => {
          // Move to this card immediately on hover
          this.goTo(index);
        });
      }
      
      // Add click event
      slide.addEventListener('click', () => {
        // Handle click event (e.g., open project details)
        if (slide.dataset.link) {
          window.location.href = slide.dataset.link;
        }
      });
    });
    
    // Add swipe gestures for mobile
    this.addSwipeEvents();
  }
  
  updateCarousel() {
    this.slides.forEach((slide, index) => {
      // Reset all classes
      slide.classList.remove('active', 'left', 'right', 'back');
      
      if (index === this.currentIndex) {
        // Current slide
        slide.classList.add('active');
      } else if (this.getPositionIndex(index) === 1) {
        // Right slide
        slide.classList.add('right');
      } else if (this.getPositionIndex(index) === -1) {
        // Left slide
        slide.classList.add('left');
      } else {
        // Back slide
        slide.classList.add('back');
      }
    });

    // Toggle paper popup if present (only on projects page)
    if (this.paperPopup) {
      const activeSlide = this.slides[this.currentIndex];
      const hasPaper = activeSlide && activeSlide.hasAttribute('data-has-paper');
      if (hasPaper) {
        // If slide provides custom text, use it; else use default label
        const text = activeSlide.getAttribute('data-paper-text') || 'Published paper';
        const textSpan = this.paperPopup.querySelector('span');
        if (textSpan) textSpan.textContent = text;
        this.paperPopup.classList.add('show');
        this.paperPopup.setAttribute('aria-hidden', 'false');
      } else {
        this.paperPopup.classList.remove('show');
        this.paperPopup.setAttribute('aria-hidden', 'true');
      }
    }
  }
  
  // Calculate relative position (-1, 0, 1, 2)
  getPositionIndex(index) {
    const diff = index - this.currentIndex;
    
    // Handle circular array
    if (diff > this.totalSlides / 2) {
      return diff - this.totalSlides;
    } 
    if (diff < -this.totalSlides / 2) {
      return diff + this.totalSlides;
    }
    
    return diff;
  }
  
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.updateCarousel();
  }
  
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.updateCarousel();
  }
  
  goTo(index) {
    if (index !== this.currentIndex) {
      this.currentIndex = index;
      this.updateCarousel();
    }
  }
  
  addSwipeEvents() {
    let touchStartX = 0;
    let touchEndX = 0;
    
    this.container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    this.container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, false);
    
    const handleSwipe = () => {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        this.next(); // Swipe left
      }
      if (touchEndX > touchStartX + swipeThreshold) {
        this.prev(); // Swipe right
      }
    };
    
    this.handleSwipe = handleSwipe;
  }
}

// Initialize any 3D carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel-3d-container');
  carousels.forEach(container => {
    new Carousel3D(container);
  });
});
