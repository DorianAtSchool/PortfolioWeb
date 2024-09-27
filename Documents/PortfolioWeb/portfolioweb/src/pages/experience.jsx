import React from 'react';
import '../styles/experienceItem.css';

const ExperienceItem = ({timeline, title, link, location, description, technologies}) => {
  return (
    <li className="experience-item">
      <div className="experience-container">
        <div className="experience-background"></div>
        <header className="experience-header" aria-label="2024 to Present">2024 — Present</header>
        <div className="experience-content">
          <h3 className="experience-title">
            <div>
              <a className="experience-link" href="https://www.klaviyo.com" target="_blank" rel="noreferrer noopener" aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)">
                <span className="experience-link-background"></span>
                <span>
                  Senior Frontend Engineer, Accessibility ·{' '}
                  <span className="inline-block">
                    Klaviyo
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="link-icon" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </h3>
          <p className="experience-description">
            Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.
          </p>
          <ul className="technology-list" aria-label="Technologies used">
            {['JavaScript', 'TypeScript', 'React', 'Storybook'].map((tech, index) => (
              <li key={index} className="technology-item">
                <div className="technology-tag">{tech}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem;