import React from 'react';

import AnimationPerson from '../../../Animations/AnimationPerson';

const Portret = (props) => {

    let showSkillsIcon = () => {
        return props.skillsData.filter(elem => elem.category === props.category)
            .map((elem, index) => <img
                style={{ gridRowStart: elem.row, gridColumnStart: elem.column }}
                className={'icon' + index} src={elem.img} alt=""
                onMouseEnter={() => props.setItem(elem.id)}
                onMouseLeave={() => props.setDefault(elem.id)}
                key={elem.id}
            />)
    }
    return (
        <div className="skills__portret centered">
            <AnimationPerson />
            <div className="skills__icons">
                {showSkillsIcon()}
            </div>
        </div>
    )
}

export default Portret;