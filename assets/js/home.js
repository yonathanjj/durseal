document.addEventListener("DOMContentLoaded", function () {
  // Hero Slider
  let currentHeroSlide = 0;
  const heroSlides = document.querySelectorAll(".home-slide");
  const heroDots = document.querySelectorAll(".home-dot");

  function showHeroSlide(index) {
    heroSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    heroDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function nextHeroSlide() {
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    showHeroSlide(currentHeroSlide);
  }

  heroDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentHeroSlide = i;
      showHeroSlide(currentHeroSlide);
    });
  });

  setInterval(nextHeroSlide, 5000);

  // Scrollable Projects
  const scrollLeft = document.querySelector(".home-scroll-button.left");
  const scrollRight = document.querySelector(".home-scroll-button.right");
  const projectsGrid = document.querySelector(".home-projects-grid");

  if (scrollLeft && scrollRight && projectsGrid) {
    scrollLeft.addEventListener("click", () => {
      projectsGrid.scrollBy({ left: -300, behavior: "smooth" });
    });

    scrollRight.addEventListener("click", () => {
      projectsGrid.scrollBy({ left: 300, behavior: "smooth" });
    });
  }

  // Who We Are Section Animations
  gsap.from(".who-we-are-content", {
    duration: 1,
    opacity: 0,
    x: -100,
    ease: "power3.out",
    delay: 0.5,
  });

  gsap.from(".who-we-are-image", {
    duration: 1,
    opacity: 0,
    x: 100,
    ease: "power3.out",
    delay: 0.8,
  });

  gsap.from(".who-we-are-cta", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
    delay: 1.2,
  });





  // Blog Slider
  const blogCards = document.querySelector(".blog-section .blog-cards");
  const sliderTrack = document.querySelector(".blog-section .slider-track");
  const leftButton = document.querySelector(".blog-section .slider-button.left");
  const rightButton = document.querySelector(".blog-section .slider-button.right");

  if (blogCards && sliderTrack && leftButton && rightButton) {
    let currentIndex = 0;
    let visibleCards = calculateVisibleCards(); // Dynamically calculate visible cards

    function calculateVisibleCards() {
      if (window.innerWidth <= 480) {
        return 1; // 1 card visible on mobile
      } else if (window.innerWidth <= 768) {
        return 2; // 2 cards visible on tablet
      } else {
        return 4; // 4 cards visible on desktop
      }
    }

    function updateSlider() {
      const cardWidth = blogCards.children[0].offsetWidth + 20; // Include gap
      blogCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      updateSliderTrack();
    }

    function updateSliderTrack() {
      const totalCards = document.querySelectorAll(".blog-section .blog-card").length;
      const progress = (currentIndex / (totalCards - visibleCards)) * 100;
      sliderTrack.style.background = `linear-gradient(to right, #ffcc00 ${progress}%, #ddd ${progress}%)`;
    }

    leftButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });

    rightButton.addEventListener("click", () => {
      const totalCards = document.querySelectorAll(".blog-section .blog-card").length;
      if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
        updateSlider();
      }
    });

    // Update visible cards on window resize
    window.addEventListener("resize", () => {
      visibleCards = calculateVisibleCards();
      updateSlider();
    });

    // Make blog cards clickable
    document.querySelectorAll(".blog-section .blog-card").forEach((card) => {
      card.addEventListener("click", () => {
        alert("Navigate to blog post!"); // Replace with actual navigation logic
      });
    });
  }
});