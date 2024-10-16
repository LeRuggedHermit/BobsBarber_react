import { gsap } from "gsap"; //importerar gsap
import { ScrollTrigger } from "gsap/ScrollTrigger"; //importerar scrolltrigger från gsap
gsap.registerPlugin(ScrollTrigger); //registrerar scrolltrigger plugin:en

//funktion för animationer på startsidan:
export const homePageTransitions = () => {
  const mainContent = document.querySelector("main");

  // Innan animationen börjar återställs main-elementets synlighet:
  mainContent.style.visibility = "visible";

  //samma som ovan fast för genomskinlighet. gjord som en animation i vilken innehållet "fasas in" under 0.5 sekunder.
  gsap.to(mainContent, {
    opacity: 1,
    duration: 0.5,
  });

  let pushes = document.getElementsByClassName("push");

  //animationer för "puffarna" ("se tjänster" och "boka tid"):
  //de ska animera in från sidan och vara osynliga vid start och sedan glida in:
  gsap.fromTo(
    pushes,
    {
      x: "-500%",
      opacity: 0,
    },
    {
      duration: 2,
      opacity: 1,
      x: "0%",
      ease: "power1.out",
      stagger: 0.5,
    }
  );

  let presentation = document.querySelector(".presenting");

  //Här används scrolltrigger för att skapa en animation vilken startar när användaren scrollar till en viss position på skärmen.
  gsap.fromTo(
    presentation,
    {
      x: "-500%",
      opacity: 0,
    },
    {
      duration: 0.7,
      x: "0%",
      opacity: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: presentation, // Det här är elementet som triggar animationen.
        start: "top 80%", // Animationen startar när elementet når 80% av viewportens höjd
        end: "top 30%", // Animationen slutar när elementet når 30% av viewportens höjd
        scrub: false, // koppla inte animations-förloppet till scroll
        markers: false, //  Denna kan sättas till "true" för debugging
      },
    }
  );
};

//animation för profilbilden på startsidan: bild används tillsammans med ref-hooken i jsx-filen och skickas som parameter.
export const profileAnimation = (imageElement) => {
  if (!imageElement) return; // först ser vi om det finns en giltig profilbild

  // finns en sådan lägger vi den i den här variabeln:
  const image = imageElement;

  //här bestämmer vi bildens ursprungsläge:
  gsap.set(image, {
    borderTopRightRadius: "1% 50%",
    borderTopLeftRadius: "51% 9% ",
    borderBottomRightRadius: "49% 49%",
    borderBottomLeftRadius: "51% 61%",
  });

  // skapar en tidslinje:
  const tl = gsap.timeline({
    repeat: -1, // vi ska loopa animationen
    yoyo: true, // reversera animationen på repeat:
    repeatDelay: 0, // adderar en fördröjning mellan repetitioner
  });

  // lägger till animering till tidslinjen:
  tl.to(image, {
    duration: 3,
    borderTopRightRadius: "68% 32%", // Skapar en "morfande" effekt genom border-radius:
    borderTopLeftRadius: " 44% 76%",
    borderBottomRightRadius: "74% 53%",
    borderBottomLeftRadius: "47% 26% ",
    ease: "power1.inOut", // Lägger till "easing" för att göra animationen mer smooth.
  }).to(image, {
    duration: 3,

    borderTopRightRadius: "30% 90%",
    borderTopLeftRadius: "42% 78%",
    borderBottomRightRadius: "54% 75%",
    borderBottomLeftRadius: "25% 76%",
    ease: "power1.inOut",
  });

  //Animation för att föra in bilden i bild då sidan laddas:
  gsap.fromTo(
    image,
    {
      //vid start befinner den sig på -1500% procent (dvs utanför skärmen)
      //den är dessutom genomskinlig (osynlig)
      x: "-1500%",
      opacity: 0,
    },
    {
      //under 1.2 sekunder kommer den animeras in till sin tilltänkta plats och göras synlig.
      duration: 1.2,
      opacity: 1,
      x: "0%",
      ease: "power1.inOut",
    }
  );
};
