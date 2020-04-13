import React, { Fragment } from 'react';

import style from './AboutNav.scss';

const AboutNav = (props) => {
    return (
        <Fragment>
          <div className="about__text">
            <span class="about__text--big-letter">Hello</span>
            <h2>My <br />name is <br /> Taras</h2>
          </div>
          <p>More info about me</p>
          <hr className="about--v-line"/>
        </Fragment>
    )
}

export default AboutNav;