import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../../Assets/logo3-removebg-preview.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setMenuOpen(false); // Close the menu if the screen size is larger than 700px
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <img src={Logo} alt="logo" className='logo' />
            <i
              className={`fas ${menuOpen ? 'fa-times-circle' : 'fa-bars'} menu-icon`}
              onClick={toggleMenu}
            ></i>
            <ul className={menuOpen ? 'open' : ''}>
              <li><a href=""><span className='space'>Explore</span> <i className="fas fa-chevron-circle-down"></i></a></li>
              <li><a href="">License</a></li>
              <li><a href="">Bell</a></li>
              <li>
                <a href="">
                  <span className='space'><i className="fas fa-user"></i></span>
                  <i className="fas fa-chevron-circle-down"></i>
                </a>
              </li>
              <a href="" className='btn-upload'>Upload</a>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
