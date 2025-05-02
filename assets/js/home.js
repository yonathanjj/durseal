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
        filterButtons.forEach(btn => btn.classList.remove("active"));
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

// Product Modal Functionality
const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalDescription = document.getElementById("modalDescription");
const modalApplications = document.getElementById("modalApplications");
const modalFeatures = document.getElementById("modalFeatures");
const modalSize = document.getElementById("modalSize");
const modalCoverage = document.getElementById("modalCoverage");
const modalDryingTime = document.getElementById("modalDryingTime");
const techSheetBtn = document.getElementById("techSheetBtn");
const closeBtn = document.querySelector(".close-btn");
const detailButtons = document.querySelectorAll(".details-btn");

// Product data
const productsData = {
    "raincoat": {
        title: "Dr. Fixit Raincoat 2 in 1",
        category: "Waterproofing Solution",
        image: "assets/img/Dr.%20Fixit%20Raincoat%202%20in%201.jpg",
        description: "High performance self priming, fibre reinforced & heat insulating acrylic waterproof coating for roof & external wall.",
        applications: "Concrete roofs, external walls, terraces, balconies",
        features: "Self-priming, fiber reinforced, heat insulating, excellent UV resistance",
        size: "1L, 5L, 20L containers",
        coverage: "1.5-2.0 sqm/L per coat (2 coats recommended)",
        dryingTime: "2-4 hours between coats",
        techSheet: "assets/pdf/Dr.%20Fixit%20Raincoat%202%20in%201%20TDS.pdf"
    },
    "fastflex": {
        title: "Dr. Fixit Fastflex",
        category: "Protective Coating",
        image: "assets/img/Dr.%20Fixit%20Fastflex.jpg",
        description: "High performance polymer modified cementitious coating. Low VOC & food grade.",
        applications: "Water tanks, swimming pools, bathrooms, kitchens",
        features: "Polymer modified, cementitious, flexible, food grade safe",
        size: "5kg, 20kg bags",
        coverage: "1.0-1.5 kg/sqm (depending on substrate)",
        dryingTime: "24 hours before water exposure",
        techSheet: "assets/pdf/dr-fixit-fastflex-TDS.pdf"
    },
    "marble-adhesive": {
        title: "Dr. Fixit Marble Tile Adhesive",
        category: "Construction Material",
        image: "assets/img/Dr.%20Fixit%20Marble%20Tile%20Adhesive.jpg",
        description: "Crack Resistant and Waterproof tile Adhesive for marble",
        applications: "Marble flooring, wall cladding, stone installations",
        features: "Waterproof, crack-resistant, high bond strength",
        size: "5kg, 20kg bags",
        coverage: "3-4 sqm per 20kg bag (depending on tile size)",
        dryingTime: "24 hours for light traffic, 72 hours for full cure",
        techSheet: "assets/pdf/DR.%20FIXIT%20Marble%20Tile%20Adhesive%20-%20TDS.pdf"
    },
    "modern-adhesive": {
        title: "Dr. Fixit Modern Tile Adhesive Plus",
        category: "Construction Material",
        image: "assets/img/Dr.%20Fixit%20Modern%20Tile%20Adhesive%20Plus.jpg",
        description: "Crack Resistant and Waterproof tile Adhesive for Porcelain tiles",
        applications: "Porcelain tiles, large format tiles, high-traffic areas",
        features: "Extended open time, high bond strength, waterproof",
        size: "5kg, 20kg bags",
        coverage: "4-5 sqm per 20kg bag (depending on tile size)",
        dryingTime: "24 hours for light traffic, 7 days for full cure",
        techSheet: "assets/pdf/Dr.%20Fixit%20Modern%20Tile%20Adhesive%20Plus.pdf"
    }
};

// Open modal when clicking "View Details"
detailButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const card = button.closest(".product-card");
        const productName = card.querySelector("h3").textContent.trim();
        const productId = productName.toLowerCase().replace(/[.\s]+/g, "-").replace("dr-fixit-", "");

        if (productsData[productId]) {
            const product = productsData[productId];

            modalImage.src = product.image;
            modalImage.alt = product.title;
            modalTitle.textContent = product.title;
            modalSubtitle.textContent = product.category;
            modalDescription.textContent = product.description;
            modalApplications.textContent = product.applications;
            modalFeatures.textContent = product.features;
            modalSize.textContent = product.size;
            modalCoverage.textContent = product.coverage;
            modalDryingTime.textContent = product.dryingTime;
            techSheetBtn.href = product.techSheet;
            techSheetBtn.download = product.title.replace(/\s+/g, "_") + "_Technical_Sheet.pdf";

            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    });
});

// Close modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
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