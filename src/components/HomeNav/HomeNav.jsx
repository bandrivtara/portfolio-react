import React from 'react';
import style from './HomeNav.scss';

import WelcomeNav from './WelcomeNav/WelcomeNav';
import AboutNav from './AboutNav/AboutNav';
import ContactNav from './ContactNav/ContactNav';
import ProjectsNav from './ProjectsNav/ProjectsNav';
import SkillsNav from './SkillsNav/SkillsNav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  

const HomeNav = (props) => {
    return (
        <div className="main page">
            <WelcomeNav/>
            <Link className="about centered" to="/about"><AboutNav /></Link>
            <Link className="projects" to="/projects"><ProjectsNav /></Link>
            <Link className="skills" to="/skills"><SkillsNav /></Link>
            <Link className="contact centered" to="/contact"><ContactNav /></Link>
        </div>
    )
}

export default HomeNav;