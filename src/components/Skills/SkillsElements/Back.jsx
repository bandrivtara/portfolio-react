import React from 'react';

import { Link } from 'react-router-dom';

const Back = (props) => {
    return (
        <Link className="skills__back skills__back--vertical centered btn--go-to" to="/">
            <h2>Go to main</h2>
            <hr className="skills__back--v-line" />
        </Link>
    )
}

export default Back;