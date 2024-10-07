import React from 'react';
import '../assests/style/NameComponent.css'; // Make sure the path is correct
import { Link } from 'react-scroll';

const NameComponent = () => {
  return (
    <div className="name-container">
      <div className="name-label">Happy Booking!!!</div>
      <div className="navigation-list">
      <ol style={{ color: 'white' }}>

          <li>
          <Link 
              to="contact-section" 
              // Use the id of the target section
              style={{ color: 'white' ,textDecoration:'none' }}
              spy={true}
              smooth={true}
              duration={300}
              className="custom-link"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="about-section" 
              // Use the id of the target section
              style={{ color: 'white' ,textDecoration:'none' }}
              spy={true}
              smooth={true}
              duration={300}
              className="custom-link"
            >
              About
            </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default NameComponent;
