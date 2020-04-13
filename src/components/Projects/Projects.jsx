import React from 'react';

import { Link } from 'react-router-dom';
import style from './Projects.scss';

const Projects = (props) => {
  return (
    <div class="main page">
      <div className="projects__list centered">
        <p>Project 1</p>
        <p>Project 2</p>
        <p>Project 3</p>
        <p>Project 4</p>
      </div>
      <div className="projects__descriptions">

      </div>
      <div className="projects__visual">

      </div>
      <Link class="projects__back projects__back--vertical centered" to="/">
        <h2>Go to main</h2>
        <hr className="projects__back--v-line" />
      </Link>
      <div className="projects__filter">
        <div className="projects__filter--left centered">

        </div>
        <div className="projects__filter--right centered">
          <h3>Filters</h3>
        </div>
      </div>
      <div className="projects__title">
        <div className="projects__title--left centered">
          <h3>Description</h3>
        </div>
        <div className="projects__title--right centered">
          <h3>Visual</h3>
        </div>
      </div>
    </div>
  )
}

export default Projects;