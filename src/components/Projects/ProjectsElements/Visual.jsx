import React from "react";

import AnimationEye from "../../../Animations/AnimationEye";

const Visual = ({ activeProject }) => {
  return (
    <div className="projects__visual">
      {!activeProject ? (
        <AnimationEye />
      ) : activeProject.type === "commercial" ? (
        <h3>{activeProject.participation}</h3>
      ) : (
        <img src={activeProject.image} alt="web" />
      )}
    </div>
  );
};

export default Visual;
