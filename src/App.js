import React, { Component } from 'react';
import "./assets/styles/main.scss";

import AnimationContainer from './utils/AnimationContainer';
import IntroSection from './components/IntroSection'
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: 0
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
        const { section } = this.state;

        return (
            <AnimationContainer
                activeSection={section}
                updateSection={this.handleSectionUpdate}>

                    <IntroSection />

                    <AboutSection />

                    <SkillsSection />

                    <section>
                        <h2>Notable Projects</h2>
                        <div className="project-desc">
                            <h3 className="title">McDonald's Visual Design Hub</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere a nisi sed mattis. Suspendisse potenti. Duis et consectetur purus. Phasellus cursus rutrum ex vitae lacinia.</p>
                            <p>Technologies Used</p>
                            <ul>
                                <li>React</li>
                                <li>GSAP</li>
                                <li>WordPress</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2>Notable Projects</h2>
                        <div className="project-desc">
                            <h3 className="title">National Geographic</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere a nisi sed mattis. Suspendisse potenti. Duis et consectetur purus. Phasellus cursus rutrum ex vitae lacinia.</p>
                            <p>Technologies Used</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS/SCSS</li>
                                <li>GSAP</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2>Notable Projects</h2>
                        <div className="project-desc">
                            <h3 className="title">Good Reason Houston</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere a nisi sed mattis. Suspendisse potenti. Duis et consectetur purus. Phasellus cursus rutrum ex vitae lacinia.</p>
                            <p>Technologies Used</p>
                            <ul>
                                <li>CSS/SCSS</li>
                                <li>Wordpress</li>
                                <li>GSAP</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2>Notable Projects</h2>
                        <div className="project-desc">
                            <h3 className="title">New Typo Graphics</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere a nisi sed mattis. Suspendisse potenti. Duis et consectetur purus. Phasellus cursus rutrum ex vitae lacinia.</p>
                            <p>Technologies Used</p>
                            <ul>
                                <li>JavaScript</li>
                                <li>Vue</li>
                                <li>GSAP</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2>Contact</h2>
                    </section>
            </AnimationContainer>
        )
    }
}

export default App;
