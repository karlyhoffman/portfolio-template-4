import React, { PureComponent } from "react";
import ReactGA from "react-ga";
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
            image,
            link
        } = this.state;

        return (
            <section className="project">
                <div className="copy-container">
                    <SplitString elementTag="h2">Work</SplitString>
                    <div className="project-desc">
                        <ReactGA.OutboundLink
                            eventLabel={title}
                            to={link}
                            target="_blank">
                                <SplitString
                                    elementTag="h3"
                                    className="title">
                                        {title}
                                </SplitString>
                        </ReactGA.OutboundLink>
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