// GSAP Animations for Hero Section
gsap.from('.hero-content h1', {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: 'power2.out',
  delay: 0.5,
});

gsap.from('.hero-content p', {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: 'power2.out',
  delay: 1,
});

gsap.from('.cta-button', {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: 'power2.out',
  delay: 1.5,
});

// GSAP Animations for Our Story Section
gsap.from('.story-content h2', {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.our-story-section',
    start: 'top 80%',
  },
});

gsap.from('.story-content p', {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.our-story-section',
    start: 'top 80%',
  },
});

gsap.from('.mission h3', {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.mission',
    start: 'top 80%',
  },
});

gsap.from('.mission p', {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.mission',
    start: 'top 80%',
  },
});

gsap.from('.value-card', {
  duration: 0.5,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.values',
    start: 'top 80%',
  },
});




gsap.registerPlugin(ScrollTrigger);

// What We Do Section
gsap.from(".what-we-do .text-block", {
  scrollTrigger: {
    trigger: ".what-we-do",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
});


// Our Team Section
gsap.from(".our-team .team-card", {
  scrollTrigger: {
    trigger: ".our-team",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
});

gsap.from(".partners-clients .logo-item", {
  scrollTrigger: {
    trigger: ".partners-clients",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
});

gsap.from(".partners-clients .achievement-text", {
  scrollTrigger: {
    trigger: ".partners-clients",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
});

// CTA Section
gsap.from(".cta", {
  scrollTrigger: {
    trigger: ".cta",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
});