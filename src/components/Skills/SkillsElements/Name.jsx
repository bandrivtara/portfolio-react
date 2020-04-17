import React from 'react';

const Name = (props) => {

    let showSkillsName = () => {
        return props.skillsData.filter(elem => elem.id === props.skill)
            .map((elem, index) => <h3 key={index}>{elem.name}</h3>)
    }

    return (
        <div className="skills__name centered">
            {props.skill === 0 ? <h3>My skills</h3> : showSkillsName()}
        </div>
    )
}

export default Name;