import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AnimationContact from '../../Animations/AnimationContact';

import style from './Contact.scss';

const Contact = (props) => {
  return (
    <div class="main page">
      <div className="contact__call-picture centered">
        <AnimationContact />
      </div>
      <div className="contact__social-net centered">
        <h3>Social</h3>
      </div>
      <div className="contact__form centered">
        <h3>Form</h3>
      </div>
      <div className="contact__author centered">
        <h3>Author</h3>
      </div>
      <Link class="contact__back contact__back--vertical centered" to="/">
        <h2>Go to main</h2>
        <hr className="contact__back--v-line" />
      </Link>
    </div>
  )
}

export default Contact;