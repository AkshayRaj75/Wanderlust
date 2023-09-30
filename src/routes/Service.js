import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImage from "../assets/ServiceImage.jpg";

import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Service(params) {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImage}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
