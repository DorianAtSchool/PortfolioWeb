import React, { useState } from 'react'
import '../styles/recruiter.css'

interface RecruiterProps {
    isRecruiter: boolean;
    setRecruiter: (isRecruiter: boolean) => void;
}

const Recruiter = ({isRecruiter, setRecruiter}) => {
    const openResume = () => {
        const fileUrl = "assets/DBG_RESUME_SUMMER2025.pdf"; // Replace with your file URL
        window.open(fileUrl, '_blank');
    };
    return (
        <button 
        onClick={openResume}
        className="recruiter-button"
            >
        Resume
        </button>
        // <a 
        // className="recruiter-button"
        // href="/assets/DBG_RESUME_SUMMER2025.pdf"
        // target="_blank" 
        // rel="noopener noreferrer" 
       
        // >Resume
        // </a>
    )

}

export default Recruiter