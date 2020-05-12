import React from 'react';

import { Link } from 'react-router-dom';

const Back = () => {
    return (
        <Link className="contact__back contact__back--vertical centered btn--go-to" to="/">
            <h2>Go to main</h2>
            <hr className="contact__back--v-line" />
        </Link>
    )
}

export default Back;