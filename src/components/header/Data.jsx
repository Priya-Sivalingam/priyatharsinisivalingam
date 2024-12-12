import React from 'react';
import './Data.css'; // Import the CSS file

const Data = () => {
  const name = "Priyatharsini";

  return (
    <div className='home_data'>
        <h3 className='home_subtitle'>Hello, I'm</h3>
        <h1 className='home_title'>
           <span className="hover-effect">
              {name.split("").map((letter, index) => (
                <span key={index} className="letter">{letter}</span>
              ))}
            </span>
            <span className='second'>Sivalingam</span>
        </h1>
        <h3 className='home_subtitle'>Undergraduate | Department of Computer Engineering at University of Jaffna</h3>
        <a href='#contacts' className='btn btn-primary '>Contact me</a>
    </div>
  );
}

export default Data;
