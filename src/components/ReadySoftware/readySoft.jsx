import React, { useState, useEffect } from 'react';
import { 
  FaUser, 
  FaShoppingBag, 
  FaHospital, 
  FaCashRegister 
} from 'react-icons/fa';
import './readySoft.css';

const softwareSolutions = [
  {
    icon: <FaUser />,
    title: 'HRM Payroll Management',
    description: 'Streamline HR processes, manage payroll, track attendance, and simplify employee data with our comprehensive HRM solution.',
    link: '/hrm',
    details: `Our HRM Payroll Management software simplifies HR tasks and empowers your team. From managing employee data and automating payroll to tracking attendance and handling leave requests, our comprehensive solution streamlines your HR operations. Key features include performance appraisals, recruitment and onboarding modules, and detailed reporting.`,
  },
  {
    icon: <FaShoppingBag />,
    title: 'Garments ERP',
    description: 'Boost efficiency and optimize your garment manufacturing with features for merchandising, production, inventory, and CRM.',
    link: '/garments-erp',
    details: `Our Garments ERP software streamlines garment manufacturing. From merchandising and production planning to inventory management and CRM, our comprehensive solution integrates all key functions.`,
  },
  {
    icon: <FaHospital />,
    title: 'Hospital Management',
    description: 'Enhance patient care and streamline operations with modules for patient registration, consultations, billing, and more.',
    link: '/hospital-management',
    details: `Our Hospital Management software empowers healthcare providers to deliver exceptional patient care. From patient registration to electronic health records, our comprehensive solution covers all aspects of hospital management.`,
  },
  {
    icon: <FaCashRegister />,
    title: 'Retail POS',
    description: 'Simplify sales, manage inventory, and analyze performance with our intuitive Retail POS software.',
    link: '/retail-pos',
    details: `Our Retail POS software simplifies sales, manages inventory, and helps you understand your customers better. Process transactions quickly and analyze sales data for better decisions.`,
  },
  // Duplicated items for seamless scrolling
  {
    icon: <FaCashRegister />,
    title: 'Retail POS 2',
    description: 'Manage inventory and analyze performance with intuitive Retail POS software.',
    link: '/retail-pos-2',
    details: `Retail POS 2 helps you simplify sales and analyze performance efficiently.`,
  },
  {
    icon: <FaCashRegister />,
    title: 'Retail POS 3',
    description: 'Track sales and manage customers better with intuitive tools.',
    link: '/retail-pos-3',
    details: `Retail POS 3 offers better control over sales and customer insights.`,
  }
];

const ReadySoft = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const handleCardClick = (solution) => {
    setSelectedSolution(solution);
  };

  const handleCloseDetails = () => {
    setSelectedSolution(null);
  };

  return (
    <div className="readysoft-container">
      <header>
        <h1>OUR READY SOFTWARES</h1>
        <p>Your One-Stop Solution for Business Software Needs</p>
      </header>

      {/* Infinite Carousel */}
      <div className="carousel-container">
        <div className="carousel-track">
          {[...softwareSolutions, ...softwareSolutions].map((solution, index) => (
            <div
              key={index}
              className="carousel-slide"
              onClick={() => handleCardClick(solution)}
            >
              <div className="icon-wrapper">{solution.icon}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <a href={solution.link} className="learn-more">Learn More</a>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Details */}
      {selectedSolution && (
        <div className="details-modal">
          <div className="details-content">
            <span className="close-details" onClick={handleCloseDetails}>&times;</span>
            <h2>{selectedSolution.title}</h2>
            <p>{selectedSolution.details}</p>
          </div>
        </div>
      )}

     
    </div>
  );
};

export default ReadySoft;
