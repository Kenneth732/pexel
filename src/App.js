import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import './App.css'
import Logo from './logo3.png';
import Masonry from 'masonry-layout';
import Log from './Assets/logs.jpg'

const backgroundImages = [
  'url(https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  'url(https://images.pexels.com/photos/2618992/pexels-photo-2618992.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)',
  'url(https://images.pexels.com/photos/6108997/pexels-photo-6108997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  'url(https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=300)',
  'url(https://images.pexels.com/photos/713072/pexels-photo-713072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  'url(https://images.pexels.com/photos/3521983/pexels-photo-3521983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  'url(https://images.pexels.com/photos/1553961/pexels-photo-1553961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  'url(https://images.pexels.com/photos/14918484/pexels-photo-14918484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  'url(https://images.pexels.com/photos/17822808/pexels-photo-17822808/free-photo-of-couple-by-jeep-renegade-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  'url(https://images.pexels.com/photos/10253369/pexels-photo-10253369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  'url(https://images.pexels.com/photos/8365170/pexels-photo-8365170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  'url(https://images.pexels.com/photos/13125247/pexels-photo-13125247.jpeg?cs=srgb&dl=pexels-ulises-pe%C3%B1a-13125247.jpg&fm=jpg&w=3860&h=3860)',
  'url(https://images.pexels.com/photos/13474831/pexels-photo-13474831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  'url(https://images.pexels.com/photos/609768/pexels-photo-609768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  'url(https://images.pexels.com/photos/4112290/pexels-photo-4112290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  'url(https://images.pexels.com/photos/3784453/pexels-photo-3784453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  'url(https://images.pexels.com/photos/3782159/pexels-photo-3782159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  'url(https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  'url(https://images.pexels.com/photos/17171384/pexels-photo-17171384/free-photo-of-woman-in-black-clothing-leaning-on-handrail.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
  'url(https://images.pexels.com/photos/18783141/pexels-photo-18783141/free-photo-of-view-of-two-polar-bears.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
];

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = 'uDsaNoiARkVeopRASv9XPIXAT9zPDZ4OPP4Hf6UypKcwoHfRlOaJJ08G';
  const gridRef = useRef(null);
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    if (gridRef.current) {
      new Masonry(gridRef.current, {
        itemSelector: '.card',
        columnWidth: '.grid-sizer',
        gutter: 16, // Adjust spacing between cards
      });
    }
  }, []);

  const fetchData = useCallback(() => {
    if (searchInput) {
      axios
        .get(`https://api.pexels.com/v1/search?query=${searchInput}&per_page=10`, {
          headers: {
            Authorization: apiKey,
          },
        })
        .then((response) => {
          setSearchResults(response.data.photos);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [searchInput, apiKey]);

  console.log(searchResults.name)

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };


  const [bgImageIndex, setBgImageIndex] = useState(0);

  const changeBackgroundImage = () => {
    setBgImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  useEffect(() => {
    const interval = setInterval(changeBackgroundImage, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const headerStyle = {
    backgroundImage: backgroundImages[bgImageIndex],
  };


  return (
    <div>

      <header className="header" style={headerStyle} >
        <nav className='nav-menu'>
          <img src={Log} alt="logo" className='logo' />
          <ul >
            <li><a href=""><span className='space'>Explore</span> <i class="fas fa-chevron-circle-down"></i></a></li>
            <li><a href="">Licence</a></li>
            <li><a href="">bell</a></li>
            <li><a href=""> <span className='space'> <i class="fas fa-user-circle"></i> </span> <i class="fas fa-chevron-circle-down"></i></a></li>
            <a href="" className='btn-upload'>Upload</a>
          </ul>
        </nav>

        <div className='phone_media_size'>
          <nav className='nav-menu_phone'>
          <img src={Log} className='mobile_logo' />
            <div className="menu" onClick={toggleMenu}>
              <i className={`fas fa-bars ${menuActive ? 'active' : ''}`}></i>
            </div>
            <ul className={menuActive ? 'active' : ''}>
            </ul>
          </nav>
        </div>

        <div className="content">
          <h1>The best free stock photos, royalty free <br /> images & videos shared by creators.</h1>
          <form onSubmit={handleFormSubmit} className='form'>
            {/* <select className='select_photo_video'>
              <option className='options' value="sunny"><span><i class="fas fa-images"></i></span> Photo</option>
              <option className='options' value="rainy"><span><i class="fas fa-film-alt"></i></span> Video</option>
            </select> */}
            <input
              type="text"
              placeholder="Search for free photos ..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="search_btn" type="submit"><i class="fas fa-search"></i></button>
          </form>
        </div>
      </header>
      <div className="container">
        <div className="image-gallery">
          {searchResults.map((photo) => (
            <div className="card" key={photo.id}>
              <img src={photo.src.medium} alt={photo.photographer} />
              <div className='details'>
                <div className='phtographer'>
                  <a href={photo.url}>
                    <i class="fas fa-camera"></i>
                  </a>
                  <span>{photo.photographer}</span>
                </div>
                <button download='download' href={photo.src.original} className='btn_download'><i class="fas fa-download"></i></button>
              </div>
            </div>
          ))}

        </div>
      </div>
      <section class="footer">
        <div class="footer-row">
          <div class="footer-col">
            <h4>Info</h4>
            <ul class="links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Compressions</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Collection</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Explore</h4>
            <ul class="links">
              <li><a href="#">Free Designs</a></li>
              <li><a href="#">Latest Designs</a></li>
              <li><a href="#">Themes</a></li>
              <li><a href="#">Popular Designs</a></li>
              <li><a href="#">Art Skills</a></li>
              <li><a href="#">New Uploads</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Legal</h4>
            <ul class="links">
              <li><a href="#">Customer Agreement</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">GDPR</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Media Kit</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Newsletter</h4>
            <p>
              Subscribe to our newsletter for a weekly dose
              of news, updates, helpful tips, and
              exclusive offers.
            </p>
            <form action="#">
              <input type="text" placeholder="Your email" required />
              <button type="submit">SUBSCRIBE</button>
            </form>
            <div className="icons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
