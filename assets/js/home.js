document.addEventListener("DOMContentLoaded", function() {
    // Enhanced Hero Slider
    const heroSlides = document.querySelectorAll(".hero-slide");
    let currentHeroSlide = 0;

    function showHeroSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextHeroSlide() {
        currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
        showHeroSlide(currentHeroSlide);
    }

    // Auto-advance slides every 5 seconds
    setInterval(nextHeroSlide, 5000);

    // Scroll indicator
    const scrollIndicator = document.querySelector(".hero-scroll-indicator");
    if (scrollIndicator) {
        scrollIndicator.addEventListener("click", () => {
            window.scrollTo({
                top: document.querySelector(".who-we-are").offsetTop,
                behavior: "smooth"
            });
        });
    }

    // Animate statistics counting
    const statNumbers = document.querySelectorAll(".stat-number");
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute("data-count"));
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);

        let current = start;
        const timer = setInterval(() => {
            current += increment;
            stat.textContent = Math.floor(current);

            if (current >= target) {
                stat.textContent = target + "+";
                clearInterval(timer);
            }
        }, 16);
    });

    // Product Filtering
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".product-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to clicked button
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            productCards.forEach(card => {
                if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Blog Slider
    const blogSlider = document.querySelector(".blog-slider");
    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");
    const dotsContainer = document.querySelector(".slider-dots");

    if (blogSlider && prevBtn && nextBtn) {
        const blogCards = document.querySelectorAll(".blog-card");
        let currentIndex = 0;
        let cardsPerView = 3;

        // Create dots
        blogCards.forEach((_, index) => {
            const dot = document.createElement("div");
            dot.classList.add("slider-dot");
            if (index === 0) dot.classList.add("active");
            dot.addEventListener("click", () => {
                goToSlide(index);
            });
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll(".slider-dot");

        function updateCardsPerView() {
            if (window.innerWidth <= 768) {
                cardsPerView = 1;
            } else if (window.innerWidth <= 1024) {
                cardsPerView = 2;
            } else {
                cardsPerView = 3;
            }
        }

        function goToSlide(index) {
            currentIndex = index;
            const cardWidth = blogCards[0].offsetWidth + 30; // including gap
            blogSlider.scrollTo({
                left: index * cardWidth,
                behavior: "smooth"
            });

            // Update dots
            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });
        }

        function nextSlide() {
            if (currentIndex < blogCards.length - cardsPerView) {
                goToSlide(currentIndex + 1);
            } else {
                goToSlide(0);
            }
        }

        function prevSlide() {
            if (currentIndex > 0) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(blogCards.length - cardsPerView);
            }
        }

        prevBtn.addEventListener("click", prevSlide);
        nextBtn.addEventListener("click", nextSlide);

        // Auto-advance slides
        let slideInterval = setInterval(nextSlide, 5000);

        // Pause on hover
        blogSlider.addEventListener("mouseenter", () => {
            clearInterval(slideInterval);
        });

        blogSlider.addEventListener("mouseleave", () => {
            slideInterval = setInterval(nextSlide, 5000);
        });

        // Handle window resize
        window.addEventListener("resize", () => {
            updateCardsPerView();
            goToSlide(currentIndex);
        });

        // Initialize
        updateCardsPerView();
    }

    // GSAP Animations for Who We Are Section
    gsap.from(".who-we-are-content", {
        scrollTrigger: {
            trigger: ".who-we-are",
            start: "top 80%"
        },
        duration: 1,
        opacity: 0,
        x: -100,
        ease: "power3.out"
    });

    gsap.from(".who-we-are-image", {
        scrollTrigger: {
            trigger: ".who-we-are",
            start: "top 80%"
        },
        duration: 1,
        opacity: 0,
        x: 100,
        ease: "power3.out"
    });

    gsap.from(".who-we-are-cta", {
        scrollTrigger: {
            trigger: ".who-we-are",
            start: "top 80%"
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power3.out"
    });

    // Hero content animations
    gsap.from(".hero-content h1", {
        duration: 1,
        y: -30,
        opacity: 0,
        ease: "power2.out",
        delay: 0.3
    });

    gsap.from(".hero-content p", {
        duration: 1,
        y: -30,
        opacity: 0,
        ease: "power2.out",
        delay: 0.6
    });

    gsap.from(".hero-buttons", {
        duration: 1,
        y: -30,
        opacity: 0,
        ease: "power2.out",
        delay: 0.9
    });
});