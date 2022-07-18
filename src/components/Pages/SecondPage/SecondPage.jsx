/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './SecondPage.module.css';
import { Tree, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { storeData, newDataState } from '../../../store/dataFunctions';
import { observer } from 'mobx-react';

const SecondPage = observer(() => {

    const { DirectoryTree } = Tree;

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
            render: (item) => item.join(', ')
        },
        {
            title: 'Actions',
            render: () => <div className={classes.Actions}><EditOutlined/><DeleteOutlined/></div>
        }
    ];

    const onCheck = (checkedNodes, info) => {
        newDataState.onCheck(checkedNodes, info)
    }


    return (
        <div className={classes.secondPage}>
            <div className={classes.treeComp}>
                <DirectoryTree
                    defaultExpandedKeys={['parent 1-0']}
                    defaultCheckedKeys={newDataState.checkedKeys}
                    treeData={newDataState.data}
                    onCheck={onCheck}
                    checkable
                />
            </div>
            <div className={classes.tableComp}>
                <Table
                    columns={columns}
                    dataSource={newDataState.newData}
                />
            </div>
        </div>
    );
});


export default SecondPage;