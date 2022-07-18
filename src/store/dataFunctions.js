import { observable, makeAutoObservable } from "mobx";
import tableData from '../store/data.json';

export const storeData = observable({
    getData(){
        return JSON.parse(JSON.stringify(tableData))
    }
})

export const newDataState = makeAutoObservable({
    data: storeData.getData(),
    newData: [],
    checkedKeys: [],
    
    setNewData(item){
        this.newData = [];
        this.newData.push(item);
        for (let item of this.newData) {
            this.checkedKeys.push(item.key);
        }
    },

    onCheck (checkedNodes, info) {
        const data = storeData.getData();
        if (info.checkedNodes.length > data[0].children[0].children.length) {
            this.newData = (data[0].children[0].children)
        } else {
            this.newData = (info.checkedNodes);
        }
    }
})
    