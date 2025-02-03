import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarH from './components/Navbar-head/NavbarH';
import NavbarM from './components/Navbar-Main/NavbarM';
import Slider from './components/slider/slider';
import About from './components/About/About';
import ReadySoft from './components/ReadySoftware/readySoft';
import Service from './components/Service/Service';
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/Footer/Footer';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <NavbarH />
        <NavbarM />
       

        {/* Sidebar Toggle Button */}
        <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(true)}>
      
        </button>

        {/* Sidebar Component */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <Slider />

        {/* Define your routes here */}
        <Routes>
       
          <Route path="/ready-soft" element={<ReadySoft />} />
          <Route path="/services" element={<Service />} />
        </Routes>

         <About/>
        <ReadySoft/>
        <Service/>
 
        <Footer/>

      </div>
    </Router>
  );
}

export default App;
