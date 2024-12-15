import React from 'react';
import './social.css'; // Import the CSS file

const Social = () => {
  return (
    <div className="home_social">
      <div className="icon_wrapper">
        <a
          href="https://github.com/Priya-Sivalingam"
          className="home_social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-github-alt"></i>
        </a>
      </div>
      <div className="icon_wrapper">
        <a
          href="www.linkedin.com/in/priyatharsinis"
          className="home_social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-linkedin-alt"></i>
        </a>
      </div>
      <div className="icon_wrapper">
        <a
          href="mailto:priyatharsinisivalingamintern@gmail.com"
          className="home_social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-envelope-check"></i>
        </a>
      </div>
      <div className="icon_wrapper">
        <a
          href="https://www.instagram.com/priyatharsini_06/"
          className="home_social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;
