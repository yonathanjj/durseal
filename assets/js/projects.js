document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project");
  let currentProject = 0;

  // Activate the first project
  projects[currentProject].classList.add("active");

  // Scroll event to switch between projects
  window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
      // Scroll down
      if (currentProject < projects.length - 1) {
        projects[currentProject].classList.remove("active");
        currentProject++;
        projects[currentProject].classList.add("active");
      }
    } else if (event.deltaY < 0) {
      // Scroll up
      if (currentProject > 0) {
        projects[currentProject].classList.remove("active");
        currentProject--;
        projects[currentProject].classList.add("active");
      }
    }
  });

  // GSAP ScrollTrigger for smooth transitions
  gsap.registerPlugin(ScrollTrigger);

  projects.forEach((project, index) => {
    ScrollTrigger.create({
      trigger: project,
      start: "top top",
      end: "bottom bottom",
      onEnter: () => {
        projects.forEach((p) => p.classList.remove("active"));
        project.classList.add("active");
      },
      onLeaveBack: () => {
        projects.forEach((p) => p.classList.remove("active"));
        if (index > 0) {
          projects[index - 1].classList.add("active");
        }
      },
    });
  });
});