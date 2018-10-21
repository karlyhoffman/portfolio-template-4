import React from 'react';
import SplitString from "../utils/SplitString";

const ContactSection = () => {

    return (
        <section id="contact">
            <SplitString elementTag="h2">Contact</SplitString>
            <ul>
                <li className="appear">Email</li>
                <li className="appear">Github</li>
                <li className="appear">Linkedin</li>
                <li className="appear">Codepen</li>
                <li className="appear">Ello</li>
                <li className="appear">Resume</li>
            </ul>
        </section>
    )
}

export default ContactSection;