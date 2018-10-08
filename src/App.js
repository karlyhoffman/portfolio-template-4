import React, { Component } from 'react';
import "./assets/styles/main.scss";

import AnimationContainer from './utils/AnimationContainer';
import IntroSection from './components/IntroSection'
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: 0,
            projects: [
                {
                    title: "McDonald's Visual Design Hub",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere a nisi sed mattis. Suspendisse potenti. Duis et consectetur purus. Phasellus cursus rutrum ex vitae lacinia.",
                    technologies: [
                        "React",
                        "GSAP",
                        "WordPress"
                    ]
                },
                {
                    title: "National Geographic",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere a nisi sed mattis. Suspendisse potenti. Duis et consectetur purus. Phasellus cursus rutrum ex vitae lacinia.",
                    technologies: [
                        "HTML",
                        "CSS/SCSS",
                        "GSAP"
                    ]
                },
                {
                    title: "Good Reason Houston",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere a nisi sed mattis. Suspendisse potenti. Duis et consectetur purus. Phasellus cursus rutrum ex vitae lacinia.",
                    technologies: [
                        "CSS/SCSS",
                        "Wordpress",
                        "GSAP"
                    ]
                },
                {
                    title: "New Typo Graphics",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere a nisi sed mattis. Suspendisse potenti. Duis et consectetur purus. Phasellus cursus rutrum ex vitae lacinia.",
                    technologies: [
                        "JavaScript",
                        "Vue",
                        "GSAP"
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

                    <section>
                        <h2>Contact</h2>
                    </section>
            </AnimationContainer>
        )
    }
}

export default App;
