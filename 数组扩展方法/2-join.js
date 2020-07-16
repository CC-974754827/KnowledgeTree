/**
 * join()
 * 将数组转为字符串并返回转化的字符串数据，不会改变原来的数组
 * arrayObject.join(separator)
 * separator 可选。指定要使用的分隔符。默认为逗号
 */

var str1 = [12, 2, "hello"];
var str2 = ["world"];
console.log(str1.join("-")); // 12-2-hello
console.log(str1.join()); // 12,2,hello
console.log(str1); // [12, 2, "hello"]