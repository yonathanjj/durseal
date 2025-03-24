// Function to load navbar
function loadNavbar() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('body').insertAdjacentHTML('afterbegin', data);
      initializeNavbar(); // Initialize navbar functionality
    });
}

// Function to load footer
function loadFooter() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('body').insertAdjacentHTML('beforeend', data);
    });
}

// Initialize navbar functionality
function initializeNavbar() {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Dropdown Toggle for Mobile
  const dropdownToggle = document.querySelector('.dropdown > a');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownToggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) { // Only for mobile mode
      e.preventDefault(); // Prevent default link behavior
      dropdownMenu.classList.toggle('active');
    }
  });

  // Close Dropdown When Clicking Outside
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && !e.target.closest('.dropdown')) {
      dropdownMenu.classList.remove('active');
    }
  });

  // Navbar Hide/Show on Scroll
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navbar.style.top = '0';
      return;
    }

    if (currentScroll > lastScroll) {
      // Scrolling down
      navbar.style.top = '-80px';
    } else {
      // Scrolling up
      navbar.style.top = '0';
    }

    lastScroll = currentScroll;
  });

  // Search Bar Functionality
  const searchBar = document.querySelector('.search-bar input');
  const searchButton = document.querySelector('.search-bar button');

  searchButton.addEventListener('click', () => {
    const query = searchBar.value.trim();
    if (query) {
      alert(`Searching for: ${query}`);
      // Add your search functionality here
    }
  });

  // GSAP Animations
  gsap.from('.navbar', { duration: 1, y: -100, opacity: 0, ease: 'power2.out' });
  gsap.from('.nav-links li', { duration: 0.5, x: -50, opacity: 0, stagger: 0.2, delay: 0.5 });
  gsap.from('.search-bar', { duration: 0.5, x: 50, opacity: 0, delay: 1 });
}

// Load navbar and footer
loadNavbar();
loadFooter();