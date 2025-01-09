import React, { useState } from 'react';
import './Media.css';

const Media = () => {
  const categories = {
    "7 Yatra 2024": [
      { id: 1, src: 'kosalbhai/DSC_5146.jpg', alt: 'Shatrunjay – Saat Jatra 2025' },
      { id: 8, src: 'palitana.png', alt: 'Palitana Temple' },
    ],
    "Tiffin Vitran": [
      { id: 2, src: 'girnar.png', alt: 'Girnar Tirth Seva' },
      { id: 5, src: 'logo2.jpg', alt: 'Tree Plantation' },
    ],
    Demo: [
      { id: 3, src: 'ayambil.png', alt: 'Vardhman Tap Payo 2024-25' },
      { id: 4, src: 'logo.jpg', alt: 'Winter Blanket Distribution' },
      { id: 7, src: 'girnar.png', alt: 'Welcome Banner' },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setModalImageIndex(null);
  };

  const handleImageClick = (index) => {
    setModalImageIndex(index);
  };

  const closeModal = () => {
    setModalImageIndex(null);
  };

  const showNextImage = () => {
    if (selectedCategory && modalImageIndex !== null) {
      setModalImageIndex((prevIndex) =>
        (prevIndex + 1) % categories[selectedCategory].length
      );
    }
  };

  const showPreviousImage = () => {
    if (selectedCategory && modalImageIndex !== null) {
      setModalImageIndex((prevIndex) =>
        (prevIndex - 1 + categories[selectedCategory].length) %
        categories[selectedCategory].length
      );
    }
  };

  const currentImage =
    selectedCategory !== null && modalImageIndex !== null
      ? categories[selectedCategory][modalImageIndex]
      : null;

  return (
    <div className="media">
      <h1>Gallery</h1>
      <div className="categories">
        {Object.entries(categories).map(([category, images]) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            style={{ backgroundImage: `url(${images[0].src})` }}
          >
            <span className="category-label">{category}</span>
          </button>
        ))}
      </div>

      <div className="gallery">
        {selectedCategory &&
          categories[selectedCategory].map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => handleImageClick(index)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
      </div>

      {currentImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage.src} alt={currentImage.alt} />
            <p>{currentImage.alt}</p>
            <div className="modal-buttons">
              <button onClick={showPreviousImage}>Previous</button>
              <button onClick={closeModal}>Back to Zoom Out</button>
              <button onClick={showNextImage}>Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
