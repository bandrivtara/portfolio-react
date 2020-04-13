import React from 'react';
import HomeNav from '../HomeNav/HomeNav'
import style from './About.scss';
import { Link } from 'react-router-dom';

const About = (props) => {
    return (
        <div class='main page'>
            <div className="about__name centered">
                <h2>Taras Bandrivskyy</h2>
            </div>
            <div className="about__photo centered">
                <h3>Photo</h3>
            </div>
            <div className="about__story centered">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet deserunt unde harum labore veniam earum esse nulla in explicabo eaque?</p>
            </div>
            <div className="about__hobbies centered">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, perferendis?</p>
            </div>
            <div className="about__link-right centered">
                <h3>Right</h3>
            </div>
            <Link class="about__back about__back--vertical centered" to="/">
                <h2>Go to main</h2>
                <hr className="about__back--v-line"/>
            </Link>
        </div>
    )
}

export default About;