// Updated JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality (unchanged)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const solutionCards = document.querySelectorAll('.solution-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;

            solutionCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Enhanced Modal functionality
    const modal = document.getElementById('solutionModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalApplications = document.getElementById('modalApplications');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalSize = document.getElementById('modalSize');
    const modalCoverage = document.getElementById('modalCoverage');
    const modalDryingTime = document.getElementById('modalDryingTime');
    const modalBenefits = document.getElementById('modalBenefits');
    const modalTechFeatures = document.getElementById('modalTechFeatures');
    const modalApplicationSteps = document.getElementById('modalApplicationSteps');
    const techSheetBtn = document.getElementById('techSheetBtn');
    const safetySheetBtn = document.getElementById('safetySheetBtn');
    const closeBtn = document.querySelector('.close-btn');
    const detailButtons = document.querySelectorAll('.details-btn');

    // Enhanced Solution data
    const solutionsData = {
        'dr.-fixit-raincoat-2-in-1': {
            title: 'Dr. Fixit Raincoat 2 in 1',
            category: 'Exterior Solution',
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
            category: 'Exterior Solution',
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
        // Add all other products following the same structure
    };

    // Open modal when clicking "View Details"
    detailButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = button.closest('.solution-card');
            const solutionName = card.querySelector('h3').textContent.trim();
            const solutionId = solutionName.toLowerCase().replace(/[.\s]+/g, '-');

            // Get solution data (fallback to default if not found)
            const solution = solutionsData[solutionId] || {
                title: solutionName,
                category: card.dataset.category.replace('-', ' '),
                image: card.querySelector('img').src,
                description: card.querySelector('p').textContent,
                applications: 'Various construction applications',
                features: 'High performance, durable, weather resistant',
                size: 'Various sizes available',
                coverage: 'Varies by application',
                dryingTime: '24-48 hours',
                benefits: ['High quality', 'Durable', 'Weather resistant'],
                techFeatures: ['Premium materials', 'Tested quality', 'Long lifespan'],
                applicationSteps: ['Prepare surface', 'Apply product', 'Allow to dry'],
                techSheet: card.querySelector('.download-btn').href,
                safetySheet: '#'
            };

            // Populate modal
            modalImage.src = solution.image;
            modalImage.alt = solution.title;
            modalTitle.textContent = solution.title;
            modalSubtitle.textContent = solution.category;
            modalDescription.textContent = solution.description;
            modalApplications.textContent = solution.applications;
            modalFeatures.textContent = solution.features;
            modalSize.textContent = solution.size;
            modalCoverage.textContent = solution.coverage;
            modalDryingTime.textContent = solution.dryingTime;

            // Populate benefits
            modalBenefits.innerHTML = '';
            solution.benefits.forEach(benefit => {
                const li = document.createElement('li');
                li.textContent = benefit;
                modalBenefits.appendChild(li);
            });

            // Populate technical features
            modalTechFeatures.innerHTML = '';
            solution.techFeatures.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                modalTechFeatures.appendChild(li);
            });

            // Populate application steps
            modalApplicationSteps.innerHTML = '';
            solution.applicationSteps.forEach(step => {
                const li = document.createElement('li');
                li.textContent = step;
                modalApplicationSteps.appendChild(li);
            });

            // Set PDF download links
            techSheetBtn.href = solution.techSheet;
            techSheetBtn.download = solution.title.replace(/\s+/g, '_') + '_Technical_Sheet.pdf';
            safetySheetBtn.href = solution.safetySheet;
            safetySheetBtn.download = solution.title.replace(/\s+/g, '_') + '_Safety_Data.pdf';

            // Show modal
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
});