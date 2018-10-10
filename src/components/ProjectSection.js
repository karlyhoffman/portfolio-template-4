import React from 'react';
import SplitString from "../utils/SplitString";

const ProjectSection = ({ title, description, technologies, image }) => {

    return (
        <section className="project">
            <h2>Work</h2>
            <div className="project-desc">
                <SplitString 
                    elementTag="h3"
                    className="title">
                        { title }
                </SplitString>
                <p>{ description }</p>
                <h4>Technologies Used:</h4>
                <ul>
                    {technologies.map((technology, idx) => (
                        <li key={idx}>{ technology}</li>
                    ))}
                </ul>
            </div>

            <div className="img-container"
                style={{ 
                    backgroundImage: `url(${image})`
                }}
            />
        </section>
    )
}

export default ProjectSection;