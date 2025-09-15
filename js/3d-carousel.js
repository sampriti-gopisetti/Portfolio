// 3D Carousel Implementation
class Carousel3D {
  constructor(containerId, options = {}) {
    this.containerId = containerId;
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error(`Container with id ${containerId} not found`);
      return;
    }
    
    this.options = {
      autoplay: options.autoplay || false,
      interval: options.interval || 5000,
      loop: options.loop !== undefined ? options.loop : true,
      counterId: options.counterId || null,
      counterLabel: options.counterLabel || 'Item',
      ...options
    };
    
    this.slides = [];
    this.activeIndex = 0;
    this.totalSlides = 0;
    this.autoplayInterval = null;
    
    this.init();
  }
  
  init() {
    // Create wrapper
    this.setupDOM();
    
    // Get all slide elements
    this.slides = Array.from(this.wrapper.children);
    this.totalSlides = this.slides.length;
    
    if (this.totalSlides === 0) {
      console.error('No slides found');
      return;
    }
    
    // Create indicator dots
    this.createIndicators();
    
    // Set initial positions
    this.updateSlidePositions();
    
    // Update counter if exists
    this.updateCounter();
    
    // Start autoplay if enabled
    if (this.options.autoplay) {
      this.startAutoplay();
      
      // Pause on hover
      this.container.addEventListener('mouseenter', () => this.pauseAutoplay());
      this.container.addEventListener('mouseleave', () => this.startAutoplay());
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
    
    // Add touch support
    let touchStartX = 0;
    let touchEndX = 0;
    
    this.container.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    this.container.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        this.next();
      } else if (touchStartX - touchEndX < -50) {
        this.prev();
      }
    }, { passive: true });
  }
  
  setupDOM() {
    // Get existing content
    const content = this.container.innerHTML;
    
    // Clear container
    this.container.innerHTML = '';
    
    // Create wrapper and add existing content
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'carousel-3d-wrapper';
    this.wrapper.innerHTML = content;
    
    // Create container elements
    this.container.className += ' carousel-3d-container';
    this.container.appendChild(this.wrapper);
    
    // Add indicators container
    this.indicators = document.createElement('div');
    this.indicators.className = 'carousel-3d-indicators';
    
    // Append indicators to DOM
    this.container.parentNode.insertBefore(this.indicators, this.container.nextSibling);
    
    // Add 3D class to each slide and hover navigation
    Array.from(this.wrapper.children).forEach((slide, index) => {
      slide.classList.add('carousel-3d-item');
      
      // Add hover event for immediate navigation
      slide.addEventListener('mouseenter', () => {
        // Go directly to the hovered slide without delay
        this.goTo(index);
      });
      
      // Add click event for mobile/touch devices
      slide.addEventListener('click', () => {
        this.goTo(index);
      });
    });
  }
  
  createIndicators() {
    this.indicators.innerHTML = '';
    
    for (let i = 0; i < this.totalSlides; i++) {
      const dot = document.createElement('div');
      dot.className = `carousel-3d-dot ${i === this.activeIndex ? 'active' : ''}`;
      dot.addEventListener('click', () => this.goTo(i));
      this.indicators.appendChild(dot);
    }
  }
  
  updateIndicators() {
    const dots = this.indicators.querySelectorAll('.carousel-3d-dot');
    dots.forEach((dot, index) => {
      if (index === this.activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  updateSlidePositions() {
    // Update positions immediately for faster hover response
    this.slides.forEach((slide, index) => {
      // Remove all position classes
      slide.classList.remove('active', 'left', 'right', 'back-left', 'back-right', 'hidden');
      
      const diff = this.getPositionDiff(index);
      
      // Assign position based on difference from active
      if (diff === 0) {
        slide.classList.add('active');
      } else if (diff === 1 || diff === -this.totalSlides + 1) {
        slide.classList.add('right');
      } else if (diff === -1 || diff === this.totalSlides - 1) {
        slide.classList.add('left');
      } else if (diff === 2 || diff === -this.totalSlides + 2) {
        slide.classList.add('back-right');
      } else if (diff === -2 || diff === this.totalSlides - 2) {
        slide.classList.add('back-left');
      } else {
        slide.classList.add('hidden');
      }
    });
  }
  
  getPositionDiff(index) {
    let diff = index - this.activeIndex;
    
    // Handle looping for position calculation
    if (this.options.loop) {
      if (diff > this.totalSlides / 2) {
        diff -= this.totalSlides;
      } else if (diff < -this.totalSlides / 2) {
        diff += this.totalSlides;
      }
    }
    
    return diff;
  }
  
  next() {
    if (this.activeIndex >= this.totalSlides - 1) {
      if (this.options.loop) {
        this.activeIndex = 0;
      } else {
        return;
      }
    } else {
      this.activeIndex++;
    }
    
    this.updateSlidePositions();
    this.updateIndicators();
    this.updateCounter();
  }
  
  prev() {
    if (this.activeIndex <= 0) {
      if (this.options.loop) {
        this.activeIndex = this.totalSlides - 1;
      } else {
        return;
      }
    } else {
      this.activeIndex--;
    }
    
    this.updateSlidePositions();
    this.updateIndicators();
    this.updateCounter();
  }
  
  goTo(index) {
    if (index < 0 || index >= this.totalSlides) {
      return;
    }
    
    this.activeIndex = index;
    this.updateSlidePositions();
    this.updateIndicators();
    this.updateCounter();
  }
  
  updateCounter() {
    if (this.options.counterId) {
      const counterEl = document.getElementById(this.options.counterId);
      if (counterEl) {
        counterEl.textContent = `${this.options.counterLabel} ${this.activeIndex + 1}/${this.totalSlides}`;
      }
    }
  }
  
  startAutoplay() {
    if (this.options.autoplay && !this.autoplayInterval) {
      this.autoplayInterval = setInterval(() => {
        this.next();
      }, this.options.interval);
    }
  }
  
  pauseAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
}

// Initialize carousels on load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Projects carousel
  if (document.getElementById('project3DCarousel')) {
    new Carousel3D('project3DCarousel', {
      autoplay: false,
      interval: 6000
    });
  }
  
  // Initialize Experience carousel
  if (document.getElementById('experience3DCarousel')) {
    new Carousel3D('experience3DCarousel', {
      autoplay: false
    });
  }
  
  // Initialize Certifications carousel
  if (document.getElementById('cert3DCarousel')) {
    new Carousel3D('cert3DCarousel', {
      autoplay: false
    });
  }
  
  // Initialize Leadership carousel
  if (document.getElementById('extra3DCarousel')) {
    new Carousel3D('extra3DCarousel', {
      autoplay: false
    });
  }
});