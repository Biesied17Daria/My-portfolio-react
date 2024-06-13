import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-navigation">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="contact-info">
        <p>123 Main St, City</p>
        <p>Email: contact@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
    </footer>
  );
}

export default Footer;
