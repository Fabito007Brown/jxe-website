import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import infobackground from "../assets/informacionback.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Fundador from "../components/Fundador";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={infobackground}
        title="¿Quiénes Somos?"
        btnClass="hide"
      />
      <AboutUs />
      <Fundador />
      <Footer />
    </>
  );
}

export default About;
