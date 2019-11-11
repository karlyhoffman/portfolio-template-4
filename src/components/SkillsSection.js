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
                        <li>React</li>
                        <li>Vue</li>
                        <li>Angular</li>
                        <li>WordPress</li>
                        <li>jQuery</li>
                    </ul>
                </div>

                <div className="list appear">
                    <h3>Tools</h3>
                    <ul>
                        <li>GSAP</li>
                        <li>Webpack/Gulp</li>
                        <li>Adobe Creative Suite</li>
                        <li>Visual Studio Code</li>
                        <li>JIRA</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;