document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const solutionCards = document.querySelectorAll('.solution-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;

            // Filter cards
            solutionCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Modal functionality
    const modal = document.getElementById('solutionModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalApplications = document.getElementById('modalApplications');
    const modalFeatures = document.getElementById('modalFeatures');
    const closeBtn = document.querySelector('.close-btn');
    const detailButtons = document.querySelectorAll('.details-btn');

    // Solution data (would normally come from a database)
    const solutionsData = {
        'external-wall': {
            title: 'External Wall Protection System',
            category: 'Exterior Solution',
            image: 'assets/img/external-wall.jpg',
            description: 'Our comprehensive external wall protection system provides a complete solution for safeguarding buildings against harsh weather conditions, pollution, and structural damage. The multi-layer system includes primers, waterproof membranes, and protective coatings specifically formulated for Rwanda\'s climate.',
            applications: 'Commercial buildings, residential complexes, institutional structures',
            features: 'Weather resistance, crack bridging, UV protection, breathable coating'
        },
        'terrace-roof': {
            title: 'Terrace & Roof Waterproofing System',
            category: 'Exterior Solution',
            image: 'assets/img/terrace-roof.jpg',
            description: 'A complete waterproofing solution for terraces and roofs that withstands extreme temperature variations and heavy rainfall. The system includes specialized membranes and coatings that provide long-lasting protection while allowing for thermal movement.',
            applications: 'Flat roofs, terraces, balconies, podiums',
            features: 'Thermal movement accommodation, seamless application, root resistance'
        },
        // Add more solutions data here following the same structure
    };

    // Open modal when clicking "View Details"
    detailButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = button.closest('.solution-card');
            const solutionId = card.querySelector('h3').textContent.toLowerCase().replace(/\s+/g, '-');

            // Get solution data (fallback to default if not found)
            const solution = solutionsData[solutionId] || {
                title: card.querySelector('h3').textContent,
                category: card.dataset.category.replace('-', ' '),
                image: card.querySelector('img').src,
                description: card.querySelector('p').textContent,
                applications: 'Various construction applications',
                features: 'High performance, durable, weather resistant'
            };

            // Populate modal
            modalImage.src = solution.image;
            modalImage.alt = solution.title;
            modalTitle.textContent = solution.title;
            modalSubtitle.textContent = solution.category;
            modalDescription.textContent = solution.description;
            modalApplications.textContent = solution.applications;
            modalFeatures.textContent = solution.features;

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