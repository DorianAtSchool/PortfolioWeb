import React, { useState, useCallback } from 'react';
import '../styles/main.css';
import Sidebar from './sidebar.tsx';
import HireButton from './hirebutton.tsx';
import Landing from './landing.jsx';
import Recruiter from './recruiter.jsx';
import AboutMe from './aboutMe.jsx';
import ProjectsPage from './projects.jsx';

const InternPortfolioPreview = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const projects = [
    { id: 1, title: "Personal Website", description: "A responsive portfolio website built with React and Tailwind CSS." },
    { id: 2, title: "Task Manager API", description: "RESTful API for a task management application using Node.js and Express." },
    { id: 3, title: "E-commerce Platform", description: "Full-stack e-commerce website with user authentication and payment integration." }
  ];
  const resumeUrl = "/path/to/resume.pdf"; // Replace with actual resume URL
  const [isRecruiter, setRecruiter] = useState(false)
  return (
    <div className="main-container">
        {/* <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="sidebar-toggle"
      >
        {isSidebarOpen ? 'Close Sidebar' : 'Recruiter?'}
      </button> */}
      {/* <Sidebar projects={projects} resumeUrl={resumeUrl} isOpen={isSidebarOpen} /> */}
      <main className="main-content">
        <div className='button-component'>
        <Recruiter isRecruiter={isRecruiter} setRecruiter ={setRecruiter}/>
        </div>
        <div className='component'>
        <Landing />
        </div>
        <div className='component'>
        <AboutMe />
        </div>
        <div className='component'>
        <ProjectsPage />
        </div>
        <div className='component-hiring'>
          <div className='hiring-box'>
            <div  className='title'>
              <h1 className='hiring-title' >Hiring?</h1>
              <h3>I'm actively looking for a summer 2025 internship.</h3>
            </div>
            <HireButton isRecruiter={isRecruiter}/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InternPortfolioPreview;