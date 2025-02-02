import React from 'react';
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaShoppingCart, 
  FaGlobe 
} from 'react-icons/fa';
import './Service.css';

const services = [
  {
    icon: <FaLaptopCode />, 
    title: 'Software Development',
    subtitle: 'Customize Software Development India',
    description: `We are EduCare Study, one of the best software development companies in India. We build amazing solutions for mobile, web, & windows. Expertise includes Hotel ERP, HRM, Accounting, Payroll, and more.`,
    link: '/software-development',
  },
  {
    icon: <FaMobileAlt />, 
    title: 'Mobile App Development',
    subtitle: 'Promote Your Business With Mobile Apps',
    description: `We offer professional android app development services with expertise in Java, J2ME, J2EE, Ajax, PHP, Ruby on Rails, and .NET.`,
    link: '/mobile-app-development',
  },
  {
    icon: <FaShoppingCart />, 
    title: 'e-Commerce Development',
    subtitle: 'Trusted e-Commerce Developer in India',
    description: `Develop highly customized eCommerce stores with user-friendly CMS and help boost your online shop revenue efficiently.`,
    link: '/ecommerce-development',
  },
  {
    icon: <FaGlobe />, 
    title: 'Website Development',
    subtitle: 'Best Website Development in India',
    description: `Create dynamic responsive websites, e-commerce stores, and other web applications with easy-to-use admin panels and SEO-friendly scripts.`,
    link: '/website-development',
  },
];

const Service = () => {
  return (
    <div className="service-container">
      <header>
        <h1>Our Core Services</h1>
        <p>Explore Our Range of Expertise for Your Business Needs</p>
      </header>

      {/* Infinite Scroll Carousel */}
      <div className="service-carousel">
        <div className="service-track">
          {[...services, ...services].map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <h4>{service.subtitle}</h4>
              <p>{service.description}</p>
              <a href={service.link} className="learn-more">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Service;
