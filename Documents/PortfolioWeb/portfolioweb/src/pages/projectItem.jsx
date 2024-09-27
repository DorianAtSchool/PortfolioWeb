import React from 'react';
import '../styles/projectItem.css';

const ProjectCard = ({ project }) => {
  const { title, description, technologies, githubLink, liveDemo } = project;

  return (
    <div className="project-card">
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={liveDemo} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;