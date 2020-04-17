import React from 'react';
import myphoto from '../../../assets/photo.jpg';

const Photo = () => {
    return (
        <div className="about__photo centered">
            <img src={myphoto} alt="" className="show-second"/>
        </div>
    )
}

export default Photo;