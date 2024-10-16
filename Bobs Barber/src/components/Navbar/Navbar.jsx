import { useState, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // använder state för att spåra om Navigering är öppen eller stängd
  const menuBtnRef = useRef(null); // Ref för meny-knappen
  const navRef = useRef(null); // Ref nav-elementet

  const handleMenuClick = () => {
    if (!isNavOpen) {
      // Animation när naven öppnas:
      gsap.fromTo(
        navRef.current,
        {
          opacity: 0,
          x: "-500%",
        },
        {
          opacity: 1,
          x: "0%",
          duration: 1,
          ease: "power1.out",
          onComplete: () => setIsNavOpen(true), // sätt flaggan till true när animationen är klar
        }
      );
      gsap.to(menuBtnRef.current, {
        rotation: 360,
        borderRadius: "50%",
        duration: 0.5,
        backgroundColor: "#a4364a",
      });
    } else {
      // Animation för att stänga Nav:en
      gsap.fromTo(
        navRef.current,
        {
          opacity: 1,
          x: "0%",
        },
        {
          opacity: 0,
          x: "-500%",
          duration: 1,
          ease: "power1.out",
          onComplete: () => setIsNavOpen(false), // Sätt flaggan till False när animationen är klar
        }
      );
      gsap.to(menuBtnRef.current, {
        rotation: -360,
        borderRadius: "0%",
        duration: 0.8,
        backgroundColor: "rgb(76, 154, 128)",
      });
    }
  };

  return (
    <header>
      <h1 className="site-name">Bobs Barbershop</h1>
      <div className="nav-container">
        <nav ref={navRef}>
          <ul className="nav-menu">
            <li className="link">
              <Link to="/" className="link">
                Bobs Barber
              </Link>
            </li>
            <li className="link">
              <Link to="/About" className="link">
                Om oss
              </Link>
            </li>
            <li className="link">
              <Link to="/Contact" className="link">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
        <div
          ref={menuBtnRef} // Kopplar ihop ref till knappen
          className="menu-btn" // klass-namn för stilmall
          onClick={handleMenuClick} // händelselyssnare för klick
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
