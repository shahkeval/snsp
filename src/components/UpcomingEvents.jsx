import React from 'react';
import './Events.css';

const UpcomingEvents = () => {
  const upcomingEvents = [
    { id: 1, title: 'ShatrunjayGiri – Seva (2025)', date: '16th Jan, 25', description: 'Only for males. A divine pathway from Siddhachal to Siddhashila.', image: 'palitana.png' },
      ];

  return (
    <div className="events">
      <h1>Upcoming Events</h1>
      <div className="event-list">
        {upcomingEvents.map(event => (
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

export default UpcomingEvents;
