import React, { Fragment } from 'react';

import './ProjectsNav.scss';

const ProjectsNav = (props) => {
  return (
    <Fragment>
      <div>
        <h3 className="show-second"><span>Projects</span> will show you my skills <br /><span>that</span> I improve everyday. <br /><span>I</span> hope you'll enjoy my projects or <br /><span>already</span> enjoy them. <br /><span>Have</span> fun!</h3>
      </div>
      <hr className="projects-nav--v-line-left" />
      <hr className="projects-nav--v-line-right" />
      <hr className="projects-nav--h-line" />
    </Fragment>
  )
}

export default ProjectsNav;