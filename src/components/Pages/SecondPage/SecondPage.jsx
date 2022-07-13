/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './SecondPage.module.css';
import { Tree, Table } from 'antd';
import 'antd/dist/antd.css';
import { getTree, getData } from '../../../store/functions';

const SecondPage = () => {
    const { DirectoryTree } = Tree;
    
    const router = useNavigate();

    const [newData, setNewData] = useState([]);
    const [hasData, setHasData] = useState(true);
    const [name, setName] = useState('');

    const treeData = getTree();
    const data = getData();
    treeData[0].children[0].children = data;

    const goToName = (name) => {
        setName(name);
        router(`/first-page/${name}`);
    }

    useEffect(() => {

    }, [newData])



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
    ];

    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    useEffect(() => {
        
    })

    const onCheck = (checkedKeys, info) => {
        console.log(info);
        setNewData(info.checkedNodes);
        console.log(newData);
    }


    return (
        <div className={classes.secondPage}>
            <div className={classes.treeComp}>
                <DirectoryTree
                    defaultExpandedKeys={['parent 1-0']}
                    onSelect={onSelect}
                    treeData={treeData}
                    onCheck={onCheck}
                    checkable
                />
            </div>
            <div className={classes.tableComp}>
            {hasData ? 
                <Table
                    columns={columns}
                    dataSource={newData}
                />
                : <h1>Выберите данные в дереве!</h1>
            }
            </div>
        </div>
    );
};

export default SecondPage;