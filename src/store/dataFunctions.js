import { observable, makeAutoObservable } from "mobx";
import tableData from '../store/data.json';


export const storeData = makeAutoObservable({
    getData(){
        return JSON.parse(JSON.stringify(tableData))
    }
})

export const newDataState = makeAutoObservable({
    data: storeData.getData(),
    newData: [],
    checkedKeys: [],
    
    setNewData(item){
        this.checkedKeys = [];
        this.newData = [];
        this.newData.push(item);
        for (let item of this.newData) {
            this.checkedKeys.push(item.key);
        }
    },

    onCheck (checkedNodes, info) {
        this.checkedKeys = [];
        if (info.checkedNodes.length > this.data[0].children[0].children.length) {
            this.newData = (this.data[0].children[0].children)
        } else {
            this.newData = (info.checkedNodes);
        }
        for (let item of this.newData) {
            this.checkedKeys.push(item.key);
        }
    }
})
    