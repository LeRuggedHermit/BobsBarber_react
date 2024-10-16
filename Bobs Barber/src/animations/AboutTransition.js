import { gsap } from "gsap";

export const AboutTransition = () => {
  const textElements = gsap.utils.toArray(".about-content"); // Getting array of elements
  console.log("Text elements found: ", textElements.length);
  const mainElement = document.querySelector("main");

  gsap.to(mainElement, {
    visibility: "visible",
    color: "white",
    opacity: 1,
  });

  // Ensure that we're actually selecting elements for animation
  if (textElements.length === 0) {
    console.error("No text elements found for animation!");
    return;
  }

  gsap.fromTo(
    textElements,
    {
      x: "-100%", // Starting from off-screen
      opacity: 0, // Starting invisible
    },
    {
      duration: 1.5,
      x: "0%", // End position (on-screen)
      opacity: 1, // Fully visible
      ease: "power1.out",
      stagger: 0.5, // Adds delay between elements animating
      onComplete: () => {
        console.log("Text animation completed."); // Verify completion
      },
    }
  );
};

export const moveSlider = () => {
  const track = document.getElementById("image-track");

  if (!track) {
    console.error("Track element not found");
    return;
  }

  window.onmousedown = (e) => {
    console.log("Mouse down at:", e.clientX);
    track.dataset.mouseDownAt = e.clientX;
  };

  window.onmouseup = () => {
    console.log("Mouse up");
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  };

  window.onmousemove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnclamped =
      parseFloat(track.dataset.prevPercentage) + percentage;

    const nextPercentage = Math.max(Math.min(nextPercentageUnclamped, 0), -100);
    track.dataset.percentage = nextPercentage;

    console.log("Slider moved to percentage:", nextPercentage);

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1800, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${nextPercentage + 100}% 50%`,
        },
        { duration: 1800, fill: "forwards" }
      );
    }
  };
};
