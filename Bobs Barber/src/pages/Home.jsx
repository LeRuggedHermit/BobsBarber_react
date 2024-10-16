import "./Home.css";
import { useRef } from "react";
import { useEffect } from "react";
import {
  homePageTransitions,
  profileAnimation,
} from "../animations/IndexTransition";
import { Link } from "react-router-dom";
import GoogleMapEmbed from "../components/Map/GoogleMapEmbed";

function Home() {
  const imageRef = useRef(null);
  useEffect(() => {
    homePageTransitions();
    profileAnimation(imageRef.current);
  }, []);

  return (
    <>
      <main>
        <article className="presentation">
          <section className="content-1">
            <div className="push-container">
              <div className="pushes">
                <h1 className="push">
                  <Link to="/Booking">BOKA TID</Link>
                </h1>
                <h1 className="push">
                  <Link to="/Services">SE BEHANDLINGAR</Link>
                </h1>
              </div>
            </div>
            <div className="pb-container">
              <img
                ref={imageRef}
                className="PB"
                src="https://plus.unsplash.com/premium_vector-1718307941071-9505e3ca44ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyfGVufDB8fDB8fHww"
                alt="Bild av frisören"
              />
            </div>
          </section>

          <section className="presenting">
            <h1>Hi friends - Meet Bob!</h1>
            <p>
              Welcome to Bobs Barbershop, where the edge of rebellion meets
              classic cuts. Nestled in the heart of the city, Bobs isnt just a
              place to get a haircut - its a statement. With a vibe that’s
              unapologetically punk and a crew that lives and breathes style,
              we’re here to sharpen your look and your attitude.
            </p>

            <p>
              Whether youre after a slick fade, a razor-sharp undercut, or
              something entirely out of the box, Bobs Barbershop is the spot
              where tradition meets counterculture. Step inside, embrace the
              chaos, and leave with a cut as bold as you are.
            </p>
          </section>
        </article>
        <article className="images">
          <section className="text"></section>
          <section className="image-box-container">
            <img
              src="https://images.unsplash.com/photo-1621645582931-d1d3e6564943?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="store-pic"
            />
            <img
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="store-pic"
            />
            <img
              src="https://images.unsplash.com/photo-1587909209111-5097ee578ec3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="store-pic"
            />
            <img
              src="https://images.unsplash.com/photo-1592231752639-4a7ffcbc1505?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
              alt=""
              className="store-pic"
            />
          </section>
        </article>
        <div className="final-container">
          <div className="final-push">
            <h1>
              Boka din tid <Link to="/Booking">Idag</Link>
            </h1>
          </div>
        </div>
      </main>

      <div className="map-container">
        <GoogleMapEmbed />
      </div>
    </>
  );
}

export default Home;
