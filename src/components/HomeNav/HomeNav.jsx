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
            <Link className="about-nav" to="/about"><AboutNav /></Link>
            <Link className="projects-nav" to="/projects"><ProjectsNav /></Link>
            <Link className="skills-nav" to="/skills"><SkillsNav /></Link>
            <Link className="contact-nav centered" to="/contact"><ContactNav /></Link>
        </div>
    )
}

export default HomeNav;