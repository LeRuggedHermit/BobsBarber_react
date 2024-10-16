import gsap from "gsap";

export const mainTransition = () => {
  const mainContent = document.querySelector("main");

  // Ensure visibility is restored before starting the animation
  mainContent.style.visibility = "visible";

  gsap.to(mainContent, {
    opacity: 1,
    duration: 0.5,
  });
};
