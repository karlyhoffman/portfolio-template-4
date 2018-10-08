import React from 'react';

const SkillsSection = () => {

    return (
        <section id="skills">
            <h2>Expertise</h2>
            
            <div className="skills-container">
                <div className="list">
                    <h3>CSS</h3>
                    <ul>
                        <li>UI Development</li>
                        <li>SCSS</li>
                        <li>Animations</li>
                    </ul>
                </div>

                <div className="list">
                    <h3>JavaScript</h3>
                    <ul>
                        <li>Vue</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>jQuery</li>
                    </ul>
                </div>

                <div className="list">
                    <h3>Tools</h3>
                    <ul>
                        <li>GSAP</li>
                        <li>Webpack/Gulp</li>
                        <li>Adobe Creative Suite</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection;