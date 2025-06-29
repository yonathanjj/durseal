document.addEventListener('DOMContentLoaded', function() {
  // Job filtering functionality
  const filterButtons = document.querySelectorAll('.careers-filter-btn');
  const jobCards = document.querySelectorAll('.careers-job-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked button
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');

      // Filter job cards
      jobCards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = 'block';
        } else {
          const cardTypes = card.getAttribute('data-type').split(' ');
          if (cardTypes.includes(filterValue)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

  // File upload display
  const fileInput = document.getElementById('resume');
  const fileNameDisplay = document.querySelector('.file-name');

  if (fileInput) {
    fileInput.addEventListener('change', function() {
      if (this.files.length > 0) {
        fileNameDisplay.textContent = this.files[0].name;
      } else {
        fileNameDisplay.textContent = 'No file chosen';
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

 // Form submission handling
 const applicationForm = document.querySelector('.careers-form');

 if (applicationForm) {
   applicationForm.addEventListener('submit', function(e) {
     // Simple validation
     let isValid = true;
     const requiredFields = this.querySelectorAll('[required]');

     // Reset previous error styles
     requiredFields.forEach(field => {
       field.style.borderColor = '';
     });

     // Validate required fields
     requiredFields.forEach(field => {
       if (!field.value.trim()) {
         field.style.borderColor = '#e74c3c';
         isValid = false;
       }
     });

     // Validate file input separately
     const resumeInput = document.getElementById('resume');
     if (resumeInput && resumeInput.required && !resumeInput.files.length) {
       resumeInput.style.borderColor = '#e74c3c';
       isValid = false;
     }

     if (!isValid) {
       e.preventDefault();
       alert('Please fill out all required fields.');
       return;
     }

     // If validation passes, allow Formspree to handle the submission
     // You can add a loading indicator here if you want
     const submitButton = this.querySelector('button[type="submit"]');
     if (submitButton) {
       submitButton.disabled = true;
       submitButton.innerHTML = 'Submitting... <i class="fas fa-spinner fa-spin"></i>';
     }
   });

   // Handle form submission success/failure (Formspree will handle this)
   applicationForm.addEventListener('formspree:success', function() {
     alert('Thank you for your application! We will review your information and get back to you soon.');
     this.reset();
     document.querySelector('.file-name').textContent = 'No file chosen';

     const submitButton = this.querySelector('button[type="submit"]');
     if (submitButton) {
       submitButton.disabled = false;
       submitButton.innerHTML = 'Submit CV <i class="fas fa-paper-plane"></i>';
     }
   });

   applicationForm.addEventListener('formspree:error', function() {
     alert('There was an error submitting your application. Please try again.');

     const submitButton = this.querySelector('button[type="submit"]');
     if (submitButton) {
       submitButton.disabled = false;
       submitButton.innerHTML = 'Submit CV <i class="fas fa-paper-plane"></i>';
     }
   });
 }

 // File upload display
 const fileInput = document.getElementById('resume');
 if (fileInput) {
   fileInput.addEventListener('change', function() {
     const fileNameDisplay = document.querySelector('.file-name');
     if (this.files.length > 0) {
       fileNameDisplay.textContent = this.files[0].name;
     } else {
       fileNameDisplay.textContent = 'No file chosen';
     }
   });
 }
});