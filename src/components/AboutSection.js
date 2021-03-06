import React from 'react';
import SplitString from "../utils/SplitString";

const AboutSection = () => {

    return (
        <section id="about">
            <SplitString elementTag="h2">Web editor turned web developer</SplitString>
            
            <div className="copy-container">
                <p className="appear">Gained <strong>experience writing and organizing content</strong> for web pages, now brings that content to life through programming.</p>
                <p className="appear">Has <strong>an eye for detail</strong> and the ability to add functionality to any page or application.</p>
                <p className="appear"><strong>Knowledgeable, dependable, and versatile</strong> in the web industry.</p>
            </div>
        </section>
    )
}

export default AboutSection;