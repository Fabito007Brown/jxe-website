import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import infobackground from "../assets/historia.jpg";
import Footer from "../components/Footer";
import HistoryMV from "../components/HistoryMV";
import ImageGrid from "../components/ImageGrid";

function History() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={infobackground}
        title="Nuestra Historia"
        btnClass="hide"
      />

      <HistoryMV />
      <Footer />
    </>
  );
}

export default History;
