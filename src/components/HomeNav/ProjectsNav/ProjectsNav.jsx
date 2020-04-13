import React, { Fragment } from 'react';

import style from './ProjectsNav.scss';

const ProjectsNav = (props) => {
  return (
    <Fragment>
      <div>
        <h3><span>Projects</span> will show you my skills <br /><span>that</span> I improve everyday. <br /><span>I</span> hope you will enjoy my projects or <br /><span>already</span> enjoy them. <br /><span>Make</span> fun!</h3>
      </div>
      <hr className="projects-nav--v-line-left"/>
      <hr className="projects-nav--v-line-right"/>
      <hr className="projects-nav--h-line"/>
    </Fragment> 
  )
}

export default ProjectsNav;