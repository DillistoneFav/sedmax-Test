import { observable } from "mobx";
import tableData from '../store/data.json';

export const storeData = observable({
    getData(){
        return JSON.parse(JSON.stringify(tableData))
    }
})

export const newDataState = observable({
    newData: [],
    setNewData(item){
        this.newData.push(item);
    }
})
    