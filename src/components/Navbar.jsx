import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-container">
      <img src="logo.jpg" alt="Non-Profit Logo" className="logo-image" />
    </div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li className="dropdown">
        <Link to="/events" className="dropbtn">Events</Link>
        <div className="dropdown-content">
          <Link to="/upcoming-events">Upcoming Events</Link>
          <Link to="/past-events">Past Events</Link>
        </div>
      </li>
      <li><Link to="/activities">Activities</Link></li>
      <li><Link to="/media">Media</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
