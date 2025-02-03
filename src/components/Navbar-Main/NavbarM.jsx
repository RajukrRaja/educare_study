import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa"; // Removed FaChevronDown
import Sidebar from "../sidebar/sidebar";
import "./NavbarM.css";
import Logo from "../../components/images/Logo.png"; // Import the logo

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const NavbarM = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      if (isNowMobile !== isMobile) {
        setIsMobile(isNowMobile);
        if (!isNowMobile) setIsSidebarOpen(false);
      }
    };

    const debouncedResize = debounce(handleResize, 200);
    window.addEventListener("resize", debouncedResize);

    return () => window.removeEventListener("resize", debouncedResize);
  }, [isMobile]);

  const toggleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
  };

  const menuItems = [
    { title: "Home" },
    { title: "Services", subItems: ["Website Design", "Mobile App Development"] },
    { title: "Software", subItems: ["ERP Software", "HRM Software"] },
    { title: "Retail POS", subItems: ["Retail POS Software", "Restaurant POS"] },
    { title: "Mobile App", subItems: ["Doctor App", "Education App"] },
    { title: "Digital Marketing", subItems: ["SEO", "Social Media Marketing"] },
    { title: "Device", subItems: ["Biometric Attendance", "POS Device"] },
    { title: "Contact Us" },
  ];

  return (
    <div className="navbar-container">
      <header className="navbar">
        <div className="content-container">
          <div className="navbar-logo">
            <a href="/">
              <img 
                src={Logo} 
                alt="Logo" 
                className="logo-image" 
                style={{ height: "40px", width: "auto", marginTop: "0" }} 
              />
            </a>
          </div>

          {/* Sidebar Toggle Button (Only for Mobile) */}
          {isMobile && (
            <button
              className="mobile-menu-toggle"
              aria-label="Open Menu"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FaBars />
            </button>
          )}

          {/* Navbar Menu */}
          <nav className={`navbar-menu ${isMobile ? "mobile-view" : ""}`}>
            {menuItems.map((item, index) => (
              <div className="navbar-item" key={index}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.subItems) toggleDropdown(index);
                  }}
                  aria-expanded={dropdown === index}
                  aria-haspopup={item.subItems ? "true" : "false"}
                >
                  {item.title}
                </a>
                {dropdown === index && item.subItems && (
                  <div className="dropdown">
                    {item.subItems.map((subItem, subIndex) => (
                      <a href="#" key={subIndex}>
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>

      {/* Sidebar Component (Only for Mobile) */}
      {isMobile && (
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} menuItems={menuItems} />
      )}
    </div>
  );
};

export default NavbarM;
