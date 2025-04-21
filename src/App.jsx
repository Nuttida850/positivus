import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Logos from "./Components/Logos";
import Proposal from "./Components/Proposal";
import CaseStudies from "./Components/CaseStudies";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Logos />
      <Services />
      <Proposal />
      <CaseStudies />
    </>
  );
}

export default App;
