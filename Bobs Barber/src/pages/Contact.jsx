import "./Contact.css"; //importerar stilmall
import { contactTransition } from "../animations/ContactAnimation"; //importerar animationer
import { useEffect } from "react"; //använder useEffet-hooken

const Contact = () => {
  //använder useEffect för animationer
  useEffect(() => {
    contactTransition();
  }, []);
  return (
    <>
      <main>
        <article className="contact-info-container">
          <section className="contact-info">
            <h3 className="contact-text">Open:</h3>

            <p className="contact-text">mån-fre: 10:00 - 19:00</p>
            <p className="contact-text">lör: 11:00 - 17:00</p>
            <p className="contact-text">sön: 11:00 - 15:00</p>

            <h3 className="contact-text">Var finns vi?</h3>
            <p className="contact-text">adress: glaciärgatan 2</p>

            <h3 className="contact-text">Snacka med oss:</h3>
            <p className="contact-text">telefon: 070-000 000 01</p>
            <p className="contact-text">email: notAMail@notmail.se</p>
          </section>
        </article>
      </main>
    </>
  );
};

export default Contact;
