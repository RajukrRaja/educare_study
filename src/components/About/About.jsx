import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2 className="about-heading">About Us</h2>
        <p className="about-subtext">
          EduCare Study is the Best for your Business Solution!
        </p>
      </div>

      <div className="about-section">
        <div className="about-image-container">
          <img
            src="https://www.alleywatch.com/wp-content/uploads/2020/02/shallow-focus-photo-of-people-discussing-3182826.jpg"
            alt="Company Culture"
            className="about-image"
          />
        </div>
        <div className="about-content">
          <h3 className="about-title">
            Best Software Development Company in India
          </h3>
          <p className="about-text">
            Indiana Infotech Pvt. Ltd. is a Software, Website, eCommerce, and
            Mobile Application Development service provider company in India.
            Not just a software company, but we have gained the faith of
            customers and positioned ourselves as one of the best software
            development companies in India since 2014.
          </p>
        </div>
      </div>

      <div className="about-section reverse">
        <div className="about-content">
          <h3 className="about-title">Our Mission: 100% Client Satisfaction</h3>
          <p className="about-text">
            We aim to provide fully interactive and cost-effective solutions by
            establishing a bridge between the latest EduCare Technologies. Our
            mission is 100% client satisfaction by delivering creative and
            reliable solutions according to our client's needs.
          </p>
        </div>
        <div className="about-image-container">
          <img
            src="https://www.samglobaluniversity.ac.in/wp-content/uploads/2024/02/our-mission-1170x700-min.jpg"
            alt="Mission"
            className="about-image"
          />
        </div>
      </div>

      <div className="about-section">
        <div className="about-image-container">
          <img
            src="https://online.flipbuilder.com/wxzy/gzvx/shot.png"
            alt="Our Story"
            className="about-image"
          />
        </div>
        <div className="about-content">
          <h3 className="about-title">Our Story</h3>
          <p className="about-text">
            We have an excellent team of experts who are highly skilled in
            software architects and software engineers, ensuring solid growth
            in the web solution market. We focus on versatile project
            management, intending to provide Software, Web, 3D & other
            solutions with global acceptability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
