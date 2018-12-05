import React, { Component } from 'react';
import './assets/styles/main.scss';

import FullpageLocking from './utils/FullpageLocking';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectSection from './components/ProjectSection';
import ProjectAnimations from "./utils/ProjectAnimations";
import ContactSection from './components/ContactSection';

import ReactGA from "react-ga";
const GAuserToken = "";
ReactGA.initialize(GAuserToken);
ReactGA.pageview("/");

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: 0,
            scrollDir: null,
            projects: [
                {
                    title: "McDonald's Visual Design Hub",
                    link: "https://design.mcdonalds.com/",
                    description: "A responsive website built using React and a decoupled Wordpress CMS to feature the company's style guidelines and design assets.",
                    technologies: [
                        "React.js",
                        "WordPress",
                        "GSAP"
                    ]
                },
                {
                    title: "National Geographic | Hennessy",
                    link: "https://www.nationalgeographic.com/hennessy/",
                    description: "A responsive Vue.js website showcasing artists and their Hennessy X.O. inspired artwork.",
                    technologies: [
                        "Vue.js",
                        "SCSS",
                        "GSAP"
                    ],
                    deliverables: [
                        "Parallax animations",
                        "Navigation map",
                        "Detail page templates",
                        "Lightbox photo gallery",
                        "Google Analytics",
                        "Responsive design",
                    ]
                },
                {
                    title: "Good Reason Houston",
                    link: "https://goodreasonhouston.org/",
                    description: "A responsive WordPress website for a non-profit organization.",
                    technologies: [
                        "SCSS",
                        "Wordpress",
                        "PHP",
                        "GSAP"
                    ],
                    deliverables: [
                        "CMS compatibility",
                        "Full-page locking",
                        "Transitional animations",
                        "Responsive design",
                    ]
                }
            ]
        }
    }

    handleSectionUpdate = (currentSection) => {
        const direction = currentSection > this.state.section ? "next" : "prev";
        this.setState({
            section: currentSection,
            scrollDir: direction
        });

        const sectionNames = [
            "Intro",
            "About",
            "Skills",
            "McD",
            "Hennessy",
            "Good Reason",
            "Contact"
        ];

        ReactGA.event({
            category: 'Views',
            action: `Section Change`,
            label: `${sectionNames[currentSection]}`
        });
    }

    render() {
        const { 
            section, 
            projects,
        } = this.state;

        return (
            <FullpageLocking
                activeSection={section}
                updateSection={this.handleSectionUpdate}
                >
                    <Navbar 
                        section={section}
                        updateSection={this.handleSectionUpdate} />

                    <IntroSection />

                    <AboutSection />

                    <SkillsSection />

                    <ProjectAnimations section={section} />

                    {projects.map((project, idx) => (
                        <ProjectSection 
                            {...project}
                            key={idx}
                            section={section}
                        />
                    ))}

                    <ContactSection />

            </FullpageLocking>
        )
    }
}

export default App;
