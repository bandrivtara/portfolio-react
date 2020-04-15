import React, { useState } from 'react';

import AnimationEye from '../../Animations/AnimationEye';
import { Link } from 'react-router-dom';
import style from './Projects.scss';

import projectDeskImage from '../../assets/DeskOfPlans.jpg';
import projectPortfolioImage from '../../assets/portfolio-react.jpg';
import projectSNImage from '../../assets/SocialNetwork.png';
import projectLetsSurfImage from '../../assets/LetsSurf.png';

let buttons = [
  {
    id: 1,
    name: 'Social Network SPA',
    descr: 'A social network analogue with server requests. Used css-module to style SPA. The structure is divided into three main blocks: User Interface, Business Logic Layer and API files requests. Was using redux like global storage. Currently profile page, friends page, homepage and authorization have been created. A dialog page and a music player are currently being developed.',
    image: projectSNImage,
    skills: ['React', 'Redux', 'React-Router', 'REST API', 'css-module'],
    live: 'https://bandrivtara.github.io/SocialNetworkSite/',
    code: 'https://github.com/bandrivtara/SocialNetworkSite'
  },
  {
    id: 2,
    name: 'Lines Portfolio SPA',
    descr: 'This page is done with the main aim for portfolio. Style is executed with combination of the following technique: grid-layout, react-TransitionGroup, Sass. All animations are done without the use of any support libraries.',
    image: projectPortfolioImage,
    skills: ['React ', 'Sass ', 'React-Router', 'Transition Group']
  },
  {
    id: 3,
    name: 'Lets Surf!',
    descr: 'Landing project, witch was writing with BEM method. Made using a modern template with animations, sliders and responsiveness. Used libraries animate.css, wow.js, slick) ',
    image: projectLetsSurfImage,
    skills: ['Gulp', 'Sass', 'jQuery', 'RWD'],
    live: 'https://bandrivtara.github.io/LetsSurf-sass-gulp4-bem/',
    code: 'https://github.com/bandrivtara/LetsSurf-sass-gulp4-bem.git'
  },
  {
    id: 4,
    name: 'Desk Of Plans',
    descr: 'My first Project. Design made in the quality of a motivational board (list). A real target table has been restored',
    image: projectDeskImage,
    skills: ['JavaScript', 'jQuery', 'SVG'],
    live: 'https://bandrivtara.github.io/DeskOfPlans-js-jquery/',
    code: 'https://github.com/bandrivtara/DeskOfPlans-js-jquery.git'
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
      .map((elem, index) =>
        <div className="descr-text">
          <h3 key={index}>{elem.descr}</h3>
          <div className="links">
            <a href={elem.code} target="_blank">Code</a>
            <a href={elem.live} target="_blank">Live</a>
          </div>
        </div>
      )
  }
  let takeImage = () => {
    return buttons.filter(elem => elem.id == project)
      .map((elem, index) =>
        <img key={index} src={elem.image} alt="image of webpage" />
      )
  }
  let takeSkills = () => {
    return buttons.filter(elem => elem.id == project)
      .map(elem => elem.skills.map((elem, index) => <button key={index}>{elem}</button>)
      )
  }
  let takeName = () => {
    return buttons.filter(elem => elem.id == project)
      .map((elem, index) => <h3 key={index}>{elem.name}</h3>)
  }


  return (
    <div class="main page">
      <div className="projects__list centered">
        {buttons.map(elem =>
          <button
            key={elem.id}
            className={project == elem.id ? 'active' : null}
            onClick={() => changeProject(elem.id)}
          >
            <h3>Project {elem.id}</h3>
            <hr className="projects__list--btn-underline" />
          </button>
        )}
      </div>
      <div className="projects__descriptions">
        {project == 0 ? <h3>Choose the Project to see his description and live picture.</h3> : takeDescr()}
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
          {project == 0 ? <h3>Descriptions</h3> : takeName()}
        </div>
        <div className="projects__title--right centered">
          <h3>Visual</h3>
        </div>
      </div>
    </div>
  )
}

export default Projects;