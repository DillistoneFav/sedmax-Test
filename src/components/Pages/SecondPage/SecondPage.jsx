/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './SecondPage.module.css';
import { Tree, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { getData } from '../../../store/functions';
import { AuthContext } from '../../Context/index';

const SecondPage = () => {
    const {newData, setNewData} = useContext(AuthContext)

    const { DirectoryTree } = Tree;
    
    const router = useNavigate();

    const [hasData, setHasData] = useState(false);
    const [name, setName] = useState('');

    const data = getData();

    useEffect(() => {
        
    },[newData])

    const goToName = (name) => {
        setName(name);
        router(`/first-page/${name}`);
    }

    const columns = [
        { title: 'ID', dataIndex: 'key', key: 'key' },
        { 
            title: 'Name', 
            dataIndex: 'title',
            key: 'Name' ,
            render: (item) => <a onClick={() => goToName(item)}>{item}</a>
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
            render: (item) => item + ' '
        },
        {
            title: 'Actions',
            render: () => <div className={classes.Actions}><EditOutlined/><DeleteOutlined/></div>
        }
    ];

    const onCheck = (checkedKeys, info) => {
        if (info.checkedNodes.length > data.length) {
            setNewData(data)
        } else {
            setNewData(info.checkedNodes);
        }
        console.log(newData);
    }


    return (
        <div className={classes.secondPage}>
            <div className={classes.treeComp}>
                <DirectoryTree
                    defaultExpandedKeys={['parent 1-0']}
                    treeData={data}
                    onCheck={onCheck}
                    checkable
                />
            </div>
            <div className={classes.tableComp}>
                <Table
                    columns={columns}
                    dataSource={newData}
                />
            </div>
        </div>
    );
};

export default SecondPage;