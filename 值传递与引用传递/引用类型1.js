var obj = {
    success: false,
    result:{
        name: '222'
    }
}
/**
 * obj.result是一个Object类型，这里result存放的是obj.result的引用地址，
 * 此时result与obj.result指向堆中的同一个地址，相互影响
 */
var result = obj && obj.result;
console.log(result); // {name: "222"}

obj.result.name = '333';
console.log(obj.result.name); // 333
console.log(result); // {name: "333"}

result.name = '444';
console.log(result); // {name: "444"}
console.log(obj.result.name); // 444
// 为result重新赋值，指向一个新的引用地址，此时result与obj.result指向不同的地址，相互不影响
result = {
    name: 'name'
}
console.log(result); // {name: "name"}
console.log(obj.result.name); // 444