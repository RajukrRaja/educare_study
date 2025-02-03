import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Indiana Infotech Pvt. Ltd.</h3>
          <p className="text-sm leading-6">
            EduCare Study provides Account & Inventory Management Software,
            Hospital Management Software, School Management Software, Human
            Resources Management, Garments ERP, Real Estate ERP, POS Software,
            and Customer Relationship Management (CRM). Our services include
            Website Design & Development, e-Commerce Development, Digital
            Marketing, Mobile App Development, and Customized Software
            Development.
          </p>
        </div>

        {/* Software Development Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Software Development</h3>
          <ul className="text-sm space-y-2">
            <li>✔ Human Resource Management</li>
            <li>✔ Garments ERP</li>
            <li>✔ Hospital Management Software</li>
            <li>✔ School Management Software</li>
            <li>✔ Account Management System</li>
            <li>✔ Hotel Management Software</li>
            <li>✔ Point of Sale Software</li>
          </ul>
        </div>

        {/* Website Development Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Website Development</h3>
          <ul className="text-sm space-y-2">
            <li>✔ Website Development Service</li>
            <li>✔ E-Commerce Website Development</li>
            <li>✔ Mobile App Development</li>
            <li>✔ Classified Website Development</li>
            <li>✔ Hotel Booking Website Development</li>
            <li>✔ Garments Accessories Manufacturer ERP</li>
            <li>✔ Customer Relationship Management</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-blue-600 mt-8 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <p className="text-sm">©2023 Indiana Infotech Pvt. Ltd.</p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li>
              <a href="#" className="text-blue-300 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300 hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300 hover:text-white">
                T&C
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-300 hover:text-white">
                Payment Terms
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-blue-300 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-300 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-blue-300 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-blue-300 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-blue-300 hover:text-white">
              <i className="fab fa-google-play"></i>
            </a>
            <a href="#" className="text-blue-300 hover:text-white">
              <i className="fab fa-app-store"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
