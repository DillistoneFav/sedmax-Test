import React from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../../../../store/functions'
import classes from './UserPageExactly.module.css';

const UserPageExactly = () => {
    const params = useParams();
    const data = getData();

    const result = data.find(object => {
        return object.title === params.id;
    });

    return (
        <div className={classes.optionsArray}>
            <span className={classes.listItem}>ID: {result.key}</span>
            <span className={classes.listItem}>Name: {result.title}</span>
            <span className={classes.listItem}>Condition: {result.Condition ? "true" : "false"}</span>
            <span className={classes.listItem}>Email: {result.Email}</span>
            <span className={classes.listItem}>Adresses: {result.Adresses.join(', ')}</span>
        </div>
    );
};

export default UserPageExactly;