import React, { useState, useEffect, useRef } from 'react';
import '../styles/aboutMe.css';
import ExperienceItem from './experience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faCogs, faLanguage, faCode, faPencilRuler, faProjectDiagram, faChartLine, faPencil} from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
  const [typedText0, setTypedText0] = useState('');
  const [typedText1, setTypedText1] = useState('');
  const [typedText2, setTypedText2] = useState('');
  const [typedText3, setTypedText3] = useState('');
  const fullTexts = [`H ello! I'm John Doe, a passionate developer and designer with a keen interest in creating intuitive and engaging user experiences. With a background in computer science and years of hands-on experience, I've developed a unique skill set that combines technical expertise with creative problem-solving. I love taking on new challenges and continuously learning in this ever-evolving field of technology.`, 
    '* *Education:** University of Example', 'Sk ills:', 'L anguages:'];
    const indexRef0 = useRef(0);
    const indexRef1 = useRef(0);
    const indexRef2 = useRef(0);
    const indexRef3 = useRef(0);
  
    // initialize experiences object of each having timeline, title, link, location, description, technologies
    const timelines = ['2024 — Present', '2022 — 2024', '2020 — 2022', '2018 — 2020'];
    const titles = ['Senior Frontend Engineer, Accessibility', 'Frontend Engineer, Accessibility', 'Frontend Developer', 'Web Developer'];
    const links = ['https://www.klaviyo.com', 'https://www.klaviyo.com', 'https://www.klaviyo.com', 'https://www.klaviyo.com'];
    const locations = ['Klaviyo', 'Klaviyo', 'Klaviyo', 'Klaviyo'];
    const descriptions = ['Build and maintain critical components used to construct Klaviyo\'s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.', 'Worked on the development of Klaviyo\'s frontend, focusing on accessibility and user experience. Collaborated with the design team to create intuitive and user-friendly interfaces.', 'Developed and maintained frontend components for Klaviyo\'s web application. Worked closely with the design team to implement new features and improve existing ones.', 'Built and maintained web applications for various clients, focusing on user experience and performance. Collaborated with the design team to create visually appealing and intuitive interfaces.'];
    const technologies = [['JavaScript', 'TypeScript', 'React', 'Storybook'], ['JavaScript', 'React', 'Storybook'], ['JavaScript', 'React', 'Storybook'], ['JavaScript', 'React', 'Storybook']];
    
    const experiences = [];
    for (let i = 0; i < 4; i++) {
      experiences.push({timeline:timelines[i], title:titles[i], link:links[i], location:locations[i], description:descriptions[i], technologies: technologies[i]});
    }

    useEffect(() => {
    // let index = 0;
    const typeText = setInterval(() => {
      if (indexRef0.current < fullTexts[0].length) {
        setTypedText0((prev) => prev + fullTexts[0].charAt(indexRef0.current));
        indexRef0.current++;
        //setTimeout(typeText, 1000);
        //sleep this function for 2 seconds
      }
    }, Math.random() * 50 + 20);
    return () => clearInterval(typeText);
  }, []);
  useEffect(() => {
    // let index = 0;
    const typeText = setInterval(() => {
      if (indexRef1.current < fullTexts[1].length) {
        setTypedText1((prev) => prev + fullTexts[1].charAt(indexRef1.current));
        indexRef1.current++;
        //setTimeout(typeText, 1000);
        //sleep this function for 2 seconds
      }
    }, Math.random() * 50 + 20);
    return () => clearInterval(typeText);
  }, []);
  useEffect(() => {
    // let index = 0;
    const typeText = setInterval(() => {
      if (indexRef2.current < fullTexts[2].length) {
        setTypedText2((prev) => prev + fullTexts[2].charAt(indexRef2.current));
        indexRef2.current++;
        //setTimeout(typeText, 1000);
        //sleep this function for 2 seconds
      }
    }, Math.random() * 50 + 20);
    return () => clearInterval(typeText);
  }, []);
  useEffect(() => {
    // let index = 0;
    const typeText = setInterval(() => {
      if (indexRef3.current < fullTexts[3].length) {
        setTypedText3((prev) => prev + fullTexts[3].charAt(indexRef3.current));
        indexRef3.current++;
        //setTimeout(typeText, 1000);
        //sleep this function for 2 seconds
      }
    }, Math.random() * 50 + 20);
    return () => clearInterval(typeText);
  }, []);

  return (
    <div className='page-container'>
        <div className='aboutme-container'>
            <h1 className='aboutme-title'>About Me</h1>
            
            <div className="section">
                <div id="typing-text">{typedText0}</div>
                <span className="cursor"></span>
            </div>
            
            <div className="section">
              <div className='section-icon-header'>
              <FontAwesomeIcon icon={faUniversity} className="icon" />
              <h2>Education</h2>
              </div>


              <div className='section-content'>
                <div className='left'>
                  <p> University of Massachusetts, Commonwealth Honors College</p>
                  <p> 2022 - 2026</p>
                </div>
                <div className='right'>
                  
                </div>
              </div>
                {/* <div id="typing-text">{typedText1}</div>
                <span className="cursor"></span> */}
                
            </div>
            
            <div className="section">
            <div className='section-icon-header'>
            <FontAwesomeIcon icon={faCogs} className="icon" />
            <h2>Skills</h2>
            </div>
                <ul>
                  <li><FontAwesomeIcon icon={faCode} className="icon" /> Web Development</li>
                  <li><FontAwesomeIcon icon={faPencilRuler} className="icon" /> UI/UX Design</li>
                  <li><FontAwesomeIcon icon={faProjectDiagram} className="icon" /> Project Management</li>
                  <li><FontAwesomeIcon icon={faChartLine} className="icon" /> Data Analysis</li>
                </ul>
                {/* <div id="typing-text">{typedText2}</div>
                <span className="cursor"></span> */}
            </div>
            
            <div className="section">
              <div className='section-icon-header'>
                <FontAwesomeIcon icon={faLanguage} className="icon" />
                <h2>Languages</h2>
              </div>
              <p>English, Spanish, French</p>
            </div>
        </div>
        <div>
          <ul className="experience-list">
            {
            experiences.map((experience) => 
              <ExperienceItem timeline={experience.timeline}  title={experience.title} link={experience.link} location={experience.location} description={experience} technologies={experience.technologies}/>
            )
            }
              {/* <ExperienceItem />
              <ExperienceItem />
              <ExperienceItem />
              <ExperienceItem /> */}
          </ul>
        </div>
    </div>
  );
};

export default AboutMe;