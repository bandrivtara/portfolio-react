import React, { Fragment } from "react";

import "./ProjectsNav.scss";

const ProjectsNav = () => {
  return (
    <Fragment>
      <div>
        <h3 className="show-second">
          <span>Commercial</span> projects with
          <br />
          <span>Experience</span> that I gained <br />
          <span>And</span> how am I
          <br />
          <span>Training</span> myself and doing <br />
          <span>Projects</span> and skills improvements
        </h3>
      </div>
      <hr className="projects-nav--v-line-left" />
      <hr className="projects-nav--v-line-right" />
      <hr className="projects-nav--h-line" />
    </Fragment>
  );
};

export default ProjectsNav;
