import React from 'react';

import AnimationEye from '../../../Animations/AnimationEye';

const Visual = (props) => {

  let takeImage = () => {
    return props.projectsData.filter(elem => elem.id === props.project)
      .map((elem, index) =>
        <img key={index} src={elem.image} alt="web" />
      )
  }

  return (
    <div className="projects__visual">
      {props.project === 0 ? <AnimationEye /> : takeImage()}
    </div>
  )
}

export default Visual;