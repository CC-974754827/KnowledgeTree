/**
 * from()
 * 用于通过拥有 length 属性的对象或可迭代的对象来返回一个数组
 * 如果对象是数组返回 true，否则返回 false
 * Array.from(object, mapFunction, thisValue)
 * object	必需，要转换为数组的对象。
 * mapFunction	可选，数组中每个元素要调用的函数。
 * thisValue	可选，映射函数(mapFunction)中的 this 对象。
 */

// Set()生成类数组，需要通过from方法将其转化为数组
var setObj = new Set(["a", "b", "c"]);
var objArr = Array.from(setObj);
console.log(objArr[1] == "b");  // true

// 使用箭头语法和映射函数更改元素的值
var arr = Array.from([1, 2, 3], x => x * 10);
console.log(arr); // [10, 20, 30]