// GSAP Animations for Main Section
gsap.from(".contact-section h1", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power2.out",
  delay: 0.5,
});

gsap.from(".contact-info", {
  duration: 1,
  x: -50,
  opacity: 0,
  ease: "power2.out",
  delay: 1,
});

gsap.from(".contact-form", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power2.out",
  delay: 1.5,
});

gsap.from(".form-group", {
  duration: 0.5,
  y: 20,
  opacity: 0,
  stagger: 0.2,
  delay: 2,
});