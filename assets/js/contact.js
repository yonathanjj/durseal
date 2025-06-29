document.addEventListener('DOMContentLoaded', function() {
    const productCategory = document.getElementById('productCategory');
    const specificProduct = document.getElementById('specificProduct');

    // Enable/disable specific product based on category selection
    productCategory.addEventListener('change', function() {
        specificProduct.disabled = !this.value;
        if (!this.value) {
            specificProduct.value = '';
        }
    });

    // Form validation before submission
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        // Add any additional validation if needed
        if (!this.checkValidity()) {
            e.preventDefault();
            // Highlight invalid fields
            const invalidFields = this.querySelectorAll(':invalid');
            invalidFields.forEach(field => {
                field.style.borderColor = '#ff6b6b';
                field.nextElementSibling?.style.color = '#ff6b6b';
            });
        }
    });

    // Reset field styles when user starts typing
    form.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('input', function() {
            this.style.borderColor = '#ddd';
            const errorMsg = this.nextElementSibling;
            if (errorMsg && errorMsg.classList.contains('error-message')) {
                errorMsg.remove();
            }
        });
    });
});