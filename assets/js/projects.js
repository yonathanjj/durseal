// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Modal functionality
function showProjectModal(title, subtitle, description, year, size, location) {
    const modal = document.getElementById('projectModal');
    const imgSrc = `https://source.unsplash.com/random/800x500/?${encodeURIComponent(title.split(' ')[0])}`;

    // Set modal content
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalSubtitle').textContent = subtitle;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalYear').textContent = year;
    document.getElementById('modalSize').textContent = size;
    document.getElementById('modalLocation').textContent = location;
    document.getElementById('modalImage').src = imgSrc;
    document.getElementById('modalImage').alt = title;

    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
});