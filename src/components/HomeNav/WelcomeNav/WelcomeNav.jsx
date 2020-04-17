import React from 'react';

import './WelcomeNav.scss';

const WelcomeNav = (props) => {
    return (
        <div className='welcome centered'>
            <h1><span className="introduce show-first">Hello! My name is Taras <br /></span>
                <span className="show-second">Welcome to my portfolio <br /> Front End Developer</span></h1>
        </div>
    )
}

export default WelcomeNav;