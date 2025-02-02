import React from 'react';
import NavbarH from './components/Navbar-head/NavbarH';
import NavbarM from './components/Navbar-Main/NavbarM';
import Slider from './components/slider/slider';
import About from './components/About/About';
import ReadySoft from './components/ReadySoftware/readySoft';
import Service from './components/Service/Service';

function App() {
  return (
    <div className="app-container">
      <NavbarH />
      <NavbarM />
      <Slider />
      <About></About>
      <ReadySoft></ReadySoft>
      <Service></Service>

 
    </div>
  );
}

export default App;
