import React, { useState } from 'react';
import './Skills.scss';
import '../../Scss/responsive.scss'
import { skillsData } from '../../dataBase/SkillsData';
import Info from './SkillsElements/Info';
import Name from './SkillsElements/Name';
import Portret from './SkillsElements/Portret';
import Filter from './SkillsElements/Filter';
import Back from './SkillsElements/Back';

const Skills = (props) => {
  const [skill, setSkill] = useState(0);
  const [category, setCategory] = useState('hard');


  let setItem = (id) => {
    setSkill(id);
  }
  let setDefault = () => {
    setSkill(0);
  }
  let filterCategory = (categoryToFilter) => {
    if (categoryToFilter === category) {
      setCategory('hard')
    } else {
      setCategory(categoryToFilter);
    }
  }

  return (
    <div className="main page">
      <Info skillsData={skillsData} skill={skill} />
      <Name skill={skill} skillsData={skillsData} />
      <Portret skill={skill} skillsData={skillsData}
        category={category}
        setDefault={setDefault} setItem={setItem} />
      <Filter filterCategory={filterCategory} category={category} />
      <Back />
    </div >
  )
}

export default Skills;