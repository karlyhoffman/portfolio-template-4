import React, { PureComponent } from "react";
import SplitString from "../utils/SplitString";

class ProjectSection extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { ...props };
    }

    render() {
        const {
            title,
            description,
            technologies,
            image
        } = this.state;

        return (
            <section className="project">
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
}

export default ProjectSection;