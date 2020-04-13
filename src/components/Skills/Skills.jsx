import React from 'react';
import { Link } from 'react-router-dom';
import style from './Skills.scss';
import AnimationPerson from '../../AnimationsKey/AnimationPerson';

const Skills = (props) => {
  return (
    <div class="main page">
      <div className="skills__info centered">
        <h3>Info</h3>
      </div>
      <div className="skills__description centered">
        <h3>Description</h3>
      </div>
      <div className="skills__portret centered">
        <AnimationPerson />
      </div>
      <div className="skills__filter centered">
        <h3>Filter</h3>
      </div>
      <Link class="skills__back skills__back--vertical centered" to="/">
        <h2>Go to main</h2>
        <hr className="skills__back--v-line" />
      </Link>
    </div >
  )
}

export default Skills;