import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/harsh',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M16 8C18.21 8 20.21 8.84 21.66 10.34C23.11 11.84 24 13.91 24 16V21H19V16C19 15.47 18.79 14.96 18.41 14.59C18.04 14.21 17.53 14 17 14C16.47 14 15.96 14.21 15.59 14.59C15.21 14.96 15 15.47 15 16V21H10V16C10 13.91 10.89 11.84 12.34 10.34C13.79 8.84 15.79 8 18 8H16ZM5 9H0V21H5V9ZM2.5 6C3.33 6 4 5.33 4 4.5S3.33 3 2.5 3 1 3.67 1 4.5 1.67 6 2.5 6Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/harsh',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M8.56 2.75C4.37 6.03 2.02 11.23 2.56 16.44M21.44 16.44C20.98 11.23 18.63 6.03 14.44 2.75M7.5 21.44C9.19 16.06 11.84 11.25 16.5 8.44M16.5 21.44C14.81 16.06 12.16 11.25 7.5 8.44" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'Behance',
      url: 'https://behance.net/harsh',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M7 8C8.1 8 9 7.1 9 6S8.1 4 7 4 5 4.9 5 6 5.9 8 7 8ZM5 10V18H9V10H5ZM11 10V18H15V14C15 12.9 15.9 12 17 12S19 12.9 19 14V18H23V13.5C23 10.5 20.5 8 17.5 8S12 10.5 12 13.5V10H11Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/harsh',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.284C14.0247 3.61083 13.2884 4.19445 12.773 4.95371C12.2575 5.71297 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39624C5.36074 6.60667 4.01032 5.43666 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/harsh',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 19C4 20.5 4 16.5 2 16M22 16V19C22 20.1046 21.1046 21 20 21H16C14.8954 21 14 20.1046 14 19V16.5C14 15.5 14.5 15 15 15H21C21.5 15 22 15.5 22 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const services = [
    'UI/UX Design',
    'Web Design',
    'Mobile App Design',
    'Design Systems',
    'User Research',
    'Prototyping'
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-text">Harsh</span>
            </Link>
            <p className="footer-description">
              Creating meaningful digital experiences through thoughtful design. 
              Let's work together to bring your ideas to life.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="footer-link">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="footer-contact">
              <a href="mailto:harsh@example.com" className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                harsh@example.com
              </a>
              <a href="tel:+15551234567" className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.08C4.68 -1 5.16 -0.52 5.16 0.08C5.16 2.08 5.56 4.04 6.32 5.84C6.44 6.12 6.36 6.44 6.12 6.68L4.24 8.56C6.28 12.36 9.64 15.72 13.44 17.76L15.32 15.88C15.56 15.64 15.88 15.56 16.16 15.68C17.96 16.44 19.92 16.84 21.92 16.84C22.52 16.84 23 17.32 23 17.92V20.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                +1 (555) 123-4567
              </a>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.03 7.03 1 12 1S21 5.03 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Harsh. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <span className="footer-link">Privacy Policy</span>
              <span className="footer-link">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
