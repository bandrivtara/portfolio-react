import React from 'react';

import './Hello.scss';

const Hello = (props) => {
    return (
        <div className="hello centered">
            <div className="hello__text show-first">
                <span className="hello__text--big-letter">Hello</span>
                <h2>My <br className="mob"/>name is <br /> Taras</h2>
            </div>
        </div>

    )
}

export default Hello;