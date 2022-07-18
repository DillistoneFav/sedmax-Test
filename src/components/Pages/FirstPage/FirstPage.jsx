import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Table } from 'antd';
import 'antd/dist/antd.css';

import classes from './FirstPage.module.css';
import { storeData, newDataState } from '../../../store/dataFunctions';

const FirstPage = () => {
    const data = storeData.getData();

    const router = useNavigate();

    const goToSecondPage = (id) => {
        newDataState.setNewData(data[0].children[0].children[id]);
        console.log(data[0].children[0].children[id-1]);
        router('/second-page/');
    }

    const columns = [
        { title: 'ID', dataIndex: 'key', key: 'key' },
        { 
            title: 'Name', 
            dataIndex: 'title',
            key: 'Name' ,
            render: (text, record) => <a onClick={() => goToSecondPage(record.key)}>{text}</a>
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