import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../../../../store/functions'
import classes from './UserPageExactly.module.css';

const UserPageExactly = () => {
    const params = useParams();
    const data = getData();

    const result = data.find(object => {
        return object.Name === params.id;
    });

    return (
        <div className={classes.optionsArray}>
            <span className={classes.listItem}>ID: {result.ID}</span>
            <span className={classes.listItem}>Name: {result.Name}</span>
            <span className={classes.listItem}>Condition: {result.Condition ? "true" : "false"}</span>
            <span className={classes.listItem}>Email: {result.Email}</span>
            <span className={classes.listItem}>Adresses: {result.Adresses.join(', ')}</span>
        </div>
    );
};

export default UserPageExactly;