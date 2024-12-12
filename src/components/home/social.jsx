import React from 'react';
import './social.css'; // Import the CSS file

const Social = () => {
  return (
    <div className="home_social">
      <div className="icon_wrapper">
        <a
          href="https://github.com/Manimohan05"
          className="home_social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-github-alt"></i>
        </a>
      </div>
      <div className="icon_wrapper">
        <a
          href="https://www.linkedin.com/in/tmanimohan"
          className="home_social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-linkedin-alt"></i>
        </a>
      </div>
      <div className="icon_wrapper">
        <a
          href="mailto:manimohan517@gmail.com"
          className="home_social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-envelope-check"></i>
        </a>
      </div>
      <div className="icon_wrapper">
        <a
          href="https://www.instagram.com/manimohan_04/"
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
