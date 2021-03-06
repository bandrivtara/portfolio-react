import React from 'react';

const Filter = (props) => {

  let takeSkills = () => {
    return props.projectsData.filter(elem => elem.id === props.project)
      .map(elem => elem.skills.map((elem, index) => <button key={index}><h3>{elem}</h3></button>)
      )
  }

  return (
    <div className="projects__filter">
      <div className="projects__filter--left centered">
        <h3>Go to my <a href="https://github.com/bandrivtara">GitHub</a></h3>
      </div>
      <div className="projects__filter--right centered">
        {takeSkills()}
      </div>
    </div>
  )
}

export default Filter;