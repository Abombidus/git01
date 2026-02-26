import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import PortFolio from "./components/portfolio/PortFolio";
const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Services />
      <PortFolio />
      <Contact />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
