document.addEventListener('DOMContentLoaded', function() {
    // Partner data with solutions and products
    const partnersData = {
        'dr-fixit': {
            name: 'Dr. Fixit',
            logo: 'assets/img/fix.png',
            description: 'World leader in construction chemicals and waterproofing solutions with over 30 years of innovation in building protection.',
            solutions: {
                // SOLUTION 1
                'roof-waterproofing': {
                    title: 'Roof Waterproofing System',
                    category: 'Waterproofing',
                    image: 'assets/img/s1.jpg',
                    description: 'Complete waterproofing solution for all types of roofs including terraces, balconies and flat roofs. Our system provides long-lasting protection against water ingress and structural damage.',
                    benefits: [
                        'Prevents water leakage and dampness',
                        'Protects against structural damage',
                        'UV resistant for long-lasting performance',
                        'Can be applied to new and existing roofs'
                    ],
                    applications: [
                        'Residential terraces and balconies',
                        'Commercial flat roofs',
                        'Industrial roof decks',
                        'Parking deck waterproofing'
                    ],
                    products: [
                        'dr-fixit-waterproof-plus',
                        'dr-fixit-concrete-repair',
                        'dr-fixit-tile-grout',
                        'Dr. Fixit Raincoat 2 in 1'
                    ]
                },
                // SOLUTION 2
                'basement-waterproofing': {
                    title: 'Basement Waterproofing System',
                    category: 'Waterproofing',
                    image: 'assets/img/s2.jpg',
                    description: 'Comprehensive solution for basement waterproofing that protects against hydrostatic pressure and groundwater ingress. Suitable for both new construction and remedial applications.',
                    benefits: [
                        'Withstands high hydrostatic pressure',
                        'Prevents dampness and mold growth',
                        'Crystalline technology self-heals microcracks',
                        'Can be applied from positive or negative side'
                    ],
                    applications: [
                        'Residential basements',
                        'Underground parking',
                        'Retaining walls',
                        'Tunnels and subways'
                    ],
                    products: [
                        'Dr. Fixit Polyplus CP',
                        'Dr. Fixit Pidiproof LW+',
                        'Dr. Fixit Sureseal',
                        'Dr. Fixit Super Latex'
                    ]
                },
                // SOLUTION 3
                'bathroom-waterproofing': {
                    title: 'Bathroom & Wet Area Waterproofing',
                    category: 'Waterproofing',
                    image: 'assets/img/s3.jpg',
                    description: 'Complete waterproofing system for bathrooms, toilets, kitchens and other wet areas to prevent water leakage and seepage issues.',
                    benefits: [
                        'Prevents water damage to adjacent areas',
                        'Mold and mildew resistant',
                        'Compatible with all tile adhesives',
                        'Fast curing for quick project completion'
                    ],
                    applications: [
                        'Residential bathrooms',
                        'Hotel bathrooms',
                        'Commercial kitchens',
                        'Swimming pool changing areas'
                    ],
                    products: [
                        'Dr. Fixit Pidifin 2K',
                        'Dr. Fixit Modern Tile Adhesive',
                        'Dr. Fixit Marble Tile Adhesive',
                        'Dr. Fixit Stone Tile Adhesive'
                    ]
                },
                // SOLUTION 4
                'concrete-repair': {
                    title: 'Concrete Repair & Protection',
                    category: 'Repair',
                    image: 'assets/img/s4.jpg',
                    description: 'Advanced solutions for repairing and protecting damaged concrete structures, including cracks, spalls and structural defects.',
                    benefits: [
                        'Restores structural integrity',
                        'Extends service life of concrete',
                        'High bond strength to existing concrete',
                        'Corrosion protection for reinforcement'
                    ],
                    applications: [
                        'Concrete crack repair',
                        'Spall and damage repair',
                        'Column and beam strengthening',
                        'Bridge deck repairs'
                    ],
                    products: [
                        'Dr. Fixit Polyplus CP Admix',
                        'Dr. Fixit Fastflex',
                        'Dr. Fixit Piditop 333',
                        'Dr. Fixit Super Latex'
                    ]
                },
                // SOLUTION 5
                'tile-adhesive': {
                    title: 'Tile Fixing System',
                    category: 'Adhesives',
                    image: 'assets/img/s5.jpg',
                    description: 'Complete range of high-performance tile adhesives for all types of tiles including ceramic, porcelain, natural stone and large format tiles.',
                    benefits: [
                        'Strong bond strength',
                        'Reduces tile breakage',
                        'Waterproof formulations available',
                        'Extended open time for adjustment'
                    ],
                    applications: [
                        'Floor tile installation',
                        'Wall tile installation',
                        'Swimming pool tiling',
                        'Exterior cladding'
                    ],
                    products: [
                        'Dr. Fixit Modern Tile Adhesive',
                        'Dr. Fixit Marble Tile Adhesive',
                        'Dr. Fixit Stone Tile Adhesive',
                        'Dr. Fixit Modern Tile Adhesive Plus'
                    ]
                },
                // SOLUTION 6
                'expansion-joints': {
                    title: 'Expansion Joint Solutions',
                    category: 'Sealants',
                    image: 'assets/img/s6.jpg',
                    description: 'Specialized solutions for sealing and protecting expansion joints in concrete structures to accommodate movement and prevent water ingress.',
                    benefits: [
                        'Accommodates structural movement',
                        'Prevents water penetration',
                        'UV and weather resistant',
                        'Long-term flexibility'
                    ],
                    applications: [
                        'Building expansion joints',
                        'Bridge joints',
                        'Parking deck joints',
                        'Industrial floor joints'
                    ],
                    products: [
                        'Dr. Fixit PU Sealant',
                        'Dr. Fixit Fastflex',
                        'Dr. Fixit Sureseal',
                        'USPRO construction Foam'
                    ]
                },
                // SOLUTION 7
                'flooring-solutions': {
                    title: 'Flooring Solutions',
                    category: 'Flooring',
                    image: 'assets/img/s7.jpg',
                    description: 'Comprehensive range of products for floor preparation, leveling, hardening and protection for all types of flooring applications.',
                    benefits: [
                        'Creates perfect substrate for flooring',
                        'Dustproof and durable surfaces',
                        'Chemical resistant',
                        'Fast curing for quick installation'
                    ],
                    applications: [
                        'Epoxy flooring preparation',
                        'Industrial floor hardening',
                        'Tile and stone flooring',
                        'Polished concrete floors'
                    ],
                    products: [
                        'Dr. Fixit Piditop 333',
                        'Dr. Fixit Tile grout',
                        'Dr. Fixit Modern Tile Adhesive',
                        'Dr. Fixit Pidifin 2K'
                    ]
                },
                // SOLUTION 8
                'wall-protection': {
                    title: 'Wall Protection System',
                    category: 'Protection',
                    image: 'assets/img/s8.jpg',
                    description: 'Complete solutions for protecting exterior and interior walls from water ingress, efflorescence and weathering.',
                    benefits: [
                        'Prevents dampness and salt attack',
                        'Breathable formulations',
                        'Maintains aesthetic appearance',
                        'Long-term protection'
                    ],
                    applications: [
                        'Exterior wall protection',
                        'Damp proofing of walls',
                        'Efflorescence treatment',
                        'Plaster protection'
                    ],
                    products: [
                        'Dr. Fixit Raincoat 2 in 1',
                        'Dr. Fixit Sureseal',
                        'Dr. Fixit Pidiproof LW+',
                        'Dr. Fixit Super Latex'
                    ]
                },
                // SOLUTION 9
                'swimming-pools': {
                    title: 'Swimming Pool Solutions',
                    category: 'Waterproofing',
                    image: 'assets/img/s9.jpg',
                    description: 'Specialized waterproofing and tiling solutions for swimming pools, fountains and water features.',
                    benefits: [
                        'Withstands constant water immersion',
                        'Resistant to pool chemicals',
                        'Flexible to accommodate movement',
                        'Prevents algae growth'
                    ],
                    applications: [
                        'Residential swimming pools',
                        'Commercial pools',
                        'Water parks',
                        'Fountains and water features'
                    ],
                    products: [
                        'Dr. Fixit Polyplus CP',
                        'Dr. Fixit Marble Tile Adhesive',
                        'Dr. Fixit PU Sealant',
                        'Dr. Fixit Raincoat 2 in 1'
                    ]
                },
                // SOLUTION 10
                'industrial-waterproofing': {
                    title: 'Industrial Waterproofing',
                    category: 'Waterproofing',
                    image: 'assets/img/s10.jpg',
                    description: 'Heavy-duty waterproofing solutions for industrial applications including chemical plants, factories and storage tanks.',
                    benefits: [
                        'Chemical resistant',
                        'High mechanical strength',
                        'Withstands extreme conditions',
                        'Long-term durability'
                    ],
                    applications: [
                        'Industrial flooring',
                        'Chemical storage areas',
                        'Tank bunds',
                        'Wastewater treatment plants'
                    ],
                    products: [
                        'Dr. Fixit Torchshield/Insutech/Ecobit',
                        'Dr. Fixit Pidifin 2K',
                        'Dr. Fixit Fastflex',
                        'Dr. Fixit Piditop 333'
                    ]
                }
            },
            productCategories: [
                'All Products',
                'Integral Waterproofing',
                'Crystalline Coating',
                'Top Coat',
                'Two-Component Under Coat',
                'APP/Bituminous Membrane',
                'Sealants',
                'Latex',
                'Floor Hardener',
                'Tile Fixing',
                'Construction Foam'
            ],
            products: {
                // Integral Waterproofing
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
                    safetySheet: 'assets/pdf/PowderWaterproof2.pdf'
                },
                'dr-fixit-concrete-repair': {
                    title: 'Dr. Fixit Polyplus CP Admix',
                    category: 'Integral Waterproofing',
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
                'dr-fixit-tile-grout': {
                    title: 'Dr. Fixit Pidiproof LW+',
                    category: 'Integral Waterproofing',
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

                // Crystalline Coating
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
                    safetySheet: 'assets/pdf/POLYPLUSCP2.pdf'
                },

                // Top Coat
                'Dr. Fixit Raincoat 2 in 1': {
                    title: 'Dr. Fixit Raincoat 2 in 1',
                    category: 'Top Coat',
                    image: 'assets/img/Raincoat2in1.png',
                    description: 'High performance self priming, fibre reinforced & heat insulating acrylic waterproof coating for roof & external wall',
                    applications: 'Factories, warehouses, garages',
                    features: 'Chemical resistant, high-gloss',
                    size: '4 & 20 ltr',
                    coverage: 'Self-Priming – Coverage 7.5 to 9 sqmtr per ltr. (Dilution 50%).',
                    benefits: [
                        'Tough and elastic film having elongation of 120%, provides excellent waterproofing.',
                        'Bridges cracks up to 2 mm width.',
                        'UV stable foot trafficable coating doesn\'t require screed.'
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

                // Two-Component Under Coat
                'Dr. Fixit Pidifin 2K': {
                    title: 'Dr. Fixit Pidifin 2K',
                    category: 'Two-Component Under Coat',
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

                // APP/Bituminous Membrane
                'Dr. Fixit Torchshield/Insutech/Ecobit': {
                    title: 'Dr. Fixit Torchshield/Insutech/Ecobit',
                    category: 'APP/Bituminous Membrane',
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

                // Sealants
                'Dr. Fixit PU Sealant': {
                    title: 'Dr. Fixit PU Sealant',
                    category: 'Sealants',
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

                // Latex
                'Dr. Fixit Super Latex': {
                    title: 'Dr. Fixit Super Latex',
                    category: 'Latex',
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

                // Floor Hardener
                'Dr. Fixit Piditop 333': {
                    title: 'Dr. Fixit Piditop 333',
                    category: 'Floor Hardener',
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

                // Tile Fixing
                'Dr. Fixit Tile grout': {
                    title: 'Dr. Fixit Tile grout',
                    category: 'Tile Fixing',
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
                'Dr. Fixit Modern Tile Adhesive': {
                    title: 'Dr. Fixit Modern Tile Adhesive',
                    category: 'Tile Fixing',
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
                'Dr. Fixit Marble Tile Adhesive': {
                    title: 'Dr. Fixit Marble Tile Adhesive',
                    category: 'Tile Fixing',
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
                'Dr. Fixit Stone Tile Adhesive': {
                    title: 'Dr. Fixit Stone Tile Adhesive',
                    category: 'Tile Fixing',
                    image: 'assets/img/TileAdhesive.png',
                    description: 'Crack Resistant and Waterproof tile Adhesive for natural Stone/Granite.',
                    applications: 'Overlays, repairs, new to old concrete',
                    features: 'High strength, durable',
                    size: '25kg',
                    coverage: '5.5 to 6 sq. mt. coverage from 25kg bag for 3mm thick bed',
                    benefits: [
                        'Ideal for exterior cladding applications',
                        'Strong adhesion, low shrinkage.',
                        'For heavy natural stones/granites.'
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
                    techSheet: 'assets/pdf/TileAdhesive1.pdf',
                    safetySheet: 'assets/pdf/TileAdhesive2.pdf'
                },
                'Dr. Fixit Modern Tile Adhesive Plus': {
                    title: 'Dr. Fixit Modern Tile Adhesive Plus',
                    category: 'Tile Fixing',
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
                },

                // Construction Foam
                'USPRO construction Foam': {
                    title: 'USPRO construction Foam',
                    category: 'Construction Foam',
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
                }
            }
        },
        'fevicol': {
            name: 'Fevicol',
            logo: 'assets/img/fev.png',
            description: 'Trusted name in adhesives with a wide range of products for construction, woodworking, and industrial applications.',
            solutions: {},
            products: {},
            productCategories: []
        }
    };

    // DOM Elements
    const solutionsModal = document.getElementById('solutionsModal');
    const solutionModal = document.getElementById('solutionModal');
    const productModal = document.getElementById('productModal');
    const exploreButtons = document.querySelectorAll('.explore-btn');
    const closeButtons = document.querySelectorAll('.close-btn');
    const solutionsGrid = document.getElementById('solutionsGrid');
    const productsGrid = document.getElementById('productsGrid');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Current partner and tab state
    let currentPartner = null;
    let currentCategory = 'All Products';

    // Open solutions modal for a partner
    exploreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const partnerId = button.dataset.partner;
            currentPartner = partnersData[partnerId];

            // Set partner info in modal
            document.getElementById('modalPartnerLogo').src = currentPartner.logo;
            document.getElementById('modalPartnerLogo').alt = currentPartner.name + ' Logo';
            document.getElementById('modalPartnerName').textContent = currentPartner.name;
            document.getElementById('modalPartnerDescription').textContent = currentPartner.description;

            // Load solutions and products
            loadSolutions(currentPartner.solutions);
            loadProducts(currentPartner.products);

            // Create category filters if they exist
            if (currentPartner.productCategories && currentPartner.productCategories.length > 0) {
                createCategoryFilters();
            }

            // Show modal
            solutionsModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    // Create category filter buttons
    function createCategoryFilters() {
        const filterContainer = document.createElement('div');
        filterContainer.className = 'product-filters';

        currentPartner.productCategories.forEach(category => {
            const filterButton = document.createElement('button');
            filterButton.className = 'filter-btn';
            filterButton.textContent = category;
            filterButton.dataset.category = category;

            if (category === 'All Products') {
                filterButton.classList.add('active');
            }

            filterButton.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                filterButton.classList.add('active');
                currentCategory = category;
                loadProducts(currentPartner.products);
            });

            filterContainer.appendChild(filterButton);
        });

        // Insert filter container before products grid
        const productsTab = document.getElementById('productsTab');
        if (productsTab.firstChild) {
            productsTab.insertBefore(filterContainer, productsTab.firstChild);
        } else {
            productsTab.appendChild(filterContainer);
        }
    }

    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;

            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show corresponding tab content
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(`${tabId}Tab`).classList.add('active');
        });
    });

    // Load solutions into grid
    function loadSolutions(solutions) {
        solutionsGrid.innerHTML = '';

        if (Object.keys(solutions).length === 0) {
            solutionsGrid.innerHTML = `
                <div class="coming-soon-message">
                    <i class="fas fa-tools"></i>
                    <h3>Solutions Coming Soon</h3>
                    <p>We're currently compiling comprehensive solution packages for this partner. Please check back soon or explore our product offerings.</p>
                </div>
            `;
            return;
        }

        Object.entries(solutions).forEach(([id, solution]) => {
            const solutionCard = document.createElement('div');
            solutionCard.className = 'solution-card';
            solutionCard.dataset.id = id;

            solutionCard.innerHTML = `
                <div class="solution-card-image">
                    <img src="${solution.image}" alt="${solution.title}">
                </div>
                <div class="solution-card-content">
                    <h3>${solution.title}</h3>
                    <p>${solution.description.substring(0, 120)}...</p>
                    <div class="solution-card-actions">
                        <button class="solution-details-btn">View Solution</button>
                    </div>
                </div>
            `;

            solutionCard.querySelector('.solution-details-btn').addEventListener('click', () => {
                showSolutionDetail(solution);
            });

            solutionsGrid.appendChild(solutionCard);
        });
    }

    // Load products into grid
    function loadProducts(products) {
        productsGrid.innerHTML = '';

        if (Object.keys(products).length === 0) {
            productsGrid.innerHTML = `
                <div class="coming-soon-message">
                    <i class="fas fa-box-open"></i>
                    <h3>Products Coming Soon</h3>
                    <p>We're currently compiling the product catalog for this partner. Please check back soon or explore our solution offerings.</p>
                </div>
            `;
            return;
        }

        let filteredProducts = Object.entries(products);

        // Filter by category if not "All Products"
        if (currentCategory !== 'All Products') {
            filteredProducts = filteredProducts.filter(([id, product]) => product.category === currentCategory);
        }

        if (filteredProducts.length === 0) {
            productsGrid.innerHTML = `
                <div class="no-products-message">
                    <i class="fas fa-info-circle"></i>
                    <h3>No Products in This Category</h3>
                    <p>There are currently no products available in the selected category. Please try another category or check back later.</p>
                </div>
            `;
            return;
        }

        filteredProducts.forEach(([id, product]) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.id = id;

            productCard.innerHTML = `
                <div class="product-card-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-card-content">
                    <h3>${product.title}</h3>
                    <p class="product-category">${product.category}</p>
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
        });
    }

    // Show solution detail modal
    function showSolutionDetail(solution) {
        // Populate modal
        document.getElementById('solutionImage').src = solution.image;
        document.getElementById('solutionImage').alt = solution.title;
        document.getElementById('solutionTitle').textContent = solution.title;
        document.getElementById('solutionCategory').textContent = solution.category;
        document.getElementById('solutionDescription').textContent = solution.description;

        // Populate benefits
        const benefitsList = document.getElementById('solutionBenefits');
        benefitsList.innerHTML = '';
        solution.benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            benefitsList.appendChild(li);
        });

        // Populate applications
        const applicationsList = document.getElementById('solutionApplications');
        applicationsList.innerHTML = '';
        solution.applications.forEach(application => {
            const li = document.createElement('li');
            li.textContent = application;
            applicationsList.appendChild(li);
        });

        // Load recommended products
        const solutionProductsGrid = document.getElementById('solutionProductsGrid');
        solutionProductsGrid.innerHTML = '';

        solution.products.forEach(productId => {
            const product = currentPartner.products[productId];
            if (product) {
                const productCard = document.createElement('div');
                productCard.className = 'solution-product-card';

                productCard.innerHTML = `
                    <h5>${product.title}</h5>
                    <p>${product.category}</p>
                    <a href="#" class="view-product-btn" data-product-id="${productId}">View Product Details</a>
                `;

                productCard.querySelector('.view-product-btn').addEventListener('click', (e) => {
                    e.preventDefault();
                    showProductDetail(product);
                });

                solutionProductsGrid.appendChild(productCard);
            }
        });

        // Close solutions modal and open solution modal
        solutionsModal.classList.remove('show');
        solutionModal.classList.add('show');
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

        // Set PDF download links if they exist
        if (product.techSheet) {
            document.getElementById('productTechSheetBtn').href = product.techSheet;
            document.getElementById('productTechSheetBtn').download = product.title.replace(/\s+/g, '_') + '_Technical_Sheet.pdf';
            document.getElementById('productTechSheetBtn').style.display = 'flex';
        } else {
            document.getElementById('productTechSheetBtn').style.display = 'none';
        }

        if (product.safetySheet) {
            document.getElementById('productSafetySheetBtn').href = product.safetySheet;
            document.getElementById('productSafetySheetBtn').download = product.title.replace(/\s+/g, '_') + '_Safety_Data.pdf';
            document.getElementById('productSafetySheetBtn').style.display = 'flex';
        } else {
            document.getElementById('productSafetySheetBtn').style.display = 'none';
        }

        // Close current modal and open product modal
        if (solutionsModal.classList.contains('show')) {
            solutionsModal.classList.remove('show');
        }
        if (solutionModal.classList.contains('show')) {
            solutionModal.classList.remove('show');
        }
        productModal.classList.add('show');
    }

    // Close modals
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            solutionsModal.classList.remove('show');
            solutionModal.classList.remove('show');
            productModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === solutionsModal || e.target === solutionModal || e.target === productModal) {
            solutionsModal.classList.remove('show');
            solutionModal.classList.remove('show');
            productModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Handle URL parameters for direct linking
    function getUrlParameter(name) {
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        const results = regex.exec(window.location.href);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    const partnerParam = getUrlParameter('partner');

    if (partnerParam && partnersData[partnerParam]) {
        setTimeout(() => {
            const exploreButton = document.querySelector(`.explore-btn[data-partner="${partnerParam}"]`);
            if (exploreButton) {
                exploreButton.click();

                // Scroll to section
                document.getElementById('partners').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }, 500);
    }
});