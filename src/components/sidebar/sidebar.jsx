import React, { useState, useEffect, useRef } from "react";
import {
  FaChevronDown, FaTimes, FaSearch, FaUser, FaCog,
  FaSignOutAlt, FaBell, FaSun, FaMoon, FaHome
} from "react-icons/fa";
import "./sidebar.css"; // Ensure your CSS is correctly linked

const Sidebar = ({ isOpen, onClose }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [theme, setTheme] = useState("light");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const [isDragging, setIsDragging] = useState(false);
  const sidebarRef = useRef(null);

  const menuItems = [
    { title: "Home", subItems: ["Company", "About Us", "Our Best Service"] },
    { title: "Services", subItems: ["Website Design", "Mobile App Development"] },
    { title: "Software", subItems: ["ERP Software", "HRM Software"] },
    { title: "Retail POS", subItems: ["Retail POS Software", "Restaurant POS"] },
    { title: "Mobile App", subItems: ["Doctor App", "Education App"] },
    { title: "Digital Marketing", subItems: ["SEO", "Social Media Marketing"] },
    { title: "Device", subItems: ["Biometric Attendance", "POS Device"] },
    { title: "Contact Us" },
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        onClose();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const startResize = (e) => {
    setIsDragging(true);
    document.addEventListener("mousemove", resizeSidebar);
    document.addEventListener("mouseup", stopResize);
  };

  const resizeSidebar = (e) => {
    if (isDragging) {
      setSidebarWidth(Math.max(200, Math.min(500, e.clientX)));
    }
  };

  const stopResize = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", resizeSidebar);
    document.removeEventListener("mouseup", stopResize);
  };

  return (
    <div className={`sidebar-backdrop ${isOpen ? "show" : ""}`} onClick={onClose}>
      <div
        className={`sidebar-container ${isOpen ? "open" : "closed"}`}
        style={{ width: sidebarWidth }}
        ref={sidebarRef}
        onClick={(e) => e.stopPropagation()} // Prevent click-through to backdrop
      >
        <div className="sidebar-resizer" onMouseDown={startResize}></div>

        <div className="sidebar-header">
          <div className="sidebar-user">
            <FaUser className="user-icon" />
            <span>John Doe</span>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close Sidebar">
            <FaTimes />
          </button>
        </div>

        <div className="sidebar-search">
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li key={index} className={`sidebar-item ${activeDropdown === index ? "active" : ""}`}>
              <a
                href="#"
                onClick={(e) => {
                  if (item.subItems) {
                    e.preventDefault();
                    setActiveDropdown(activeDropdown === index ? null : index);
                  }
                }}
              >
                {item.icon && <span className="sidebar-icon">{item.icon}</span>}
                {item.title} {item.subItems && <FaChevronDown />}
              </a>

              {item.subItems && (
                <ul className={`sidebar-dropdown ${activeDropdown === index ? "open" : ""}`}>
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href="#">{subItem}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />} Toggle Theme
          </button>
          <button className="logout-btn">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
