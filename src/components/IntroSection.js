import React from 'react';

const IntroSection = () => {

    let bgLines = [];
    for (let i = 0; i < 4; i++) {
        bgLines.push(<div className="bg-line" key={i} />);
    }

    return (
        <section id="intro" className="animate">
            <h1>Karly Hoffman</h1>

            <div className="subhead">
                <div className="detail">{bgLines}</div>
                <p className="subhead">Chicago based Front End Developer.</p>
            </div>
        </section>
    )
}

export default IntroSection;