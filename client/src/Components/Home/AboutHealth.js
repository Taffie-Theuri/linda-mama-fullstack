import React from "react";
import { FiArrowRight } from "react-icons/fi";
import AboutBackground from "./Assets/about-background.png";
import { Link } from 'react-router-dom';
import AboutBackgroundImage from "./Assets/about-background-image.png";
import HealthyLifestyle from "./Assets/healthy-lifestyle.png";
import './Home.css'

const AboutHealth = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={HealthyLifestyle} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
         A Healthy Lifestyle Is Important during Pregnancy.
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container">
        <Link to="/diet_blogs" className="secondary-button">
        Learn More<FiArrowRight />{" "}
      </Link>

        </div>
      </div>
    </div>
  );
};

export default AboutHealth;
