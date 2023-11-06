import React, { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';

function ImageGallery({ images }) {
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      new Masonry(gridRef.current, {
        itemSelector: '.card',
        columnWidth: '.grid-sizer',
        gutter: 16, // Adjust spacing between cards
      });
    }
  }, [images]);

  return (
    <div ref={gridRef} className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="card">
          <img src={image.src} alt={image.photographer} />
        </div>
      ))}
      <div className="grid-sizer"></div>
    </div>
  );
}

export default ImageGallery;
