/**
 * pop()
 * 删除数组的最后一位，并且返回删除的数据，把数组长度减 1，会改变原来的数组
 * 如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值
 * arrayObject.pop()
 */
var str1 = [12, 2, "hello"];
var str2 = [];
console.log(str1.pop()); // hello
console.log(str1);　// [12, 2]
console.log(str2.pop()); // undefined
