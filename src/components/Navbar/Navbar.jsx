

import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Logo from '../../Assets/logo3-removebg-preview.png'

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
                    <nav className={menuOpen ? 'open' : ''}>
                        <img src={Logo} alt="logo" className='logo' />
                        <ul className={menuOpen ? 'open' : ''}>
                            <li><a href=""><span className='space'>Explore</span> <i class="fas fa-chevron-circle-down"></i></a></li>
                            <li><a href="">Licence</a></li>
                            <li><a href="">bell</a></li>
                            <li><a href=""> <span className='space'><i class="fas fa-user"></i></span> <i class="fas fa-chevron-circle-down"></i></a></li>
                            <a href="" className='btn-upload'>Upload</a>
                            {/* <i className='small' class="fas fa-times-circle menu-close"></i> */}
                        </ul>
                        <i
                            className={`fas ${menuOpen ? 'fa-times-circle' : 'fa-bars'} menu-icon`}
                            onClick={toggleMenu}
                        ></i>
                    </nav>
                </div>

                <div className="content">
                <form>
                    <select id="weather">
                        <option value="photo"><span><i class="fas fa-image"></i></span>Photo</option>
                        <option value="video"><span><i class="fas fa-file-video"></i></span>Video</option>
                    </select>
                    <input type="text" placeholder='Search for free photos' />
                    <i class="fas fa-search"></i>
                </form>
                </div>
            </header>
        </div>
    )
}

export default Navbar





