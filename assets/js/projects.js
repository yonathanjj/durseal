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

function showProjectModal(title, subtitle, description, year, size, location) {
    // Get the clicked project card
    const clickedCard = event.currentTarget;

    // Find the image inside the clicked card
    const cardImage = clickedCard.querySelector('.project-image img');

    // Get the modal elements
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');

    // Set the modal content
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalSubtitle').textContent = subtitle;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalYear').textContent = year;
    document.getElementById('modalSize').textContent = size;
    document.getElementById('modalLocation').textContent = location;

    // Use the SAME image as in the project card
    modalImage.src = cardImage.src;
    modalImage.alt = cardImage.alt;

    // Show the modal
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