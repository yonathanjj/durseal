document.addEventListener('DOMContentLoaded', function() {
    // Partner data with their products
    const partnersData = {
        'dr-fixit': {
            name: 'Dr. Fixit',
            logo: 'assets/img/dr.jpg',
            description: 'World leader in construction chemicals and waterproofing solutions with over 30 years of innovation in building protection.',
            products: {
                'dr.-fixit-raincoat-2-in-1': {
                    title: 'Dr. Fixit Raincoat 2 in 1',
                    category: 'Waterproofing',
                    image: 'assets/img/Dr.%20Fixit%20Raincoat%202%20in%201.jpg',
                    description: 'High performance self priming, fibre reinforced & heat insulating acrylic waterproof coating for roof & external wall. Provides excellent protection against water penetration while keeping surfaces cooler.',
                    applications: 'Concrete roofs, external walls, terraces, balconies',
                    features: 'Self-priming, fiber reinforced, heat insulating, excellent UV resistance',
                    size: '1L, 5L, 20L containers',
                    coverage: '1.5-2.0 sqm/L per coat (2 coats recommended)',
                    dryingTime: '2-4 hours between coats (depending on weather conditions)',
                    benefits: [
                        'Reduces surface temperature by up to 10°C',
                        'Excellent waterproofing protection',
                        'Long-lasting durability (5+ years)',
                        'Easy application with brush/roller'
                    ],
                    techFeatures: [
                        'Base: Acrylic copolymer emulsion',
                        'Solid content: 55±2%',
                        'PH: 8-9',
                        'Elongation: >200%',
                        'Tensile strength: >1.5 N/mm²'
                    ],
                    applicationSteps: [
                        'Clean surface thoroughly',
                        'Apply primer if needed (not required for most surfaces)',
                        'Apply first coat with brush/roller',
                        'Allow to dry for 2-4 hours',
                        'Apply second coat perpendicular to first',
                        'Allow 24 hours before exposure to rain'
                    ],
                    techSheet: 'assets/pdf/Dr.%20Fixit%20Raincoat%202%20in%201%20TDS.pdf',
                    safetySheet: 'assets/pdf/Dr.%20Fixit%20Raincoat%20Safety%20Data.pdf'
                },
                'dr.-fixit-fastflex': {
                    title: 'Dr. Fixit Fastflex',
                    category: 'Waterproofing',
                    image: 'assets/img/Dr.%20Fixit%20Fastflex.jpg',
                    description: 'High performance polymer modified cementitious coating. Low VOC & food grade. Ideal for areas requiring flexible waterproofing.',
                    applications: 'Water tanks, swimming pools, bathrooms, kitchens',
                    features: 'Polymer modified, cementitious, flexible, food grade safe',
                    size: '5kg, 20kg bags',
                    coverage: '1.0-1.5 kg/sqm (depending on substrate)',
                    dryingTime: '24 hours before water exposure',
                    benefits: [
                        'Excellent adhesion to concrete/masonry',
                        'Can be applied on damp surfaces',
                        'Resists positive and negative water pressure',
                        'Suitable for potable water tanks'
                    ],
                    techFeatures: [
                        'Base: Cementitious polymer modified',
                        'Mixing ratio: 5 parts powder : 2 parts water',
                        'Elongation: >150%',
                        'Bond strength: >1.0 N/mm²',
                        'Waterproofing pressure: 3 bar (30m water head)'
                    ],
                    applicationSteps: [
                        'Prepare surface (clean and dampen)',
                        'Mix powder with clean water',
                        'Apply first coat with brush',
                        'Apply fiber mesh at joints/corners',
                        'Apply second coat after 4-6 hours',
                        'Cure with water spray for 2 days'
                    ],
                    techSheet: 'assets/pdf/dr-fixit-fastflex-TDS.pdf',
                    safetySheet: 'assets/pdf/dr-fixit-fastflex-SDS.pdf'
                },
                'dr.-fixit-marble-tile-adhesive': {
                    title: 'Dr. Fixit Marble Tile Adhesive',
                    category: 'Adhesives',
                    image: 'assets/img/Dr.%20Fixit%20Marble%20Tile%20Adhesive.jpg',
                    description: 'Crack Resistant and Waterproof tile Adhesive for marble and natural stone applications.',
                    applications: 'Marble flooring, natural stone installations, interior and exterior applications',
                    features: 'High bond strength, waterproof, crack-resistant, non-sag',
                    size: '5kg, 20kg bags',
                    coverage: '3-4 kg/sqm (depending on tile size and substrate)',
                    dryingTime: '24 hours for light traffic, 72 hours for full cure',
                    benefits: [
                        'Excellent adhesion to marble and natural stone',
                        'Reduces tile lippage',
                        'Waterproof formulation',
                        'Suitable for interior and exterior use'
                    ],
                    techFeatures: [
                        'Base: Cementitious polymer modified',
                        'Pot life: 4 hours',
                        'Open time: 20 minutes',
                        'Adjustment time: 30 minutes',
                        'Compressive strength: >25 N/mm²'
                    ],
                    applicationSteps: [
                        'Prepare clean, level substrate',
                        'Mix with clean water to smooth consistency',
                        'Apply with notched trowel',
                        'Press tiles into place',
                        'Clean excess adhesive immediately',
                        'Allow proper curing time'
                    ],
                    techSheet: 'assets/pdf/DR.%20FIXIT%20Marble%20Tile%20Adhesive%20-%20TDS.pdf',
                    safetySheet: 'assets/pdf/DR.%20FIXIT%20Marble%20Tile%20Adhesive%20-%20SDS.pdf'
                }
            }
        },
        'fevicol': {
            name: 'Fevicol',
            logo: 'assets/img/fevicol-logo.png',
            description: 'Trusted name in adhesives with a wide range of products for construction, woodworking, and industrial applications.',
            products: {
                'fevicol-mr': {
                    title: 'Fevicol MR',
                    category: 'Adhesives',
                    image: 'assets/img/fevicol-mr.jpg',
                    description: 'Synthetic resin adhesive for woodworking applications with strong initial tack and high bond strength.',
                    applications: 'Furniture making, woodworking, plywood laminating',
                    features: 'High bond strength, water resistant, easy to apply',
                    size: '1kg, 5kg, 15kg containers',
                    coverage: '150-200 sqft/kg (depending on application)',
                    dryingTime: '24 hours for full strength',
                    benefits: [
                        'Excellent for wood-to-wood bonding',
                        'Water resistant formulation',
                        'Strong initial tack',
                        'Long shelf life'
                    ],
                    techFeatures: [
                        'Base: Synthetic resin',
                        'Solid content: 50±2%',
                        'PH: 3.5-4.5',
                        'Viscosity: 15000-25000 cps',
                        'Bond strength: >10 kg/cm²'
                    ],
                    applicationSteps: [
                        'Apply adhesive to both surfaces',
                        'Allow to dry for 5-10 minutes',
                        'Join surfaces under pressure',
                        'Clamp for 4-6 hours',
                        'Allow 24 hours for full cure'
                    ],
                    techSheet: 'assets/pdf/fevicol-mr-tds.pdf',
                    safetySheet: 'assets/pdf/fevicol-mr-sds.pdf'
                },
                'fevicol-seal-it': {
                    title: 'Fevicol Seal It',
                    category: 'Sealants',
                    image: 'assets/img/fevicol-seal-it.jpg',
                    description: 'Acrylic based sealant for gaps and joints with excellent adhesion and flexibility.',
                    applications: 'Window frames, door frames, expansion joints, wall cracks',
                    features: 'Paintable, waterproof, flexible, excellent adhesion',
                    size: '300ml cartridge, 600ml sausage pack',
                    coverage: 'Approx. 10-12 meters per 300ml cartridge',
                    dryingTime: 'Surface dry in 30 minutes, full cure in 24 hours',
                    benefits: [
                        'Can be painted over',
                        'Excellent adhesion to most surfaces',
                        'Remains flexible after curing',
                        'Waterproof formulation'
                    ],
                    techFeatures: [
                        'Base: Acrylic polymer',
                        'Elongation: >300%',
                        'Tensile strength: >1.0 N/mm²',
                        'Shore A hardness: 25-30',
                        'Service temperature: -20°C to +80°C'
                    ],
                    applicationSteps: [
                        'Clean and dry the surface',
                        'Cut nozzle to desired size',
                        'Apply sealant evenly into joint',
                        'Tool with wet finger or tool',
                        'Allow to cure before painting'
                    ],
                    techSheet: 'assets/pdf/fevicol-seal-it-tds.pdf',
                    safetySheet: 'assets/pdf/fevicol-seal-it-sds.pdf'
                }
            }
        }
    };

    // DOM Elements
    const productsModal = document.getElementById('productsModal');
    const productModal = document.getElementById('productModal');
    const exploreButtons = document.querySelectorAll('.explore-btn');
    const closeButtons = document.querySelectorAll('.close-btn');
    const productsGrid = document.getElementById('productsGrid');
    const productsFilter = document.querySelector('.products-filter');
    const filterButtons = document.querySelectorAll('.products-filter .filter-btn');

    // Current partner and filter state
    let currentPartner = null;
    let currentFilter = 'all';

    // Open products modal for a partner
    exploreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const partnerId = button.dataset.partner;
            currentPartner = partnersData[partnerId];

            // Set partner info in modal
            document.getElementById('modalPartnerLogo').src = currentPartner.logo;
            document.getElementById('modalPartnerLogo').alt = currentPartner.name + ' Logo';
            document.getElementById('modalPartnerName').textContent = currentPartner.name;
            document.getElementById('modalPartnerDescription').textContent = currentPartner.description;

            // Load products
            loadProducts(currentPartner.products);

            // Show modal
            productsModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    // Filter products
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentFilter = button.dataset.filter;
            loadProducts(currentPartner.products);
        });
    });

    // Load products into grid with current filter
    function loadProducts(products) {
        productsGrid.innerHTML = '';

        Object.entries(products).forEach(([id, product]) => {
            if (currentFilter === 'all' || product.category.toLowerCase().includes(currentFilter)) {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.dataset.id = id;

                productCard.innerHTML = `
                    <div class="product-card-image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-card-content">
                        <h3>${product.title}</h3>
                        <p>${product.description.substring(0, 100)}...</p>
                        <div class="product-card-actions">
                            <button class="product-details-btn">View Details</button>
                        </div>
                    </div>
                `;

                productCard.querySelector('.product-details-btn').addEventListener('click', () => {
                    showProductDetail(product);
                });

                productsGrid.appendChild(productCard);
            }
        });
    }

    // Show product detail modal
    function showProductDetail(product) {
        // Populate modal
        document.getElementById('productImage').src = product.image;
        document.getElementById('productImage').alt = product.title;
        document.getElementById('productTitle').textContent = product.title;
        document.getElementById('productCategory').textContent = product.category;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productApplications').textContent = product.applications;
        document.getElementById('productFeatures').textContent = product.features;
        document.getElementById('productSize').textContent = product.size;
        document.getElementById('productCoverage').textContent = product.coverage;
        document.getElementById('productDryingTime').textContent = product.dryingTime;

        // Populate benefits
        const benefitsList = document.getElementById('productBenefits');
        benefitsList.innerHTML = '';
        product.benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            benefitsList.appendChild(li);
        });

        // Populate technical features
        const techFeaturesList = document.getElementById('productTechFeatures');
        techFeaturesList.innerHTML = '';
        product.techFeatures.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            techFeaturesList.appendChild(li);
        });

        // Populate application steps
        const applicationStepsList = document.getElementById('productApplicationSteps');
        applicationStepsList.innerHTML = '';
        product.applicationSteps.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            applicationStepsList.appendChild(li);
        });

        // Set PDF download links
        document.getElementById('productTechSheetBtn').href = product.techSheet;
        document.getElementById('productTechSheetBtn').download = product.title.replace(/\s+/g, '_') + '_Technical_Sheet.pdf';
        document.getElementById('productSafetySheetBtn').href = product.safetySheet;
        document.getElementById('productSafetySheetBtn').download = product.title.replace(/\s+/g, '_') + '_Safety_Data.pdf';

        // Close products modal and open product modal
        productsModal.classList.remove('show');
        productModal.classList.add('show');
    }

    // Close modals
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            productsModal.classList.remove('show');
            productModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === productsModal || e.target === productModal) {
            productsModal.classList.remove('show');
            productModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
});