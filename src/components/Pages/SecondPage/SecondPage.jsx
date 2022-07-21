/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import classes from './SecondPage.module.css';
import { Tree, Table, Modal, Input, Select } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { newDataState, storeData } from '../../../store/dataFunctions';
import { observer } from 'mobx-react';


const SecondPage = observer(() => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [adressesString, setAdressesString] = useState('');
    const [editingKey, setEditingKey] = useState(0);
    const [editingObject, setEditingObject] = useState(
        {
            key: 0,
            title: '',
            Condition: false,
            Email: '',
            Adresses: [],
        }
    );

    const { DirectoryTree } = Tree;
    const { Option } = Select;

    const columns = [
        { 
            title: 'ID', 
            dataIndex: 'key', 
            key: 'key' 
        },
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
        { 
            title: 'Email', 
            dataIndex: 'Email', 
            key: 'Email', },
        { 
            title: 'Adresses', 
            dataIndex: 'Adresses',
            key: 'Adresses', 
            render: (item) => item.join(', ')
        },
        {
            title: 'Actions',
            render: (text, record) => 
                <div className={classes.Actions}>
                    <EditOutlined pointer="true" onClick={() => onEdit(record.key)}/>
                    <DeleteOutlined pointer="true" onClick={() => onDelete(record.key)}/>
                </div> 
        }
    ];

    const onCheck = (checkedNodes, info) => {
        newDataState.onCheck(checkedNodes, info)
    }
//////////////////////////////////////////////////////////////////////
    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleOk = () => {
        setIsModalVisible(false);
        editingObject.Adresses = [...adressesString]
        newDataState.newData[0].children[0].children[editingKey] = editingObject;
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };
/////////////////////////////////////////////////////////////////////
    const onEdit = (key) => {
        setEditingKey(key-1);
        setEditingObject(newDataState.data[0].children[0].children[editingKey])
        showModal();
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
            <Modal className={classes.modalField} title="Edit user" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className={classes.modalArea}>
                    <div className={classes.leftSideModal}>
                        <span>ID:</span>
                        <span>Name:</span>
                        <span>Condition:</span>
                        <span>Email:</span>
                        <span>Adresses:</span>
                    </div>
                    <div className={classes.rightSideModal}>
                        <span>{editingObject.key}</span>
                        <Input defaultValue={editingObject.title} onChange={event => editingObject.title = event.target.value}></Input>
                        <Select
                            defaultValue={editingObject.Condition ? "true" : "false" }
                            onChange={(selectedValue) => editingObject.Condition = selectedValue}
                        >
                            <Option value="true">true</Option>
                            <Option value="false">false</Option>
                        </Select>
                        <Input defaultValue={editingObject.Email} onChange={event => editingObject.Email = event.target.value}></Input>
                        <Input defaultValue={editingObject.Adresses.join(", ")} onChange={event => setAdressesString(event.target.value)}></Input>
                    </div>
                </div>
            </Modal>
        </div>
    );
});


export default SecondPage;