import React, { Component } from "react";

import fryImg from "../assets/images/mcd/fry.svg";
import ketchupFryImg from "../assets/images/mcd/fry-ketchup.svg";
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
      section: this.props.section,
      numOfFries: 13
    };

    this.fries = [];
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.section !== this.state.section) {
      this.setState({ section: nextProps.section });
    }
  }

  componentDidUpdate() {
    if (this.state.section === 3) {}
  }

  render() {
    const { numOfFries } = this.state;

    const fryElements = Array.from({ length: numOfFries }, (item, index) => 
      index === Math.floor(numOfFries/2) ? ketchupFryImg : fryImg
    );

    return <div className="anim-container">
      <div id="mcd">
        <div className="fry-container">
          {fryElements.map((imgSrc, index) => (
            <div
              className={index === Math.floor(numOfFries / 2) ? 'ketchup-fry' : 'fry'}
              key={index}
              ref={div => this.fries[index] = div}
            >
              <img src={imgSrc} alt="" />
            </div>
          ))}
        </div>

        {/* Addition fries for enter/leave animation */}
        <div className="fries-transition">
          {fryElements.map((imgSrc, index) => (
            <div
              className="fry"
              key={index}
              ref={div => this.fries[index] = div}
            >
              <img src={fryImg} alt="" />
            </div>
          ))}
        </div>
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
    </div>;
  }
};

export default ProjectAnimations;