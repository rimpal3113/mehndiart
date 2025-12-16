import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallary from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar always visible */}
        <Navbar />

        {/* Page Content */}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="about" element={<About/>} />
             <Route path="services" element={<Services/>} />
              <Route path="Gallery" element={<Gallary/>} />
               <Route path="contact" element={<Contact/>} />
            
          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
