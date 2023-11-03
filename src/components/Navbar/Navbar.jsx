import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '.././'
function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };



  return (
    <div>
      <div>
      <nav className='pc'>
        <img src="https://wavvy-next-obfuscated-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-dark.d32faf19.png&w=360&q=75" className='logo' alt="" />
          {/* <div className="menu" onClick={toggleMenu}>
            <i className={`fas fa-bars ${menuActive ? 'active' : ''}`}></i>
          </div> */}
          {/* <ul className={menuActive ? 'active' : ''}> */}
          <ul>
            <Link to="/" className='li'>
              <a href="">Home</a>
            </Link>

            <Link to="/service" className='li'>
              <a href="">Services</a>
            </Link>

            <Link to="/about" className='li'>
              <a href="">About</a>
            </Link>

            <Link to="/" className='li'>
              <a href="">Work</a>
            </Link>

            <Link to="/" className='li'>
              <a href="">Case student</a>
            </Link>

            <Link to="/" className='li'>
              <a href="" className='btn-form'>Let's talk</a>
            </Link>
          </ul>
        </nav>

        {/* mobile */}
        <nav className='mobile'>
          <img src="https://wavvy-next-obfuscated-preview.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-icon.5363164c.png&w=256&q=75" alt="" className="small_logo" />
          <div className="menu" onClick={toggleMenu}>
            <i className={`fas fa-bars ${menuActive ? 'active' : ''}`}></i>
          </div>
          <ul className={menuActive ? 'active' : ''}>
            <Link to="/" className='li'>
              <a href="">Home</a>
            </Link>

            <Link to="/service" className='li'>
              <a href="">About</a>
            </Link>

            <Link to="/about" className='li'>
              <a href="">Pricing</a>
            </Link>

            <Link to="/" className='li'>
              <a href="">Contact</a>
            </Link>

            <Link to="/" className='li'>
              <a href="">Pages</a>
            </Link>

            <Link to="/" className='li'>
              <a href="" className='btn'>Let's talk</a>
            </Link>
          </ul>
          {/* <div className="menu" onClick={toggleMenu}>
            <i className={`fas fa-bars ${menuActive ? 'active' : ''}`}></i>
          </div> */}
        </nav>
      </div>
    </div>
  )
}

export default Navbar