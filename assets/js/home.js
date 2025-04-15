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



// Modal Functions
function openProjectModal(projectId) {
    event.preventDefault();
    document.getElementById(projectId + '-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function openBlogModal(blogId) {
    event.preventDefault();
    document.getElementById(blogId + '-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        closeModal();
    }
}

// Update project card click handlers
document.addEventListener("DOMContentLoaded", function() {
    // Add click handlers to all project explore buttons
    document.querySelectorAll('.project-card .explore-btn').forEach((btn, index) => {
        btn.onclick = function(e) {
            e.preventDefault();
            openProjectModal('project' + (index + 1));
        };
    });

    // Add click handlers to all blog read more buttons
    document.querySelectorAll('.blog-card .read-more').forEach((btn, index) => {
        btn.onclick = function(e) {
            e.preventDefault();
            openBlogModal('blog' + (index + 1));
        };
    });

    // Add close button handlers
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.onclick = closeModal;
    });

    // Rest of your existing DOMContentLoaded code...
    // (Keep all your existing slider, filtering, and animation code here)
});

// Keyboard accessibility for modals
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});