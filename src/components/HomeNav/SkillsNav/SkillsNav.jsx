import React, { Fragment } from 'react';

import style from './SkillsNav.scss';

const SkillsNav = (props) => {
  return (
    <Fragment >
      <div>
        <h3><span>What</span> are my <br /><span>skills</span> and abilities? Or <br /><span>do</span> I have future skills plan? <br /><span>I</span> will show you. Click here to <br /><span>have</span> more information!</h3>
      </div>
      <hr className="skills--v-line-left" />
      <hr className="skills--v-line-right" />
      <hr className="skills--h-line" />
    </Fragment>
  )
}

export default SkillsNav; 