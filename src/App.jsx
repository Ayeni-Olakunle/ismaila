import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Index from "./components/information/index";
import Navigate from "./components/navigation/navigate";
import LandingPage from "./components/content/landingPage";
import Service from "./components/content/service";
import Education from "./components/content/education";
import Portfolios from "./components/content/portfolios";
import Contact from "./components/content/contact";

function App() {
  return (
    <>
      <div className="app">
        <div className="info">
          <Index />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<Service />} />
            <Route path="/education" element={<Education />} />
            <Route path="/portfolios" element={<Portfolios />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="navigate">
          <Navigate />
        </div>
      </div>
    </>
  );
}

export default App;
