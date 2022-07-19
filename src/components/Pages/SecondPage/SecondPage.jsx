/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import classes from './SecondPage.module.css';
import { Tree, Table, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { newDataState } from '../../../store/dataFunctions';
import { observer } from 'mobx-react';

const SecondPage = observer(() => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const [isEditable, setIsEditable] = useState(false);

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
            render: () => 
                <div className={classes.Actions}>
                    <EditOutlined pointer="true" onClick={onEdit}/>
                    <DeleteOutlined pointer="true" onClick={onDelete}/>
                </div> 
        }
    ];

    const onCheck = (checkedNodes, info) => {
        newDataState.onCheck(checkedNodes, info)
    }

    const onEdit = (extraCommonProps) => {
        showModal();
        console.log(extraCommonProps);
    }

    const onDelete = (extraCommonProps) => {
        console.log(extraCommonProps);
    }


    return (
        <div className={classes.secondPage}>
            <div className={classes.treeComp}>
                <DirectoryTree
                    defaultExpandedKeys={['parent 1-0']}
                    checkedKeys={newDataState.checkedKeys}
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
            <Modal title="Edit user" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
});


export default SecondPage;