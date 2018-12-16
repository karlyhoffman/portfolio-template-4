import React, { Component } from "react";
import FryAnimation from "./FryAnimation.js";
import PhotoAnimation from "./PhotoAnimation.js";

class ProjectAnimations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: this.props.section
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.section !== prevState.section) {
      return { section: nextProps.section };
    }
    else return null;
  }

  render() {
    const { section } = this.state;

    return (
      <div className="anim-container">
        <FryAnimation section={section} />
        <PhotoAnimation section={section} />

        <div id="good-reason">
          <div id="parent-circle">
            <div className="circle blue" />
            <div className="circle pink" />
            <div className="circle lime" />
            <div className="circle orange" />
            <div className="circle teal" />
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectAnimations;