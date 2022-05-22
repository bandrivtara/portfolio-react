import React from 'react';

const List = ({activeProject, projectsData, changeProject}) => {

  return (
    <div className="projects__list centered">
      {projectsData.commercial.map(elem =>
        <button
          key={elem.id}
          className={activeProject && activeProject.id === elem.id ? 'active' : null}
          onClick={() => changeProject(elem)}
        >
          <h3>{elem.name}</h3>
        </button>
      )}
      {projectsData.training.map(elem =>
        <button
          key={elem.id}
          className={activeProject && activeProject.id === elem.id ? 'active' : null}
          onClick={() => changeProject(elem)}
        >
          <h3>{elem.name}</h3>
        </button>
      )}
    </div>
  )
}

export default List;