import React from 'react';
import { Link } from 'react-router-dom';

const Back = (props) => {

  return (
    <Link className="projects__back projects__back--vertical centered" to="/">
      <h2>Go to main</h2>
      <hr className="projects__back--v-line" />
    </Link>
  )
}

export default Back;