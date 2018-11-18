import React, { Component } from "react";
import { TweenMax, TimelineMax, Sine } from "gsap/all";

import rockoImg from "../assets/images/hennessy/rocko-min.jpg";
import fabricImg from "../assets/images/hennessy/fabric-min.jpg";
import hennessyImg from "../assets/images/hennessy/hennessy-min.jpg";
import streetImg from "../assets/images/hennessy/street-min.jpg";
import victorImg from "../assets/images/hennessy/victor-min.jpg";
import yinImg from "../assets/images/hennessy/yin-min.jpg";

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

    componentWillReceiveProps(nextProps) {
        if (nextProps.section !== this.state.section) {
            this.setState({ section: nextProps.section });
        }
    }

    componentDidUpdate() {
        if (this.state.section === 4) {
            this.masterTimeline.progress(0).tweenTo("part2");
        } else if (this.state.section === 3 && this.masterTimeline.progress() !== 0) {
            this.masterTimeline.play();
        } else if (this.state.section === 5) {
            this.masterTimeline.play();
        }
    }

    photoAnimation() {

        const enterAnimation = () => {
            const tl = new TimelineMax();
            this.photoContainers.forEach( element => {
                const img = element.querySelector('img');
                const randomDistance = Math.random() * (10 - 5) + 5; // min: 5, max: 10
                const enterTween = TweenMax.to(img, 1, {
                    y: `-${randomDistance.toFixed(2)}vw`,
                    opacity: 1,
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
                  opacity: 0,
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