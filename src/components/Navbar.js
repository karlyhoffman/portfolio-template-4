import React, { Component } from "react";

class Navbar extends Component {

    handleClick(sectionIdx) {
        this.props.updateSection(sectionIdx);
    }

    render() {
        return <div className="nav">
                    <ul className="navbar">
                        <li key="about" data-title="About" onClick={ () => this.handleClick(1) }>
                            <span>About</span>
                        </li>
                        <li key="skills" data-title="Skills" onClick={ () => this.handleClick(2) }>
                            <span>Skills</span>
                        </li>
                        <li key="projects" data-title="Projects" onClick={ () => this.handleClick(3) }>
                            <span>Projects</span>
                        </li>
                        <li key="contact" data-title="Contact" onClick={ () => this.handleClick(6) }>
                            <span>Contact</span>
                        </li>
                    </ul>
                    <p className="subhead">Chicago-based <br/>Frontend Developer.</p>
               </div>;
    }
};

export default Navbar;