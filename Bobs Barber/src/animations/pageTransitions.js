import gsap from "gsap";

export const pageTransition = () => {
  document.querySelectorAll(".nav-menu .link ").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      const targetUrl = this.getAttribute("href"); // Get the URL of the target page
      const mainContent = document.querySelector("main"); // Select the main content area
      console.log(targetUrl);

      // Fade out the current content
      gsap.to(mainContent, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          // Once the fade-out is complete, navigate to the new page
          window.location.href = targetUrl;
        },
      });
    });
  });
};
