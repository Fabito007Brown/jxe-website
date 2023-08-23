import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import herobackground from "../assets/heroback.svg";
import Visits from "../components/Visits";
import Trips from "../components/Trips";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={herobackground}
        title="Jóvenes X El Espino"
        text="Ayúdanos en nuestra misión"
        buttonText="¡Dona ya!"
        url="https://www.instagram.com/jovenesxelespino/"
        btnClass="show"
      />
      <Visits />
      <Trips />

      <Footer />
    </>
  );
}

export default Home;
