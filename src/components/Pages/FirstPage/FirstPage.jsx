import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Table } from 'antd';
import 'antd/dist/antd.css';

import { getData } from '../../../store/functions';
import { AuthContext } from '../../Context/index';

import classes from './FirstPage.module.css';


const FirstPage = () => {
    const {newData, setNewData} = useContext(AuthContext)

    const data = getData();
    console.log(data);
    const router = useNavigate();
    const [name, setName] = useState(undefined);


    //TODO rework with using ID
    const goToName = (selectedRowKey) => {
        setName(selectedRowKey);
        router(`/first-page/${selectedRowKey}`);
    }

    const columns = [
        { title: 'ID', dataIndex: 'key', key: 'key' },
        { 
            title: 'Name', 
            dataIndex: 'title',
            key: 'Name' ,
            render: (name) => <a onClick={() => goToName(name)}>{name}</a>
        },
        {
            title: 'Condition', 
            dataIndex: 'Condition',
            key: 'Condition',
            render: (bool) => bool ? "true" : "false"
        },
        { title: 'Email', dataIndex: 'Email', key: 'Email', },
        { 
            title: 'Adresses', 
            dataIndex: 'Adresses',
            key: 'Adresses', 
            render: (item) => item.join(', ')
        },
    ];

    return (
        <div className={classes.Wrapper}>
            <Table
                rowKey={data.key}
                columns={columns}
                dataSource={data[0].children[0].children}
            />
        </div>
    );
};

export default FirstPage;