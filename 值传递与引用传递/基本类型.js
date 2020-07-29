var obj = {
    success: false,
    result:{
        name: '222'
    }
}
/**
 * name 为string，具体的值为基本类型，
 * name这里保存的是变量值，而不是引用地址，
 * 与obj.result.name互不影响，因此一方改变不会影响另一方
 */
var name = obj && obj.result && obj.result.name;
console.log(name); // 222

name = '333';
console.log(obj.result.name); // 222 

obj.result.name = '444';
console.log(obj.result.name); // 444
console.log(name); // 333