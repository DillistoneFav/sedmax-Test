import tableData from './data.json';
import tree from './tree.json';

export const getData = () => {
    return JSON.parse(JSON.stringify(tableData));
}

export const getTree = () => {
    return JSON.parse(JSON.stringify(tree));
}