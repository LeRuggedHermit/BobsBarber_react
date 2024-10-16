import gsap from "gsap";

export const pageTransition = () => {
  document.querySelectorAll(".nav-menu .link ").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetUrl = this.getAttribute("href");
      const mainContent = document.querySelector("main");
      console.log(targetUrl);

      gsap.to(mainContent, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          window.location.href = targetUrl;
        },
      });
    });
  });
};
