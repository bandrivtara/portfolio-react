import React from 'react';
import HomeNav from '../HomeNav/HomeNav'
import style from './About.scss';
import { Link } from 'react-router-dom';

const About = (props) => {
    return (
        <div class='main page'>
            <div class='about'></div>
            <Link class="skills centered" to="/">Hello</Link>
        </div>
    )
}

export default About;