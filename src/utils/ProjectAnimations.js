import React from "react";

const ProjectAnimations = ({ section }) => {

  if ( section === 5 ) {
    return (
      <div id="good-reason">
        <div id="parent-circle">
          <div className="circle blue"></div>
          <div className="circle pink"></div>
          <div className="circle lime"></div>
          <div className="circle orange"></div>
          <div className="circle teal"></div>
        </div>
      </div>
    )
  } else {
    return null;
  }

};

export default ProjectAnimations;