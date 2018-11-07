import React, { Component } from "react";
import ReactDOM from "react-dom";

class AnimationContainer extends Component {
    constructor(props) {
        super()

        this.state = {
            sections: [],
            isAnimating: false
        }

        this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
    }

    findSections = () => {
        const node = ReactDOM.findDOMNode(this);
        if (node instanceof HTMLElement) {
            const sectionsArray = [].slice.call(node.getElementsByTagName("section"));
            // only update state if nodelist changes
            if (this.state.sections.length !== sectionsArray.length) this.setState({ sections: sectionsArray });
            this.state.sections.forEach((item, i) => {
                if (item !== sectionsArray[i]) this.setState({ sections: sectionsArray });
            })
        }
    }

    handleScroll = (event) => {
        const delta = event.deltaY / 30 || -event.deltaY;
        if (delta < -1) this.goToPrevSlide();
        else if (delta > 1) this.goToNextSlide();
        event.preventDefault();
    }

    goToPrevSlide = () => {
        const previousIdx = this.props.activeSection - 1;
        if (previousIdx > -1 && !this.state.isAnimating) 
            this.goToSlide("prev", previousIdx, this.onSlideChangeEnd);
    }

    goToNextSlide = () => {
        const nextIndex = this.props.activeSection + 1;
        if (nextIndex < this.state.sections.length && !this.state.isAnimating) 
            this.goToSlide("next", nextIndex, this.onSlideChangeEnd);
    }

    goToSlide = (dir, slideIdx, callback) => {
        this.setState({ isAnimating: true });
        this.props.updateSection(slideIdx);

        let prevSlide;
        if (dir === "next") {
            prevSlide = this.state.sections[this.props.activeSection - 1];
        } 
        else if (dir === "prev") {
            prevSlide = this.state.sections[this.props.activeSection + 1];
        }
        prevSlide.classList.remove("animate");

        callback();
    }

    onSlideChangeEnd = () => {
        const _this = this;

        setTimeout(()=> { 
            _this.setState({ isAnimating: false });

            _this.state.sections.forEach((section) => { // add/remove animation classes
                section !== _this.state.sections[_this.props.activeSection] ? 
                    section.classList.remove("active") : 
                    section.classList.add("active", "animate");
            });
        }, 750); // add pause to prevent skipping slides
    }

    componentDidMount() {
        this.findSections();
        window.addEventListener('wheel', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll.bind(this));
    }
    
    render() {
        const { 
            children, 
            activeSection
        } = this.props;

        return (
            <div id="fp-container" className={`active-${activeSection}`}>
                {children}
            </div>
        );
    }
}

export default AnimationContainer;