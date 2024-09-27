import React, { useState, useRef, useEffect } from 'react';
import '../styles/intern-portfolio-styles.css';

const TinderlikeResume = ({ resumeUrl }) => {
  const [direction, setDirection] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showPrompt, setShowPrompt] = useState(false);
  const [promptText, setPromptText] = useState("Swipe right to hire this amazing intern!");
  const cardRef = useRef(null);

  const prompts = [
    "Swipe right to hire this amazing intern!",
    "Come on, you know you want to swipe right!",
    "This intern is hotter than your coffee. Swipe right!",
    "Talent alert! Swipe right before someone else does!",
    "I'm like a JSON object: {\"skills\": \"unlimited\"}",
    "404: Bad interns not found. Only awesome ones here!",
    "I put the 'int' in intelligent. Swipe right!",
    "I'm the semicolon your code is missing. Swipe right!",
    "Swipe right and I'll debug your life. (Terms and conditions apply)",
    "I'm the 'Ctrl+S' to your unsaved work. Hire me!",
  ];

  useEffect(() => {
    if (direction === 'right') {
      setTimeout(() => {
        alert("Great choice! This intern will revolutionize your coffee runs!");
        alert("🎉 It's a match! Time to update that LinkedIn status! 🚀");
        resetCard();
      }, 1000);
    } else if (direction === 'left') {
      setTimeout(() => {
        setPromptText(prompts[Math.floor(Math.random() * prompts.length)]);
        resetCard();
      }, 1000);
    }
  }, [direction]);

  const resetCard = () => {
    setDirection('');
    setPosition({ x: 0, y: 0 });
  };

  const handlePanMove = (e) => {
    if (e.touches) {
      e = e.touches[0];
    }
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };

  const handlePanEnd = () => {
    const threshold = cardRef.current.offsetWidth / 4;
    if (position.x > threshold) {
      setDirection('right');
    } else if (position.x < -threshold) {
      setDirection('left');
    } else {
      resetCard();
    }
  };

  return (
    <div className="tinder-container">
      <h2 className="prompt-text">{promptText}</h2>
      <div 
        ref={cardRef}
        className={`tinder-card ${direction}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) rotate(${position.x * 0.1}deg)`,
        }}
        onMouseDown={(e) => {
          document.addEventListener('mousemove', handlePanMove);
          document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handlePanMove);
            handlePanEnd();
          }, { once: true });
        }}
        onTouchStart={() => {
          document.addEventListener('touchmove', handlePanMove);
          document.addEventListener('touchend', () => {
            document.removeEventListener('touchmove', handlePanMove);
            handlePanEnd();
          }, { once: true });
        }}
      >
        <iframe src={resumeUrl} title="Intern Resume" className="resume-frame" />
      </div>
      <div className="swipe-instructions">
        <div>👈 Swipe left to pass</div>
        <div>Swipe right to hire 👉</div>
      </div>
    </div>
  );
};

const InternPortfolioPreview = () => {
  const resumeUrl = "/path/to/resume.pdf"; // Replace with actual resume URL

  return (
    <div className="main-container">
      <main className="main-content">
        <h1 className="main-title">Intern Portfolio</h1>
        <TinderlikeResume resumeUrl={resumeUrl} />
      </main>
    </div>
  );
};

export default InternPortfolioPreview;