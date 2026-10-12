import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Conatct";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import GardenMaintenance from "./pages/GardenMaintenance";
// Pages
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* HEADER */}
      <Navbar />

      {/* FLOATING WHATSAPP */}
      <FloatingWhatsApp />

      {/* PAGE ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route
          path="/maintenance"
          element={<GardenMaintenance />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* INVALID ROUTE */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </Router>
  );
}