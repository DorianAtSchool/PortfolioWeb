import React, { useState, useCallback } from 'react';
import '../styles/main.css';

const Sidebar = ({ projects, resumeUrl, isOpen }) => (
    <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <h2>My Projects</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </li>
        ))}
      </ul>
      <h2>Resume</h2>
      <a 
        href={resumeUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="resume-link"
      >
        View Resume
      </a>
    </div>
  );

  export default Sidebar;