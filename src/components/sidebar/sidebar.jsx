import React, { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'; // For the sidebar toggle
import './Sidebar.css';  // Create a new CSS file for Sidebar

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className="sidebar-menu">
        <div className="sidebar-item">
          <a href="#">Home</a>
        </div>
        <div className="sidebar-item">
          <a href="#">Services</a>
        </div>
        <div className="sidebar-item">
          <a href="#">Software</a>
        </div>
        <div className="sidebar-item">
          <a href="#">Retail POS</a>
        </div>
        <div className="sidebar-item">
          <a href="#">Mobile App</a>
        </div>
        <div className="sidebar-item">
          <a href="#">Digital Marketing</a>
        </div>
        <div className="sidebar-item">
          <a href="#">Device</a>
        </div>
        <div className="sidebar-item">
          <a href="#">Contact Us</a>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
