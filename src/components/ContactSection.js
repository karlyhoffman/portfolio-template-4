import React from 'react';
import SplitString from "../utils/SplitString";

const ContactSection = () => {

    return (
        <section id="contact">
            <SplitString elementTag="h2">Contact</SplitString>
            <ul>
                <li>Email</li>
                <li>Github</li>
                <li>Linkedin</li>
                <li>Codepen</li>
                <li>Ello</li>
                <li>Resume</li>
            </ul>
        </section>
    )
}

export default ContactSection;