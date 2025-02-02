import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCogs, FaCalendarCheck, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './NavbarH.css';

function NavbarH() {
  return (
    <header>
      <div className="main_container">
        <ul>
          <li className="info-item">
            <a href="tel:+916203395765" title="Call us">
              <FaPhoneAlt /> 0612-3167062, +916203395765
            </a>
          </li>
          <li className="info-item">
            <a href="mailto:sales@indianainfotech.in" title="Send an email">
              <FaEnvelope /> sales@indianainfotech.in
            </a>
          </li>
          <li className="info-item">
            <FaMapMarkerAlt /> Dev Rajia Bhawan, 1st Floor, 101, Kankarbagh, Patna, India
          </li>
          <li className="info-item">
            <FaCogs /> Support and Service
          </li>
          <li className="info-item">
            <FaCalendarCheck /> Schedule demo now
          </li>
          <li className="info-item">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavbarH;
