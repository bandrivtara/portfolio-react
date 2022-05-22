import React from "react";

const Filter = ({ activeProject }) => (
  <div className="projects__filter">
    <div className="projects__filter--left centered">
      <h3>
        Go to my <a href="https://github.com/bandrivtara">GitHub</a>
      </h3>
    </div>
    <div className="projects__filter--right centered">
      {activeProject &&
        activeProject.skills.map((elem, index) => <h3 key={index}>{elem}</h3>)}
    </div>
  </div>
);

export default Filter;
