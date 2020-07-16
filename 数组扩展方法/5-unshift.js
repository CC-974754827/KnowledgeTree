/**
 * unshift()
 * 向数组的开头添加一个或更多元素，并返回新的长度，会改变原来的数组
 * arrayObject.unshift(newelement1,newelement2,....,newelementX)
 * newelement1	必需。向数组添加的第一个元素。
 * newelement2	可选。向数组添加的第二个元素。
 * newelementX	可选。可添加若干个元素。
 */

var str1 = [12, 2, "hello"];
var str2 = [12, 2, "hello"];
console.log(str1.unshift("world")); // 4
console.log(str2.unshift("hi","world"));　// 5
console.log(str1);　// ["world", 12, 2, "hello"]
console.log(str2);　// ["hi", "world", 12, 2, "hello"]