import React, { useState } from "react";

import "./Projects.scss";

import { projectsData } from "../../dataBase/ProjectsData";
import List from "./ProjectsElements/List";
import Description from "./ProjectsElements/Description";
import Visual from "./ProjectsElements/Visual";
import Back from "./ProjectsElements/Back";
import Filter from "./ProjectsElements/Filter";
import Title from "./ProjectsElements/Title";


const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  
  return (
    <div className="main page">
      <List
        projectsData={projectsData}
        changeProject={setActiveProject}
        activeProject={activeProject}
      />
      <Title activeProject={activeProject}/>
      <Description activeProject={activeProject} />
      <Visual activeProject={activeProject}/>
      <Back />
      <Filter activeProject={activeProject} projectsData={projectsData}/>
    </div>
  );
};

export default Projects;
