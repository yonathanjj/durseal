document.addEventListener("DOMContentLoaded", function() {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Hero Section Animations
  gsap.from(".hero-content h1", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out",
    delay: 0.5
  });

  gsap.from(".hero-content p", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out",
    delay: 1
  });

  gsap.from(".cta-button", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out",
    delay: 1.5
  });

  // Story Section Animations
  gsap.from(".story-content h2", {
    scrollTrigger: {
      trigger: ".story-content",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 1,
    y: -30,
    opacity: 0,
    ease: "power2.out"
  });

  gsap.from(".story-content p", {
    scrollTrigger: {
      trigger: ".story-content",
      start: "top 70%",
      toggleActions: "play none none none"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power1.out"
  });

  // Mission Section Animations
  gsap.from(".mission h3", {
    scrollTrigger: {
      trigger: ".mission",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 1,
    y: -30,
    opacity: 0,
    ease: "back.out"
  });

  gsap.from(".mission p", {
    scrollTrigger: {
      trigger: ".mission",
      start: "top 70%",
      toggleActions: "play none none none"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power1.out"
  });

  // Values Cards Animation
  gsap.from(".value-card", {
    scrollTrigger: {
      trigger: ".values",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.15,
    ease: "back.out"
  });

  // What We Do Section Animation
  gsap.from(".what-we-do .text-block", {
    scrollTrigger: {
      trigger: ".what-we-do",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out"
  });

  // Partners Section Animations
  gsap.from(".partners-clients h2", {
    scrollTrigger: {
      trigger: ".partners-clients",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 0.8,
    scale: 0.8,
    opacity: 0,
    ease: "power2.out"
  });

  gsap.from(".logo-item", {
    scrollTrigger: {
      trigger: ".logos-grid",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 0.6,
    y: 30,
    opacity: 0,
    stagger: 0.1,
    ease: "back.out"
  });

  // CTA Section Animation
  gsap.from(".about-cta h2", {
    scrollTrigger: {
      trigger: ".about-cta",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 1,
    y: -30,
    opacity: 0,
    ease: "power2.out"
  });

  gsap.from(".about-cta p", {
    scrollTrigger: {
      trigger: ".about-cta",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power2.out"
  });

  gsap.from(".cta-buttons", {
    scrollTrigger: {
      trigger: ".about-cta",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 1,
    scale: 0.9,
    opacity: 0,
    ease: "elastic.out(1, 0.5)"
  });
});