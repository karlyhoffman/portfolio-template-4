import React from 'react';
import SplitString from "../utils/SplitString";

const SkillsSection = () => {

    return (
      <section id="skills">
        <SplitString elementTag="h2">Expertise</SplitString>

        <div className="skills-container">
          <div className="list appear">
            <h3>CSS</h3>
            <ul>
              <li>UI Development</li>
              <li>SCSS</li>
              <li>SVG & CSS Animations</li>
              <li>Responsive Styling</li>
            </ul>
          </div>

          <div className="list appear">
            <h3>JavaScript</h3>
            <ul>
              <li>ES6+</li>
              <li>React</li>
              <li>Next.js</li>
              <li>GSAP</li>
            </ul>
          </div>

          <div className="list appear">
            <h3>Tools</h3>
            <ul>
              <li>Webpack</li>
              <li>Adobe Creative Suite</li>
              <li>Visual Studio Code</li>
              <li>JIRA</li>
            </ul>
          </div>
        </div>
      </section>
    );
}

export default SkillsSection;