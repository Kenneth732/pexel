import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './App.css'
import Logo from './logo3.png'

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = 'uDsaNoiARkVeopRASv9XPIXAT9zPDZ4OPP4Hf6UypKcwoHfRlOaJJ08G';

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

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>

      <header className="header">
        <nav>
          <img src={Logo} alt="logo" className='logo' />
          <ul >
            <li><a href=""><span className='space'>Explore</span> <i class="fas fa-chevron-circle-down"></i></a></li>
            <li><a href="">Licence</a></li>
            <li><a href="">bell</a></li>
            <li><a href=""> <span className='space'> <i class="fas fa-user-circle"></i> </span> <i class="fas fa-chevron-circle-down"></i></a></li>
            <a href="" className='btn-upload'>Upload</a>
            {/* <i className='small' class="fas fa-times-circle menu-close"></i> */}
          </ul>
        </nav>
      </header>

      <header>
        <div className="content">
          <h1>The best free stock photos shared by creators.</h1>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Search for free photos"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </header>
      <div className="container">
        <div className="image-gallery">
          {searchResults.map((photo) => (
            <div className="card" key={photo.id}>
              <img src={photo.src.medium} alt={photo.photographer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
