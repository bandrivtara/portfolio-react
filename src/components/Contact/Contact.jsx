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
        <h3>Contact with me in...</h3>
        <div className="facebook">
          <h3><a href="https://www.facebook.com/tarasbandrivskyy">Facebook</a></h3>
        </div>
        <div className="linkedIn">
          <h3><a href="https://www.linkedin.com/in/taras-bandrivskyy-1843b71a2/">LinkedIn </a></h3>
        </div>
        <h3>or...</h3>
        <div className="number">
          <h3>+48-792-429-919</h3>
        </div>
        <div className="number">
          <h3>bandrivtara@gmail.com</h3>
        </div>
      </div>
      <div className="contact__form centered">
        <form class="form" action="https://formspree.io/moqwdgwl" method="POST">
          <h3>Or send me a message...</h3>
          <input type="text" name="name" placeholder="name" required /><br />
          <input type="email" name="e-mail" placeholder="e-mail" required /><br />
          <input type="text" name="message" placeholder="topic" required /><br />
          <textarea class="massage" name="text" placeholder="message"></textarea>
          <div class="button">
            <button type="submit" class="btn-color">Wyślij</button>
            <img class="airplane" src="images/airplane.png" alt="" />
          </div>
        </form>
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