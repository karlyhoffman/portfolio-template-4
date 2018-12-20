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
            </section>
        )
    }
}

export default IntroSection;