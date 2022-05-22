import React from "react";

const Title = ({ activeProject }) => {
  return (
    <div className="projects__title">
      <div className="projects__title--left centered">
        {activeProject ? <h3>{activeProject.name}</h3> : <h3>Descriptions</h3>}
      </div>
      <div className="projects__title--right centered">
        <h3>{activeProject && activeProject.type === "commercial" ? "Participation" : "Visual"}</h3>
      </div>
    </div>
  );
};

export default Title;
