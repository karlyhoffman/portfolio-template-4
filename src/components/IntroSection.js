import React, { Component } from "react";
import SplitString from "../utils/SplitString";

class IntroSection extends Component {
    constructor(props) {
        super()

        this.state = {
            loaded: false
        };
    }

    componentDidMount() {
        setTimeout(() => { 
            this.setState({ loaded: true });
        }, 150);
    }

    render() {
        const { loaded } = this.state;
        const loadedClass = loaded ? 'animate' : '';

        return (
            <section id="intro" className={`active ${loadedClass}`}>
                <SplitString elementTag="h1">Karly Hoffman</SplitString>

                <div className="subhead appear">
                    <div className="detail">
                        <div className="bg-line" key="blue" />
                        <div className="bg-line" key="teal" />
                        <div className="bg-line" key="yellow" />
                        <div className="bg-line" key="orange" />
                    </div>
                    <p>Chicago-based Frontend Developer.</p>
                </div>
            </section>
        )
    }
}

export default IntroSection;