import "./About.css"; // Importerar stilmall
import { AboutTransition, moveSlider } from "../animations/AboutTransition"; // Importerar animation

import { useEffect } from "react"; // Importerar useEffect-hooken

const About = () => {
  //använder useEffect för att köra animationerna:
  useEffect(() => {
    AboutTransition();
    moveSlider();
  }, []);
  return (
    <>
      <main>
        <article className="about-content-container">
          <section className="about-content">
            <h1>Wanna know Bob?</h1>
            <p>
              Bob isn’t your average barber—he’s the punk rock soul behind Bob’s
              Barbershop. With a straight razor in one hand and a bass guitar in
              the other, Bob is the guy who’s been cutting through the noise
              since day one. Born and bred in the underground scene, Bob’s got a
              sharp eye for style and an even sharper edge when it comes to his
              craft.
            </p>

            <p>
              Back in the day, Bob was the guy you’d find backstage, giving
              bands their signature looks before they hit the stage. What
              started as a favor for a few friends turned into a passion, and
              soon enough, Bob traded in mosh pits for barber chairs. But the
              vibe stayed the same—raw, unapologetic, and always authentic.{" "}
            </p>

            <p>
              Bob’s been doing this for years, but every cut still feels like a
              new canvas. He’s got a knack for knowing what works for you, even
              if you don’t. From the perfectly imperfect to the downright
              daring, Bob’s got you covered. He’s not just cutting hair—he’s
              crafting identities, one punk at a time. So, if you want to know
              Bob, just sit in his chair.
            </p>

            <p>
              He’s a man of few words, but his scissors do all the talking. And
              trust us, you’re going to like what they have to say.
            </p>
          </section>
          <section className="about-content">
            <h1>...and this is his barbershop</h1>

            <p>
              Bob isn’t your average barber—he’s the punk rock soul behind Bob’s
              Barbershop. With a straight razor in one hand and a bass guitar in
              the other, Bob is the guy who’s been cutting through the noise
              since day one. Born and bred in the underground scene, Bob’s got a
              sharp eye for style and an even sharper edge when it comes to his
              craft.
            </p>

            <p>
              Back in the day, Bob was the guy you’d find backstage, giving
              bands their signature looks before they hit the stage. What
              started as a favor for a few friends turned into a passion, and
              soon enough, Bob traded in mosh pits for barber chairs. But the
              vibe stayed the same—raw, unapologetic, and always authentic.{" "}
            </p>

            <p>
              Bob’s been doing this for years, but every cut still feels like a
              new canvas. He’s got a knack for knowing what works for you, even
              if you don’t. From the perfectly imperfect to the downright
              daring, Bob’s got you covered. He’s not just cutting hair—he’s
              crafting identities, one punk at a time.{" "}
            </p>

            <p>
              So, if you want to know Bob, just sit in his chair. He’s a man of
              few words, but his scissors do all the talking. And trust us,
              you’re going to like what they have to say.
            </p>
          </section>
        </article>
        <article className="slider-container">
          <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
            <img
              src="https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
              alt=""
              className="image"
              draggable="false"
            />
            <img
              src="https://images.unsplash.com/photo-1533245270348-821d4d5c7514?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
              alt=""
              className="image"
              draggable="false"
            />
            <img
              src="https://images.unsplash.com/photo-1672642149550-d4f7255ccbcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
              alt=""
              className="image"
              draggable="false"
            />
            <img
              src="https://images.unsplash.com/photo-1569832947682-77c9164611df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
              alt=""
              className="image"
              draggable="false"
            />
            <img
              src="https://images.unsplash.com/photo-1711639838283-e3e878d1b7c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJhcmJlcnNob3B8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="image"
              draggable="false"
            />
            <img
              src="https://images.unsplash.com/photo-1546665291-dbef6ab58991?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGJhcmJlcnNob3B8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="image"
              draggable="false"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1658506711778-d56cdeae1b9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGJhcmJlcnNob3B8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="image"
              draggable="false"
            />
            <img
              src="https://images.unsplash.com/photo-1598524374668-5d565a3c42e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGJhcmJlcnNob3B8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="image"
              draggable="false"
            />
          </div>
        </article>
      </main>
    </>
  );
};

export default About;
