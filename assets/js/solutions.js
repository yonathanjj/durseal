document.addEventListener('DOMContentLoaded', function() {
    // Partner data with their products
    const partnersData = {
        'dr-fixit': {
            name: 'Dr. Fixit',
            logo: 'assets/img/dr.jpg',
            description: 'World leader in construction chemicals and waterproofing solutions with over 30 years of innovation in building protection.',
            products: {
                // PRODUCT 1
                'dr-fixit-waterproof-plus': {
                    title: 'Dr. Fixit Powder Waterproof',
                    category: 'Waterproofing',
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
                    safetySheet: 'assets/pdf/PowderWaterproof2.pdf'
                },

                // PRODUCT 2
                'dr-fixit-concrete-repair': {
                    title: 'Dr. Fixit Polyplus CP Admix',
                    category: 'Waterproofing',
                    image: 'assets/img/PolyplusCP.png',
                    description: 'New generation integral crystalline waterproofing admixture',
                    applications: 'Columns, beams, slabs',
                    features: 'Fast-setting, high-strength',
                    size: '10kg, 25kg',
                    coverage: '2.0 sqm/kg',
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
                    safetySheet: 'assets/pdf/PolyplusCPAdmix2.pdf'
                },

                // PRODUCT 3
                'dr-fixit-tile-grout': {
                    title: 'Dr. Fixit Pidiproof LW+',
                    category: 'Waterproofing',
                    image: 'assets/img/PidiproofLW+.png',
                    description: 'Integral liquid waterproofing compound for concrete & plaster to reduce dampness.',
                    applications: 'Floor tiles, wall tiles',
                    features: 'Colorfast, mold resistant',
                    size: '2kg, 5kg, 10kg',
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
                    safetySheet: 'assets/pdf/PidiproofLW+2.pdf'
                },

                // PRODUCT 4-17 CONTINUE BELOW...
                // PRODUCT 4
                'Dr. Fixit Polyplus CP': {
                    title: 'Dr. Fixit Polyplus CP',
                    category: 'Primer',
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
                        'Solids content: 12%',
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
                    safetySheet: 'assets/pdf/POLYPLUSCP2.pdf'
                },

                // PRODUCT 5
                'Dr. Fixit Raincoat 2 in 1': {
                    title: 'Dr. Fixit Raincoat 2 in 1',
                    category: 'Flooring',
                    image: 'assets/img/Raincoat2in1.png',
                    description: 'High performance self priming, fibre reinforced & heat insulating acrylic waterproof coating for roof & external wall',
                    applications: 'Factories, warehouses, garages',
                    features: 'Chemical resistant, high-gloss',
                    size: '4 & 20 ltr',
                    coverage: 'Self-Priming – Coverage 7.5 to 9 sqmtr per ltr. (Dilution 50%).',
                    benefits: [
                        'Tough and elastic film having elongation of 120%, provides excellent waterproofing.',
                        'Bridges cracks up to 2 mm width.',
                        'UV stable foot trafficable coating doesn’t require screed.'
                    ],
                    techFeatures: [
                        'Mix ratio: 5:1',
                        'Hardness: 80 Shore D',
                        'Abrasion: <50mg loss'
                    ],
                    applicationSteps: [
                        'Prepare components',
                        'Mix thoroughly',
                        'Apply first coat',
                        'Apply second coat after 12 hours'
                    ],
                    techSheet: 'assets/pdf/Raincoat2in11.pdf',
                    safetySheet: 'assets/pdf/Raincoat2in12.pdf'
                },

                // PRODUCT 6
                'Dr. Fixit Sureseal': {
                    title: 'Dr. Fixit Sureseal',
                    category: 'Repair',
                    image: 'assets/img/Sureseal.png',
                    description: 'Waterproof primer for new wall and coating for damp & patch repair in old wall.',
                    applications: 'Walls, floors, pavements',
                    features: 'Flexible, waterproof, paintable',
                    size: '1kg and 5kg',
                    coverage: '2.0 - 2.5 sqmt/kg in two coats',
                    benefits: [
                        'Very tough yet elastic and breathable film.',
                        'Provides strongly bonded waterproof coating.',
                        'No dilution required, ready to use solution for exterior and interior wall dampness.'
                    ],
                    techFeatures: [
                        'Elongation: 400%',
                        'Tensile strength: 1.8 MPa',
                        'Shore hardness: 25A'
                    ],
                    applicationSteps: [
                        'Clean crack',
                        'Load cartridge',
                        'Apply sealant',
                        'Tool finish'
                    ],
                    techSheet: 'assets/pdf/sureseal1.pdf',
                    safetySheet: 'assets/pdf/sureseal2.pdf'
                },

                // PRODUCT 7
                'Dr. Fixit Pidifin 2K': {
                    title: 'Dr. Fixit Pidifin 2K',
                    category: 'Leveling',
                    image: 'assets/img/Pidifin2K.png',
                    description: 'Acrylic cementitious waterproof coating.',
                    applications: 'Under tiles, vinyl, wood flooring',
                    features: 'Fast-setting, high-flow',
                    size: '15 kg & 30 kg',
                    coverage: 'Approximately 0.6 – 0.75 sq.mtr/kg at 1 mm thickness in 2 coats, depending on the level of the substrate',
                    benefits: [
                        'Bridges cracks up to 2 mm width with an elasticity of 40-50%.',
                        'Four times thicker than ordinary polymer cement coating (Dry Film Thickness : 1 mm).',
                        'Excellent resistance to ingress of water.'
                    ],
                    techFeatures: [
                        'Compressive strength: 30 MPa',
                        'Setting time: 20 minutes',
                        'Max thickness: 50mm'
                    ],
                    applicationSteps: [
                        'Prepare substrate',
                        'Mix with water',
                        'Pour and spread',
                        'Let cure'
                    ],
                    techSheet: 'assets/pdf/Pidifin2K1.pdf',
                    safetySheet: 'assets/pdf/Pidifin2K2.pdf'
                },

                // PRODUCT 8
                'Dr. Fixit Fastflex': {
                    title: 'Dr. Fixit Fastflex',
                    category: 'Wood Care',
                    image: 'assets/img/Fastflex.png',
                    description: 'High performance polymer modified cementitious coating. Low VOC & food grade.',
                    applications: 'Decking, fences, furniture',
                    features: 'UV resistant, water repellent',
                    size: '12 kg & 48 kg',
                    coverage: 'Approximately 0.5 – 0.55 sq.mtr in 2 coats at 1.2 – 1.5 mm Dry Film Thickness depending upon the level of the surface.',
                    benefits: [
                        'Excellent waterproofing with up to 2mm crack bridging ability.',
                        'Forms high elastic film with 120% elongation which accommodates thermal movements.',
                        'Withstands 10 m hydrostatic pressure without any leakages.'
                    ],
                    techFeatures: [
                        'Solids content: 35%',
                        'VOC: <100 g/L',
                        'Water beading: >110°'
                    ],
                    applicationSteps: [
                        'Clean wood',
                        'Sand if needed',
                        'Apply with brush',
                        'Allow to dry'
                    ],
                    techSheet: 'assets/pdf/Fastflex1.pdf',
                    safetySheet: 'assets/pdf/Fastflex2.pdf'
                },

                // PRODUCT 9
                'Dr. Fixit Torchshield/Insutech/Ecobit': {
                    title: 'Dr. Fixit Torchshield/Insutech/Ecobit',
                    category: 'Primer',
                    image: 'assets/img/Torchshield.png',
                    description: 'APP modified bitumen based membranes for waterproofing.',
                    applications: 'Steel structures, railings, gates',
                    features: 'Rust inhibiting, quick drying',
                    size: 'Range of 3 & 4 mm membranes in Polyester or fibre glass reinforcement in 1 mtr x 10 mtr roll sizes.',
                    coverage: '9 sqmt per roll',
                    benefits: [
                        'Mineral finished membrane provides excellent waterproofing.',
                        'High tensile strength, tear & puncture resistance properties make it highly durable.',
                        'It is an impermeable membrane with low water absorption properties.'
                    ],
                    techFeatures: [
                        'Dry film thickness: 25 microns',
                        'Salt spray resistance: 500 hours',
                        'Flash point: 38°C'
                    ],
                    applicationSteps: [
                        'Degrease metal',
                        'Remove rust',
                        'Apply thin coat',
                        'Apply topcoat after 2 hours'
                    ],
                    techSheet: 'assets/pdf/metal-primer-tds.pdf',
                    safetySheet: 'assets/pdf/metal-primer-sds.pdf'
                },

                // PRODUCT 10
                'Dr. Fixit PU Sealant': {
                    title: 'Dr. Fixit PU Sealant',
                    category: 'Protection',
                    image: 'assets/img/Sealant.png',
                    description: 'Single component non-sagging Polyurethane sealant.',
                    applications: 'Marble, granite, limestone',
                    features: 'Breathable, stain resistant',
                    size: '600 ml sausage, Available in White & Grey colors',
                    coverage: 'Refer to the Technical Data Sheet (TDS)',
                    benefits: [
                        'Ready to use – Single pack.',
                        'Easy to apply and smooth.',
                        'Curing – Cures by absorption of moisture from air, (no external curing is required) at ambient.'
                    ],
                    Features: [
                        'Temperature with humidity.',
                        'Elasticity – Elastic & forms a permanent tough rubber seal.',
                        'Depth of penetration: 3mm'
                    ],
                    applicationSteps: [
                        'Clean stone',
                        'Apply evenly',
                        'Wipe excess',
                        'Allow to cure'
                    ],
                    techSheet: 'assets/pdf/Sealant1.pdf',
                    safetySheet: 'assets/pdf/Sealant2.pdf'
                },

                // PRODUCT 11
                'Dr. Fixit Super Latex': {
                    title: 'Dr. Fixit Super Latex',
                    category: 'Protection',
                    image: 'assets/img/SuperLatex.png',
                    description: 'Mutipurpose repair and waterproofing SBR Latex.',
                    applications: 'Water pipes, gas pipes',
                    features: 'Corrosion resistant, flexible',
                    size: '1kg, 5kg and 20 kg',
                    coverage: '1 kg of Dr. Fixit Super Latex will cover 2 -2.1 Sq.mtr area in 2 coats for proportion mix of 1:1.5 (Dr. Fixit Super Latex : Cement) by volume.',
                    benefits: [
                        'Multi-purpose & economical solution, easy to use.',
                        'Excellent Adhesion improves flexibility of cement mortar.',
                        'Reduces shrinkage and increases abrasion resistance.'
                    ],
                    techFeatures: [
                        'Dielectric strength: 5kV/mm',
                        'Adhesion: 3.5 MPa',
                        'Operating temp: -30°C to 80°C'
                    ],
                    applicationSteps: [
                        'Clean pipe surface',
                        'Apply primer',
                        'Wrap tape',
                        'Seal edges'
                    ],
                    techSheet: 'assets/pdf/SuperLatex1.pdf',
                    safetySheet: 'assets/pdf/SuperLatex2.pdf'
                },

                // PRODUCT 12
                'Dr. Fixit Piditop 333': {
                    title: 'Dr. Fixit Piditop 333',
                    category: 'Cleaning',
                    image: 'assets/img/Piditop.png',
                    description: 'Non-metallic concrete floor hardener.',
                    applications: 'Brick walls, pavers, concrete',
                    features: 'Removes efflorescence, non-etching',
                    size: '25 kg bag',
                    coverage: 'Light duty application 2 kg/m2; Medium duty application 3-5 kg/m2 ; Heavy-duty application 7 kg/m2',
                    benefits: [
                        'Excellent compressive strength increases wear resistance of concrete floors.',
                        'Does not contain ferrous aggregate, prevents rusting and erosion of floor.',
                        'Smooth & hard surface prevents dust generation due to movements.'
                    ],
                    techFeatures: [
                        'PH: 2.5',
                        'Active ingredients: 15%',
                        'Dilution ratio: 1:4'
                    ],
                    applicationSteps: [
                        'Wet surface',
                        'Apply solution',
                        'Scrub if needed',
                        'Rinse thoroughly'
                    ],
                    techSheet: 'assets/pdf/Piditop1.pdf',
                    safetySheet: 'assets/pdf/Piditop2.pdf'
                },

                // PRODUCT 13
                'Dr. Fixit Tile grout': {
                    title: 'Dr. Fixit Tile grout',
                    category: 'Curing',
                    image: 'assets/img/Tilegrout.png',
                    description: 'Water resistant tile grout',
                    applications: 'New concrete slabs, pavements',
                    features: 'Water retention, UV stable',
                    size: '1 kg and 3 kg. Available in 7 colors',
                    coverage: 'Refer to the Technical Data Sheet (TDS)',
                    benefits: [
                        'High compressive, tensile and flexural strength.',
                        'Water resistant grout, ideal to use in wet areas.',
                        'Easy to apply and clean.'
                    ],
                    techFeatures: [
                        'Water retention: 95%',
                        'Efficiency: 75%',
                        'VOC: 250 g/L'
                    ],
                    applicationSteps: [
                        'Apply after finishing',
                        'Spray evenly',
                        'Do not disturb',
                        'Allow to cure'
                    ],
                    techSheet: 'assets/pdf/Tilegrout.pdf',
                },

                // PRODUCT 14
                'Dr. Fixit Modern Tile Adhesive': {
                    title: 'Dr. Fixit Modern Tile Adhesive',
                    category: 'Sealants',
                    image: 'assets/img/ModernTile.png',
                    description: 'Crack Resistant and Waterproof tile adhesive',
                    applications: 'Parking decks, bridges, slabs',
                    features: 'Elastic, weather resistant',
                    size: '25kg',
                    coverage: '5.5 to 6 sq. mt. coverage from 25kg bag for 3mm thick bed',
                    benefits: [
                        'Excellent waterproofing characteristics.',
                        'Ready to use, needs no curing.',
                        'Excellent adhesion,low shrinkage.'
                    ],
                    techFeatures: [
                        'Movement capability: ±25%',
                        'Hardness: 35 Shore A',
                        'Tensile strength: 1.2 MPa'
                    ],
                    applicationSteps: [
                        'Clean joint',
                        'Install backer rod',
                        'Apply sealant',
                        'Tool surface'
                    ],
                    techSheet: 'assets/pdf/ModernTile.pdf',
                },

                // PRODUCT 15
                'Dr. Fixit Marble Tile Adhesive': {
                    title: 'Dr. Fixit Marble Tile Adhesive',
                    category: 'Protection',
                    image: 'assets/img/MarbleTile.png',
                    description: 'Crack Resistant and Waterproof tile Adhesive for marble.',
                    applications: 'Bridges, buildings, structures',
                    features: 'Breathable, alkali resistant',
                    size: '25 kg',
                    coverage: '5.5 to 6 sq. mt. coverage from 25kg bag for 3mm thick bed',
                    benefits: [
                        'Excellent waterproofing characteristics, ideal to use in swimming pool.',
                        'High adhesion with concrete surface.',
                        'Extreame whiteness, does not stain marble finish.'
                    ],
                    techFeatures: [
                        'Water vapor transmission: 15 g/m²/day',
                        'Carbon dioxide diffusion: <0.5%',
                        'Adhesion: 1.5 MPa'
                    ],
                    applicationSteps: [
                        'Prepare surface',
                        'Apply first coat',
                        'Apply second coat',
                        'Allow to cure'
                    ],
                    techSheet: 'assets/pdf/MarbleTile1.pdf',
                    safetySheet: 'assets/pdf/MarbleTile2.pdf'
                },

                // PRODUCT 16
                'Dr. Fixit Stone Tile Adhesive': {
                    title: 'Dr. Fixit Stone Tile Adhesive',
                    category: 'Admixtures',
                    image: 'assets/img/TileAdhesive.png',
                    description: 'Crack Resistant and Waterproof tile Adhesive for natural Stone/Granite.',
                    applications: 'Masonry, plaster, renders',
                    features: 'Water reducing, air entraining',
                    size: '25kg',
                    coverage: '5.5 to 6 sq. mt. coverage from 25kg bag for 3mm thick bed',
                    benefits: [
                        'Ideal for exterior cladding applications',
                        'Strong adhesion, low shrinkage..',
                        'For heavy natural stones/granites.'
                    ],
                    techFeatures: [
                        'Air content: 8-12%',
                        'Water reduction: 15%',
                        'Dosage: 0.5-1.0%'
                    ],
                    applicationSteps: [
                        'Add to mixing water',
                        'Mix normally',
                        'Use within 2 hours',
                        'Cure properly'
                    ],
                    techSheet: 'assets/pdf/TileAdhesive1.pdf',
                    safetySheet: 'assets/pdf/TileAdhesive2.pdf'
                },

                // PRODUCT 17
                                'USPRO construction Foam': {
                                    title: 'USPRO construction Foam',
                                    category: 'Admixtures',
                                    image: 'assets/img/Foam.png',
                                    description: 'USPRO construction Foam is a one component expanding multipurpose polyurethane foam',
                                    applications: 'Masonry, plaster, renders',
                                    features: 'Water reducing, air entraining',
                                    size: '750ml',
                                    benefits: [
                                        'Expands 45 liters.',
                                        'Tack free in 15 minutes, full cure in 24 hrs.',
                                        'contains no CFC & formaldehyde.'
                                    ],
                                    techFeatures: [
                                        'Air content: 8-12%',
                                        'Water reduction: 15%',
                                        'Dosage: 0.5-1.0%'
                                    ],
                                    applicationSteps: [
                                        'Add to mixing water',
                                        'Mix normally',
                                        'Use within 2 hours',
                                        'Cure properly'
                                    ],
                                    techSheet: 'assets/pdf/Foam1.pdf',
                                    safetySheet: 'assets/pdf/Foam2.pdf'
                                },

                // PRODUCT 18
                'Dr. Fixit Modern Tile Adhesive Plus': {
                    title: 'Dr. Fixit Modern Tile Adhesive Plus',
                    category: 'Adhesives',
                    image: 'assets/img/ModernTileAdhesive.png',
                    description: 'Crack Resistant and Waterproof tile Adhesive for Porcelain tiles.',
                    applications: 'Overlays, repairs, new to old concrete',
                    features: 'High strength, durable',
                    size: '25kg',
                    coverage: '5.5 to 6 sq. mt. coverage from 25kg bag for 3mm thick bed',
                    benefits: [
                        'Tile on tile application.',
                        'Exterior grade application.',
                        'Large size tile.'
                    ],
                    techFeatures: [
                        'Solid content: 50%',
                        'PH: 8.5',
                        'Bond strength: 2.0 MPa'
                    ],
                    applicationSteps: [
                        'Prepare surface',
                        'Apply bonding agent',
                        'Apply new concrete while tacky',
                        'Cure properly'
                    ],
                    techSheet: 'assets/pdf/ModernTileAdhesive1.pdf',
                    safetySheet: 'assets/pdf/ModernTileAdhesive2.pdf'
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