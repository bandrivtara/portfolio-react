import React from 'react';

const Description = (props) => {

  let takeDescr = () => {
    return props.projectsData.filter(elem => elem.id === props.project)
      .map((elem, index) =>
        <div key={index} className="descr-text">
          <h3>{elem.descr}</h3>
          <div className="links">
            <a href={elem.code} target="_blank" rel="noopener noreferrer">Code</a>
            <a href={elem.live} target="_blank" rel="noopener noreferrer">Live</a>
          </div>
        </div>
      )
  }

  return (
    <div className="projects__descriptions">
      {props.project === 0 ? <h3>Choose the Project to see his description and live picture.</h3> : takeDescr()}
    </div>
  )
}

export default Description;