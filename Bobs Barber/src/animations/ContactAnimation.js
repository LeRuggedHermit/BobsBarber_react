import { gsap } from "gsap"; //importerar gsap

//funktion för animationer på sidan:
export const contactTransition = () => {
  //lägger berörda element i variabler:
  const textElements = gsap.utils.toArray(".contact-text");
  const mainElement = document.querySelector("main");

  //gör main-elementet synligt:
  gsap.to(mainElement, {
    visibility: "visible",
    opacity: 1,
  });

  //om vi har text-element på sidan...
  if (textElements.length > 0) {
    // animerar vi dem!
    gsap.fromTo(
      textElements,
      { x: "-500%", opacity: 0 },
      {
        duration: 1.5,
        x: "0%",
        opacity: 1,
        ease: "power1.out",
        stagger: 0.5,

        onComplete: () => {
          //console.log("Text animation completed."); // kan användas för att debugga animation:
        },
      }
    );
  }
};
