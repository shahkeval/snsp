import React from 'react';
import './Media.css';

const Media = () => {
  const images = [
    { id: 1, src: 'palitana.png', alt: 'Shatrunjay – Saat Jatra 2025' },
    { id: 2, src: 'girnar.png', alt: 'Girnar Tirth Seva' },
    { id: 3, src: 'ayambil.png', alt: 'Vardhman Tap Payo 2024-25' },
    { id: 4, src: 'logo.jpg', alt: 'Winter Blanket Distribution' },
    { id: 5, src: 'logo2.jpg', alt: 'Tree Plantation' },
    { id: 6, src: 'palitana.png', alt: 'SNSP Logo' },
    { id: 7, src: 'girnar.png', alt: 'Welcome Banner' },
    { id: 8, src: 'ayambil.png', alt: 'Palitana Temple' },
  ];

  return (
    <div className="media">
      <h1>Gallery</h1>
      <div className="masonry">
        {images.map(image => (
          <div key={image.id} className="masonry-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
