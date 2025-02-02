import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';  // Optional for dropdown arrow
import './NavbarM.css';  // Ensure your CSS handles styling for dropdowns, hover effects, etc.
import logoImage from '../images/Logo.png';  // Adjust the path based on your file structure


function NavbarM() {
  const [dropdown, setDropdown] = useState(null); // State for controlling dropdown visibility

  const toggleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);  // Toggle dropdown visibility
  };

  return (
    <header className="navbar">
     <div className="navbar-logo">
  <img src={logoImage} alt="Company Logo" className="logo" />
</div>

      <nav className="navbar-menu">
        <div className="navbar-item" onMouseEnter={() => toggleDropdown(1)} onMouseLeave={() => toggleDropdown(null)}>
          <a href="#">Home</a>
          {dropdown === 1 && (
            <div className="dropdown">
              <a href="#">Company</a>
              <a href="#">About Us</a>
              <a href="#">Our Best Service</a>
              <a href="#">Portfolio</a>
              <a href="#">Why Choose Us</a>
              <a href="#">Help Blog</a>
              <a href="#">Join With Us</a>
              <a href="#">Become An Agent</a>
            </div>
          )}
        </div>

        <div className="navbar-item" onMouseEnter={() => toggleDropdown(2)} onMouseLeave={() => toggleDropdown(null)}>
          <a href="#">Services <FaChevronDown /></a>
          {dropdown === 2 && (
            <div className="dropdown">
              <a href="#">Website Design and Development</a>
              <a href="#">eCommerce Development</a>
              <a href="#">Mobile App Development</a>
              <a href="#">Classified Website Development</a>
              <a href="#">Web Portal News Paper Development</a>
              <a href="#">Logo and Graphics Design</a>
              <a href="#">Website Maintenance</a>
              <a href="#">Website Template</a>
              <a href="#">Website Hosting</a>
              <a href="#">Email Hosting Service</a>
              <a href="#">Website Registration</a>
            </div>
          )}
        </div>

        <div className="navbar-item" onMouseEnter={() => toggleDropdown(3)} onMouseLeave={() => toggleDropdown(null)}>
          <a href="#">Software <FaChevronDown /></a>
          {dropdown === 3 && (
            <div className="dropdown">
              <a href="#">Software Development Service</a>
              <a href="#">Human Resources Management</a>
              <a href="#">Hospital Management Software</a>
              <a href="#">Garments ERP</a>
              <a href="#">Business ERP Software</a>
              <a href="#">Garments Accessories Manufacturer ERP</a>
              <a href="#">School Management Software</a>
              <a href="#">Production Management Software</a>
              <a href="#">Account & Inventory Management</a>
              <a href="#">Retail POS Software</a>
              <a href="#">Hotel Management Software</a>
              <a href="#">Customer Relationship-CRM</a>
              <a href="#">Payroll Management Software</a>
              <a href="#">Document Management System</a>
            </div>
          )}
        </div>

        <div className="navbar-item" onMouseEnter={() => toggleDropdown(4)} onMouseLeave={() => toggleDropdown(null)}>
          <a href="#">Retail POS <FaChevronDown /></a>
          {dropdown === 4 && (
            <div className="dropdown">
              <a href="#">Retail POS Software</a>
              <a href="#">Retail-Point Of Sales (POS)- EduCare Account</a>
              <a href="#">POS Software & App -EduCare Study</a>
              <a href="#">Restaurant management</a>
              <a href="#">Pharmacy Management Software</a>
              <a href="#">Tiles Sanitary POS Software</a>
              <a href="#">Electronics Shop POS Software</a>
              <a href="#">Footwear POS Software</a>
              <a href="#">Cable TV Billing Software</a>
            </div>
          )}
        </div>

        <div className="navbar-item" onMouseEnter={() => toggleDropdown(5)} onMouseLeave={() => toggleDropdown(null)}>
          <a href="#">Mobile App <FaChevronDown /></a>
          {dropdown === 5 && (
            <div className="dropdown">
              <a href="#">Mobile App Development</a>
              <a href="#">Online Doctor App Development</a>
              <a href="#">Online Learning Platform Development</a>
              <a href="#">EduCare Study -Retail POS App</a>
              <a href="#">HRM Mobile App</a>
              <a href="#">FM Radio</a>
            </div>
          )}
        </div>

        <div className="navbar-item" onMouseEnter={() => toggleDropdown(6)} onMouseLeave={() => toggleDropdown(null)}>
          <a href="#">Digital Marketing <FaChevronDown /></a>
          {dropdown === 6 && (
            <div className="dropdown">
              <a href="#">Email Marketing</a>
              <a href="#">SMS Marketing</a>
              <a href="#">Search Engine Optimization (SEO)</a>
              <a href="#">Social Media Marketing</a>
            </div>
          )}
        </div>

        <div className="navbar-item" onMouseEnter={() => toggleDropdown(7)} onMouseLeave={() => toggleDropdown(null)}>
          <a href="#">Device <FaChevronDown /></a>
          {dropdown === 7 && (
            <div className="dropdown">
              <a href="#">Biometrics Attendance</a>
              <a href="#">POS Device</a>
            </div>
          )}
        </div>

        <div className="navbar-item">
          <a href="#">Contact Us</a>
        </div>
      </nav>
    </header>
  );
}

export default NavbarM;
