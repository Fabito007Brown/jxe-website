import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactbackground from "../assets/concatback.jpg";
import Footer from "../components/Footer";
import ContactFormat from "../components/ContactFormat";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={contactbackground}
        title="Contacto"
        btnClass="hide"
      />

      <ContactFormat />

      <Footer />
    </>
  );
}

export default Contact;
