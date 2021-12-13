function Test(arr) { 
    //需要返回一个数组结果 [1,{},{},null,NaN]
    if (arr == null) return;
    const len = arr.length;
    const newArr = [];
    const newObj = {};
    for (let i = 0; i < len; i++) {
        if (typeof arr[i] === 'object' && arr[i] !== null) {
            if (newArr.every(r => r !== arr[i])) {
                newArr.push(arr[i])
            }
        } else if (!newObj[arr[i]]) {
            newObj[arr[i]] = '123';
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(123)