/**
 * splice()
 * 向、从数组中添加、删除项目或替换数组中的元素，然后返回被删除或被替换的项目，会改变原始数组
 * arrayObject.splice(index,howmany,item1,.....,itemX)
 * index 必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
 * howmany 必需。要删除的项目数量。如果设置为 0，则不会删除项目。
 * item1, ..., itemX 可选。向数组添加的新项目。
 */

var arr = ["Tom", "Jack", "Lucy", "Lily", "May"];    
var arr2 = ["Tom", "Jack", "Lucy", "Lily", "May"];
console.log(arr.splice(2,2)); // ["Lucy", "Lily"]
console.log(arr.splice(2, 0, "a", "b"));  //[]
console.log(arr);    //["Tom", "Jack", "a", "b", "Lucy", "Lily", "May"]
console.log(arr2.splice(2, 1, "a", "b")) //["Lucy"]
console.log(arr2); //["Tom", "Jack", "a", "b", "Lily", "May"]