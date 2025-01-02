import React from 'react';
import './Events.css';

const PastEvents = () => {
  const pastEvents = [
    { id: 1, title: 'Winter Blanket Distribution', date: '20th Dec, 2024', description: 'Distributed blankets to the needy during the winter season.', image: 'palitana.png' },
    { id: 2, title: 'Tree Plantation', date: '5th Nov, 2024', description: 'Planted trees to promote a greener environment.', image: 'girnar.png' },
  ];

  return (
    <div className="events">
      <h1>Past Events</h1>
      <div className="event-list">
        {pastEvents.map(event => (
          <div key={event.id} className="event-item">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastEvents;
