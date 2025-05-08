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

   document.addEventListener('DOMContentLoaded', function() {
       // Featured products data
       const featuredProducts = {
           'dr-fixit-raincoat': {
               title: 'Dr. Fixit Raincoat 2 in 1',
               category: 'Waterproofing',
               image: 'assets/img/Dr.%20Fixit%20Raincoat%202%20in%201.jpg',
               description: 'High performance self priming, fibre reinforced & heat insulating acrylic waterproof coating for roof & external wall.',
               applications: 'Roofs, external walls, terraces',
               features: 'Self-priming, fiber reinforced, heat insulating',
               size: '4 & 20 ltr',
               coverage: '7.5 to 9 sqmtr per ltr (Dilution 50%)',
               dryingTime: '4-6 hours between coats',
               benefits: [
                   'Tough and elastic film with 120% elongation',
                   'Bridges cracks up to 2 mm width',
                   'UV stable and foot trafficable'
               ],
               techFeatures: [
                   'Solid content: 55%',
                   'Tensile strength: 2.5 N/mm²',
                   'Elongation at break: 120%'
               ],
               applicationSteps: [
                   'Clean and prepare the surface',
                   'Apply first coat (diluted 50% with water)',
                   'Apply second coat after 4-6 hours',
                   'Allow 24 hours before exposure to water'
               ],
               techSheet: 'assets/pdf/Dr.%20Fixit%20Raincoat%202%20in%201%20TDS.pdf',
               safetySheet: 'assets/pdf/Dr.%20Fixit%20Raincoat%202%20in%201%20SDS.pdf'
           },
           'dr-fixit-fastflex': {
               title: 'Dr. Fixit Fastflex',
               category: 'Protective Coatings',
               image: 'assets/img/Dr.%20Fixit%20Fastflex.jpg',
               description: 'High performance polymer modified cementitious coating. Low VOC & food grade.',
               applications: 'Water tanks, swimming pools, food processing areas',
               features: 'Polymer modified, low VOC, food grade',
               size: '12 kg & 48 kg',
               coverage: '0.5 – 0.55 sq.mtr in 2 coats at 1.2 – 1.5 mm DFT',
               dryingTime: '24 hours between coats',
               benefits: [
                   'Excellent waterproofing with up to 2mm crack bridging',
                   'Forms high elastic film with 120% elongation',
                   'Withstands 10 m hydrostatic pressure'
               ],
               techFeatures: [
                   'Compressive strength: 25 N/mm²',
                   'Adhesion strength: 1.5 N/mm²',
                   'Water absorption: <3%'
               ],
               applicationSteps: [
                   'Prepare the substrate by cleaning and dampening',
                   'Mix with clean water as per instructions',
                   'Apply first coat with brush or roller',
                   'Apply second coat after 24 hours'
               ],
               techSheet: 'assets/pdf/dr-fixit-fastflex-TDS.pdf',
               safetySheet: 'assets/pdf/dr-fixit-fastflex-SDS.pdf'
           },
           'dr-fixit-marble-tile': {
               title: 'Dr. Fixit Marble Tile Adhesive',
               category: 'Waterproofing',
               image: 'assets/img/Dr.%20Fixit%20Marble%20Tile%20Adhesive.jpg',
               description: 'Crack Resistant and Waterproof tile Adhesive for marble.',
               applications: 'Marble flooring, wall cladding, wet areas',
               features: 'Crack resistant, waterproof, high adhesion',
               size: '25 kg',
               coverage: '5.5 to 6 sq. mt. from 25kg bag for 3mm thick bed',
               dryingTime: '24 hours for light traffic, 72 hours full cure',
               benefits: [
                   'Excellent waterproofing characteristics',
                   'High adhesion with concrete surface',
                   'Extreme whiteness, does not stain marble'
               ],
               techFeatures: [
                   'Open time: 20 minutes',
                   'Adjustment time: 15 minutes',
                   'Compressive strength: 25 N/mm²'
               ],
               applicationSteps: [
                   'Prepare the substrate to be clean and sound',
                   'Mix adhesive with water to smooth consistency',
                   'Apply adhesive with notched trowel',
                   'Fix tiles and adjust within working time'
               ],
               techSheet: 'assets/pdf/DR.%20FIXIT%20Marble%20Tile%20Adhesive%20-%20TDS.pdf',
               safetySheet: 'assets/pdf/DR.%20FIXIT%20Marble%20Tile%20Adhesive%20-%20SDS.pdf'
           },
           'dr-fixit-modern-tile': {
               title: 'Dr. Fixit Modern Tile Adhesive Plus',
               category: 'Construction Materials',
               image: 'assets/img/Dr.%20Fixit%20Modern%20Tile%20Adhesive%20Plus.jpg',
               description: 'Crack Resistant and Waterproof tile Adhesive for Porcelain tiles.',
               applications: 'Porcelain tiles, large format tiles, exterior applications',
               features: 'High strength, non-sag, waterproof',
               size: '25 kg',
               coverage: '5.5 to 6 sq. mt. from 25kg bag for 3mm thick bed',
               dryingTime: '24 hours for light traffic, 7 days full strength',
               benefits: [
                   'Suitable for tile-on-tile applications',
                   'Excellent for exterior grade applications',
                   'Strong bond for large format tiles'
               ],
               techFeatures: [
                   'Open time: 30 minutes',
                   'Adjustment time: 20 minutes',
                   'Shear adhesion strength: 1.5 N/mm²'
               ],
               applicationSteps: [
                   'Ensure substrate is clean and structurally sound',
                   'Mix adhesive to smooth, lump-free consistency',
                   'Apply with notched trowel at recommended thickness',
                   'Press tiles firmly into place'
               ],
               techSheet: 'assets/pdf/Dr.%20Fixit%20Modern%20Tile%20Adhesive%20Plus.pdf',
               safetySheet: 'assets/pdf/Dr.%20Fixit%20Modern%20Tile%20Adhesive%20Plus_SDS.pdf'
           }
       };

       // DOM Elements
       const featuredModal = document.getElementById('featuredModal');
       const featuredFilterButtons = document.querySelectorAll('.featured-filter-btn');
       const featuredCards = document.querySelectorAll('.featured-card');
       const featuredCloseBtn = document.querySelector('.featured-close-btn');

       // Filter functionality
       featuredFilterButtons.forEach(button => {
           button.addEventListener('click', () => {
               // Update active button
               featuredFilterButtons.forEach(btn => btn.classList.remove('active'));
               button.classList.add('active');

               const filter = button.dataset.filter;

               // Filter cards
               featuredCards.forEach(card => {
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
       document.querySelectorAll('.featured-details-btn').forEach(button => {
           button.addEventListener('click', function() {
               const card = this.closest('.featured-card');
               const productId = card.dataset.id;
               showFeaturedProduct(featuredProducts[productId]);
           });
       });

       // Show product detail modal
       function showFeaturedProduct(product) {
           // Populate modal
           document.getElementById('featuredProductImage').src = product.image;
           document.getElementById('featuredProductImage').alt = product.title;
           document.getElementById('featuredProductTitle').textContent = product.title;
           document.getElementById('featuredProductCategory').textContent = product.category;
           document.getElementById('featuredProductDescription').textContent = product.description;
           document.getElementById('featuredProductApplications').textContent = product.applications;
           document.getElementById('featuredProductFeatures').textContent = product.features;
           document.getElementById('featuredProductSize').textContent = product.size;
           document.getElementById('featuredProductCoverage').textContent = product.coverage;
           document.getElementById('featuredProductDryingTime').textContent = product.dryingTime;

           // Populate benefits
           const benefitsList = document.getElementById('featuredProductBenefits');
           benefitsList.innerHTML = '';
           product.benefits.forEach(benefit => {
               const li = document.createElement('li');
               li.textContent = benefit;
               benefitsList.appendChild(li);
           });

           // Populate technical features
           const techFeaturesList = document.getElementById('featuredProductTechFeatures');
           techFeaturesList.innerHTML = '';
           product.techFeatures.forEach(feature => {
               const li = document.createElement('li');
               li.textContent = feature;
               techFeaturesList.appendChild(li);
           });

           // Populate application steps
           const applicationStepsList = document.getElementById('featuredProductApplicationSteps');
           applicationStepsList.innerHTML = '';
           product.applicationSteps.forEach(step => {
               const li = document.createElement('li');
               li.textContent = step;
               applicationStepsList.appendChild(li);
           });

           // Set PDF download links
           document.getElementById('featuredProductTechSheetBtn').href = product.techSheet;
           document.getElementById('featuredProductTechSheetBtn').download = product.title.replace(/\s+/g, '_') + '_Technical_Sheet.pdf';
           if (product.safetySheet) {
               document.getElementById('featuredProductSafetySheetBtn').href = product.safetySheet;
               document.getElementById('featuredProductSafetySheetBtn').download = product.title.replace(/\s+/g, '_') + '_Safety_Data.pdf';
           } else {
               document.getElementById('featuredProductSafetySheetBtn').style.display = 'none';
           }

           // Show modal
           featuredModal.classList.add('show');
           document.body.style.overflow = 'hidden';
       }

       // Close modal
       featuredCloseBtn.addEventListener('click', () => {
           featuredModal.classList.remove('show');
           document.body.style.overflow = 'auto';
       });

       // Close modal when clicking outside
       window.addEventListener('click', (e) => {
           if (e.target === featuredModal) {
               featuredModal.classList.remove('show');
               document.body.style.overflow = 'auto';
           }
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