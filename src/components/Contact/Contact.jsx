import React from 'react';
import AnimationContact from '../../Animations/AnimationContact';

import './Contact.scss';
import Social from './ContactElements/Social';
import Form from './ContactElements/Form';
import Author from './ContactElements/Author';
import Back from './ContactElements/Back';

const Contact = (props) => {
  return (
    <div className="main page">
      <div className="contact__call-picture centered">
        <AnimationContact />
      </div>
      <Social />
      <Form />
      <Author />
      <Back />
    </div>
  )
}

export default Contact;