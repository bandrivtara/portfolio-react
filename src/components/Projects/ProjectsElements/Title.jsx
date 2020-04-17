import React from 'react';

const Title = (props) => {

  let takeName = () => {
    return props.projectsData.filter(elem => elem.id === props.project)
      .map((elem, index) => <h3 key={index}>{elem.name}</h3>)
  }

  return (
    <div className="projects__title">
      <div className="projects__title--left centered">
        {props.project === 0 ? <h3>Descriptions</h3> : takeName()}
      </div>
      <div className="projects__title--right centered">
        <h3>Visual</h3>
      </div>
    </div>
  )
}

export default Title;