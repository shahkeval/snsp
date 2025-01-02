import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <p>Follow us on:</p>
    <div className="social-links">
      <a href="https://www.instagram.com/namonamahshaswatparivar/profilecard/?igsh=MTVpemN5bjViZzNqZw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/namonamhshaswatparivar?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebook />
      </a>
      <a href="http://www.youtube.com/@namonamahShaswatparivar" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <FaYoutube />
      </a>
      <a href="https://chat.whatsapp.com/DxWbMJiuCHuF9Auvy8DAdE" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <FaWhatsapp />
      </a>
    </div>
  </footer>
);

export default Footer;
