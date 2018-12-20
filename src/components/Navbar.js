import React, { Component } from "react";

class Navbar extends Component {

    handleClick(sectionIdx) {
        this.props.updateSection(sectionIdx);
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