// Function to load navbar
function loadNavbar() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('body').insertAdjacentHTML('afterbegin', data);
      initializeNavbar();
    })
    .catch(error => console.error('Error loading navbar:', error));
}

// Function to load footer
function loadFooter() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('body').insertAdjacentHTML('beforeend', data);
    })
    .catch(error => console.error('Error loading footer:', error));
}

// Initialize navbar functionality
function initializeNavbar() {
  console.log('Initializing navbar...');

  // Elements
  const hamburger = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');

  // Check if elements exist
  if (!hamburger || !mobileNav) {
    console.error('Navbar elements not found! Retrying in 100ms...');
    setTimeout(initializeNavbar, 100);
    return;
  }

  let isMenuOpen = false;

  // ===== TOGGLE MENU FUNCTION =====
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      // Open menu
      mobileNav.classList.remove('closing');
      mobileNav.classList.add('active');
      hamburger.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      // Close menu
      mobileNav.classList.remove('active');
      mobileNav.classList.add('closing');
      hamburger.classList.remove('active');
      document.body.style.overflow = 'auto';

      // Close all dropdowns when closing menu
      closeAllDropdowns();

      setTimeout(() => {
        mobileNav.classList.remove('closing');
      }, 400);
    }
  }

  // ===== DROPDOWN FUNCTIONS =====
  function closeAllDropdowns() {
    document.querySelectorAll('.mobile-dropdown-menu').forEach(menu => {
      menu.classList.remove('active');
    });
    document.querySelectorAll('.dropdown-icon').forEach(icon => {
      icon.classList.remove('active');
    });
  }

  function toggleDropdown(trigger) {
    const menu = trigger.nextElementSibling;
    const icon = trigger.querySelector('.dropdown-icon');
    const isOpening = !menu.classList.contains('active');

    // Close all other dropdowns if opening this one
    if (isOpening) {
      closeAllDropdowns();
    }

    // Toggle current dropdown
    menu.classList.toggle('active');
    icon.classList.toggle('active');
  }

  // ===== EVENT LISTENERS =====
  // Hamburger click
  hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Mobile dropdown toggles - using event delegation
  document.addEventListener('click', function(e) {
    // Check if click is on a dropdown toggle
    const dropdownToggle = e.target.closest('.dropdown-toggle');
    if (dropdownToggle && window.innerWidth <= 992) {
      e.preventDefault();
      e.stopPropagation();
      toggleDropdown(dropdownToggle);
      return;
    }

    // Close menu when clicking outside
    if (isMenuOpen &&
        !mobileNav.contains(e.target) &&
        !hamburger.contains(e.target)) {
      toggleMenu();
    }
  });

  // Close menu when clicking mobile links (except dropdown toggles)
  mobileNav.addEventListener('click', function(e) {
    if (e.target.closest('a') && !e.target.closest('.dropdown-toggle')) {
      toggleMenu();
    }
  });

  // Desktop dropdown behavior
  const desktopDropdown = document.querySelector('.dropdown');
  const desktopDropdownMenu = document.querySelector('.dropdown-menu');

  if (desktopDropdown && desktopDropdownMenu) {
    desktopDropdown.addEventListener('mouseenter', function() {
      if (window.innerWidth > 992) {
        desktopDropdownMenu.style.display = 'block';
      }
    });

    desktopDropdown.addEventListener('mouseleave', function() {
      if (window.innerWidth > 992) {
        desktopDropdownMenu.style.display = 'none';
      }
    });
  }

  // ===== ACTIVE PAGE HIGHLIGHTING =====
  function setActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const currentParams = window.location.search;

    // Highlight regular links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      const linkHref = link.getAttribute('href');
      if (linkHref) {
        const linkPage = linkHref.split('?')[0].split('/').pop();
        if (currentPage === linkPage && !link.classList.contains('dropdown-toggle')) {
          link.classList.add('active');
        }
      }
    });

    // Highlight dropdown items
    document.querySelectorAll('.dropdown-menu a, .mobile-dropdown-menu a').forEach(link => {
      const linkUrl = link.getAttribute('href');
      if (linkUrl === currentPage + currentParams) {
        link.classList.add('active');
      }
    });
  }
  setActivePage();

  // ===== WINDOW RESIZE HANDLER =====
  window.addEventListener('resize', function() {
    // Close mobile menu if resizing to desktop
    if (window.innerWidth > 992 && isMenuOpen) {
      toggleMenu();
    }

    // Reset desktop dropdown on resize
    if (window.innerWidth > 992 && desktopDropdownMenu) {
      desktopDropdownMenu.style.display = 'none';
    }
  });

  console.log('Navbar initialized successfully');
}

// Load navbar and footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  loadNavbar();
  loadFooter();
});

// Fallback initialization for dynamically loaded content
document.addEventListener('DOMContentLoaded', function() {
  // Try initializing immediately
  initializeNavbar();

  // Set up a mutation observer to detect when navbar is added
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (!document.getElementById('hamburger-btn')) {
        return;
      }
      initializeNavbar();
      observer.disconnect();
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});