import React, {useEffect, useState, useRef, useCallback} from "react";
import "../styles/landing.css";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Globe from 'react-globe.gl';
import * as THREE from '//unpkg.com/three/build/three.module.js';
import CursorCircle from "./cursorcircle";


const Landing = () => {
    const ARC_REL_LEN = 0.8; // relative to whole arc
    const FLIGHT_TIME = 500;
    const NUM_RINGS = 10;
    const RINGS_MAX_R = 10; // deg
    const RING_PROPAGATION_SPEED = 10; // deg/sec

    const [arcsData, setArcsData] = useState([]);
    const [ringsData, setRingsData] = useState([]);

    const prevCoords = useRef({ lat: 0, lng: 0 });
    const emitArc = useCallback(({ lat: endLat, lng: endLng }) => {
      const { lat: startLat, lng: startLng } = prevCoords.current;
      prevCoords.current = { lat: endLat, lng: endLng };

      // add and remove arc after 1 cycle
      const arc = { startLat, startLng, endLat, endLng };
      setArcsData(curArcsData => [...curArcsData, arc]);
      setTimeout(() => setArcsData(curArcsData => curArcsData.filter(d => d !== arc)), FLIGHT_TIME * 2);

      // add and remove start rings
      const srcRing = { lat: startLat, lng: startLng };
      setRingsData(curRingsData => [...curRingsData, srcRing]);
      setTimeout(() => setRingsData(curRingsData => curRingsData.filter(r => r !== srcRing)), FLIGHT_TIME * ARC_REL_LEN);

      // add and remove target rings
      setTimeout(() => {
        const targetRing = { lat: endLat, lng: endLng };
        setRingsData(curRingsData => [...curRingsData, targetRing]);
        setTimeout(() => setRingsData(curRingsData => curRingsData.filter(r => r !== targetRing)), FLIGHT_TIME * ARC_REL_LEN);
      }, FLIGHT_TIME);
    }, []);

    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1 className="name">Dorian Benhamou <br></br> Goldfajn</h1>
            </header>
            <div className="contact-icons">
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                <FaGithub size={50} />
                </a>
                <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={50} />
                </a>
                <a href="mailto:your-email@example.com">
                <FaEnvelope size={50} />
                </a>
            </div>
            <div className="globe">
                <Globe
                    width={600}
                    height={600}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    onGlobeClick={emitArc}
                    arcsData={arcsData}
                    arcColor={() => '#3b82f6'}
                    arcDashLength={ARC_REL_LEN}
                    arcDashGap={2}
                    arcDashInitialGap={1}
                    arcDashAnimateTime={FLIGHT_TIME}
                    arcsTransitionDuration={0}
                    ringsData={ringsData}
                    ringColor={() => t => `#3b82f6`}
                    ringMaxRadius={RINGS_MAX_R}
                    ringPropagationSpeed={RING_PROPAGATION_SPEED}
                    ringRepeatPeriod={FLIGHT_TIME * ARC_REL_LEN / NUM_RINGS}
                />
            </div>
            <CursorCircle />
        </div>
    ); 
}

export default Landing;





