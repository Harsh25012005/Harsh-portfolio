import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Harsh</span>
              </h1>
              <h2 className="hero-subtitle">UI/UX Designer</h2>
              <p className="hero-description">
                I create meaningful digital experiences through thoughtful design. 
                Passionate about crafting user-centered solutions that bridge the gap 
                between business goals and user needs.
              </p>
              <div className="hero-actions">
                <Link to="/work" className="btn btn-primary">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-avatar">
                <div className="avatar-placeholder">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="60" fill="var(--primary-color)" opacity="0.1"/>
                    <circle cx="60" cy="45" r="20" fill="var(--primary-color)" opacity="0.3"/>
                    <path d="M20 100c0-22.091 17.909-40 40-40s40 17.909 40 40" fill="var(--primary-color)" opacity="0.3"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills section">
        <div className="container">
          <h3 className="section-title text-center">What I Do</h3>
          <div className="skills-grid">
            <div className="skill-card card">
              <div className="skill-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>UI Design</h4>
              <p>Creating beautiful and intuitive user interfaces that enhance user experience and drive engagement.</p>
            </div>
            <div className="skill-card card">
              <div className="skill-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21V13H7V21" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 13L12 8L17 13" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V3" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>UX Research</h4>
              <p>Understanding user needs through research, testing, and data analysis to inform design decisions.</p>
            </div>
            <div className="skill-card card">
              <div className="skill-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="var(--primary-color)" strokeWidth="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5" fill="var(--primary-color)"/>
                  <path d="M21 15L16 10L5 21" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Prototyping</h4>
              <p>Building interactive prototypes to validate concepts and communicate design ideas effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="featured-work section">
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">Featured Work</h3>
            <Link to="/work" className="view-all-link">View All Projects →</Link>
          </div>
          <div className="work-preview-grid">
            <div className="work-preview-card card">
              <div className="work-preview-image">
                <div className="image-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="var(--primary-color)" strokeWidth="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5" fill="var(--primary-color)"/>
                    <path d="M21 15L16 10L5 21" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="work-preview-content">
                <h4>E-commerce Mobile App</h4>
                <p>Complete redesign of shopping experience with focus on conversion optimization.</p>
                <div className="work-tags">
                  <span className="tag">Mobile Design</span>
                  <span className="tag">UX Research</span>
                </div>
              </div>
            </div>
            <div className="work-preview-card card">
              <div className="work-preview-image">
                <div className="image-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8Z" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14,2 14,8 20,8" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="work-preview-content">
                <h4>SaaS Dashboard</h4>
                <p>Data visualization dashboard for analytics platform with complex user workflows.</p>
                <div className="work-tags">
                  <span className="tag">Web Design</span>
                  <span className="tag">Data Viz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
