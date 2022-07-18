/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './SecondPage.module.css';
import { Tree, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { storeData, newDataState } from '../../../store/dataFunctions';

const SecondPage = () => {
    const data = storeData.getData();
    const [newData, setNewData] = useState(newDataState.newData);
    console.log(newData);

    const { DirectoryTree } = Tree;

    let checkedKeys = [];
    for (let item of newData) {
        checkedKeys.push(item.key);
    }
    
    const columns = [
        { title: 'ID', dataIndex: 'key', key: 'key' },
        { 
            title: 'Name', 
            dataIndex: 'title',
            key: 'Name' ,
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
            setNewData(data[0].children[0].children)
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
                    defaultCheckedKeys={checkedKeys}
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