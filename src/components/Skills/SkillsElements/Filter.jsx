import React from 'react';

const Filter = (props) => {
    return (
        <div className="skills__filter centered">
            <div className="skills__filter--left centered"></div>
            <div className="skills__filter--center centered">
                <button className={props.category === 'hard' ? 'active' : null} 
                onClick={() => { props.filterCategory('hard') }}><h3>Hard</h3></button>
                <button className={props.category === 'soft' ? 'active' : null} 
                onClick={() => { props.filterCategory('soft') }}><h3>Soft</h3></button>
            </div>
            <div className="skills__filter--right centered"></div>
        </div>
    )
}

export default Filter;