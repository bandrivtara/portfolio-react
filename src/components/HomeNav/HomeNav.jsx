import React from 'react';
import './HomeNav.scss';

import WelcomeNav from './WelcomeNav/WelcomeNav';
import Hello from './Hello/Hello'
import AboutNav from './AboutNav/AboutNav';
import ContactNav from './ContactNav/ContactNav';
import ProjectsNav from './ProjectsNav/ProjectsNav';
import SkillsNav from './SkillsNav/SkillsNav';
import { Link } from "react-router-dom";

const HomeNav = (props) => {
    return (
        <div className="main page">
            <WelcomeNav />
            <Hello className="hello centered"/>
            <Link className="about-nav btn--go-to" to="/about"><AboutNav /></Link>
            <Link className="projects-nav btn--go-to" to="/projects"><ProjectsNav /></Link>
            <Link className="skills-nav btn--go-to" to="/skills"><SkillsNav /></Link>
            <Link className="contact-nav centered btn--go-to" to="/contact"><ContactNav /></Link>
        </div>
    )
}

export default HomeNav;