import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import servibackground from "../assets/serviback.png";
import Footer from "../components/Footer";
import Visits from "../components/VisitsDonorsV";
import ImageGrid from "../components/ImageGrid";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={servibackground}
        title="Nuestro Servicio"
        btnClass="hide"
      />

      <Visits />

      <ImageGrid />

      <Footer />
    </>
  );
}

export default Service;
