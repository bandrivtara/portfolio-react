import React from 'react';

import './About.scss';

import Name from './AboutElements/Name';
import Photo from './AboutElements/Photo';
import Story from './AboutElements/Story';
import Hobbies from './AboutElements/Hobbies';
import Back from './AboutElements/Back';

const About = (props) => {
    return (
        <div className='main page'>
            <Name />
            <Photo />
            <Story />
            <Hobbies />
            <Back />
        </div>
    )
}

export default About;