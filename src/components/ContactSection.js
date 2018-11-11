import React from 'react';
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
                        <a
                            href={contact.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {contact.name}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ContactSection;