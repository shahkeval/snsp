import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const upcomingEvents = [
    { id: 1, title: "Charity Run", date: "2025-02-15" },
    { id: 2, title: "Food Drive", date: "2025-03-10" },
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
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % sliderImages.length
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [sliderImages.length]);

  return (
    <div className="container-fluid">
      <div className="row align-items-center mx-0">
        <div className="col-md-4 slider-section">
          <img
            src={sliderImages[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="slider-image img-fluid"
          />
        </div>{" "}
        <div className="col-md-4 title-section">
          <h1>નમો નમઃ શાશ્વત પરિવાર</h1>
        </div>
        <div className="col-md-4 quick-links mx-3 px-5">
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
      </div>
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2>Upcoming Events</h2>
        </div>
        <div className="col-12 event-list text-center mt-3">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-item">
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
            </div>
          ))}
        </div>
        <div className="col-12 text-center">
          <button className="view-events-btn">View All Events</button>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
