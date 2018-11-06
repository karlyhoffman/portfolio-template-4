import React, { Component } from 'react';
import './assets/styles/main.scss';

import AnimationContainer from './utils/FullpageLocking';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

import mcdImg from "./assets/images/mcd.png"
import natgeoImg from "./assets/images/natgeo.png"
import goodReasonImg from "./assets/images/good-reason.png"

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: 0,
            projects: [
                {
                    title: "McDonald's Visual Design Hub",
                    link: null,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere a nisi sed mattis. Suspendisse potenti. Duis et consectetur purus. Phasellus cursus rutrum ex vitae lacinia.",
                    technologies: [
                        "React",
                        "WordPress",
                        "GSAP"
                    ],
                    image: mcdImg
                },
                {
                    title: "National Geographic | Hennessey",
                    link: "https://www.nationalgeographic.com/hennessy/",
                    description: "A responsive website showcasing artists and their Hennessy X.O. inspired artwork.",
                    technologies: [
                        "Vue",
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
                    ],
                    image: natgeoImg
                },
                {
                    title: "Good Reason Houston",
                    link: "https://goodreasonhouston.org/",
                    description: "A WordPress website for a non-profit organization.",
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
                    ],
                    image: goodReasonImg
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
    }

    render() {
        const { section, projects } = this.state;

        return (
            <AnimationContainer
                activeSection={section}
                updateSection={this.handleSectionUpdate}
                >

                    <IntroSection />

                    <AboutSection />

                    <SkillsSection />

                    {projects.map((project, idx) => (
                        <ProjectSection 
                            {...project}
                            key={idx}
                        />
                    ))}

                    <ContactSection />

            </AnimationContainer>
        )
    }
}

export default App;
