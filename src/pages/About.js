import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const skills = [
    { name: 'User Research', level: 90 },
    { name: 'UI Design', level: 95 },
    { name: 'Prototyping', level: 88 },
    { name: 'User Testing', level: 85 },
    { name: 'Design Systems', level: 92 },
    { name: 'Interaction Design', level: 87 }
  ];

  const tools = [
    'Figma', 'Sketch', 'Adobe XD', 'Principle', 'Framer', 'InVision',
    'Miro', 'Notion', 'Hotjar', 'Maze', 'Amplitude', 'Zeplin'
  ];

  const experience = [
    {
      company: 'TechCorp',
      role: 'Senior UI/UX Designer',
      period: '2022 - Present',
      description: 'Leading design initiatives for B2B SaaS products, managing design systems, and mentoring junior designers.'
    },
    {
      company: 'StartupXYZ',
      role: 'UI/UX Designer',
      period: '2020 - 2022',
      description: 'Designed mobile and web applications from concept to launch, conducted user research and usability testing.'
    },
    {
      company: 'Design Agency',
      role: 'Junior Designer',
      period: '2019 - 2020',
      description: 'Worked on various client projects, created wireframes, mockups, and interactive prototypes.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Design',
      school: 'Design University',
      period: '2015 - 2019',
      description: 'Specialized in Human-Computer Interaction and Visual Communication Design.'
    }
  ];

  return (
    <div className="about">
      <div className="container">
        {/* Header */}
        <section className="about-header">
          <div className="about-content">
            <div className="about-text">
              <h1>About Me</h1>
              <p className="about-intro">
                I'm a passionate UI/UX designer with over 5 years of experience creating 
                digital experiences that users love. I believe great design should be both 
                beautiful and functional, solving real problems while delighting users.
              </p>
              <p>
                My approach combines user-centered design principles with business objectives 
                to create solutions that drive results. I'm constantly learning and staying 
                up-to-date with the latest design trends and technologies.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>15+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="100" fill="var(--primary-color)" opacity="0.1"/>
                  <circle cx="100" cy="75" r="30" fill="var(--primary-color)" opacity="0.3"/>
                  <path d="M40 160c0-33.137 26.863-60 60-60s60 26.863 60 60" fill="var(--primary-color)" opacity="0.3"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="skills-section section">
          <h2>Skills & Expertise</h2>
          <div className="skills-content">
            <div className="skills-bars">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="tools-section">
              <h3>Tools & Software</h3>
              <div className="tools-grid">
                {tools.map((tool, index) => (
                  <span key={index} className="tool-tag">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="experience-section section">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <span className="period">{exp.period}</span>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="education-section section">
          <h2>Education</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card card">
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
                <span className="period">{edu.period}</span>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="philosophy-section section">
          <div className="philosophy-content">
            <h2>Design Philosophy</h2>
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <div className="philosophy-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>User-Centered</h4>
                <p>Every design decision is made with the user in mind, ensuring solutions that truly meet their needs.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="var(--primary-color)" strokeWidth="2"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="9" y1="9" x2="9.01" y2="9" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="15" y1="9" x2="15.01" y2="9" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4>Simplicity</h4>
                <p>Complex problems deserve simple solutions. I strive to eliminate unnecessary complexity.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M22 12H18L15 21L9 3L6 12H2" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Iteration</h4>
                <p>Great design is an iterative process. I believe in continuous improvement and refinement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="cta-content">
            <h3>Let's Work Together</h3>
            <p>I'm always excited to take on new challenges and create amazing experiences.</p>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
