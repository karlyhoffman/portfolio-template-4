import React from 'react';

const ProjectSection = ({ title, description, technologies, image }) => {

    return (
        <section className="project">
            <h2>Work</h2>
            <div className="project-desc">
                <h3 className="title">{ title }</h3>
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