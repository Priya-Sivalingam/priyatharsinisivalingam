import React from 'react';
import './index.css'; // Ensure this is imported to apply your styles
import CTA from './CTA';
import ME from '../../assets/WhatsApp.jpg';

const Header = () => {
  return (
    <section id='home' className="h-screen mt-32"> {/* Full height with margin at the top */}
      <header className="container mx-auto flex items-center justify-between h-full"> {/* Flex for layout */}
        <div className="intro text-left flex-1"> {/* Flex-1 to take remaining space */}
          <h5 className="text-light">Hello I'm</h5>
          <h1 className="text-3xl">Priyatharsini Sivalingam</h1>
          <h5 className="role">Computer Engineering Student</h5>
          <CTA />
        </div>
        <div className="me w-80 ml-8"> {/* Fixed width with left margin */}
          <img src={ME} alt='me' className="object-cover h-auto rounded-tl-3xl rounded-tr-3xl" /> {/* Image with rounded corners */}
        </div>
      </header>
    </section>
  );
};

export default Header;
