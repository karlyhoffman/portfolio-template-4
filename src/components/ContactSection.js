import React from 'react';
import SplitString from "../utils/SplitString";

const ContactSection = () => {

    return (
        <section id="contact">
            <SplitString elementTag="h2">Contact</SplitString>
            <ul>
                <li className="appear">
                    <a 
                        href="mailto:karlyhoffman@gmail.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Email
                    </a>
                </li>
                <li className="appear">
                    <a
                        href="https://github.com/karlyhoffman"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                </li>
                <li className="appear">
                    <a
                        href="https://www.linkedin.com/in/karlyhoffman/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Linkedin
                    </a>
                </li>
                <li className="appear">
                    <a
                        href="https://codepen.io/karlyhoffman/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Codepen
                    </a>
                </li>
                <li className="appear">
                    <a
                        href="https://ello.co/ello-govna"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ello
                    </a>
                </li>
                <li className="appear">
                    <a
                        href="https://karlyhoffman.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default ContactSection;