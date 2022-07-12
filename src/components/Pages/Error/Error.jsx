import React from 'react';
import classes from './Error.module.css';

const Error = () => {
    return (
        <div>
            <div className={classes.zagError}>404</div>
            <div className={classes.zagError}>Something went wrong :'(</div>
        </div>
    );
};

export default Error;