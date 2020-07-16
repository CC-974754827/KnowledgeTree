/**
 * shift()
 * 删除数组的第一位数据，并且返回删除的数据，会改变原来的数组
 * 如果数组是空的，那么 shift() 方法将不进行任何操作，返回 undefined 值
 * arrayObject.shift()
 */

var str1 = [12, 2, "hello"];
var str2 = [];
console.log(str1.shift()); // 12
console.log(str1);　// [2, "hello"]
console.log(str2.shift()); // undefined