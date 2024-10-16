import gsap from "gsap";

export const mainTransition = () => {
  const mainContent = document.querySelector("main");

  mainContent.style.visibility = "visible";

  gsap.to(mainContent, {
    opacity: 1,
    duration: 0.5,
  });
};
