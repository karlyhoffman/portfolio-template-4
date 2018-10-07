import React, { Component } from 'react';
import "./assets/styles/main.scss";
import AnimationContainer from './utils/AnimationContainer';

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

                    <section className="animate">
                        <h1>Hello, New Portfolio.</h1>
                    </section>

                    <section>
                        <h1>Section 1</h1>
                    </section>

                    <section>
                        <h1>Section 2</h1>
                    </section>

                    <section>
                        <h1>Section 3</h1>
                    </section>

                    <section>
                        <h1>Section 4</h1>
                    </section>
            </AnimationContainer>
        )
    }
}

export default App;
