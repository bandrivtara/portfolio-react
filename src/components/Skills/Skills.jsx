import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Skills.scss';
import AnimationPerson from '../../Animations/AnimationPerson';

import image from '../../assets/skills-icon/react.png'

let skills = [
  {
    id: 1, name: 'JavaScript', category: 'all',
    info: 'blabla',
    img: image,
    row: 2,
    column: 2
  },
  {
    id: 2, name: 'React', category: 'skills',
    info: 'blabla2',
    img: image,
    row: 1,
    column: 8
  },
  {
    id: 3, name: 'CSS', category: 'skills',
    info: 'blabla3',
    img: image,
    row: 6,
    column: 1
  },
  {
    id: 4, name: 'GIT', category: 'hard',
    info: 'blabla4',
    img: image,
    row: 4,
    column: 9
  },
  {
    id: 5, name: 'HTML', category: 'soft',
    info: 'blabla5',
    img: image,
    row: 4,
    column: 3
  },
]

const Skills = (props) => {
  const [skill, setSkill] = useState(0);
  const [category, setCategory] = useState('all');


  const setItem = (id) => {
    setSkill(id);
  }
  const setDefault = (id) => {
    setSkill(0);
  }


  let showSkillsIcon = () => {
    if (category === 'all') {
      return skills.map(elem => <img
        style={{ gridRowStart: elem.row, gridColumnStart: elem.column }}
        className={'icon' + elem.id} src={elem.img} alt=""
        onMouseEnter={() => setItem(elem.id)}
        onMouseLeave={() => setDefault(elem.id)}
        key={elem.id}
      />)
    } else {
    return skills.filter(elem=> elem.category === category)
    .map(elem => <img
      style={{ gridRowStart: elem.row, gridColumnStart: elem.column }}
      className={'icon' + elem.id} src={elem.img} alt=""
      onMouseEnter={() => setItem(elem.id)}
      onMouseLeave={() => setDefault(elem.id)}
      key={elem.id}
    />)}
  }

  let showSkillsName = () => {
    return skills.filter(elem => elem.id === skill)
      .map((elem, index) => <h3 key={index}>{elem.name}</h3>)
  }

  let showSkillsInfo = () => {
    return skills.filter(elem => elem.id === skill)
      .map((elem, index) => <h3 key={index}>{elem.info}</h3>)
  }

  let filterCategory = (categoryToFilter) => {
    if (categoryToFilter === category) {
      setCategory('all')
    } else {
      setCategory(categoryToFilter);
    }
  }

  return (
    <div class="main page">
      <div className="skills__info centered">
        {skill === 0 ? <h3>Hover on skills icon to see more information</h3> : showSkillsInfo()}
      </div>
      <div className="skills__name centered">
        {skill === 0 ? <h3>My skills</h3> : showSkillsName()}
      </div>
      <div className="skills__portret centered">
        <AnimationPerson />
        <div className="skills__icons">
          {showSkillsIcon()}
          <div className="skills__icons--head"></div>
          <div className="skills__icons--body"></div>
        </div>
      </div>
      <div className="skills__filter centered">
        <div className="skills__filter--left centered"></div>
        <div className="skills__filter--center centered">
          <button onClick={()=>{filterCategory('all')}}>All</button>
          <button onClick={()=>{filterCategory('hard')}}>Hard</button>
          <button onClick={()=>{filterCategory('soft')}}>Soft</button>
          <button onClick={()=>{filterCategory('inPlans')}}>I'm workinf with...</button>
        </div>
        <div className="skills__filter--right centered"></div>
      </div>
      <Link className="skills__back skills__back--vertical centered" to="/">
        <h2>Go to main</h2>
        <hr className="skills__back--v-line" />
      </Link>
    </div >
  )
}

export default Skills;