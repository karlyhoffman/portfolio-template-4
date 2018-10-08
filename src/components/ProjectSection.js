import React from 'react';

const ProjectSection = ({ title, description, technologies }) => {

    return (
        <section className="project">
            <h2>Notable Projects</h2>
            <div className="project-desc">
                <h3 className="title">{ title }</h3>
                <p>{ description }</p>
                <p>Technologies Used:</p>
                <ul>
                    {technologies.map((technology, idx) => (
                        <li key={idx}>{ technology}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ProjectSection;