import React, { Component } from "react";
import { TweenMax, TimelineMax, Sine } from "gsap/all";
import CSSPlugin from "gsap/CSSPlugin";

import rockoImg from "../assets/images/hennessy/rocko.jpg";
import fabricImg from "../assets/images/hennessy/fabric.jpg";
import hennessyImg from "../assets/images/hennessy/hennessy.jpg";
import streetImg from "../assets/images/hennessy/street.jpg";
import victorImg from "../assets/images/hennessy/victor.jpg";
import yinImg from "../assets/images/hennessy/yin.jpg";

const C = CSSPlugin; // eslint-disable-line

class PhotoAnimation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: this.props.section
        };

        this.photoContainers = [];
        this.photos = [
            rockoImg,
            fabricImg,
            hennessyImg,
            streetImg,
            victorImg,
            yinImg
        ];
        this.masterTimeline = new TimelineMax({ paused: true });
    }

    componentDidMount() {
        this.photoAnimation();
    }

    static getDerivedStateFromProps(nextProps, prevState) {        
        if (nextProps.section !== prevState.section) {
            return { section: nextProps.section };
        }
        else return null;
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.section === 4) {
            this.masterTimeline.progress(0).tweenTo("part2");
            return true;
        } else if (0 < this.masterTimeline.progress() && this.masterTimeline.progress() < 1) {
            this.masterTimeline.play();
            return true;
        }
        return false;
    }

    photoAnimation() {

        const enterAnimation = () => {
            const tl = new TimelineMax();
            this.photoContainers.forEach( element => {
                const img = element.querySelector('img');
                const randomDistance = Math.random() * (10 - 5) + 5; // min: 5, max: 10
                const enterTween = TweenMax.to(img, 1, {
                    y: `-${randomDistance.toFixed(2)}vw`,
                    autoAlpha: 1,
                    ease: Sine.easeOut
                });
                tl.add([enterTween], 1.5);
            });
            return tl;
        }

        const leaveAnimation = () => {
            const tl = new TimelineMax();
            this.photoContainers.forEach(element => {
                const img = element.querySelector('img');
                const randomDistance = Math.random() * (25 - 20) + 20; // min: 15, max: 20
                const leaveTween = TweenMax.to(img, 0.75, {
                  y: `-${randomDistance.toFixed(2)}vw`,
                  autoAlpha: 0,
                  ease: Sine.easeOut
                });

                tl.add([leaveTween], "part1"); // add tweens at the end of part1
            });
            return tl;
        }

        this.masterTimeline.add(enterAnimation(), "part1");
        this.masterTimeline.add(leaveAnimation(), "part2");
    }

    render() {
        return (
            <div id="hennessy">
                {this.photos.map((photo, index) => (
                    <div
                        className="photo-container"
                        key={index}
                        ref={div => this.photoContainers[index] = div}
                    >
                        <img src={photo} alt="" />
                    </div>
                ))}
            </div>
        )
    }
};

export default PhotoAnimation;