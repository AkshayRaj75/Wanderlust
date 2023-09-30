import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/AboutImage.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About(params) {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
