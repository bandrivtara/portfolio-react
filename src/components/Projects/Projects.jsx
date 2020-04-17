import React, { useState } from 'react';

import './Projects.scss';

import { projectsData } from '../../dataBase/ProjectsData';
import List from './ProjectsElements/List';
import Description from './ProjectsElements/Description';
import Visual from './ProjectsElements/Visual';
import Back from './ProjectsElements/Back';
import Filter from './ProjectsElements/Filter';
import Title from './ProjectsElements/Title';

const Projects = (props) => {
  const [project, setProject] = useState(0);

  const changeProject = (number) => {
    if (number === project) {
      setProject(0);
    } else {
      setProject(number);
    }
  }
  
  return (
    <div className="main page">
      <List projectsData={projectsData} changeProject={changeProject} project={project}/>
      <Description project={project} projectsData={projectsData}/>
      <Visual project={project} projectsData={projectsData}/>
      <Back />
      <Filter project={project} projectsData={projectsData}/>
      <Title project={project} projectsData={projectsData}/>
    </div>
  )
}

export default Projects;