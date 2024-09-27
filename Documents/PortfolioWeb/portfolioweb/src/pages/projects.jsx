import React from 'react';
import '../styles/projectsPage.css';
import ProjectCard from './projectItem.jsx';

const ProjectsPage = () => {
  // Array of projects
  const projects = [
    {
      title: 'Weather App',
      description: 'A simple weather forecasting app using OpenWeatherMap API.',
      technologies: ['JavaScript', 'React', 'CSS'],
      githubLink: 'https://github.com/username/weather-app',
      liveDemo: 'https://weather-app-demo.com',
    },
    {
      title: 'Task Manager',
      description: 'A task management app with user authentication and CRUD operations.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
      githubLink: 'https://github.com/username/task-manager',
      liveDemo: 'https://task-manager-demo.com',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing my projects and blog posts.',
      technologies: ['React', 'CSS', 'Netlify'],
      githubLink: 'https://github.com/username/portfolio',
      liveDemo: 'https://portfolio-demo.com',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing my projects and blog posts.',
      technologies: ['React', 'CSS', 'Netlify'],
      githubLink: 'https://github.com/username/portfolio',
      liveDemo: 'https://portfolio-demo.com',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing my projects and blog posts.',
      technologies: ['React', 'CSS', 'Netlify'],
      githubLink: 'https://github.com/username/portfolio',
      liveDemo: 'https://portfolio-demo.com',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing my projects and blog posts.',
      technologies: ['React', 'CSS', 'Netlify'],
      githubLink: 'https://github.com/username/portfolio',
      liveDemo: 'https://portfolio-demo.com',
    }
  ];

  return (
    <div className="projects-page">
      <h1 className="page-heading">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;