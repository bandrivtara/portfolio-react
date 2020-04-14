import React from 'react';

import style from './ContactNav.scss';
import { Fragment } from 'react';

const ContactNav = (props) => {
  return (
    <Fragment>
      <hr className="contact-nav--v-line"/>
      <div>
        <h2 class="contact-nav--vertical show-second">Contact me</h2>
      </div>
    </Fragment>
  )
}

export default ContactNav;