import "./Services.css"; //importerar stilmall
import { useEffect } from "react"; //hämtar useEffect-hooken
import { mainTransition } from "../animations/ServiceAnimation"; //importerar animationer

const Services = () => {
  //använder useEffect-hooken för animationerna:
  useEffect(() => {
    mainTransition();
  });
  return (
    <main>
      <article className="content-container">
        <section className="service-content">
          <h1 className="heading">
            Nedan listar vi våra tjänster - Vad vi kan (och vill!) göra för dig
          </h1>
        </section>
        <section className="service-content">
          <div className="service-info">
            <h1>Hårklippning</h1>
            <p>Frisering 30 min...........350 kr</p>
            <p>Frisering 50 min...........550 kr</p>
            <p>Frisering deluxe...........750 kr</p>
            <p>Rakning med rakkniv........300 kr</p>
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1587909209111-5097ee578ec3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="store-pic"
            />
          </div>
        </section>
        <section className="service-content">
          <div className="service-info">
            <h1>Skäggbehandlingar</h1>
            <p>Beardstyling........................................350 kr</p>
            <p>Beardtrimming.......................................550 kr</p>
            <p>Rakning av ansikte med kroksabel och eldkastare.....1200 kr</p>
          </div>
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1587909209111-5097ee578ec3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="store-pic"
            />
          </div>
        </section>
      </article>
    </main>
  );
};

export default Services;
