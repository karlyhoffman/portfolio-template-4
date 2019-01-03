import React, { Component } from "react";
import ReactGA from "react-ga";

class Navbar extends Component {

    handleClick(sectionIdx) {
        this.props.updateSection(sectionIdx);

        const sectionNames = {
            1: "About",
            2: "Skills",
            3: "Projects",
            6: "Contact",
        }
        
        ReactGA.event({
            category: 'Navbar',
            action: `Navbar Click`,
            label: `${sectionNames[sectionIdx]}`
        });
    }

    render() {
        return <div className="nav">
                    <ul className="navbar">
                        <li key="about" onClick={ () => this.handleClick(1) } />
                        <li key="skills" onClick={ () => this.handleClick(2) } />
                        <li key="projects" onClick={ () => this.handleClick(3) } />
                        <li key="contact" onClick={ () => this.handleClick(6) } />
                    </ul>
                    <p className="subhead">Chicago-based <br/>Frontend Developer.</p>
               </div>;
    }
};

export default Navbar;