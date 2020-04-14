import React, { useState } from 'react';

import AnimationEye from '../../Animations/AnimationEye';
import { Link } from 'react-router-dom';
import style from './Projects.scss';

let buttons = [
  {
    id: 1,
    descr: 'I used the skills: Gulp, Sass, jquery, RWD. (Also animate.css, wow.js, slick). Description: main project, made using a modern template with animations, sliders and responsiveness.',
    image: 'image1',
    skills: ['React', 'Sass ', 'Gulp ']
  },
  {
    id: 2,
    descr: 'Design made in the quality of a motivational board (list). A real target table has been restored',
    image: 'image2',
    skills: ['React ', 'Sass ', 'Gulp ']
  },
  {
    id: 3,
    descr: 'I used the skills: React JS. Description: done on the drawing of the board - left side adds and after clicking deletes notes; the law adds things to do, after clicking on them in the bottom, there is the option of filtering + deleting done things.',
    image: 'image134',
    skills: ['React ', 'Sass ', 'Gulp ']
  },
  {
    id: 4,
    descr: '123',
    image: 'image13',
    skills: ['React ', 'Sass ', 'Gulp ']
  }
]

const Projects = (props) => {
  const [project, setProject] = useState(0);

  const changeProject = (number) => {
    if (number == project) {
      setProject(0);
    } else {
      setProject(number);
    }
  }

  let takeDescr = () => {
    return buttons.filter(elem => elem.id == project)
      .map(elem =>
        <h3>{elem.descr}</h3>
      )
  }
  let takeImage = () => {
    return buttons.filter(elem => elem.id == project)
      .map(elem =>
        <h3>{elem.image}</h3>
      )
  }
  let takeSkills = () => {
    return buttons.filter(elem => elem.id == project)
      .map(elem => elem.skills.map(elem => <button>{elem}</button>)
      )
  }


  return (
    <div class="main page">
      <div className="projects__list centered">
        {buttons.map(elem =>
          <button
            className={project == elem.id ? 'active' : null}
            onClick={() => changeProject(elem.id)}
          >
            <h3>Project {elem.id}</h3>
            <hr className="projects__list--btn-underline" />
          </button>
        )}
      </div>
      <div className="projects__descriptions">
        {project == 0 ? <h3>Hello</h3> : takeDescr()}
      </div>
      <div className="projects__visual">
        {project == 0 ? <AnimationEye /> : takeImage()}
      </div>
      <Link class="projects__back projects__back--vertical centered" to="/">
        <h2>Go to main</h2>
        <hr className="projects__back--v-line" />
      </Link>
      <div className="projects__filter">
        <div className="projects__filter--left centered"></div>
        <div className="projects__filter--right centered">
          {takeSkills()}
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