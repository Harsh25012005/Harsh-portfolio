import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock project data - in a real app, this would come from an API or state management
  const projects = {
    1: {
      title: 'E-commerce Mobile App',
      client: 'ShopEasy',
      year: '2024',
      duration: '3 months',
      role: 'Lead UI/UX Designer',
      category: 'Mobile Design',
      description: 'Complete redesign of shopping experience with focus on conversion optimization and user engagement. The project involved extensive user research, competitive analysis, and iterative design process.',
      challenge: 'The existing app had a 23% cart abandonment rate and users complained about complex navigation. The goal was to streamline the shopping experience and improve conversion rates.',
      solution: 'Implemented a simplified navigation structure, redesigned the checkout flow, and added personalized product recommendations. Created a design system for consistency across all touchpoints.',
      results: [
        'Reduced cart abandonment by 35%',
        'Increased user engagement by 42%',
        'Improved app store rating from 3.2 to 4.6',
        'Generated 28% increase in mobile revenue'
      ],
      tags: ['Mobile Design', 'UX Research', 'Prototyping', 'User Testing'],
      tools: ['Figma', 'Principle', 'Maze', 'Hotjar'],
      images: [
        { id: 1, alt: 'Home screen design' },
        { id: 2, alt: 'Product listing page' },
        { id: 3, alt: 'Checkout flow' },
        { id: 4, alt: 'User profile section' }
      ]
    },
    2: {
      title: 'SaaS Dashboard',
      client: 'DataFlow',
      year: '2024',
      duration: '4 months',
      role: 'Senior UI/UX Designer',
      category: 'Web Design',
      description: 'Data visualization dashboard for analytics platform with complex user workflows and real-time data processing capabilities.',
      challenge: 'Users were overwhelmed by the amount of data and couldn\'t find actionable insights quickly. The existing interface was cluttered and lacked proper information hierarchy.',
      solution: 'Designed a modular dashboard system with customizable widgets, implemented progressive disclosure principles, and created clear data visualization patterns.',
      results: [
        'Reduced time to insight by 60%',
        'Increased user retention by 45%',
        'Improved task completion rate by 38%',
        'Decreased support tickets by 52%'
      ],
      tags: ['Web Design', 'Data Visualization', 'UI Design', 'Dashboard'],
      tools: ['Figma', 'Framer', 'D3.js', 'Amplitude'],
      images: [
        { id: 1, alt: 'Dashboard overview' },
        { id: 2, alt: 'Analytics widgets' },
        { id: 3, alt: 'Data visualization' },
        { id: 4, alt: 'Settings panel' }
      ]
    },
    3: {
      title: 'Banking Mobile App',
      client: 'SecureBank',
      year: '2023',
      duration: '5 months',
      role: 'UI/UX Designer',
      category: 'Mobile Design',
      description: 'Secure and intuitive banking application focusing on accessibility and financial management with enhanced security features.',
      challenge: 'Users found the existing banking app confusing and lacked trust in digital transactions. Security concerns were high among older demographics.',
      solution: 'Created a clean, accessible interface with clear visual hierarchy, implemented biometric authentication, and added educational tooltips for complex financial terms.',
      results: [
        'Increased digital adoption by 55%',
        'Reduced customer service calls by 40%',
        'Improved accessibility score to AAA standard',
        'Enhanced user trust rating by 65%'
      ],
      tags: ['Mobile Design', 'Fintech', 'Accessibility', 'Security'],
      tools: ['Figma', 'Sketch', 'InVision', 'UserTesting'],
      images: [
        { id: 1, alt: 'Login and security' },
        { id: 2, alt: 'Account overview' },
        { id: 3, alt: 'Transfer money flow' },
        { id: 4, alt: 'Transaction history' }
      ]
    }
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/work" className="btn btn-primary">Back to Work</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="container">
        {/* Back Navigation */}
        <nav className="project-nav">
          <Link to="/work" className="back-link">
            ← Back to Work
          </Link>
        </nav>

        {/* Project Header */}
        <header className="project-header">
          <div className="project-meta">
            <span className="project-category">{project.category}</span>
            <span className="project-year">{project.year}</span>
          </div>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>
          
          <div className="project-info-grid">
            <div className="info-item">
              <h4>Client</h4>
              <p>{project.client}</p>
            </div>
            <div className="info-item">
              <h4>Duration</h4>
              <p>{project.duration}</p>
            </div>
            <div className="info-item">
              <h4>Role</h4>
              <p>{project.role}</p>
            </div>
            <div className="info-item">
              <h4>Tools</h4>
              <p>{project.tools.join(', ')}</p>
            </div>
          </div>
        </header>

        {/* Project Images */}
        <section className="project-images">
          <div className="images-grid">
            {project.images.map(image => (
              <div key={image.id} className="project-image">
                <div className="image-placeholder">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="var(--primary-color)" strokeWidth="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5" fill="var(--primary-color)"/>
                    <path d="M21 15L16 10L5 21" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p>{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Content */}
        <section className="project-content">
          <div className="content-grid">
            <div className="content-section">
              <h3>The Challenge</h3>
              <p>{project.challenge}</p>
            </div>
            
            <div className="content-section">
              <h3>The Solution</h3>
              <p>{project.solution}</p>
            </div>
            
            <div className="content-section">
              <h3>Results & Impact</h3>
              <ul className="results-list">
                {project.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Project Tags */}
        <section className="project-tags-section">
          <h4>Skills & Technologies</h4>
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </section>

        {/* Next Project */}
        <section className="next-project">
          <div className="next-project-content">
            <h3>Want to see more work?</h3>
            <p>Check out my other projects or get in touch to discuss your next project.</p>
            <div className="next-project-actions">
              <Link to="/work" className="btn btn-secondary">View All Work</Link>
              <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
