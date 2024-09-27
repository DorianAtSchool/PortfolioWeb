import React, { useState, useEffect } from 'react';
import '../styles/cursorcircle.css';

const CursorCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCircle, setShowCircle] = useState(false);

  // Define the region where the circle should appear
  const region = {
    minX: 1150,
    maxX: 1650,
    minY: 250,
    maxY: 750
  };

  // Track the mouse movement and update the position
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      // Check if the mouse is within the defined region
      if (
        clientX >= region.minX &&
        clientX <= region.maxX &&
        clientY >= region.minY &&
        clientY <= region.maxY
      ) {
        setPosition({ x: clientX, y: clientY });
        setShowCircle(true); // Show the circle when inside the region
      } else {
        setShowCircle(false); // Hide the circle when outside the region
      }
    };

    // Attach the event listener to the document
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Render the circle only when it's within the specified region */}
      {showCircle && (
        <div className='cursor-circle'
          style={{
            top: position.y - 16, // Centering the circle to the cursor
            left: position.x - 16, // Centering the circle to the cursor
          }}
        />
      )}
    </div>
  );
};

export default CursorCircle;