/**
 * push()
 * 向数组的末尾添加一个或多个元素，并返回新的长度，会改变原来的数组
 * arrayObject.push(newelement1,newelement2,....,newelementX)
 * newelement1	必需。要添加到数组的第一个元素。
 * newelement2	可选。要添加到数组的第二个元素。
 * newelementX	可选。可添加多个元素。
 */

var str1 = [12, 2, "hello"];
var str2 = [12, 2, "hello"];
console.log(str1.push("world")); // 4
console.log(str2.push("hi","world"));　// 5
console.log(str1);　// [12, 2, "hello", "world"]
console.log(str2); // // [12, 2, "hello", "hi", "world"]