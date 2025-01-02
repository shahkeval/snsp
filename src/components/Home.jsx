import React, { useState, useEffect } from "react";
import "./Home.css";
import UpcomingEvents from './UpcomingEvents';

const Home = () => {
  const upcomingEvents = [
    { id: 1, title: 'Charity Run', date: '2025-02-15' },
    { id: 2, title: 'Food Drive', date: '2025-03-10' },
  ];

  const sliderImages = [
    "bapji.jpg",
    "bhadra.jpg",
    "guru.jpg",
    "guru2.jpg", // Replace with your actual image file paths
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [sliderImages.length]);

  return (
    <div className="home">
      <header className="home-header">
        {/* <div className="logo-section">
          <img
            src="logo2.jpg"
            alt="Organization Logo"
            className="logo"
          />
        </div> */}
         <section className="slider-section">
        <img
          src={sliderImages[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="slider-image"
        />
      </section>
        <div className="title-section">
          <h1>નમો નમઃ શાશ્વત પરિવાર</h1>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Chauvihar Chhath kari Giriraj 7 Yatra</li>
            <li>Shetrunjay Nadi Nahi Ne Anusthan</li>
            <li>Giriraj Nau-tunk Pratimaji Ashtprakari Puja</li>
            <li>Palkhi Yatra</li>
            <li>Gurubhagwant Vaivach</li>
            <li>Sashan Prabhavna Karyo</li>
            <li>Sadharmik Bhakti</li>
            <li>& more</li>
          </ul>
        </div>
      </header>

     

      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="event-list">
          {upcomingEvents.map(event => (
            <div key={event.id} className="event-item">
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
            </div>
          ))}
        </div>
        <button className="view-events-btn">View All Events</button>
      </section>
    </div>
  );
};

export default Home;
