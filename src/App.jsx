import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Logos from "./Components/Logos";
import Proposal from "./Components/Proposal";
import CaseStudies from "./Components/CaseStudies";
import Working from "./Components/Working";
import Team from "./Components/Team";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Logos />
      <Services />
      <Proposal />
      <CaseStudies />
      <Working />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
