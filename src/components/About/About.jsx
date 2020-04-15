import React from 'react';
import HomeNav from '../HomeNav/HomeNav'
import style from './About.scss';
import { Link } from 'react-router-dom';
import myphoto from '../../assets/photo.jpg'

const About = (props) => {
    return (
        <div class='main page'>
            <div className="about__name centered">
                <h2>Taras Bandrivskyy</h2>
            </div>
            <div className="about__photo centered">
                <img src={myphoto} alt="" />
            </div>
            <div className="about__story centered">
                <p>
                    In college, programming has always appealed to me, and I've always known that I want to work with computers. In all IT technology I wanted to know how to create a website. And so after graduation I started my adventure with programming. After completing the course and self-learning, I'm ready to start the road as a Junior Front End WEB Developer, working diligently on myself and on the development of the company.
                </p>
            </div>
            <div className="about__hobbies centered">
                <h3>More information about me you can find on the left side of my 
                    <a href="https://bandrivtara.github.io/DeskOfPlans-js-jquery/" target="_blank"> Desk Of Plans</a>
                </h3>
            </div>
            <div className="about__link-right centered">
            </div>
            <Link class="about__back about__back--vertical centered" to="/">
                <h2>Go to main</h2>
                <hr className="about__back--v-line" />
            </Link>
        </div>
    )
}

export default About;