/**
 * concat();
 * 用于连接两个或多个数组，返回一个新的数组，不会改变原来的数组；
 * arrayObject.concat(arrayX,arrayX,......,arrayX)
 * arrayX 必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。
 */

var str1 = [12, 2, "hello"];
var str2 = ["world"];
var str3 = ["!"];
console.log(str1.concat(str2, str3)); //[12, 2, "hello", "world"]
console.log(str1.concat("111")); // [12, 2, "hello", "111"]
console.log(str1); // [12, 2, "hello"]

