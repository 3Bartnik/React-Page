import React from 'react';
import {Redirect} from 'react-router-dom';

const Error = () => {
    return (

        <Redirect to="/" />
        // <div> Page not found!</div>
    )
}

export default Error;