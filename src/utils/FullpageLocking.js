import React, { Component } from "react";
import ReactDOM from "react-dom";

class FullpageLocking extends Component {
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

    handleKeydown = (event) => {
        const keyCodes = { UP: 38, DOWN: 40 }
        const PRESSED_KEY = event.keyCode;
        if (PRESSED_KEY === keyCodes.UP) {
            this.goToPrevSlide();
            event.preventDefault();
        } else if (PRESSED_KEY === keyCodes.DOWN) {
            this.goToNextSlide();
            event.preventDefault();
        }
    }

    handleMobileSwipe = (el) => {
        const _this = this;
        const swipe_det = {};
        swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
        const max_x = 30;  //max x difference for vertical swipe
        const min_y = 50;  //min y swipe for vertical swipe
        const ele = el;
        ele.addEventListener('touchstart', function (e) {
            var t = e.touches[0];
            swipe_det.sX = t.screenX;
            swipe_det.sY = t.screenY;
        }, false);
        ele.addEventListener('touchmove', function (e) {
            var t = e.touches[0];
            swipe_det.eX = t.screenX;
            swipe_det.eY = t.screenY;
        }, false);
        ele.addEventListener('touchend', function (e) {
            //vertical detection
            if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x) && (swipe_det.eY > 0)))) {
                // if (swipe_det.eY > swipe_det.sY) direc = "down";
                // else direc = "up";
                if (swipe_det.eY > swipe_det.sY) _this.goToPrevSlide();
                else _this.goToNextSlide();
            }
            swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
        }, false);
    }

    goToPrevSlide = () => {
        const previousIdx = this.props.activeSection - 1;
        if (previousIdx > -1 && !this.state.isAnimating) this.goToSlide(previousIdx, this.props.activeSection);
    }

    goToNextSlide = () => {
        const nextIndex = this.props.activeSection + 1;
        if (nextIndex < this.state.sections.length && !this.state.isAnimating) this.goToSlide(nextIndex, this.props.activeSection);
    }

    goToSlide = (toSlideIdx, fromSlideIdx) => {
        this.setState({ isAnimating: true });
        this.props.updateSection(toSlideIdx);
        this.state.sections[fromSlideIdx].classList.remove("animate");

        this.onSlideChangeEnd();
    }

    onSlideChangeEnd = () => {
        const _this = this;
        setTimeout(() => {
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
        this.handleMobileSwipe(window);
        window.addEventListener('wheel', this.handleScroll.bind(this));
        window.addEventListener("keydown", this.handleKeydown.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll.bind(this));
        window.removeEventListener("keydown", this.handleKeydown.bind(this));
    }

    shouldComponentUpdate(nextProps) {
        const nextSlideIdx = nextProps.activeSection;
        const currentSlideIx = this.props.activeSection;
        if (nextSlideIdx !== currentSlideIx) {
            this.goToSlide(nextSlideIdx, currentSlideIx);
            return true;
        }
        return false;
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

export default FullpageLocking;