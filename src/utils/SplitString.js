import React from "react";

const SplitString = ({ elementTag, children }) => {

    const ElementTag = elementTag;

    const splitString = (string) => (
        string.split(" ")
            .map(text => `<span class="word" data-headline="${text}"></span>`)
            .join(" ")
    )

    return (
        <ElementTag 
            className="highlight"
            dangerouslySetInnerHTML={{ __html: splitString(children) }}
        />
    );
};

export default SplitString;
