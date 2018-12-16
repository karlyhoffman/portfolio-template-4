import React, { Component } from "react";
import { TweenMax, TimelineMax, Power3, Sine } from "gsap/all";
import CSSPlugin from 'gsap/CSSPlugin';

import fryImg from "../assets/images/mcd/fry.svg";
import ketchupFryImg from "../assets/images/mcd/fry-ketchup.svg";

const C = CSSPlugin; // eslint-disable-line

class FryAnimation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: this.props.section,
            numOfFries: 13
        };

        this.fries1 = [];
        this.fries2 = [];
        this.masterTimeline = new TimelineMax({ paused: true });
    }

    componentDidMount() {
        this.friesAnimation(this.fries1);
        this.friesAnimation(this.fries2);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.section !== this.state.section) {
            this.setState({ section: nextProps.section });
        }

        if (nextProps.section === 3) {
            this.masterTimeline.progress(0).tweenTo("part2");
            return true;
        } else if (nextProps.section === 2 && this.masterTimeline.progress() !== 0) {
            this.masterTimeline.play();
            return true;
        } else if (nextProps.section === 4) {
            this.masterTimeline.play();
            return true;
        }
        return false;
    }

    friesAnimation(friesArray) {

        const enterAnimation = () => {
            const tl = new TimelineMax();
            let counter = 1;
            let timer = 135;
            const ketchupFryIndex = Math.floor(this.state.numOfFries / 2);

            friesArray.forEach((element, index) => {
                // Animate ketchup fry first
                if (index === ketchupFryIndex) {
                    const enterTween = TweenMax.from(element, 1.15, { y: "30vw", ease: Power3.easeOut });
                    tl.add([enterTween], 1.25);
                }
                // Alternate animating fries around middle fry
                else {
                    const fryToAnimate = friesArray[ketchupFryIndex + counter];
                    const enterTween = TweenMax.from(fryToAnimate, 1, { y: "30vw", ease: Power3.easeOut });
                    const delay = timer / 100;
                    timer += 10; // add 0.1s to start time
                    tl.add([enterTween], delay);

                    if (counter === 0) {
                        counter++;
                    } else if (counter > 0) {
                        counter = -counter;
                    } else {
                        counter = -counter;
                        counter++;
                    }
                }
            });
            return tl;
        }

        const leaveAnimation = () => {
            const tl = new TimelineMax();

            friesArray.forEach(element => {
                // Move fry in random x,y directions (x: randAngle, y: randSpeed)
                let randAngle = Math.random() * (50 - 10) + 10; // min/max vw distance;
                randAngle *= Math.floor(Math.random() * 2) === 1 ? 1 : -1; // randomly left or right;
                const randSpeed = -(Math.random() * (400 - 300) + 300); // min/max vh distance up;

                const leaveTween = TweenMax.to(element, 5, {
                    transform: `translate(${randAngle}vw, ${randSpeed}vh)`,
                    ease: Power3.easeOut
                });

                // Spin fry img
                const fryImg = element.querySelector("img");
                let randSpins = Math.random() * (720 - 360) + 360; // between 1 and 2 spins
                randSpins *= Math.floor(Math.random() * 2) === 1 ? 1 : -1; // random spin direction;

                const spinTween = TweenMax.to(fryImg, 5, {
                    rotation: randSpins,
                    ease: Sine.easeOut
                });

                tl.add([leaveTween, spinTween], "part1"); // add tweens at the end of part1
            });
            return tl;
        }

        this.masterTimeline.add(enterAnimation(), "part1");
        this.masterTimeline.add(leaveAnimation(), "part2");
    }

    render() {
        const { numOfFries } = this.state;
        const fryElements = Array.from({ length: numOfFries }, (item, index) =>
            index === Math.floor(numOfFries / 2) ? ketchupFryImg : fryImg
        );

        return (
            <div id="mcd" className="fries">
                <div className="fry-container">
                    {fryElements.map((imgSrc, index) => (
                        <div
                            className={index === Math.floor(numOfFries / 2) ? 'ketchup-fry' : 'fry'}
                            key={index}
                            ref={div => this.fries1[index] = div}
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
                            ref={div => this.fries2[index] = div}
                        >
                            <img src={fryImg} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};

export default FryAnimation;