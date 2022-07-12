import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tableData from '../../../store/data.json';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import classes from './FirstPage.module.css';



const data = JSON.parse(JSON.stringify(tableData));
console.log(data);



const FirstPage = () => {
    const router = useNavigate();
    const [name, setName] = useState('');

    const goToName = (name) => {
        setName(name);
        router(`/first-page/${name}`);
    }

    const columns = [
        { title: 'ID', dataIndex: 'ID', key: 'ID' },
        { 
            title: 'Name', 
            dataIndex: 'Name', 
            key: 'Name' ,
            render: (item) => <a onClick={() => goToName(item)}>{item}</a>
        },
        {
            title: 'Condition', 
            dataIndex: 'Condition', 
            key: 'Condition',
            render: (bool) => bool ? "true" : "false"
        },
        { title: 'Email', dataIndex: 'Email', key: 'Email' },
        { 
            title: 'Adresses', 
            dataIndex: 'Adresses', 
            key: 'Adresses',
            render: (item) => item + ' '
        },
    ];

    return (
        <div className={classes.Wrapper}>
            <Table
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};

export default FirstPage;