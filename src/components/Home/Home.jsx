import React from 'react';

function Home({ searchResults }) {
    // console.lo(searchResults);
  return (
    <div>
      {searchResults.map((photo) => (
        <img key={photo.id} src={photo.src.medium} alt={photo.photographer} />
      ))}
    </div>
  );
}

export default Home;
