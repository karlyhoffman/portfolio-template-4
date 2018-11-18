import React from 'react';
import ReactGA from "react-ga";
import SplitString from "../utils/SplitString";

const ContactSection = () => {
    const contactLinks = [
        {
            name: "Email",
            url: "mailto:karlyhoffman@gmail.com"
        },
        {
            name: "Github",
            url: "https://github.com/karlyhoffman"
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/karlyhoffman/"
        },
        {
            name: "Codepen",
            url: "https://codepen.io/karlyhoffman/"
        },
        // {
        //     name: "Ello",
        //     url: "https://ello.co/ello-govna"
        // },
        {
            name: "Resume",
            url: "https://karlyhoffman.github.io/"
        }
    ]

    return (
        <section id="contact">
            <SplitString elementTag="h2">Contact</SplitString>
            <ul>
                {contactLinks.map((contact, index) => (
                    <li className="appear" key={index}>
                        <ReactGA.OutboundLink
                            eventLabel={contact.name}
                            to={contact.url}
                            target="_blank">
                                {contact.name}
                        </ReactGA.OutboundLink>
                    </li>
                ))}
            </ul>

            <footer>
                <span>&copy; 2018 Karly Hoffman</span>
                <ReactGA.OutboundLink
                    eventLabel="Viewed Source Code"
                    to="https://github.com/karlyhoffman/portfolio-template-4"
                    target="_blank">
                    View Source Code
                </ReactGA.OutboundLink>
            </footer>
        </section>
    )
}

export default ContactSection;