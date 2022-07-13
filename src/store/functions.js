import tableData from './data.json';

export const getData = () => {
    return JSON.parse(JSON.stringify(tableData))
}