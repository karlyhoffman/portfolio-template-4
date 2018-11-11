import React from 'react';
import SplitString from "../utils/SplitString";

const IntroSection = () => {

    let bgLines = [];
    for (let i = 0; i < 4; i++) {
        bgLines.push(<div className="bg-line" key={i} />);
    }

    return (
        <section id="intro" className="active animate">
            <SplitString elementTag="h1">Karly Hoffman</SplitString>

            <div className="subhead appear">
                <div className="detail">{bgLines}</div>
                <p>Chicago-based Frontend Developer.</p>
            </div>
        </section>
    )
}

export default IntroSection;