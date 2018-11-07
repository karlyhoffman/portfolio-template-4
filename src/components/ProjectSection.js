import React from 'react';
import SplitString from "../utils/SplitString";
import ProjectAnimations from "../utils/ProjectAnimations";

const ProjectSection = ({ title, description, technologies, image, section, direction }) => {
    return (
        <section className="project">
            <ProjectAnimations 
                section={section}
                direction={direction}
            />
            <div className="copy-container">
                <h2>Work</h2>
                <div className="project-desc">
                    <SplitString
                        elementTag="h3"
                        className="title">
                        {title}
                    </SplitString>
                    <p className="appear">{description}</p>
                    <h4 className="appear">Technologies Used:</h4>
                    <ul>
                        {technologies.map((technology, idx) => (
                            <li
                                className="appear"
                                key={idx}>
                                {technology}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="img-container"
                    style={{
                        backgroundImage: `url(${image})`
                    }}
                />
            </div>
        </section>
    )
}

export default ProjectSection;