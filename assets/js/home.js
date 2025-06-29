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

// Solutions products data with added PDF links
const solutionsProducts = {
    'dr-fixit-waterproof-plus': {
                        title: 'Dr. Fixit Powder Waterproof',
                        category: 'Integral Waterproofing',
                        image: 'assets/img/PowderWaterproof.png',
                        description: 'Integral Powder Waterproofing Compound for Plaster & Concrete',
                        applications: 'Roofs, walls, basements',
                        features: 'Flexible, crack-bridging, UV resistant',
                        size: '500g',
                        coverage: '500 gm of Dr. Fixit Powder Waterproof for 50 kg bag of cement',
                        benefits: [
                            'Chloride-free hence no chances of corrosion of reinforcement bars.',
                            'As an effective pore filler, helps to fill capillaries and pores to prevent water seepage.',
                            'Makes the mix cohesive and denser, hence the concrete & plaster has reduced permeability.'
                        ],
                        techFeatures: [
                            'Polymer content: 65%',
                            'Elongation: 300%',
                            'Tensile strength: 2.5 N/mm²'
                        ],
                        applicationSteps: [
                            'Clean surface',
                            'Apply primer',
                            'First coat application'
                        ],
        techSheet: 'assets/pdf/PowderWaterproof1.pdf',
        safetySheet: 'assets/pdf/PowderWaterproof2.pdf',
        contactLink: 'contact.html'
    },
    // PRODUCT 2
    'dr-fixit-concrete-repair': {
                        title: 'Dr. Fixit Polyplus CP Admix',
                        category: 'Integral Waterproofing',
                        image: 'assets/img/PolyplusCP.png',
                        description: 'New generation integral crystalline waterproofing admixture',
                        applications: 'Columns, beams, slabs',
                        features: 'Fast-setting, high-strength',
                        size: '30kg',
                        coverage: '0.8% - 1% by weight of cement.',
                        benefits: [
                            'Resists extremely high hydrostatic pressure up to 153 meter / 15 Bar.',
                            'Can self-heal crack up to 0.5mm in presence of moisture.',
                            'Reduces Co-efficient of water permeability by more than 90%.'
                        ],
                        techFeatures: [
                            'Can self-heal crack up to 0.5mm in presence of moisture.',
                            'Setting time: 15 minutes',
                            'Adhesion: 2.0 N/mm²'
                        ],
                        applicationSteps: [
                            'Prepare damaged area',
                            'Wet surface',
                            'Mix compound',
                            'Apply and finish'
                        ],
            techSheet: 'assets/pdf/PolyplusCPAdmix1.pdf',
            safetySheet: 'assets/pdf/PolyplusCPAdmix2.pdf',
            contactLink: '/contact?product=Dr.%20Fixit%20Raincoat%202%20in%201'
        },
        // PRODUCT 3
       'dr-fixit-tile-grout': {
                           title: 'Dr. Fixit Pidiproof LW+',
                           category: 'Integral Waterproofing',
                           image: 'assets/img/PidiproofLW+.png',
                           description: 'Integral liquid waterproofing compound for concrete & plaster to reduce dampness.',
                           applications: 'Floor tiles, wall tiles',
                           features: 'Colorfast, mold resistant',
                           size: ' 200ml , 5L, 1L and 200 mL',
                           coverage: '5 sqm/kg',
                           benefits: [
                               'Reduces dampness by improving waterproofing of concrete/ plaster.',
                               'Resists corrosion of steel.',
                               'No separation cracks in brick mortar.'
                           ],
                           techFeatures: [
                               'Shrinkage: <0.1%',
                               'Water absorption: <5%',
                               'Abrasion resistance: >500 cycles'
                           ],
                           applicationSteps: [
                               'Prepare joints',
                               'Mix powder',
                               'Apply grout',
                               'Clean excess'
                           ],
                techSheet: 'assets/pdf/PidiproofLW+1.pdf',
                safetySheet: 'assets/pdf/PidiproofLW+2.pdf',
                contactLink: 'contact.html'
            },
            // PRODUCT 4
            'Dr. Fixit Polyplus CP': {
                                title: 'Dr. Fixit Polyplus CP',
                                category: 'Crystalline Coating',
                                image: 'assets/img/CrystallinePolyplus.png',
                                description: 'Cementitious crystalline waterproof coating for concrete.',
                                applications: 'Concrete, plaster, masonry',
                                features: 'Deep penetration, alkali resistant',
                                size: '1L, 5L, 20L',
                                coverage: '10 sqm/L',
                                benefits: [
                                    'Application advantage: can be applied to both positive and negative side of concrete.',
                                    'Used as a dry shake or coating, once penetration is complete remains permanently active.',
                                    'Treated concrete withstands hydrostatic water pressure up to 15 metre head.'
                                ],
                                techFeatures: [
                                    'Solid content: 12%',
                                    'PH: 8.5',
                                    'Density: 1.05 g/cm³'
                                ],
                                applicationSteps: [
                                    'Clean surface',
                                    'Dilute if needed',
                                    'Apply evenly',
                                    'Let dry completely'
                                ],
                            techSheet: 'assets/pdf/POLYPLUSCP1.pdf',
                            safetySheet: 'assets/pdf/POLYPLUSCP2.pdf',
                            contactLink: 'contact.html'
                        }

};

// DOM Elements
const solutionsModal = document.getElementById('solutionsModal');
const solutionsFilterButtons = document.querySelectorAll('.solutions-filter-btn');
const solutionCards = document.querySelectorAll('.solution-card');
const solutionsCloseBtn = document.querySelector('.solutions-close-btn');

// Filter functionality
solutionsFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        solutionsFilterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;

        // Filter cards
        solutionCards.forEach(card => {
            const category = card.dataset.category;
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Add click event to all detail buttons
document.querySelectorAll('.solution-details-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.solution-card');
        const productId = card.dataset.id;
        showSolutionProduct(solutionsProducts[productId]);
    });
});

// Show product detail modal with card-style content and 3 buttons
function showSolutionProduct(product) {
    // Populate basic info
    document.getElementById('solutionProductImage').src = product.image;
    document.getElementById('solutionProductImage').alt = product.title;
    document.getElementById('solutionProductTitle').textContent = product.title;
    document.getElementById('solutionProductCategory').textContent = product.category;
    document.getElementById('solutionProductDescription').textContent = product.description;

    // Populate specs
    document.getElementById('solutionProductApplications').textContent = product.applications;
    document.getElementById('solutionProductFeatures').textContent = product.features;
    document.getElementById('solutionProductSize').textContent = product.size;
    document.getElementById('solutionProductCoverage').textContent = product.coverage;

    // Create card-style content for benefits
    const benefitsCard = document.createElement('div');
    benefitsCard.className = 'modal-card';
    benefitsCard.innerHTML = `
        <div class="modal-card-icon">
            <i class="fas fa-check-circle"></i>
        </div>
        <h4>Benefits</h4>
        <ul class="benefits-list"></ul>
    `;
    const benefitsList = benefitsCard.querySelector('.benefits-list');
    product.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });

    // Create card-style content for technical features
    const techFeaturesCard = document.createElement('div');
    techFeaturesCard.className = 'modal-card';
    techFeaturesCard.innerHTML = `
        <div class="modal-card-icon">
            <i class="fas fa-cogs"></i>
        </div>
        <h4>Technical Features</h4>
        <ul class="tech-features-list"></ul>
    `;
    const techFeaturesList = techFeaturesCard.querySelector('.tech-features-list');
    product.techFeatures.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        techFeaturesList.appendChild(li);
    });

    // Create card-style content for application steps
    const applicationStepsCard = document.createElement('div');
    applicationStepsCard.className = 'modal-card';
    applicationStepsCard.innerHTML = `
        <div class="modal-card-icon">
            <i class="fas fa-list-ol"></i>
        </div>
        <h4>Application Steps</h4>
        <ol class="application-steps-list"></ol>
    `;
    const applicationStepsList = applicationStepsCard.querySelector('.application-steps-list');
    product.applicationSteps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        applicationStepsList.appendChild(li);
    });

    // Clear existing cards and append new ones
    const cardsContainer = document.getElementById('solutionCardsContainer');
    cardsContainer.innerHTML = '';
    cardsContainer.appendChild(benefitsCard);
    cardsContainer.appendChild(techFeaturesCard);
    cardsContainer.appendChild(applicationStepsCard);

    // Set up the 3 buttons
    const techSheetBtn = document.getElementById('solutionTechSheetBtn');
    techSheetBtn.href = product.techSheet;
    techSheetBtn.download = `${product.title.replace(/\s+/g, '_')}_Technical_Sheet.pdf`;

    const safetySheetBtn = document.getElementById('solutionSafetySheetBtn');
    if (product.safetySheet) {
        safetySheetBtn.href = product.safetySheet;
        safetySheetBtn.download = `${product.title.replace(/\s+/g, '_')}_Safety_Data.pdf`;
        safetySheetBtn.style.display = 'flex';
    } else {
        safetySheetBtn.style.display = 'none';
    }

    const contactBtn = document.getElementById('solutionContactBtn');
    contactBtn.href = product.contactLink || '/contact';

    // Show modal
    solutionsModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close modal
solutionsCloseBtn.addEventListener('click', () => {
    solutionsModal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === solutionsModal) {
        solutionsModal.classList.remove('show');
        document.body.style.overflow = 'auto';
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


// Keyboard accessibility for modals
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});