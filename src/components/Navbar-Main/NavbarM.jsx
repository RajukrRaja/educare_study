import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./NavbarM.css";

const NavbarM = () => {
    const [dropdown, setDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const hamburger = useRef(null);
    const navbarMenu = useRef(null);

    const toggleDropdown = (index) => {
        setDropdown(dropdown === index ? null : index);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navbarMenu.current && navbarMenu.current.contains(event.target)) {
                return; // Click is inside the navbar, do nothing
            }
            if (hamburger.current && hamburger.current.contains(event.target)) {
                return; // Click is inside the hamburger, do nothing
            }
            setDropdown(null); // Close all dropdowns
            setIsMobileMenuOpen(false); // Close mobile menu
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <header className="navbar">
            <div className="hamburger" ref={hamburger} onClick={toggleMobileMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <nav className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`} ref={navbarMenu}>
                {menuItems.map((item, index) => (
                    <div
                        className="navbar-item"
                        key={index}
                        onMouseEnter={() => toggleDropdown(index)}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <a href="#">
                            {item.title} {item.subItems && <FaChevronDown />}
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
        </header>
    );
};

const menuItems = [
    {
        title: "Home",
        subItems: [
            "Company", "About Us", "Our Best Service", "Portfolio", "Why Choose Us",
            "Help Blog", "Join With Us", "Become An Agent"
        ]
    },
    {
        title: "Services",
        subItems: [
            "Website Design and Development", "eCommerce Development", "Mobile App Development", "Classified Website Development",
            "Web Portal News Paper Development", "Logo and Graphics Design", "Website Maintenance", "Website Template",
            "Website Hosting", "Email Hosting Service", "Website Registration"
        ]
    },
    {
        title: "Software",
        subItems: [
            "Software Development Service", "Human Resources Management", "Hospital Management Software", "Garments ERP",
            "Business ERP Software", "Garments Accessories Manufacturer ERP", "School Management Software",
            "Production Management Software", "Account & Inventory Management", "Retail POS Software",
            "Hotel Management Software", "Customer Relationship-CRM", "Payroll Management Software",
            "Document Management System"
        ]
    },
    {
        title: "Retail POS",
        subItems: [
            "Retail POS Software", "Retail-Point Of Sales (POS)- EduCare Account", "POS Software & App -EduCare Study",
            "Restaurant management", "Pharmacy Management Software", "Tiles Sanitary POS Software",
            "Electronics Shop POS Software", "Footwear POS Software", "Cable TV Billing Software"
        ]
    },
    {
        title: "Mobile App",
        subItems: [
            "Mobile App Development", "Online Doctor App Development", "Online Learning Platform Development",
            "EduCare Study -Retail POS App", "HRM Mobile App", "FM Radio"
        ]
    },
    {
        title: "Digital Marketing",
        subItems: [
            "Email Marketing", "SMS Marketing", "Search Engine Optimization (SEO)", "Social Media Marketing"
        ]
    },
    {
        title: "Device",
        subItems: [
            "Biometrics Attendance", "POS Device"
        ]
    },
    {
        title: "Contact Us"
    }
];

export default NavbarM;