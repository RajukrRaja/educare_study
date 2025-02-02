import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./slider.css";

const slides = [
  {
    url: "https://media.istockphoto.com/id/454912753/photo/erp-and-crm-concepts.jpg?s=612x612&w=0&k=20&c=_tDgT961MwwkX-YjtJwvHGti55OEaqtqAc0fydciF2o=",
    caption: "Software Development",
    description:
      "Leverage our expertise in building robust software solutions tailored to your needs. From enterprise systems to custom applications, we ensure high scalability, performance, and user satisfaction.",
  },
  {
    url: "https://indianainfotech.in/assets/img/slide/mobile-app-development.webp",
    caption: "Mobile App Development",
    description:
      "We create seamless mobile experiences with cutting-edge app development services. Whether it's Android or iOS, our apps are designed to engage users, with intuitive interfaces and powerful features that scale with your business.",
  },
  {
    url: "https://indianainfotech.in/assets/img/slide/website-design-company-in-India.webp",
    caption: "Website Design",
    description:
      "Transform your online presence with our modern and responsive web designs. Our web solutions are crafted with a user-centric approach, offering responsive layouts, easy navigation, and fast loading speeds for a superior experience across all devices.",
  },
  {
    url: "https://indianainfotech.in/assets/img/slide/website-design-company-in-India.webp", // Replace with actual image URL
    caption: "Cloud Computing",
    description:
      "Unlock the potential of cloud computing for your business with secure, scalable, and flexible cloud solutions. From cloud migration to management, we ensure seamless integration and enhance your IT efficiency.",
  },
  {
    url: "https://indianainfotech.in/assets/img/slide/website-design-company-in-India.webp", // Replace with actual image URL
    caption: "Digital Marketing",
    description:
      "Maximize your brand’s reach with our comprehensive digital marketing strategies. We specialize in SEO, social media marketing, email campaigns, and paid advertising, ensuring that your business stands out in the digital space.",
  },
  {
    url: "https://indianainfotech.in/assets/img/slide/website-design-company-in-India.webp", // Replace with actual image URL
    caption: "E-commerce Development",
    description:
      "Build a powerful and scalable e-commerce platform with our end-to-end e-commerce solutions. From secure payment integration to inventory management, we help you launch and grow your online store effectively.",
  },
];

const Slider = ({ autoSlide = true, delay = 3000, transitionSpeed = 500 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Handle autoplay functionality
  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, delay);

    return () => clearInterval(interval);
  }, [autoSlide, delay, slides.length]);

  // Handle next and previous navigation
  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <div ref={sliderRef} className="slider-container">
      {/* Slider Wrapper */}
      <div
        className="slider-wrapper"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: `transform ${transitionSpeed}ms ease-in-out`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            {/* Left Side: Image */}
            <div className="slide-left">
              <img
                src={slide.url}
                alt={`Slide ${index + 1}`}
                className="slide-image"
                loading="lazy"
              />
            </div>

            {/* Right Side: Text */}
            <div className="slide-right">
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
              <button className="view-more-btn">View More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button className="nav-btn left" onClick={handlePrev}>
        <ChevronLeft size={30} />
      </button>
      <button className="nav-btn right" onClick={handleNext}>
        <ChevronRight size={30} />
      </button>

      {/* Progress Bar */}
      <div
        className="progress-bar"
        style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
      ></div>

      {/* Dots Navigation */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
