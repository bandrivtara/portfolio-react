import React from 'react';

import './ContactNav.scss';
import { Fragment } from 'react';

const ContactNav = (props) => {
  return (
    <Fragment>
      <hr className="contact-nav--v-line" />
      <div>
        <h2 className="contact-nav--vertical">Contact me</h2>
      </div>
    </Fragment>
  )
}

export default ContactNav;