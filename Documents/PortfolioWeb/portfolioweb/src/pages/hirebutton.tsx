import React, { useState, useCallback, useRef } from 'react';
import '../styles/main.css';


const HireButton = ({isRecruiter}) => {
    const [showPrompt, setShowPrompt] = useState(false);
    const [promptText, setPromptText] = useState("");
    const [noButtonPosition, setNoButtonPosition] = useState({});
    const prompts = [
        "Have you clicked on the globe yet?",
        "Have you clicked on the 'Hire Me' button yet?",
        "Nice try, but no.",
        "Not allowed. Don't try again.",
        "Wrong.",
        "Error 404: Approval not found.",
        "Sorry, your 'No' privileges have been revoked.",
        "Resistance is futile. You will hire this intern.",
        "Plot twist: The intern is actually hiring you!",
        "Breaking news: Local user still thinks 'No' is an option.",
        "Access denied. Please consult your nearest rubber duck.",
        "Your 'No' has been forwarded to /dev/null for processing.",
        "I promise I won't break the coffee machine!",
        "My debugging skills work on printers too!",
        "I can turn coffee into code. Is that a superpower?",
        "I'm like a Swiss Army knife, but for interns.",
        "My code is so clean, it squeaks",
        "I'm fluent in Java. And I make a mean cup of java too!",
        "My problem-solving skills extend to office chair mechanics.",
        "Oh, that's awkward",
        "That's cute. Let's try this again.",
        "Error 404: Rejection not found. Hire anyway?",
        "You're still here? Great, when do I start?",
        "Ah, playing hard to get. I like your style!",
        "Your 'No' has been upgraded to a 'Yes'. You're welcome.",
        "Oops, I seem to have misplaced your rejection. Hired by default?",
        "I'll take that 'No' as a 'Convince me more'. Challenge accepted!",
    ];
    
    const handleYesClick = () => {
      setShowPrompt(false);
      alert("Great choice! The intern will be thrilled!");
      alert("🎉 Confetti! 🎉");
    };
    
    const container = useRef<HTMLElement | null>(null);
    const handleNoClick  = useCallback(() => {
      container.current = document.querySelector('.hiring-box');
      console.log(container.current);
      setPromptText(prompts[Math.floor(Math.random() * prompts.length)]);
      if (container.current) {
        console.log(container.current.offsetHeight);
        console.log(container.current.offsetWidth);
        const max_x = 250
        const max_y = 115
        const min_x = -500
        const min_y =  -415
        setNoButtonPosition({
          // x= random * (max-min + 1) + min
          
          x: Math.random() * (max_x - min_x + 1) + min_x,
          y: Math.random() * (max_y - min_y + 1) + min_y,
          // x: -500,
          // y: -415
        });
      }
    }, []);
    
    // const setXY = () => {
    //   let x = Math.random() * (window.innerWidth - 100);
    //   let y = Math.random() * (window.innerHeight - 40);

    //   while (x < 400 || x > 800 || y < 300 || y > 800){
    //     x = Math.random() * (window.innerWidth - 100);
    //     y = Math.random() * (window.innerHeight - 40);
    //   }

    //   return {x: x, y:y}
    // }
    return (
      <div className="hire-container">
        
        <div className="button-container">
        <button
            onClick={() => handleYesClick()}
            className="hire-button"
        >
            Hire Me :)
        </button>
        <button 
            onClick={handleNoClick}
            className={`no-button ${noButtonPosition ? 'no-button-floating' : ''}`}
            style={noButtonPosition ? {
            left: `${noButtonPosition.x}px`,
            top: `${noButtonPosition.y}px`,
            } : {}}
            >
            No
        </button>
        </div>
        <h2 className='prompt-text'>{promptText}</h2>

      </div>
    );
  };
export default HireButton;