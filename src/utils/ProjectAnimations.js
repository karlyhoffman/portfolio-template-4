import React, { Component } from "react";
import FryAnimation from "./FryAnimation.js";

import rockoImg from "../assets/images/hennessy/rocko-min.jpg";
import fabricImg from "../assets/images/hennessy/fabric-min.jpg";
import hennessyImg from "../assets/images/hennessy/hennessy-min.jpg";
import streetImg from "../assets/images/hennessy/street-min.jpg";
import victorImg from "../assets/images/hennessy/victor-min.jpg";
import yinImg from "../assets/images/hennessy/yin-min.jpg";

class ProjectAnimations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: this.props.section
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.section !== this.state.section) {
      this.setState({ section: nextProps.section });
    }
  }

  render() {
    const { section } = this.state;

    return (
      <div className="anim-container">
        <div id="mcd">
          <FryAnimation section={section} />
        </div>

        <div id="hennessy">
          <img src={rockoImg} alt="" />
          <img src={fabricImg} alt="" />
          <img src={hennessyImg} alt="" />
          <img src={streetImg} alt="" />
          <img src={victorImg} alt="" />
          <img src={yinImg} alt="" />
        </div>

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
    )
  }
};

export default ProjectAnimations;