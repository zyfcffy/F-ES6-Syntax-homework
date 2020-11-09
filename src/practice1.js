const parseData = (input) =>{
    const {data, column} = input;
    let result = [];
    data.map(item => {
        let obj = {};
        item.forEach((i,index) => {
            obj[column[index].name] = i;
        })
        result.push(obj);
    });
    return result
}
export { parseData };
