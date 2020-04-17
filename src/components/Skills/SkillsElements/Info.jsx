import React from 'react';

const Info = (props) => {

    let showSkillsInfo = () => {
        return props.skillsData.filter(elem => elem.id === props.skill)
            .map((elem, index) => <h3 key={index}>{elem.info}</h3>)
    }

    return (
        <div className="skills__info centered">
            {props.skill === 0 ? <h3>Hover on skills icon to see more information</h3> : showSkillsInfo()}
        </div>
    )
}

export default Info;