import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Foot";
import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Booking" element={<Booking />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="Services" element={<Services />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
