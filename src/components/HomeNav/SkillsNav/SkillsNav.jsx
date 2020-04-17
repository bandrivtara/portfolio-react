import React, { Fragment } from 'react';

import './SkillsNav.scss';

const SkillsNav = (props) => {
  return (
    <Fragment >
      <div>
        <h3 className="show-second"><span>What</span> are my <br /><span>skills</span> and abilities? Or <br /><span>do</span> I have future skills plan? <br /><span>I</span> will show you. Click here to <br /><span>have</span> more information!</h3>
      </div>
      <hr className="skills-nav--v-line-left" />
      <hr className="skills-nav--v-line-right" />
      <hr className="skills-nav--h-line" />
    </Fragment>
  )
}

export default SkillsNav; 