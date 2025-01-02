import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact">
    <h1>Contact Us</h1>
    <form>
      <label>Name:</label>
      <input type="text" placeholder="Your Name" />

      <label>Email:</label>
      <input type="email" placeholder="Your Email" />

      <label>Contact:</label>
      <input type="tel" placeholder="Your Contact Number" />

      <label>Address:</label>
      <input type="text" placeholder="Your Address" />

      <label>Message:</label>
      <textarea placeholder="Your Message"></textarea>

      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Contact;
