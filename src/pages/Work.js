import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Work.css';

const Work = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Mobile App',
      category: 'mobile',
      description: 'Complete redesign of shopping experience with focus on conversion optimization and user engagement.',
      tags: ['Mobile Design', 'UX Research', 'Prototyping'],
      year: '2024',
      client: 'ShopEasy'
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      category: 'web',
      description: 'Data visualization dashboard for analytics platform with complex user workflows and real-time data.',
      tags: ['Web Design', 'Data Visualization', 'UI Design'],
      year: '2024',
      client: 'DataFlow'
    },
    {
      id: 3,
      title: 'Banking Mobile App',
      category: 'mobile',
      description: 'Secure and intuitive banking application focusing on accessibility and financial management.',
      tags: ['Mobile Design', 'Fintech', 'Accessibility'],
      year: '2023',
      client: 'SecureBank'
    },
    {
      id: 4,
      title: 'Healthcare Platform',
      category: 'web',
      description: 'Patient management system with telemedicine capabilities and appointment scheduling.',
      tags: ['Web Design', 'Healthcare', 'UX Research'],
      year: '2023',
      client: 'MediCare'
    },
    {
      id: 5,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'Location-based food ordering app with real-time tracking and personalized recommendations.',
      tags: ['Mobile Design', 'Location Services', 'Personalization'],
      year: '2023',
      client: 'QuickEats'
    },
    {
      id: 6,
      title: 'Learning Management System',
      category: 'web',
      description: 'Educational platform for online courses with interactive content and progress tracking.',
      tags: ['Web Design', 'Education', 'Interactive Design'],
      year: '2022',
      client: 'EduTech'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'web', label: 'Web Design' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="work">
      <div className="container">
        {/* Header */}
        <section className="work-header">
          <h1>My Work</h1>
          <p>A collection of projects that showcase my design process and problem-solving approach.</p>
        </section>

        {/* Filter */}
        <section className="work-filter">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.key}
                className={`filter-btn ${filter === category.key ? 'active' : ''}`}
                onClick={() => setFilter(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="projects-grid">
          {filteredProjects.map(project => (
            <Link 
              key={project.id}
              to={`/project/${project.id}`}
              className="project-card card"
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="var(--primary-color)" strokeWidth="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5" fill="var(--primary-color)"/>
                    <path d="M21 15L16 10L5 21" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="project-overlay">
                  <span className="view-project">View Project</span>
                </div>
              </div>
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className="project-client">{project.client}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Call to Action */}
        <section className="work-cta">
          <div className="cta-content">
            <h3>Interested in working together?</h3>
            <p>I'm always open to discussing new opportunities and exciting projects.</p>
            <Link to="/contact" className="btn btn-primary">
              Let's Talk
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;
